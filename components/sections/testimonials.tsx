"use client";

import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion";

const testimonials = [
  {
    quote:
      "We have worked with KS Diecrafts for nearly a decade. The dies are precise, the lead times are kept, and the team understands jewellery — not just metal. That combination is rare.",
    name: "Senior Procurement Lead",
    title: "Leading Chennai jewellery manufacturer",
    initials: "C",
  },
  {
    quote:
      "Their prototype-first approach has saved us from costly production mistakes more than once. Every revision we have asked for was incorporated without fuss.",
    name: "Production Manager",
    title: "South India jewellery house",
    initials: "S",
  },
  {
    quote:
      "Twenty-five years of focus on jewellery dies shows. The finish on the strike, the consistency across pieces — it is exactly what a manufacturer wants from a die maker.",
    name: "Founder",
    title: "Boutique jeweller, Coimbatore",
    initials: "B",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-cta" />
              <span className="text-xs font-semibold uppercase tracking-widest text-cta">
                What Our Clients Say
              </span>
              <span className="h-px w-8 bg-cta" />
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Built on long-term partnerships
            </h2>
          </div>
        </Reveal>

        <StaggerContainer className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <StaggerItem key={idx}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:shadow-lg">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 32 24"
                  fill="none"
                  className="h-7 w-7 text-cta/30"
                >
                  <path
                    d="M0 24V14C0 8 4 2.667 12 0L14 4C8.667 6.667 6 10 6 14H12V24H0ZM18 24V14C18 8 22 2.667 30 0L32 4C26.667 6.667 24 10 24 14H30V24H18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4 border-t border-border pt-5">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-cta/10 text-base font-semibold text-cta"
                  >
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted">{t.title}</p>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-xs italic text-silver">
            Client identities withheld to respect confidentiality of our partnerships.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
