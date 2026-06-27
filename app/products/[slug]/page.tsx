import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-foreground backdrop-blur-sm ring-1 ring-border">
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
                <Link
                  href="/#contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cta px-7 text-sm font-semibold text-white shadow-lg shadow-cta/20 transition-all hover:bg-cta-hover hover:scale-[1.02]"
                >
                  Request Quote
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                    `Hi KS Diecrafts, I'd like a quote for ${product.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-white px-7 text-sm font-medium text-foreground transition-all hover:border-foreground/20 hover:shadow-md"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-[#25D366]">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.768.967-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>

              <dl className="mt-12 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
                {product.specifications.map((spec) => (
                  <div
                    key={spec.label}
                    className="border-t border-border pt-4"
                  >
                    <dt className="text-[10px] font-semibold uppercase tracking-wider text-silver">
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
