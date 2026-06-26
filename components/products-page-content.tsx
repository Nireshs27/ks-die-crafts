"use client";

import Link from "next/link";
import { CategoryCard } from "@/components/category-card";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion";
import { categories } from "@/lib/categories";

export function ProductsPageContent() {
  return (
    <>
      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-muted">
                <li>
                  <Link href="/" className="transition-colors hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-foreground">Products</li>
              </ol>
            </nav>

            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-cta" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-widest text-cta">
                  Our Products
                </span>
                <span className="h-px w-8 bg-cta" aria-hidden="true" />
              </div>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Precision dies for every jewellery type
              </h1>
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
                  features={category.features}
                  image={category.image}
                  imageAlt={category.imageAlt}
                  href={`/products/${category.slug}`}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
