import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  contactFormSchema,
  type ContactFieldErrors,
} from "@/lib/validations/contact";
import {
  getNotificationSubject,
  renderContactNotificationHtml,
  renderContactNotificationText,
} from "@/lib/emails/contact-notification";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

type RateRecord = { count: number; resetAt: number };
const rateLimitStore = new Map<string, RateRecord>();

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(request: Request) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        success: false,
        message: "Too many requests. Please try again later or call us directly.",
      },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    const fieldErrors: ContactFieldErrors = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !(key in fieldErrors)) {
        fieldErrors[key as keyof ContactFieldErrors] = issue.message;
      }
    }
    return NextResponse.json(
      { success: false, message: "Please check the form fields.", errors: fieldErrors },
      { status: 400 }
    );
  }

  const data = parsed.data;

  // Honeypot: silently accept bots without sending email.
  if (data.botcheck) {
    return NextResponse.json({ success: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "[contact] RESEND_API_KEY or RESEND_FROM_EMAIL is not set. Skipping real email delivery and returning success for local development."
      );
      return NextResponse.json({ success: true });
    }
    console.error("[contact] Email service is not configured.");
    return NextResponse.json(
      { success: false, message: "The contact form is temporarily unavailable. Please email or call us directly." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: `${siteConfig.name} <${fromEmail}>`,
      to: [siteConfig.contact.email],
      replyTo: data.email,
      subject: getNotificationSubject(data.name),
      html: renderContactNotificationHtml(data),
      text: renderContactNotificationText(data),
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { success: false, message: "We couldn't send your message. Please try again or contact us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Unexpected error sending email:", err);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json({ success: false, message: "Method not allowed." }, { status: 405 });
}
