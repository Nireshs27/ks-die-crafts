"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative w-[100vw] ml-[calc(50%-50vw)] -mt-16 flex min-h-[95svh] items-end overflow-hidden bg-zinc-900 lg:items-center"
    >
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute -top-[20%] left-0 right-0 h-[140%] w-full"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/categories/Illusion-Plate-Jewellery-Die.jpg"
          className="h-full w-full object-cover"
        >
          <source src="/hero-section-video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div
        className="absolute inset-0 bg-black/40"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full px-6 pb-20 pt-32 sm:px-10 lg:px-16 lg:py-0">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-white/50" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/90">
              Precision Die Manufacturing Since 1998
            </span>
            <span className="h-px w-8 bg-white/50" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="mx-auto mt-6 max-w-4xl text-center text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Steel dies crafted for{" "}
            <span className="italic font-medium">flawless</span> jewellery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-white/75 sm:text-lg"
          >
            From prototype to production — precision-engineered dies that deliver
            consistent quality, every single press.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-cta px-8 text-sm font-semibold text-white shadow-lg shadow-cta/20 transition-all hover:bg-cta-hover hover:shadow-xl hover:shadow-cta/25 hover:scale-[1.02]"
            >
              Get Quote
            </a>
            <a
              href="/products"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Explore Products
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
