import { google } from "googleapis";

// ─── Auth (OAuth2 with Refresh Token) ───────────────────────────────────────
function getCalendarClient() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;
  const calendarId = process.env.GOOGLE_CALENDAR_ID;

  if (!clientId || !clientSecret || !refreshToken || !calendarId) {
    throw new Error(
      "Missing Google Calendar env vars. Set GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN, and GOOGLE_CALENDAR_ID in .env.local"
    );
  }

  const oauth2Client = new google.auth.OAuth2(clientId, clientSecret);
  oauth2Client.setCredentials({ refresh_token: refreshToken });

  return { calendar: google.calendar({ version: "v3", auth: oauth2Client }), calendarId };
}

// ─── IST Timezone ───────────────────────────────────────────────────────────
const TIMEZONE = "Asia/Kolkata";
const SLOT_DURATION_MIN = 30;
const BUFFER_MIN = 15;
const DAY_START_HOUR = 9;  // 9:00 AM IST
const DAY_END_HOUR = 18;   // 6:00 PM IST

// ─── Generate all possible 30-min slots for a date ──────────────────────────
function generateAllSlots(dateStr: string): { start: Date; end: Date }[] {
  const slots: { start: Date; end: Date }[] = [];

  for (let hour = DAY_START_HOUR; hour < DAY_END_HOUR; hour++) {
    for (let min = 0; min < 60; min += SLOT_DURATION_MIN) {
      const endHour = min + SLOT_DURATION_MIN >= 60 ? hour + 1 : hour;
      const endMin = (min + SLOT_DURATION_MIN) % 60;
      if (endHour > DAY_END_HOUR || (endHour === DAY_END_HOUR && endMin > 0)) continue;

      const start = new Date(`${dateStr}T${String(hour).padStart(2, "0")}:${String(min).padStart(2, "0")}:00+05:30`);
      const end = new Date(`${dateStr}T${String(endHour).padStart(2, "0")}:${String(endMin).padStart(2, "0")}:00+05:30`);

      slots.push({ start, end });
    }
  }

  return slots;
}

// ─── Check if two time ranges overlap ───────────────────────────────────────
function overlaps(
  aStart: Date, aEnd: Date,
  bStart: Date, bEnd: Date
): boolean {
  return aStart < bEnd && bStart < aEnd;
}

// ─── Get available slots for a date ─────────────────────────────────────────
export async function getAvailableSlots(dateStr: string): Promise<{
  date: string;
  slots: { start: string; end: string; label: string }[];
}> {
  const { calendar, calendarId } = getCalendarClient();

  const dayStart = new Date(`${dateStr}T${String(DAY_START_HOUR).padStart(2, "0")}:00:00+05:30`);
  const dayEnd = new Date(`${dateStr}T${String(DAY_END_HOUR).padStart(2, "0")}:00:00+05:30`);

  const response = await calendar.events.list({
    calendarId,
    timeMin: dayStart.toISOString(),
    timeMax: dayEnd.toISOString(),
    singleEvents: true,
    orderBy: "startTime",
    timeZone: TIMEZONE,
  });

  const existingEvents = (response.data.items || []).map((event) => ({
    start: new Date(event.start?.dateTime || event.start?.date || ""),
    end: new Date(event.end?.dateTime || event.end?.date || ""),
  }));

  const allSlots = generateAllSlots(dateStr);
  const availableSlots = allSlots.filter((slot) => {
    const bufferedStart = new Date(slot.start.getTime() - BUFFER_MIN * 60000);
    const bufferedEnd = new Date(slot.end.getTime() + BUFFER_MIN * 60000);

    return !existingEvents.some((event) =>
      overlaps(bufferedStart, bufferedEnd, event.start, event.end)
    );
  });

  const formattedSlots = availableSlots.map((slot) => {
    const startStr = slot.start.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: TIMEZONE,
    });
    const endStr = slot.end.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: TIMEZONE,
    });

    return {
      start: slot.start.toISOString(),
      end: slot.end.toISOString(),
      label: `${startStr} – ${endStr}`,
    };
  });

  return { date: dateStr, slots: formattedSlots };
}

// ─── Create a booking event ─────────────────────────────────────────────────
export async function createBookingEvent(params: {
  name: string;
  email: string;
  phone: string;
  date: string;
  startTime: string;
  endTime: string;
  service: string;
  challenge?: string;
}): Promise<{
  success: boolean;
  eventId: string;
  htmlLink: string;
  confirmedStart: string;
  confirmedEnd: string;
}> {
  const { calendar, calendarId } = getCalendarClient();

  const event = {
    summary: `DreamSphere AI Audit — ${params.name}`,
    description: [
      `🤖 AI Receptionist Booking`,
      ``,
      `**Client:** ${params.name}`,
      `**Email:** ${params.email}`,
      `**Phone:** ${params.phone}`,
      `**Service:** ${params.service}`,
      params.challenge ? `**Challenge:** ${params.challenge}` : "",
      ``,
      `Booked via DreamSphere AI Booking Agent`,
    ]
      .filter(Boolean)
      .join("\n"),
    start: {
      dateTime: params.startTime,
      timeZone: TIMEZONE,
    },
    end: {
      dateTime: params.endTime,
      timeZone: TIMEZONE,
    },
    attendees: [{ email: params.email, displayName: params.name }],
    reminders: {
      useDefault: false,
      overrides: [
        { method: "email", minutes: 60 * 24 },
        { method: "email", minutes: 60 },
      ],
    },
  };

  const response = await calendar.events.insert({
    calendarId,
    requestBody: event,
    sendUpdates: "all",
  });

  return {
    success: true,
    eventId: response.data.id || "",
    htmlLink: response.data.htmlLink || "",
    confirmedStart: params.startTime,
    confirmedEnd: params.endTime,
  };
}
