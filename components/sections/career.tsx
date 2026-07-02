"use client";

import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion";
import { SectionHeader } from "@/components/section-header";
import { siteConfig } from "@/lib/site";

const openings = [
  {
    title: "CNC Operator",
    type: "Full-time",
    description:
      "Operate CNC milling and turning centres for precision die components.",
  },
  {
    title: "Design Engineer",
    type: "Full-time",
    description:
      "Convert jewellery concepts to production-ready dies using ArtCAM and 3D tools.",
  },
  {
    title: "Supervisor",
    type: "Full-time",
    description:
      "Inspect finished dies for dimensional accuracy, hardness, and surface finish.",
  },
];

export function CareerSection() {
  return (
    <section id="career" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            badge="Join Our Team"
            title="Career"
            description="We are always looking for skilled craftsmen and engineers to help build the future of jewellery manufacturing."
          />
        </Reveal>

        <StaggerContainer className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {openings.map((role) => (
            <StaggerItem key={role.title}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-background p-5 transition-all hover:border-border hover:shadow-md">
                <span className="inline-flex w-fit rounded-full bg-foreground/5 px-2.5 py-0.5 text-badge font-semibold uppercase tracking-wider text-muted">
                  {role.type}
                </span>
                <h3 className="mt-3 text-sm font-semibold text-foreground">
                  {role.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {role.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-body-sm text-muted">
            To apply, send your application to{" "}
            <a
              href={`mailto:${siteConfig.contact.email}?subject=Career%20Application`}
              className="font-semibold text-cta transition-colors hover:text-cta-hover"
            >
              {siteConfig.contact.email}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
