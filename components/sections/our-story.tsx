"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion";
import { siteConfig } from "@/lib/site";

const pillars = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    title: "Engineering-first mindset",
    description:
      "Every die is built to solve a production problem — not just to look good on the bench.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        <path d="M8 10h8M8 14h5" />
      </svg>
    ),
    title: "Honest communication",
    description:
      "Clear timelines, regular updates, and no surprises from quote to delivery.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Partnership beyond delivery",
    description:
      "We stay available after handover because long-term trust matters more than a single order.",
  },
];

export function OurStorySection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      id="our-story"
      className="border-t border-border bg-surface-muted py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-cta" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-cta">
                Our Story
              </span>
              <span className="h-px w-8 bg-cta" aria-hidden="true" />
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Built on precision. Sustained by trust.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted">
              For over two decades, we have focused on what most overlook — the
              die itself. That focus is why manufacturers across India rely on
              us when quality and consistency cannot be compromised.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-3 lg:gap-10">
          <Reveal delay={0.1} className="lg:col-span-1">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-cta" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-widest text-cta">
                  How we started
                </span>
              </div>

              <div className="space-y-4 text-base leading-relaxed text-muted">
                <p>
                  K.S. Die Crafts was started by people who had seen production
                  lines struggle — not because of finishing or polishing, but
                  because the tooling underneath was never right.
                </p>
                <p>
                  We chose a different path. Instead of chasing volume alone, we
                  built a workshop around accuracy, material discipline, and
                  direct collaboration with every client.
                </p>
                <p>
                  Today, that same standard guides every project — from prototype
                  validation to full production runs — so your press performs
                  reliably from the first strike.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} direction="right" className="lg:col-span-2">
            <div ref={imageRef} className="relative mx-auto aspect-[4/5] w-full max-w-[17rem] sm:max-w-xs lg:mx-0 lg:ml-auto lg:max-w-none lg:aspect-[16/10]">
              <div
                className="pointer-events-none absolute -bottom-4 -left-4 z-0 h-28 w-28 opacity-40 sm:h-32 sm:w-32"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, var(--muted) 1.5px, transparent 1.5px)",
                  backgroundSize: "14px 14px",
                }}
                aria-hidden="true"
              />

              <div className="absolute inset-0 z-[1] overflow-hidden rounded-3xl bg-background shadow-sm">
                <motion.div style={{ y: imageY }} className="absolute -top-[20%] left-0 right-0 h-[140%] w-full">
                  <Image
                    src="/images/ks-diecraft-owners.jpeg"
                    alt="Founders of K.S. Die Crafts"
                    fill
                    className="object-cover object-[center_40%]"
                    sizes="(max-width: 1024px) 90vw, 420px"
                  />
                </motion.div>
              </div>

              <div className="absolute -bottom-6 -left-6 z-[3] w-[10.5rem] rounded-2xl bg-background px-5 py-4 text-center shadow-[0_12px_40px_rgba(0,0,0,0.12)] sm:-bottom-8 sm:-left-8 sm:w-[11.5rem]">
                <p className="text-3xl font-bold tracking-tight text-cta">
                  25+
                </p>
                <p className="mt-0.5 text-sm font-semibold leading-snug text-foreground">
                  Years of die craftsmanship
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <StaggerContainer className="mt-12 grid gap-8 border-t border-border pt-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-border">
          {pillars.map((pillar, index) => (
            <StaggerItem key={pillar.title}>
              <article
                className={`h-full ${
                  index === 0
                    ? "md:pr-8"
                    : index === pillars.length - 1
                      ? "md:pl-8"
                      : "md:px-8"
                }`}
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cta/10 text-cta ring-1 ring-cta/15">
                  {pillar.icon}
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {pillar.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
