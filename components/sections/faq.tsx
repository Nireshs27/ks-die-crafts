"use client";

import { FaqItem } from "@/components/faq-item";
import { Reveal } from "@/components/motion";
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
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-cta" />
              <span className="text-xs font-semibold uppercase tracking-widest text-cta">
                FAQ
              </span>
              <span className="h-px w-8 bg-cta" />
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Everything you need to know about our die manufacturing process.
            </p>
          </div>
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
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-full bg-[#25D366] px-6 text-sm font-medium text-white transition-all hover:opacity-90"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex h-10 items-center justify-center rounded-full bg-cta px-6 text-sm font-medium text-white transition-all hover:bg-cta-hover hover:scale-[1.02]"
              >
                Contact Us
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
