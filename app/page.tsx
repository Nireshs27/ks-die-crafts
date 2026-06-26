import { HeroSection } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats";
import { ClientsSection } from "@/components/sections/clients";
import { CategoriesSection } from "@/components/sections/categories";
import { ServicesSection } from "@/components/sections/services";
import { WhyUsSection } from "@/components/sections/why-us";
import { OurStorySection } from "@/components/sections/our-story";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact";
import { FaqSection } from "@/components/sections/faq";
import { CareerSection } from "@/components/sections/career";
import { faqs } from "@/lib/faqs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <CategoriesSection />
      <ServicesSection />
      <WhyUsSection />
      <OurStorySection />
      <ClientsSection />
      <ContactSection />
      <FaqSection faqs={faqs} />
      <CareerSection />
      <TestimonialsSection />
    </>
  );
}
