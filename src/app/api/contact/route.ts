import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, company, projectType, budget, projectDetails, _gotcha } = body;

    // Spam protection: honeypot check
    if (_gotcha) {
      return NextResponse.json({ success: true, message: "Spam detected." }, { status: 200 });
    }

    // Validation
    if (!fullName || !email || !projectDetails) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields (Name, Email, Project Details)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Check configurable webhook / provider
    const contactWebhookUrl = process.env.CONTACT_WEBHOOK_URL;
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_NOTIFICATION_EMAIL || "sahila.i4consulting@gmail.com";

    // If an external webhook is configured (e.g. Zapier, Slack, Make, or custom API)
    if (contactWebhookUrl) {
      try {
        await fetch(contactWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName,
            email,
            company: company || "N/A",
            projectType: projectType || "General Inquiry",
            budget: budget || "Not specified",
            projectDetails,
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (err) {
        console.error("Webhook forwarding error:", err);
      }
    }

    // If Resend API key is configured
    if (resendApiKey) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: [recipientEmail],
            reply_to: email,
            subject: `New Portfolio Inquiry from ${fullName} (${projectType || "General"})`,
            text: `Name: ${fullName}\nEmail: ${email}\nCompany: ${company || "N/A"}\nProject Type: ${projectType}\nBudget: ${budget}\n\nDetails:\n${projectDetails}`,
          }),
        });

        if (!resendRes.ok) {
          const resendError = await resendRes.json();
          console.error("Resend API delivery error:", resendError);
        }
      } catch (err) {
        console.error("Resend API error:", err);
      }
    }

    // In development or when no provider is configured, we return success with a clean acknowledgment
    console.log(`[Contact Form Submission] From: ${fullName} <${email}> | Type: ${projectType} | Budget: ${budget}`);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been received. I'll get back to you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while sending your message. Please try again." },
      { status: 500 }
    );
  }
}
