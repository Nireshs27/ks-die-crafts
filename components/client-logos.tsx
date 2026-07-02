"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const clients = [
  { name: "GRT Jewellers", logo: "/images/client-logo/grt-jewellers.png" },
  { name: "Lalithaa Jewellery", logo: "/images/client-logo/lalithaa-jewellers.png" },
  { name: "Vummidi Bangaru Jewellers", logo: "/images/client-logo/vummidi-bangaru-jewellers.png" },
  { name: "CaratLane Jewellers", logo: "/images/client-logo/caratlane-jewellers.png" },
  { name: "Kalyan Jewellers", logo: "/images/client-logo/kalyan-jewellers.svg" },
  { name: "Auro Gold Jewellery", logo: "/images/client-logo/auro-gold.svg" },
  { name: "Pothys", logo: "/images/client-logo/pothys.png" },
] as const;

const marqueeClients = [...clients, ...clients];

function ClientLogo({ name, logo }: { name: string; logo: string }) {
  const isSvg = logo.endsWith(".svg");

  return (
    <div className="flex h-24 w-48 flex-shrink-0 items-center justify-center gap-3 rounded-xl border border-border/60 bg-white px-6 py-4 transition-all hover:border-border hover:shadow-sm contain-layout">
      <div className="relative h-full w-full">
        {isSvg ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={logo} alt={`${name} logo`} loading="lazy" className="h-full w-full object-contain" />
        ) : (
          <Image
            src={logo}
            alt={`${name} logo`}
            fill
            loading="lazy"
            sizes="160px"
            className="object-contain"
          />
        )}
      </div>
    </div>
  );
}

export function ClientLogos() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReducedMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional sync with external system (matchMedia)
      setShouldAnimate(true);
    }
  }, []);

  return (
    <div
      className="relative overflow-hidden py-2"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className={`flex w-max gap-6 ${shouldAnimate ? "animate-logo-marquee" : ""}`}>
        {marqueeClients.map((client, i) => (
          <ClientLogo
            key={`${client.name}-${i}`}
            name={client.name}
            logo={client.logo}
          />
        ))}
      </div>
    </div>
  );
}
