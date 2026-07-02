"use client";

import Image from "next/image";
import { useRef, useEffect, useState, useCallback } from "react";
import { Button } from "@/components/button";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional sync with external system (matchMedia)
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.src = "/hero-section-video.mp4";
        videoRef.current.load();
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [isDesktop]);

  const handleVideoCanPlay = useCallback(() => {
    setVideoLoaded(true);
    videoRef.current?.play().catch(() => {});
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
      className="relative w-[100vw] ml-[calc(50%-50vw)] -mt-16 flex min-h-[100svh] items-center overflow-hidden bg-zinc-900 contain-layout"
    >
      <div
        data-hero-bg
        className="absolute -top-[20%] left-0 right-0 h-[140%] w-full will-change-transform"
      >
        <Image
          src="/images/hero-poster.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className={`object-cover transition-opacity duration-500 ${videoLoaded ? "opacity-0" : "opacity-100"}`}
        />

        {isDesktop && (
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            aria-hidden="true"
            preload="none"
            onCanPlay={handleVideoCanPlay}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
          />
        )}
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_65%_60%_at_50%_45%,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.25)_60%,rgba(0,0,0,0)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full px-6 pb-20 pt-32 sm:px-10 lg:px-16 lg:py-0">
        <div className="mx-auto max-w-[1400px]">
          <div className="hero-fade-up flex items-center justify-center [animation-delay:0.2s]">
            <span className="text-xs font-semibold uppercase tracking-widest text-white/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.7)]">
              Trusted Die Manufacturing Experts
            </span>
          </div>

          <h1 className="hero-fade-up mx-auto mt-6 max-w-4xl text-center text-4xl font-semibold leading-[1.1] tracking-tight text-white [text-shadow:0_4px_28px_rgba(0,0,0,0.6)] sm:text-5xl lg:text-6xl [animation-delay:0.4s]">
            Precision Dies That Power{" "}
            <span className="italic font-medium">Quality</span> Manufacturing.
          </h1>

          <p className="hero-fade-up mx-auto mt-5 max-w-2xl text-center text-body leading-relaxed text-white/90 [text-shadow:0_2px_14px_rgba(0,0,0,0.6)] sm:text-lg [animation-delay:0.6s]">
            At KS Diecrafts, we craft high-precision dies for coins, jewellery pendants, religious designs, portraits, and custom applications — built for exceptional detailing, durability, and consistent production performance.
          </p>

          <div className="hero-fade-up mt-8 flex justify-center [animation-delay:0.8s]">
            <Button
              href="/#categories"
              variant="light"
              size="md"
              className="shadow-lg shadow-black/30"
            >
              Explore Our Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
