"use client";

import Link from "next/link";
import { Button } from "@/components/button";
import { ClientLogos } from "@/components/client-logos";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { Reveal } from "@/components/motion";
import { SectionHeader } from "@/components/section-header";
import { siteConfig } from "@/lib/site";

const PARTNERSHIP_MESSAGE =
  "Hi, we're interested in exploring a long-term manufacturing/distribution partnership with KS Diecrafts.";
const partnershipWhatsAppHref = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(PARTNERSHIP_MESSAGE)}`;

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
        <div className="mx-auto mt-16 max-w-2xl px-4 sm:mt-20">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-8 py-12 sm:px-12 sm:py-14">
            <div
              className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cta/5 blur-[100px]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cta/5 blur-[100px]"
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col items-center gap-6 text-center">
              <div>
                <span className="inline-flex w-fit items-center rounded-full bg-foreground/5 px-2.5 py-0.5 text-badge font-semibold uppercase tracking-wider text-muted">
                  For Manufacturers &amp; Brands
                </span>
                <p className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Interested in working together?
                </p>
                <p className="mx-auto mt-3 max-w-xl text-body-sm leading-relaxed text-muted">
                  Whether you&apos;re a manufacturer, distributor, or brand
                  we&apos;d love to explore a long-term partnership.
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <Button
                  href={partnershipWhatsAppHref}
                  newTab
                  variant="primary"
                  size="md"
                  className="shadow-sm"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Discuss a Partnership
                </Button>
                <Link
                  href="/#contact"
                  className="text-sm font-medium text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  or send us your requirements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
