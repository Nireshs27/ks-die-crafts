"use client";

import { FaqItem } from "@/components/faq-item";
import { Reveal } from "@/components/motion";
import { SectionHeader } from "@/components/section-header";

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
      </div>
    </section>
  );
}
