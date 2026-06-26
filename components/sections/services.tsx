"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Reveal } from "@/components/motion";

const services = [
  {
    number: "01",
    tag: "Validation",
    title: "Prototype and Development",
    description:
      "We provide design to die conversion prototype development for die manufacturing, where expert application is required, to validate the design for production.",
    image: "/images/process/prototype.jpg",
    imageAlt: "Precision jewellery die prototype for production validation",
    imagePosition: "object-center",
    highlights: ["Design-to-die conversion", "Production validation"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "02",
    tag: "3D & ArtCAM",
    title: "Design Support",
    description:
      "From concept to final die, we offer complete design support with advanced 3d modelling, artcam expertise that fits your die requirements. We also provide innovative design ideas for coin die makers.",
    image: "/images/process/design-office.jpg",
    imageAlt: "Coin die design with advanced 3D modelling in an office setting",
    imagePosition: "object-center",
    highlights: ["3D modelling", "ArtCAM expertise"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    number: "03",
    tag: "Turnaround",
    title: "Lead Time",
    description:
      "Fast turnaround with lead time based on design complexity and order size without compromising on quality throughout the process. Lead time will be communicated prior to order confirmation; regular updates will be provided at relevant key stages.",
    image: "/images/process/turnaround.jpg",
    imageAlt: "Finished precision die ready for delivery",
    imagePosition: "object-center",
    highlights: ["Pre-order timelines", "Stage updates"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

function ServiceRow({
  service,
  reversed = false,
}: {
  service: (typeof services)[number];
  reversed?: boolean;
}) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-background shadow-sm transition-all duration-500 hover:border-border hover:shadow-xl">
      <div className="grid lg:grid-cols-[1fr_1.05fr]">
        <div
          className={`relative min-h-[16rem] sm:min-h-[20rem] lg:min-h-[26rem] ${
            reversed ? "lg:order-2" : ""
          }`}
        >
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            className={`object-cover transition-transform duration-700 group-hover:scale-[1.03] ${service.imagePosition}`}
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/10"
            aria-hidden="true"
          />
          <div
            className={`absolute bottom-5 flex items-center gap-3 sm:bottom-6 ${
              reversed ? "right-5 sm:right-6 lg:left-6 lg:right-auto" : "left-5 sm:left-6"
            }`}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/95 text-foreground shadow-lg ring-1 ring-black/5 backdrop-blur-sm">
              {service.icon}
            </span>
            <span className="rounded-full bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
              Step {service.number}
            </span>
          </div>
        </div>

        <div
          className={`relative flex flex-col justify-center border-border p-7 sm:p-9 lg:p-11 ${
            reversed
              ? "lg:order-1 lg:border-r"
              : "border-t lg:border-t-0 lg:border-l"
          }`}
        >
          <span
            className="pointer-events-none absolute right-6 top-4 select-none text-[5.5rem] font-bold leading-none tracking-tighter text-foreground/[0.04] sm:right-8 sm:top-6 sm:text-[7rem]"
            aria-hidden="true"
          >
            {service.number}
          </span>

          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-foreground/20" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                {service.tag}
              </span>
            </div>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-[1.75rem] lg:text-3xl lg:leading-tight">
              {service.title}
            </h3>

            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
              {service.description}
            </p>

            <ul className="mt-7 space-y-3">
              {service.highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-3 text-sm font-medium text-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cta/8 text-cta ring-1 ring-cta/15">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    if (!section || !title) return;

    const lg = window.matchMedia("(min-width: 1024px)");
    const update = () => {
      const header = lg.matches ? 80 : 64;
      section.style.setProperty(
        "--svc-card-top",
        `${header + title.offsetHeight + 24}px`,
      );
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(title);
    lg.addEventListener("change", update);
    return () => {
      ro.disconnect();
      lg.removeEventListener("change", update);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative border-t border-border bg-background py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-cta/[0.04] blur-3xl" />
        <div className="absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-foreground/[0.03] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div
          ref={titleRef}
          className="sticky top-16 z-30 bg-background pb-8 pt-2 lg:top-20"
        >
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-cta" />
                <span className="text-xs font-semibold uppercase tracking-widest text-cta">
                  Our Process
                </span>
                <span className="h-px w-8 bg-cta" />
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                From prototype to production,
                <span className="mt-1 block text-muted">with full design support</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted">
                Expert validation, end-to-end design assistance, and dependable
                turnaround — everything you need to move from concept to a
                production-ready die.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 sm:mt-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="sticky"
              style={{
                top: `calc(var(--svc-card-top, 180px) + ${index * 16}px)`,
                zIndex: 10 + index,
              }}
            >
              <div className={index > 0 ? "pt-6 sm:pt-8" : ""}>
                <Reveal direction="none">
                  <ServiceRow
                    service={service}
                    reversed={index % 2 === 1}
                  />
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
