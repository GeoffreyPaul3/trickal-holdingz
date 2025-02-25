// app/api/newsletter/route.ts

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();

  // Basic validation to check if email is present
  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { error: "Invalid email address" },
      { status: 400 }
    );
  }

  // Mailchimp API Key and Audience ID from environment variables
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  const DATACENTER = API_KEY?.split("-")[1]; // Mailchimp API key format is `key-datacenter`

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  const data = {
    email_address: email,
    status: "subscribed", // Directly subscribing user, for double opt-in use 'pending'
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `apikey ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    // Handling various Mailchimp API responses
    if (response.ok) {
      return NextResponse.json({ success: true });
    } else if (result.title === "Member Exists") {
      return NextResponse.json(
        { error: "This email is already subscribed" },
        { status: 400 }
      );
    } else if (result.title === "Invalid Resource") {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        { error: result.detail || "An error occurred" },
        { status: response.status }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to connect to Mailchimp" },
      { status: 500 }
    );
  }
}

