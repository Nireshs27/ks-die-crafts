import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats";
import { faqs } from "@/lib/faqs";

const CategoriesSection = dynamic(() =>
  import("@/components/sections/categories").then((m) => ({ default: m.CategoriesSection })),
);
const RecentWorkSection = dynamic(() =>
  import("@/components/sections/recent-work").then((m) => ({ default: m.RecentWorkSection })),
);
const ServicesSection = dynamic(() =>
  import("@/components/sections/services").then((m) => ({ default: m.ServicesSection })),
);
const WhyUsSection = dynamic(() =>
  import("@/components/sections/why-us").then((m) => ({ default: m.WhyUsSection })),
);
const AboutUsSection = dynamic(() =>
  import("@/components/sections/our-story").then((m) => ({ default: m.AboutUsSection })),
);
const ClientsSection = dynamic(() =>
  import("@/components/sections/clients").then((m) => ({ default: m.ClientsSection })),
);
const ContactSection = dynamic(() =>
  import("@/components/sections/contact").then((m) => ({ default: m.ContactSection })),
);
const FaqSection = dynamic(() =>
  import("@/components/sections/faq").then((m) => ({ default: m.FaqSection })),
);
const CareerSection = dynamic(() =>
  import("@/components/sections/career").then((m) => ({ default: m.CareerSection })),
);
const TestimonialsSection = dynamic(() =>
  import("@/components/sections/testimonials").then((m) => ({ default: m.TestimonialsSection })),
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
      {/* <TestimonialsSection /> */}
    </>
  );
}
