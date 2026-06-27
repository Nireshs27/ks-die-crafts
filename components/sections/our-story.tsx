"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion";

function Counter({
  from = 0,
  to,
  duration = 2,
}: {
  from?: number;
  to: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(to);
    }
  }, [inView, motionValue, to]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          Math.floor(latest)
        );
      }
    });
  }, [springValue]);

  return <span ref={ref}>{from}</span>;
}


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
    value: 6,
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

/* const timeline = [
  {
    era: "1980s",
    title: "The Foundation",
    description:
      "Our family enters jewellery manufacturing through KSAN Industries LLP, learning the craft from the ground up.",
  },
  {
    era: "40+ Years",
    title: "Building Expertise",
    description:
      "Four decades of jewellery production sharpen our understanding of what makes a product exceptional — it begins with the die.",
  },
  {
    era: "Today",
    title: "KS Die Crafts",
    description:
      "We channel generations of manufacturing knowledge into precision dies, built with modern CNC technology and trusted across India.",
  },
]; */

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

        <p className="mt-4 text-base leading-relaxed text-muted">
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
              <span className="text-sm leading-relaxed text-muted">{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Link
            href="/#recent-work"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cta px-8 text-sm font-medium text-white transition-all hover:bg-cta-hover hover:scale-[1.02]"
          >
            Explore Our Work
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Reveal>

      {/* Right Column - Image & Stats */}
      <div className="lg:col-span-7 relative mt-10 lg:mt-0">
        <Reveal direction="left" delay={0.2}>
          <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden rounded-3xl bg-background shadow-sm ring-1 ring-border">
            <Image
              src="/images/ks-diecraft-owners.png"
              alt="The team behind KS Die Crafts"
              fill
              className="object-cover object-[center_35%]"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority={false}
            />
          </div>
        </Reveal>

        {/* Stats Card */}
        <Reveal delay={0.4} className="relative lg:absolute lg:-bottom-12 lg:-left-12 lg:-right-6 mt-8 lg:mt-0 z-10">
          <div className="rounded-[2rem] border border-border bg-background p-6 shadow-xl sm:p-8">
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
                  <p className="mt-2 text-xs font-medium leading-snug text-muted sm:text-sm">
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

/* function StoryTimeline() {
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="mt-24 sm:mt-32 lg:mt-40">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            A Story Built on Manufacturing
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Working in jewellery manufacturing taught us that every exceptional
            product begins with a well-engineered die. That experience now drives
            everything we manufacture.
          </p>
        </div>
      </Reveal>

      <div ref={lineRef} className="relative mx-auto mt-16 max-w-3xl">
        <div
          className="absolute left-5 top-2 bottom-2 w-px bg-border sm:left-1/2 sm:-translate-x-1/2"
          aria-hidden="true"
        >
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-0 top-0 w-px bg-cta"
          />
        </div>

        <StaggerContainer
          className="space-y-12 sm:space-y-16"
          staggerDelay={0.15}
        >
          {timeline.map((node, index) => (
            <StaggerItem key={node.era}>
              <div
                className={`relative pl-16 sm:w-1/2 sm:pl-0 ${
                  index % 2 === 0
                    ? "sm:pr-12 sm:text-right"
                    : "sm:ml-auto sm:pl-12 sm:text-left"
                }`}
              >
                <span
                  className={`absolute top-1 left-5 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-cta ring-4 ring-background sm:top-2 ${
                    index % 2 === 0
                      ? "sm:left-auto sm:-right-[7px] sm:translate-x-0"
                      : "sm:-left-[7px] sm:translate-x-0"
                  }`}
                  aria-hidden="true"
                />
                <p className="text-2xl font-bold tracking-tight text-cta sm:text-3xl">
                  {node.era}
                </p>
                <h4 className="mt-1 text-lg font-semibold text-foreground">
                  {node.title}
                </h4>
                <p className="mt-2 text-base leading-relaxed text-muted">
                  {node.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
} */

export function AboutUsSection() {
  return (
    <section id="about-us" className="bg-surface py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-cta" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-cta">
                About KS Die Crafts
              </span>
              <span className="h-px w-8 bg-cta" aria-hidden="true" />
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Four Decades of Manufacturing Heritage, Focused on Better Dies
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted">
              KS Die Crafts was founded with a simple belief — better dies create
              better products.
            </p>
          </div>
        </Reveal>

        <HeritageIntro />
        {/* <StoryTimeline /> */}
      </div>
    </section>
  );
}
