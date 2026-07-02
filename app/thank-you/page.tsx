import type { Metadata } from "next";
import { Button } from "@/components/button";
import { WhatsAppLink } from "@/components/whatsapp-link";

export const metadata: Metadata = {
  title: "Thank You",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
        <svg
          className="h-8 w-8 text-emerald-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">
        Thank You!
      </h1>
      <p className="mt-4 max-w-md text-body text-muted">
        Your request has been received. We&apos;ll get back to you within 24
        hours.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <WhatsAppLink size="sm" label="Continue on WhatsApp" />
        <Button href="/" variant="secondary" size="sm">
          Back to Home
        </Button>
      </div>
    </div>
  );
}
