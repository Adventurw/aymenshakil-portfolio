import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(req: Request) {
  console.log("📩 Contact API was called");

  try {
    const body = await req.json();

    console.log("Request Body:", body);

    const {
      name,
      email,
      subject,
      message,
    } = body;

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "k224659@nu.edu.pk",
      subject,
      html: `
        <h2>New Portfolio Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Subject:</strong> ${subject}</p>

        <hr />

        <p>${message}</p>
      `,
    });

    console.log("Resend Data:", data);
    console.log("Resend Error:", error);

    if (error) {
      return NextResponse.json(
        { success: false, error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error("Server Error:", error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}