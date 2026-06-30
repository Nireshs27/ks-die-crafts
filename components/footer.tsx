"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowUp } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/container";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { LogoLink } from "@/components/logo";
import { products } from "@/lib/products";

const mapsUrl = `https://www.google.com/maps?q=${siteConfig.contact.geo.latitude},${siteConfig.contact.geo.longitude}`;

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-zinc-900 bg-zinc-950 text-zinc-400 overflow-hidden">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-1/2 h-[1px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-cta/30 to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,var(--color-cta)_0%,transparent_70%)] opacity-[0.03] pointer-events-none" />

      <Container className="relative z-10">
        {/* Footer columns */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          {/* Brand Info */}
          <div className="md:col-span-2 lg:col-span-4">
            <LogoLink
              className="w-48 sm:w-56 h-auto transition-opacity hover:opacity-90"
              width={600}
              height={400}
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
            We design and manufacture precision steel dies for the jewellery industry combining craftsmanship and modern technology.
            </p>
            <p className="mt-3 text-xs font-medium text-zinc-500">
              Trusted Since 1980 - Built on Quality and Reliability
            </p>
            <Link
              href="/#contact"
              className="mt-5 inline-flex h-10 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-zinc-950 transition-all hover:bg-zinc-200"
            >
              Request a Quote
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.nav.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
      
              {/* <li>
                <Link href="/#why-us" className="text-sm text-zinc-400 transition-colors hover:text-white">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/#career" className="text-sm text-zinc-400 transition-colors hover:text-white">
                  Career
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Products Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Products
            </h3>
            <ul className="mt-4 space-y-2.5">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
           
            
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-2 lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-medium uppercase tracking-wider text-zinc-500 leading-none mb-0.5">
                    Phone
                  </span>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-sm leading-snug text-zinc-300 transition-colors hover:text-white"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-medium uppercase tracking-wider text-zinc-500 leading-none mb-0.5">
                    Email
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm leading-snug text-zinc-300 transition-colors hover:text-white"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-medium uppercase tracking-wider text-zinc-500 leading-none mb-0.5">
                    Address
                  </span>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="not-italic text-sm leading-snug text-zinc-300 transition-colors hover:text-white"
                  >
                    {siteConfig.contact.address.split("\n").map((line, i, arr) => (
                      <span key={i}>
                        {line}
                        {i < arr.length - 1 && <br />}
                      </span>
                    ))}
                  </a>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400">
                  <Clock className="h-4 w-4" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-medium uppercase tracking-wider text-zinc-500 leading-none mb-0.5">
                    Working Hours
                  </span>
                  <span className="text-sm leading-snug text-zinc-300">
                    {siteConfig.contact.workingHours.split("\n").map((line, i, arr) => (
                      <span key={i}>
                        {line}
                        {i < arr.length - 1 && <br />}
                      </span>
                    ))}
                  </span>
                </div>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with KS Diecrafts on WhatsApp"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 transition-all hover:scale-110 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white hover:shadow-lg hover:shadow-[#25D366]/30"
              >
                <WhatsAppIcon full className="h-5 w-5 transition-transform group-hover:scale-110" />
              </a>
              <a
                href={siteConfig.social?.instagram ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow KS Diecrafts on Instagram"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 transition-all hover:scale-110 hover:border-transparent hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 transition-transform group-hover:scale-110"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href={siteConfig.social?.facebook ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow KS Diecrafts on Facebook"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 transition-all hover:scale-110 hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 transition-transform group-hover:scale-110"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800/50 py-6">
          <div className="flex flex-col items-center gap-4 text-xs text-zinc-500 sm:flex-row sm:justify-between">
            <p>&copy; {year} {siteConfig.name}. All rights reserved.</p>

            <p className="flex items-center gap-1.5">
              Crafted with precision in India
              <span className="text-cta" aria-hidden="true">
                ♥
              </span>
            </p>
          </div>
        </div>
      </Container>

      {/* Back to Top */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="absolute right-6 bottom-6 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-400 backdrop-blur-sm transition-all hover:border-zinc-600 hover:bg-zinc-800 hover:text-white hover:-translate-y-0.5"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </footer>
  );
}
