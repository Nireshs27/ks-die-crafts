"use client";

import { ClientLogos } from "@/components/client-logos";
import { Reveal } from "@/components/motion";
import { siteConfig } from "@/lib/site";

export function ClientsSection() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
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
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-surface-muted p-8 text-center">
          <p className="text-lg font-medium text-foreground">
            Interested in working together?
          </p>
          <p className="mt-1.5 text-sm text-muted">
            Whether you&apos;re a manufacturer, distributor, or brand — we&apos;d
            love to explore a long-term partnership.
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-full bg-[#25D366] px-6 text-sm font-medium text-white transition-all hover:opacity-90"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}?subject=Partnership%20Inquiry`}
              className="inline-flex h-10 items-center justify-center rounded-full bg-cta px-6 text-sm font-medium text-white transition-all hover:bg-cta-hover hover:scale-[1.02]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
