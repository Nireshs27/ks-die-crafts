"use client";

import { Button } from "@/components/button";
import { ClientLogos } from "@/components/client-logos";
import { Reveal } from "@/components/motion";
import { SectionHeader } from "@/components/section-header";
import { siteConfig } from "@/lib/site";

export function ClientsSection() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            badge="Trusted Partners"
            title="Our Clients"
            description="Trusted by leading jewellery manufacturers across the country."
          />
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <div className="mt-14">
          <ClientLogos />
        </div>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="mx-auto mt-16 max-w-[1400px] px-4 sm:mt-20 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface py-14 text-center shadow-sm sm:py-20">
            <div
              className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cta/5 blur-[100px]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cta/5 blur-[100px]"
              aria-hidden="true"
            />

            <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6">
              <p className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Interested in working together?
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted">
                Whether you&apos;re a manufacturer, distributor, or brand — we&apos;d
                love to explore a long-term partnership.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <Button
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  newTab
                  variant="whatsapp"
                  size="md"
                >
                  WhatsApp
                </Button>
                <Button
                  href={`mailto:${siteConfig.contact.email}?subject=Partnership%20Inquiry`}
                  variant="primary"
                  size="md"
                  className="shadow-sm"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
