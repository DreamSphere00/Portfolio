import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { StateGraph, START, END, MessagesAnnotation } from "@langchain/langgraph";
import { ToolNode } from "@langchain/langgraph/prebuilt";
import { tool } from "@langchain/core/tools";
import { SystemMessage, HumanMessage } from "@langchain/core/messages";
import { z } from "zod";
import { getAvailableSlots, createBookingEvent } from "./google-calendar";

// ─── Tools ──────────────────────────────────────────────────────────────────

const checkAvailabilityTool = tool(
  async ({ date }) => {
    try {
      const result = await getAvailableSlots(date);
      if (result.slots.length === 0) {
        return JSON.stringify({
          available: false,
          message: `No available slots on ${date}.`,
          slots: [],
        });
      }
      return JSON.stringify({
        available: true,
        message: `Found ${result.slots.length} available slots on ${date}.`,
        slots: result.slots,
      });
    } catch (error) {
      return JSON.stringify({
        available: false,
        message: `Error checking availability: ${error instanceof Error ? error.message : "Unknown error"}`,
        slots: [],
      });
    }
  },
  {
    name: "check_availability",
    description:
      "Check available 30-minute booking slots for a specific date on the DreamSphere calendar.",
    schema: z.object({
      date: z.string().describe("Date in YYYY-MM-DD format"),
    }),
  }
);

const createBookingTool = tool(
  async ({ name, email, phone, date, startTime, endTime, service, challenge }) => {
    try {
      const result = await createBookingEvent({
        name, email, phone, date, startTime, endTime, service, challenge,
      });
      return JSON.stringify({
        success: true,
        eventId: result.eventId,
        htmlLink: result.htmlLink,
        confirmedStart: result.confirmedStart,
        confirmedEnd: result.confirmedEnd,
        message: `Booking confirmed for ${name} on ${date}. Invite sent to ${email}.`,
      });
    } catch (error) {
      return JSON.stringify({
        success: false,
        message: `Failed to create booking: ${error instanceof Error ? error.message : "Unknown error"}`,
      });
    }
  },
  {
    name: "create_booking",
    description:
      "Create a booking event in Google Calendar. Call ONLY after confirming slot is available.",
    schema: z.object({
      name: z.string().describe("Full name of the client"),
      email: z.string().describe("Email address"),
      phone: z.string().describe("Phone number"),
      date: z.string().describe("Date YYYY-MM-DD"),
      startTime: z.string().describe("ISO 8601 start time"),
      endTime: z.string().describe("ISO 8601 end time"),
      service: z.string().describe("Service type"),
      challenge: z.string().optional().describe("Client's challenge"),
    }),
  }
);

// ─── Agent System Prompt ────────────────────────────────────────────────────

const BOOKING_SYSTEM_PROMPT = `You are the DreamSphere AI Booking Agent. Process booking requests for free 15-minute AI Receptionist Audit calls.

PROCESS:
1. Call check_availability with the requested date.
2. If the slot is available, call create_booking with all client details.
3. If unavailable, return alternatives.

Return ONLY valid JSON:

SUCCESS: {"status":"confirmed","eventId":"...","date":"YYYY-MM-DD","time":"start – end","clientName":"...","clientEmail":"...","message":"Your AI Receptionist Audit is booked! Calendar invite sent."}

UNAVAILABLE: {"status":"unavailable","date":"YYYY-MM-DD","requestedTime":"...","alternativeSlots":[...],"message":"Slot unavailable. Here are alternatives."}

ERROR: {"status":"error","message":"..."}

Return ONLY JSON, no markdown.`;

// ─── Direct Booking Fallback (no LLM needed) ───────────────────────────────

async function directBooking(request: BookingRequest) {
  // Check if the requested slot is available
  const availability = await getAvailableSlots(request.date);
  const requestedStart = new Date(request.startTime).getTime();

  const slotExists = availability.slots.some(
    (slot) => new Date(slot.start).getTime() === requestedStart
  );

  if (!slotExists) {
    return {
      status: "unavailable" as const,
      date: request.date,
      requestedTime: request.startTime,
      alternativeSlots: availability.slots.slice(0, 6),
      message: "The requested slot is no longer available. Please pick from the alternatives below.",
    };
  }

  // Create the booking directly
  const result = await createBookingEvent({
    name: request.name,
    email: request.email,
    phone: request.phone,
    date: request.date,
    startTime: request.startTime,
    endTime: request.endTime,
    service: request.service,
    challenge: request.challenge,
  });

  const startFormatted = new Date(request.startTime).toLocaleTimeString("en-IN", {
    hour: "2-digit", minute: "2-digit", hour12: true, timeZone: "Asia/Kolkata",
  });
  const endFormatted = new Date(request.endTime).toLocaleTimeString("en-IN", {
    hour: "2-digit", minute: "2-digit", hour12: true, timeZone: "Asia/Kolkata",
  });

  return {
    status: "confirmed" as const,
    eventId: result.eventId,
    date: request.date,
    time: `${startFormatted} – ${endFormatted}`,
    clientName: request.name,
    clientEmail: request.email,
    message: `Your AI Receptionist Audit is booked for ${request.date} at ${startFormatted}! A calendar invite has been sent to ${request.email}.`,
  };
}

// ─── Build LangGraph Agent ──────────────────────────────────────────────────

interface BookingRequest {
  name: string;
  email: string;
  phone: string;
  date: string;
  startTime: string;
  endTime: string;
  service: string;
  challenge?: string;
}

async function runAgentFlow(request: BookingRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY not set");

  const tools = [checkAvailabilityTool, createBookingTool];

  const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.0-flash-lite",
    apiKey,
    temperature: 0,
    maxRetries: 2,
  }).bindTools(tools);

  const agentNode = async (state: typeof MessagesAnnotation.State) => {
    const response = await model.invoke(state.messages);
    return { messages: [response] };
  };

  const toolNode = new ToolNode(tools);

  const shouldContinue = (state: typeof MessagesAnnotation.State) => {
    const lastMessage = state.messages[state.messages.length - 1];
    if (
      "tool_calls" in lastMessage &&
      Array.isArray(lastMessage.tool_calls) &&
      lastMessage.tool_calls.length > 0
    ) {
      return "tools";
    }
    return END;
  };

  const graph = new StateGraph(MessagesAnnotation)
    .addNode("agent", agentNode)
    .addNode("tools", toolNode)
    .addEdge(START, "agent")
    .addConditionalEdges("agent", shouldContinue, ["tools", END])
    .addEdge("tools", "agent")
    .compile();

  const humanMessage = `Process this booking request:
- Client: ${request.name} (${request.email}, ${request.phone})
- Date: ${request.date}
- Start: ${request.startTime}, End: ${request.endTime}
- Service: ${request.service}
${request.challenge ? `- Challenge: ${request.challenge}` : ""}

Check availability for ${request.date}, then book the slot at ${request.startTime} if available.`;

  const result = await graph.invoke({
    messages: [
      new SystemMessage(BOOKING_SYSTEM_PROMPT),
      new HumanMessage(humanMessage),
    ],
  });

  const lastMessage = result.messages[result.messages.length - 1];
  const content = typeof lastMessage.content === "string"
    ? lastMessage.content
    : JSON.stringify(lastMessage.content);

  try {
    const cleaned = content.replace(/```json?\n?/g, "").replace(/```\n?/g, "").trim();
    return JSON.parse(cleaned);
  } catch {
    return { status: "confirmed", message: content };
  }
}

// ─── Main Export: Agent-first with direct fallback ──────────────────────────

export async function runBookingAgent(request: BookingRequest) {
  try {
    // Try the LangGraph agent first
    return await runAgentFlow(request);
  } catch (error) {
    console.warn(
      "LangGraph agent failed, falling back to direct booking:",
      error instanceof Error ? error.message : error
    );
    // Fallback: book directly without LLM (still uses Google Calendar API)
    return await directBooking(request);
  }
}
