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
                <p className="mt-2 flex-1 text-xs leading-relaxed text-muted">
                  {role.description}
                </p>
                <a
                  href={`mailto:${siteConfig.contact.email}?subject=Application%20-%20${encodeURIComponent(role.title)}`}
                  className="mt-4 inline-flex items-center text-xs font-semibold text-cta transition-colors hover:text-cta-hover"
                >
                  Apply
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-sm text-muted">
            Don&apos;t see your role?{" "}
            <a
              href={`mailto:${siteConfig.contact.email}?subject=Career%20Application`}
              className="font-semibold text-cta transition-colors hover:text-cta-hover"
            >
              Send an open application
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
