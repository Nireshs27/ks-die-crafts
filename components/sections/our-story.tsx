"use client";

import Image from "next/image";
import { Button } from "@/components/button";
import { Counter } from "@/components/counter";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion";
import { SectionHeader } from "@/components/section-header";

const stats = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 15l-2 5-9-5 9-5 2 5z" />
        <circle cx="12" cy="8" r="5" />
        <path d="M8.5 11.5L5 21l7-3 7 3-3.5-9.5" />
      </svg>
    ),
    value: 40,
    suffix: "+",
    label: "Years in Jewellery Manufacturing",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    value: 3,
    suffix: "+",
    label: "Years Manufacturing Dies",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M6 12h4M14 12h4M12 6v12" />
      </svg>
    ),
    textValue: "High Precision",
    suffix: "",
    label: "CNC Machines",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    textValue: "Across India",
    label: "Serving Manufacturers Pan India",
  },
];

function HeritageIntro() {
  return (
    <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

      {/* Left Column - Text */}
      <Reveal direction="right" className="lg:col-span-5">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-cta" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-widest text-cta">
            Our Roots
          </span>
        </div>

        <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          A Family Legacy in Manufacturing
        </h3>

        <p className="mt-4 text-body leading-relaxed text-muted">
          While our dedicated die manufacturing journey began three years ago, our
          roots go back more than four decades through our family&apos;s jewellery
          manufacturing business.
        </p>

        <ul className="mt-6 space-y-4">
          {[
            "Working in jewellery manufacturing taught us that every exceptional product begins with a well-engineered die.",
            "Today, we combine generations of manufacturing knowledge with modern CNC technology to build dies trusted by manufacturers across India.",
          ].map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cta/8 text-cta ring-1 ring-cta/15">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="text-body-sm leading-relaxed text-muted">{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Button href="/#recent-work" variant="primary" size="md">
            Explore Our Work
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Button>
        </div>
      </Reveal>

      {/* Right Column - Image & Stats */}
      <div className="lg:col-span-7 relative mt-10 lg:mt-0">
        <Reveal direction="left" delay={0.2}>
          <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden rounded-3xl bg-background shadow-sm ring-1 ring-border">
            <Image
              src="/images/ks-diecraft-owners.png"
              alt="The team behind KS Diecrafts"
              fill
              className="object-cover object-[center_35%]"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority={false}
            />
          </div>
        </Reveal>

        {/* Stats Card */}
        <Reveal delay={0.4} className="relative lg:absolute lg:-bottom-12 lg:-left-12 lg:-right-6 mt-8 lg:mt-0 z-10">
          <div className="rounded-3xl border border-border bg-background p-6 shadow-xl sm:p-8">
            <StaggerContainer className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-border/50">
              {stats.map((stat) => (
                <StaggerItem
                  key={stat.label}
                  className="flex flex-col items-center text-center px-2 sm:px-4"
                >
                  <span className="text-cta mb-3">
                    {stat.icon}
                  </span>
                  <div className="flex items-baseline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {stat.textValue ? (
                      <span className="text-xl sm:text-2xl">{stat.textValue}</span>
                    ) : (
                      <>
                        <Counter to={stat.value!} duration={2} />
                        <span>{stat.suffix}</span>
                      </>
                    )}
                  </div>
                  <p className="mt-2 text-sm font-medium leading-snug text-muted sm:text-body-sm">
                    {stat.label}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Reveal>
      </div>

    </div>
  );
}

export function AboutUsSection() {
  return (
    <section id="about-us" className="bg-surface py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            badge="About KS Diecrafts"
            title="Four Decades of Manufacturing Heritage, Focused on Better Dies"
            description="KS Diecrafts was founded with a simple belief that better dies create better products."
          />
        </Reveal>

        <HeritageIntro />
      </div>
    </section>
  );
}
