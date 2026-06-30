"use client";

import Image from "next/image";

const clients = [
  { name: "GRT Jewellers", logo: "/images/client-logo/grt-jewellers.png" },
  { name: "Lalithaa Jewellery", logo: "/images/client-logo/lalithaa-jewellers.png" },
  { name: "Vummidi Bangaru Jewellers", logo: "/images/client-logo/vummidi-bangaru-jewellers.png" },
  { name: "CaratLane Jewellers", logo: "/images/client-logo/caratlane-jewellers.png" },
] as const;

function ClientLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex h-24 w-48 flex-shrink-0 items-center justify-center gap-3 rounded-xl border border-border/60 bg-white px-6 py-4 transition-all hover:border-border hover:shadow-sm">
      <div className="relative h-full w-full">
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          sizes="160px"
          className="object-contain"
        />
      </div>
    </div>
  );
}

export function ClientLogos() {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-2">
      {clients.map((client, i) => (
        <ClientLogo key={`${client.name}-${i}`} name={client.name} logo={client.logo} />
      ))}
    </div>
  );
}
