import { NextRequest, NextResponse } from "next/server";
import { getAvailableSlots } from "@/lib/google-calendar";

// GET /api/book/slots?date=2026-03-31
// Returns available 30-min slots for the given date
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");

    if (!date) {
      return NextResponse.json(
        { error: "Missing 'date' query parameter. Format: YYYY-MM-DD" },
        { status: 400 }
      );
    }

    // Validate date format
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
      return NextResponse.json(
        { error: "Invalid date format. Use YYYY-MM-DD" },
        { status: 400 }
      );
    }

    // Check if date is in the past
    const requestedDate = new Date(`${date}T00:00:00+05:30`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (requestedDate < today) {
      return NextResponse.json(
        { error: "Cannot check availability for past dates" },
        { status: 400 }
      );
    }

    // Check if date is a weekend (Saturday=6, Sunday=0)
    const dayOfWeek = requestedDate.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      return NextResponse.json({
        date,
        slots: [],
        message: "We're available Monday through Friday. Please pick a weekday.",
      });
    }

    const result = await getAvailableSlots(date);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Slots API error:", error);
    return NextResponse.json(
      {
        error: "Failed to check availability. Please try again or contact support@dreamsphere.online",
      },
      { status: 500 }
    );
  }
}
