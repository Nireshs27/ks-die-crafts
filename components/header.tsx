"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Container } from "@/components/container";
import { LogoLink } from "@/components/logo";
import { QuoteModal } from "@/components/quote-modal";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const solidHeader = scrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 animate-[header-slide-in_0.6s_cubic-bezier(0.25,0.4,0.25,1)] ${
        solidHeader
          ? "border-b border-border/50 bg-background shadow-sm"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="relative flex h-16 items-center gap-4 lg:h-20">
          <LogoLink
            src={siteConfig.headerLogo}
            width={312}
            height={261}
            className={`relative z-10 h-7 w-auto shrink-0 object-contain lg:h-16 transition-all duration-300 ${
              solidHeader ? "invert dark:invert-0" : ""
            }`}
            priority
            onClick={() => setMenuOpen(false)}
          />

          <nav
            aria-label="Main navigation"
            className="absolute left-1/2 hidden -translate-x-1/2 lg:block"
          >
            <ul className="flex items-center gap-8">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative text-lg font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:transition-all hover:after:w-full ${
                      solidHeader
                        ? "text-muted hover:text-foreground after:bg-foreground"
                        : "text-white/75 hover:text-white after:bg-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto hidden items-center gap-2 lg:flex">
            <ThemeToggle
              className={
                solidHeader
                  ? "text-foreground hover:bg-surface-muted"
                  : "text-white hover:bg-white/10"
              }
            />
            <button
              type="button"
              onClick={() => setQuoteOpen(true)}
              className="inline-flex h-10 items-center justify-center rounded-full bg-cta px-6 text-base font-medium text-cta-foreground transition-all hover:scale-[1.02] hover:bg-cta-hover"
            >
              Get Quote
            </button>
          </div>

          <div className="ml-auto flex items-center gap-2 lg:hidden">
            <ThemeToggle
              className={
                solidHeader
                  ? "text-foreground hover:bg-surface-muted"
                  : "text-white hover:bg-white/10"
              }
            />
            <button
              type="button"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                solidHeader ? "text-foreground hover:bg-surface-muted" : "text-white hover:bg-white/10"
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

        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="accordion-panel border-t border-border/50 bg-background lg:hidden"
          data-open={menuOpen}
        >
          <div>
            <ul className="flex flex-col gap-1 py-4">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-lg px-3 py-3 text-lg font-medium text-muted transition-colors hover:bg-surface-muted hover:text-foreground"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <button
                  type="button"
                  className="block w-full rounded-full bg-cta px-6 py-3 text-center text-base font-medium text-cta-foreground transition-colors hover:bg-cta-hover"
                  onClick={() => {
                    setMenuOpen(false);
                    setQuoteOpen(true);
                  }}
                >
                  Get Quote
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </Container>

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </header>
  );
}
