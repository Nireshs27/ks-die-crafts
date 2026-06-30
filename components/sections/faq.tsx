"use client";

import { Button } from "@/components/button";
import { FaqItem } from "@/components/faq-item";
import { Reveal } from "@/components/motion";
import { SectionHeader } from "@/components/section-header";
import { siteConfig } from "@/lib/site";

type Faq = {
  question: string;
  answer: string;
};

export function FaqSection({ faqs }: { faqs: readonly Faq[] }) {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            badge="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know about our die manufacturing process."
          />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 border-t border-border">
            {faqs.map((faq) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 rounded-2xl border border-border bg-surface p-8 text-center">
            <p className="text-base font-medium text-foreground">
              Still have questions?
            </p>
            <p className="mt-1.5 text-sm text-muted">
              We typically respond within 24 hours.
            </p>
            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                newTab
                variant="whatsapp"
                size="sm"
              >
                WhatsApp
              </Button>
              <Button
                href={`tel:${siteConfig.contact.phone}`}
                variant="primary"
                size="sm"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
