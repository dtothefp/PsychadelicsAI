import { NextRequest, NextResponse } from "next/server";
import { insertEmailSubscriberSchema } from "@shared/schema";
import { storage } from "@root-lib/storage";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = insertEmailSubscriberSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid email format",
        },
        { status: 400 }
      );
    }

    const { email } = result.data;

    // Check if email already exists
    const existingSubscriber = await storage.getEmailSubscriberByEmail(email);
    if (existingSubscriber) {
      return NextResponse.json({
        success: true,
        message: "Email already subscribed",
      });
    }

    // Store email in Supabase
    await storage.createEmailSubscriber({ email });

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed",
    });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}
