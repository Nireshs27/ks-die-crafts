"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function StickyQuoteBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      setVisible(scrollPercent > 0.15);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-40 transition-all duration-500 lg:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0"
      }`}
    >
      <div className="border-t border-border/50 bg-background/95 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-lg items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">
              Get a free quote in 24 hours
            </p>
            <p className="text-xs text-muted">No commitment required</p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-cta px-5 text-sm font-semibold text-white shadow-md shadow-cta/20 transition-all hover:scale-[1.02] hover:bg-cta-hover"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
