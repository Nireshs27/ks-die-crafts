"use client";

import { Reveal } from "@/components/motion";
import { Button } from "@/components/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { siteConfig } from "@/lib/site";

export function CtaBanner({
  title = "Ready to discuss your project?",
  description = "Share your brief — CAD file, sketch, or sample. We respond within 24 hours with a clear timeline and quote.",
  primaryHref = "/#contact",
  primaryLabel = "Request a Quote",
}: {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal duration={0.8}>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-muted px-6 py-12 text-center shadow-sm sm:px-10 sm:py-16 lg:px-14 lg:py-20">
            <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cta/5 blur-[100px]" aria-hidden="true" />
            <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cta/5 blur-[100px]" aria-hidden="true" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
                {description}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <Button href={primaryHref} variant="primary" size="md" className="shadow-sm">
                  {primaryLabel}
                </Button>
                <Button
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  newTab
                  variant="secondary"
                  size="md"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
