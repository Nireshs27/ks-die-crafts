"use client";

import { ClientLogos } from "@/components/client-logos";
import { Reveal } from "@/components/motion";
import { siteConfig } from "@/lib/site";

export function ClientsSection() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-cta" />
              <span className="text-xs font-semibold uppercase tracking-widest text-cta">
                Trusted Partners
              </span>
              <span className="h-px w-8 bg-cta" />
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Our Clients
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Trusted by leading jewellery manufacturers across the country.
            </p>
          </div>
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
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Interested in working together?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted">
                Whether you&apos;re a manufacturer, distributor, or brand — we&apos;d
                love to explore a long-term partnership.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#25D366] px-8 text-sm font-semibold text-white transition-all hover:opacity-90"
                >
                  WhatsApp
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}?subject=Partnership%20Inquiry`}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-cta px-8 text-sm font-semibold text-white shadow-sm transition-all hover:bg-cta-hover hover:scale-[1.02]"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
