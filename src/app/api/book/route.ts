import { NextRequest, NextResponse } from "next/server";
import { runBookingAgent } from "@/lib/booking-agent";

// POST /api/book
// Runs the LangGraph booking agent to check availability + create event
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, date, startTime, endTime, service, challenge } = body;

    // Validate required fields
    if (!name || !email || !phone || !date || !startTime || !endTime || !service) {
      return NextResponse.json(
        {
          status: "error",
          message: "Missing required fields: name, email, phone, date, startTime, endTime, service",
        },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { status: "error", message: "Invalid email address" },
        { status: 400 }
      );
    }

    // Run the LangGraph booking agent
    const result = await runBookingAgent({
      name,
      email,
      phone,
      date,
      startTime,
      endTime,
      service,
      challenge,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      {
        status: "error",
        message:
          "Our AI booking agent encountered an issue. Please try again or reach us at support@dreamsphere.online or +91 9483391275.",
      },
      { status: 500 }
    );
  }
}
