"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { Container } from "@/components/container";
import { StaggerContainer, StaggerItem } from "@/components/motion";

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
  { value: 5000, suffix: "+", label: "Dies Delivered" },
  { value: 1000, suffix: "+", label: "Happy Clients" },
  { value: 100, suffix: "%", label: "Quality Assured" },
];

export function StatsSection() {
  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 mb-8 bg-background shadow-xl shadow-black/5 ring-1 ring-border/50 max-w-[1400px] mx-auto rounded-2xl py-10 sm:py-14">
      <Container>
        <StaggerContainer className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-12">
          {stats.map((stat, idx) => (
            <StaggerItem
              key={idx}
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="flex items-baseline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                <Counter to={stat.value} duration={2} />
                <span>{stat.suffix}</span>
              </div>
              <p className="mt-2 text-sm font-medium text-muted sm:text-base">
                {stat.label}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
