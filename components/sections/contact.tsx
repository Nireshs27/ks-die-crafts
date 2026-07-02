"use client";

import { Button } from "@/components/button";
import { LeadForm } from "@/components/lead-form";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { Reveal } from "@/components/motion";
import { SectionHeader } from "@/components/section-header";
import { siteConfig } from "@/lib/site";

const { geo, locality, region } = siteConfig.contact;
const mapsUrl = `https://maps.google.com/?q=${geo.latitude},${geo.longitude}`;
const mapsEmbedUrl = `https://maps.google.com/maps?q=${geo.latitude},${geo.longitude}&hl=en&z=15&output=embed`;

export function ContactSection({
  defaultService,
}: { defaultService?: string } = {}) {
  return (
    <section id="contact" className="scroll-mt-24 bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            badge="Get in Touch"
            title="Contact us"
            description="We are here to help with die orders, prototypes, tooling, and anything else you need. Reach us by phone or email, or send a message and we will assist you further."
          >
            <p className="mt-4 text-xs text-silver">
              Operated by KSAN Industries LLP
            </p>
          </SectionHeader>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-14 grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
                <h3 className="text-base font-semibold text-foreground">
                  Reach us directly
                </h3>
                <p className="mt-1 text-body-sm text-muted">
                  Prefer a quick conversation? Choose how you&apos;d like to connect.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <WhatsAppLink size="sm" />
                  {siteConfig.contact.phone && (
                    <Button
                      href={`tel:${siteConfig.contact.phone}`}
                      variant="secondary"
                      size="sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                      {siteConfig.contact.phone}
                    </Button>
                  )}
                  <Button
                    href={`mailto:${siteConfig.contact.email}`}
                    variant="secondary"
                    size="sm"
                    aria-label="Send email for general enquiries"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    {siteConfig.contact.email}
                  </Button>
                </div>

                <p className="mt-4 text-xs text-silver">
                  Typically respond within 24 hours
                </p>
              </div>

              <div className="flex min-h-0 flex-1 flex-col rounded-2xl border border-border bg-background p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base font-semibold text-foreground">Visit us</h3>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-sm font-medium text-cta transition-colors hover:text-cta-hover"
                  >
                    Open in Google Maps
                  </a>
                </div>

                <div className="mt-4 flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 h-4 w-4 shrink-0 text-muted"
                    aria-hidden="true"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <p className="font-medium text-foreground">
                      {locality}, Chennai
                    </p>
                    <p className="mt-0.5 text-body-sm text-muted">
                      {locality}, Chennai, {region}, India
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex min-h-[220px] flex-1 overflow-hidden rounded-xl border border-border lg:min-h-0">
                  <iframe
                    title={`${siteConfig.name} location map`}
                    src={mapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: 220 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block h-full w-full min-h-[220px]"
                  />
                </div>
              </div>
            </div>

            <LeadForm
              defaultService={defaultService}
              className="h-full min-h-[520px] lg:min-h-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
