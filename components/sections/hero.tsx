"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/button";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const section = ref.current;
    if (!section || !isDesktop) return;

    const bg = section.querySelector<HTMLElement>("[data-hero-bg]");
    if (!bg) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, -rect.top / rect.height));
        bg.style.transform = `translateY(${progress * 14}%)`;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isDesktop]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative w-[100vw] ml-[calc(50%-50vw)] -mt-16 flex min-h-[100svh] items-center overflow-hidden bg-zinc-900"
    >
      <div
        data-hero-bg
        className="absolute -top-[20%] left-0 right-0 h-[140%] w-full"
      >
        {isDesktop ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            preload="none"
            poster="/images/hero-poster.webp"
            className="h-full w-full object-cover"
          >
            <source src="/hero-section-video.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image
            src="/images/hero-poster.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
      </div>

      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <div className="relative z-10 w-full px-6 pb-20 pt-32 sm:px-10 lg:px-16 lg:py-0">
        <div className="mx-auto max-w-[1400px]">
          <div className="hero-fade-up flex items-center justify-center gap-3 [animation-delay:0.2s]">
            <span className="h-px w-8 bg-white/50" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/90">
              Precision Die Manufacturers
            </span>
            <span className="h-px w-8 bg-white/50" />
          </div>

          <h1 className="hero-fade-up mx-auto mt-6 max-w-4xl text-center text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl [animation-delay:0.4s]">
            Precision Dies That Power{" "}
            <span className="italic font-medium">Quality</span> Manufacturing.
          </h1>

          <p className="hero-fade-up mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-white/80 sm:text-lg [animation-delay:0.6s]">
            At KS Die Crafts, we craft high-precision dies for coins, jewellery pendants, religious designs, portraits, and custom applications — built for exceptional detailing, durability, and consistent production performance.
          </p>

          <div className="hero-fade-up mt-8 flex justify-center [animation-delay:0.8s]">
            <Button
              href="/#recent-work"
              variant="ghost"
              size="md"
              className="focus-visible:outline-white"
            >
              Explore Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
