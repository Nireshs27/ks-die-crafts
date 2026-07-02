import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats";
import { faqs } from "@/lib/faqs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Coin, Jewellery, Religious & Custom Steel Dies",
  description:
    "From coin and jewellery dies to religious designs and fully custom solutions, we manufacture dies that match your exact production needs with consistent quality and craftsmanship.",
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: `Coin, Jewellery, Religious & Custom Steel Dies | ${siteConfig.name}`,
    description:
      "From coin and jewellery dies to religious designs and fully custom solutions, we manufacture dies that match your exact production needs with consistent quality and craftsmanship.",
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Precision Dies That Power Quality Manufacturing",
      },
    ],
  },
};

function SectionSkeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse bg-surface ${className}`} />;
}

const CategoriesSection = dynamic(
  () => import("@/components/sections/categories").then((m) => ({ default: m.CategoriesSection })),
  { loading: () => <SectionSkeleton className="py-24 sm:py-32 min-h-[600px]" /> }
);
const RecentWorkSection = dynamic(
  () => import("@/components/sections/recent-work").then((m) => ({ default: m.RecentWorkSection })),
  { loading: () => <SectionSkeleton className="py-24 sm:py-32 min-h-[500px]" /> }
);
const ServicesSection = dynamic(
  () => import("@/components/sections/services").then((m) => ({ default: m.ServicesSection })),
  { loading: () => <SectionSkeleton className="py-24 sm:py-32 min-h-[800px]" /> }
);
const WhyUsSection = dynamic(
  () => import("@/components/sections/why-us").then((m) => ({ default: m.WhyUsSection })),
  { loading: () => <SectionSkeleton className="py-24 sm:py-32 min-h-[400px]" /> }
);
const AboutUsSection = dynamic(
  () => import("@/components/sections/our-story").then((m) => ({ default: m.AboutUsSection })),
  { loading: () => <SectionSkeleton className="py-24 sm:py-32 min-h-[600px]" /> }
);
const ClientsSection = dynamic(
  () => import("@/components/sections/clients").then((m) => ({ default: m.ClientsSection })),
  { loading: () => <SectionSkeleton className="py-24 sm:py-32 min-h-[300px]" /> }
);
const ContactSection = dynamic(
  () => import("@/components/sections/contact").then((m) => ({ default: m.ContactSection })),
  { loading: () => <SectionSkeleton className="py-24 sm:py-32 min-h-[500px]" /> }
);
const FaqSection = dynamic(
  () => import("@/components/sections/faq").then((m) => ({ default: m.FaqSection })),
  { loading: () => <SectionSkeleton className="py-24 sm:py-32 min-h-[400px]" /> }
);
const CareerSection = dynamic(
  () => import("@/components/sections/career").then((m) => ({ default: m.CareerSection })),
  { loading: () => <SectionSkeleton className="py-24 sm:py-32 min-h-[300px]" /> }
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <CategoriesSection />
      <RecentWorkSection />
      <ServicesSection />
      <WhyUsSection />
      <AboutUsSection />
      <ClientsSection />
      <ContactSection />
      <FaqSection faqs={faqs} />
      <CareerSection />
    </>
  );
}
