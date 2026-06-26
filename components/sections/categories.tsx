"use client";

import Link from "next/link";
import { CategoryCard } from "@/components/category-card";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion";
import { categories } from "@/lib/categories";

export function CategoriesSection() {
  return (
    <section id="categories" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-cta" />
              <span className="text-xs font-semibold uppercase tracking-widest text-cta">
                Our Categories
              </span>
              <span className="h-px w-8 bg-cta" />
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Precision dies for every jewellery type
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Four core categories, each engineered with the same uncompromising
              attention to detail. Explore each range — or send us a brief and
              we&apos;ll build something entirely custom.
            </p>
          </div>
        </Reveal>

        <StaggerContainer className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {categories.map((category) => (
            <StaggerItem key={category.slug} className="w-full">
              <CategoryCard
                title={category.title}
                subtitle={category.subtitle}
                image={category.image}
                imageAlt={category.imageAlt}
                href={`/products/${category.slug}`}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-10 flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-cta transition-all hover:gap-3"
          >
            View all categories
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
