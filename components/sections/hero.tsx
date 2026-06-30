"use client";

import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/button";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  // Start false so the server-rendered HTML matches the first client render
  // (avoids a hydration mismatch); the effect upgrades to video after mount.
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    // Intentional post-mount sync with an external system (matchMedia); safe here.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (mq.matches) setShowVideo(true);
    const handler = (e: MediaQueryListEvent) => setShowVideo(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const section = ref.current;
    if (!section || !showVideo) return;

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
  }, [showVideo]);

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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-poster.webp"
          alt=""
          fetchPriority="high"
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover${showVideo ? " hidden" : ""}`}
        />

        {showVideo && (
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            preload="none"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/hero-section-video.mp4" type="video/mp4" />
          </video>
        )}
      </div>

      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <div className="relative z-10 w-full px-6 pb-20 pt-32 sm:px-10 lg:px-16 lg:py-0">
        <div className="mx-auto max-w-[1400px]">
          <div className="hero-fade-up flex items-center justify-center gap-3 [animation-delay:0.2s]">
            
            <span className="text-xs font-semibold uppercase tracking-widest text-white/90">
              Trusted Die Manufacturing Experts
            </span>
            
          </div>

          <h1 className="hero-fade-up mx-auto mt-6 max-w-4xl text-center text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl [animation-delay:0.4s]">
            Precision Dies That Power{" "}
            <span className="italic font-medium">Quality</span> Manufacturing.
          </h1>

          <p className="hero-fade-up mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-white/80 sm:text-lg [animation-delay:0.6s]">
            At KS Die Crafts, we craft high precision dies for coins, jewellery pendants, religious designs, portraits, and custom applications  built for exceptional detailing, durability, and consistent production performance.
          </p>

          <div className="hero-fade-up mt-8 flex justify-center [animation-delay:0.8s]">
            <Button
              href="/#categories"
              variant="ghost"
              size="md"
              className="focus-visible:outline-white"
            >
              Explore Our Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
