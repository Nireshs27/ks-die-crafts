"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/container";
import { LogoLink } from "@/components/logo";
import { siteConfig } from "@/lib/site";

const QUOTE_HREF = "/#contact";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/50 bg-background/80 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
          <LogoLink
            className="h-8 w-auto lg:h-10"
            priority
            onClick={() => setMenuOpen(false)}
          />

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 lg:flex"
          >
            <ul className="flex items-center gap-8">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:transition-all hover:after:w-full ${
                      scrolled
                        ? "text-muted hover:text-foreground after:bg-foreground"
                        : "text-white/75 hover:text-white after:bg-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className={`hidden items-center gap-2 text-sm font-medium transition-colors lg:inline-flex ${
                  scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white"
                }`}
                aria-label="Call us"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                {siteConfig.contact.phone}
              </a>
              <Link
                href={QUOTE_HREF}
                className="inline-flex h-10 items-center justify-center rounded-full bg-cta px-6 text-sm font-medium text-white transition-all hover:scale-[1.02] hover:bg-cta-hover"
              >
                Get Quote
              </Link>
            </div>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              aria-label="Call us"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                scrolled ? "text-foreground hover:bg-surface-muted" : "text-white hover:bg-white/10"
              }`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </a>
            <button
              type="button"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                scrolled ? "text-foreground hover:bg-surface-muted" : "text-white hover:bg-white/10"
              }`}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              ) : (
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="mobile-nav"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-xl lg:hidden"
            >
              <ul className="flex flex-col gap-1 py-4">
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-lg px-3 py-3 text-sm font-medium text-muted transition-colors hover:bg-surface-muted hover:text-foreground"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    href={QUOTE_HREF}
                    className="block rounded-full bg-cta px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-cta-hover"
                    onClick={() => setMenuOpen(false)}
                  >
                    Get Quote
                  </Link>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
}
