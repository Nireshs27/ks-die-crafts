"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { siteConfig } from "@/lib/site";

const PREFILL_MESSAGE = encodeURIComponent(
  "Hello KS Diecrafts, I'd like to discuss a custom die project. Could you help me with a quote?"
);

export function WhatsAppButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const href = `https://wa.me/${siteConfig.contact.whatsapp}?text=${PREFILL_MESSAGE}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/20 ring-1 ring-white/20 transition-all duration-500 hover:scale-110 hover:shadow-3xl sm:bottom-6 sm:right-6 ${
        mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-40 animate-ping" aria-hidden="true" />
      <WhatsAppIcon full className="h-7 w-7" />
    </a>
  );
}
