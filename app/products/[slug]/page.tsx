import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { ContactSection } from "@/components/sections/contact";
import { CtaBanner } from "@/components/cta-banner";
import { products, getProduct } from "@/lib/products";
import { siteConfig } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: `${product.title} — ${product.subtitle}`,
    description: product.shortDescription,
    alternates: { canonical: `${siteConfig.url}/products/${product.slug}` },
    openGraph: {
      title: `${product.title} | ${siteConfig.name}`,
      description: product.shortDescription,
      images: [{ url: product.image, alt: product.imageAlt }],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.shortDescription,
    image: `${siteConfig.url}${product.image}`,
    brand: { "@type": "Brand", name: siteConfig.name },
    manufacturer: { "@type": "Organization", name: siteConfig.name },
    category: "Industrial dies / Jewellery manufacturing tooling",
    material: product.materials.join(", "),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      seller: { "@type": "Organization", name: siteConfig.name },
      url: `${siteConfig.url}/products/${product.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-muted">
              <li><Link href="/" className="transition-colors hover:text-foreground">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/products" className="transition-colors hover:text-foreground">Products</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground">{product.title}</li>
            </ol>
          </nav>

          <Link
            href="/#categories"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-cta transition-all hover:gap-3"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
            Back to All Categories
          </Link>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-surface-muted shadow-sm">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-badge font-semibold uppercase tracking-wider text-foreground backdrop-blur-sm ring-1 ring-border">
                Lead time {product.leadTime}
              </span>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-cta" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-widest text-cta">
                  {product.subtitle}
                </span>
              </div>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {product.title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {product.longDescription}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  href="/#contact"
                  variant="primary"
                  size="md"
                  className="shadow-lg shadow-cta/20"
                >
                  Request Quote
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Button>
                <Button
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                    `Hi KS Diecrafts, I'd like a quote for ${product.title}.`
                  )}`}
                  newTab
                  variant="secondary"
                  size="md"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                  WhatsApp Us
                </Button>
              </div>

              <dl className="mt-12 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
                {product.specifications.map((spec) => (
                  <div
                    key={spec.label}
                    className="border-t border-border pt-4"
                  >
                    <dt className="text-badge font-semibold uppercase tracking-wider text-silver">
                      {spec.label}
                    </dt>
                    <dd className="mt-1.5 text-sm font-semibold text-foreground">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-cta" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-widest text-cta">
                  What We Make
                </span>
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Features
              </h2>
              <ul className="mt-6 space-y-3">
                {product.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0 text-cta">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-cta" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-widest text-cta">
                  Use Cases
                </span>
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Common applications
              </h2>
              <ul className="mt-6 space-y-3">
                {product.applications.map((a, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0 text-cta">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title={`Need a custom ${product.title.toLowerCase()}?`}
        description="Send us your design or sample. We'll respond within 24 hours with a clear quote and timeline."
      />

      <ContactSection defaultService={product.slug} />
    </>
  );
}
