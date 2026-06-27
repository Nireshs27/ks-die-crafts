"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";

export function CtaBanner({
  title = "Ready to discuss your project?",
  description = "Share your brief — CAD file, sketch, or sample. We respond within 24 hours with a clear timeline and quote.",
  primaryHref = "/#contact",
  primaryLabel = "Request a Quote",
}: {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative overflow-hidden rounded-3xl border border-border bg-surface-muted px-6 py-12 text-center shadow-sm sm:px-10 sm:py-16 lg:px-14 lg:py-20"
        >
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cta/5 blur-[100px]" aria-hidden="true" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cta/5 blur-[100px]" aria-hidden="true" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href={primaryHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cta px-8 text-sm font-semibold text-white shadow-sm transition-all hover:bg-cta-hover hover:scale-[1.02]"
              >
                {primaryLabel}
              </Link>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-background px-8 text-sm font-medium text-foreground transition-all hover:border-foreground/20 hover:shadow-md"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-[#25D366]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.768.967-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
