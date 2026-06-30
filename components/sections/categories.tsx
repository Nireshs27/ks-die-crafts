import Link from "next/link";
import { CategoryCard } from "@/components/category-card";
import { Reveal } from "@/components/motion";
import { SectionHeader } from "@/components/section-header";
import { categories } from "@/lib/categories";

export function CategoriesSection() {
  return (
    <section id="categories" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            badge="What We Do"
            title="Dies Built for Every Requirement"
            description="From coin and jewellery dies to religious designs and fully custom solutions, we manufacture dies that match your exact production needs with consistent quality and craftsmanship."
          />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {categories.map((category) => (
              <CategoryCard
                key={category.slug}
                title={category.title}
                subtitle={category.subtitle}
                image={category.image}
                imageAlt={category.imageAlt}
                href={`/products/${category.slug}`}
              />
            ))}
          </div>
        </Reveal>

        <div className="mt-6 flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-cta transition-all hover:gap-3"
          >
            View more details
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
