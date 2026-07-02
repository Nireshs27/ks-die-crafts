"use client";

import { Container } from "@/components/container";
import { Counter } from "@/components/counter";
import { StaggerContainer, StaggerItem } from "@/components/motion";

const stats = [
  { value: 5000, suffix: "+", label: "Dies Delivered" },
  { value: 500, suffix: "+", label: "Happy Clients" },
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
              <p className="mt-2 text-body-sm font-medium text-muted sm:text-body">
                {stat.label}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
