import Image from "next/image";
import { SectionHeader } from "@/components/section-header";

const services = [
  {
    number: "01",
    title: "Prototype & Development",
    description:
      "We don't directly jump to production. We validate. Design-to-die conversion with prototype development ensures your design works in real manufacturing, not just on screen.",
    image: "/images/process/prototype.webp",
    imageAlt: "Die prototype validation precision measurement with digital caliper at KS Diecrafts workshop",
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
    title: "Design Support",
    description:
      "From concept to final die, we support the full process with high-end 3D modelling, sculpting, and design refinement — ensuring every detail is ready for production. We also help coin die makers refine and improve their designs before manufacturing begins.",
    image: "/images/process/design-office.webp",
    imageAlt: "Designer working on a 3D jewellery die model at the design office",
    imagePosition: "object-center",
    highlights: ["High-end 3D modelling & sculpting", "Design refinement for production"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Finishes That Define Output",
    description:
      "Each finish is not just visual — it is built on precision and accuracy at every level of the die. From micro-level detailing to surface consistency, these factors directly control the sharpness, clarity, and overall quality of your final product.",
    image: "/images/process/finishes.webp",
    imageAlt: "Three jewellery dies showing matte, mirror and Bombay polish finishes side by side",
    imagePosition: "object-center",
    highlights: ["Matte Finish", "Mirror Finish", "Bombay Polish"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 3l1.9 5.2L19 10l-5.1 1.8L12 17l-1.9-5.2L5 10l5.1-1.8L12 3z" />
        <path d="M5 19l.8 2 .8-2 .8-.6-.8-.6-.8-2-.8 2-.8.6.8.6z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Lead Time",
    description:
      "Lead time depends on design complexity and order size. We'll tell you upfront before we start. Regular updates at every key stage.",
    image: "/images/process/turnaround.webp",
    imageAlt: "Finished precision dies packaged and ready for dispatch at the workshop",
    imagePosition: "object-center",
    highlights: ["Upfront timelines", "Regular updates at every key stage"],
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
  priority = false,
}: {
  service: (typeof services)[number];
  reversed?: boolean;
  priority?: boolean;
}) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-background shadow-sm transition-all duration-500 hover:shadow-xl contain-layout">
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
            loading={priority ? "eager" : "lazy"}
            className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${service.imagePosition}`}
            sizes="(max-width: 480px) 100vw, (max-width: 1024px) 100vw, 600px"
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
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-surface/95 text-foreground shadow-lg ring-1 ring-black/5 backdrop-blur-sm">
              {service.icon}
            </span>
            <span className="rounded-full bg-black/50 px-3 py-1 text-badge font-semibold uppercase tracking-widest text-white backdrop-blur-md">
              Step {service.number}
            </span>
          </div>
        </div>

        <div
          className={`relative flex flex-col justify-center p-7 sm:p-9 lg:p-11 ${
            reversed
              ? "lg:order-1"
              : ""
          }`}
        >
          <div className="relative">
            <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-[1.75rem] lg:text-3xl lg:leading-tight">
              {service.title}
            </h3>

            <p className="mt-4 max-w-lg text-body leading-relaxed text-muted">
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
  return (
    <section
      id="services"
      className="relative bg-surface py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-cta/[0.04] blur-3xl" />
        <div className="absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-foreground/[0.03] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Beyond Die Making"
          title="Complete Die Solutions - Built for Production"
          description="From design validation and technical support to surface finishing and transparent project updates, we work with you at every stage to ensure your die performs reliably in production."
        />

        <div className="mt-8 space-y-6 sm:mt-12 sm:space-y-8">
          {services.map((service, index) => (
            <ServiceRow
              key={service.title}
              service={service}
              reversed={index % 2 === 1}
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
