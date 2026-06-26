import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/container";
import { LogoLink } from "@/components/logo";
import { products } from "@/lib/products";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Categories", href: "/products" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-zinc-900 bg-zinc-950 text-zinc-400 overflow-hidden">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-1/2 h-[1px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-cta/30 to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,var(--color-cta)_0%,transparent_70%)] opacity-[0.03] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          {/* Brand Info */}
          <div className="md:col-span-2 lg:col-span-4">
            <LogoLink className="h-10 w-auto transition-opacity hover:opacity-90" />
            <p className="mt-6 max-w-sm text-base leading-relaxed text-zinc-400">
              Precision steel die design and manufacturing for the jewellery
              industry. Where craftsmanship meets advanced technology.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/50 transition-all hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 transition-transform group-hover:scale-110">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.768.967-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
              </a>
              <a
                href={siteConfig.social?.instagram ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/50 transition-all hover:border-cta hover:bg-cta hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform group-hover:scale-110">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href={siteConfig.social?.facebook ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/50 transition-all hover:border-cta hover:bg-cta hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform group-hover:scale-110">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-sm font-semibold text-white">
              Navigation
            </h3>
            <ul className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-cta"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-white">
              Products
            </h3>
            <ul className="mt-6 space-y-4">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="text-sm text-zinc-400 transition-colors hover:text-cta"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-2 lg:col-span-3">
            <h3 className="text-sm font-semibold text-white">
              Get in Touch
            </h3>
            <ul className="mt-6 space-y-6">
              <li className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-medium text-zinc-500 mb-1 uppercase tracking-wider">Phone</span>
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-sm text-zinc-300 transition-colors hover:text-cta">
                    {siteConfig.contact.phone || "+91 (0) 000 0000"}
                  </a>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-medium text-zinc-500 mb-1 uppercase tracking-wider">Email</span>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-sm text-zinc-300 transition-colors hover:text-cta">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-medium text-zinc-500 mb-1 uppercase tracking-wider">Address</span>
                  <address className="not-italic text-sm text-zinc-300 leading-relaxed">
                    {siteConfig.contact.address ? (
                      <span dangerouslySetInnerHTML={{ __html: siteConfig.contact.address.replace(/\n/g, '<br />') }} />
                    ) : (
                      <>
                        New No: 46, Old No 70/1,<br />
                        Second Floor, Bazullah Road,<br />
                        T.Nagar, Chennai – 600017
                      </>
                    )}
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800/50 py-8">
          <div className="flex flex-col items-center gap-4 text-sm text-zinc-500 md:flex-row md:justify-between">
            <p>&copy; {year} {siteConfig.name}. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              Crafted with precision in India
              <span className="text-cta">♥</span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
