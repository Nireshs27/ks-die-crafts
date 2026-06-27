"use client";

import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion";

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        <path d="M8 10h8M8 14h5" />
      </svg>
    ),
    text: "Fast, clear communication — no chasing",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    text: "Practical design assistance — not just execution",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    text: "High-grade materials with proper hardness checks",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 2v20M2 12h20" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    text: "Consistent engraving depth and detailing",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    text: "On-time delivery without compromising quality",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    text: "Dedicated after-sales support",
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-cta" />
              <span className="text-xs font-semibold uppercase tracking-widest text-cta">
                Why Choose Us
              </span>
              <span className="h-px w-8 bg-cta" />
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Why Manufacturers Choose KS Die Crafts
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-14 rounded-[2rem] border border-border bg-surface px-6 py-12 sm:rounded-[3rem] sm:px-12 sm:py-20 lg:px-16 lg:py-24">
            <StaggerContainer className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-12">
              {features.map((item) => (
                <StaggerItem key={item.text}>
                  <div className="group flex flex-col items-center text-center">
                    <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-silver/20 text-cta shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <span className="[&>svg]:h-8 [&>svg]:w-8">
                        {item.icon}
                      </span>
                    </span>
                    <p className="mt-6 text-base font-medium leading-relaxed text-foreground max-w-[280px]">
                      {item.text}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
