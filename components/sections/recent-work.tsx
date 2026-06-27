"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import { recentWork, type RecentWorkItem } from "@/lib/recent-work";

function WorkCard({ item }: { item: RecentWorkItem }) {
  const cardClass =
    "group relative block w-full overflow-hidden rounded-xl";

  const inner = (
    <>
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent transition-colors duration-300 group-hover:from-black/50"
          aria-hidden="true"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 px-3 pb-4 pt-10 text-center sm:px-4 sm:pb-5">
        <h3 className="text-sm font-semibold text-white sm:text-base">
          {item.title}
        </h3>
      </div>
    </>
  );

  if (item.href) {
    return (
      <Link href={item.href} className={cardClass}>
        {inner}
      </Link>
    );
  }

  return <div className={cardClass}>{inner}</div>;
}

export function RecentWorkSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el || isPaused) return;

    const id = setInterval(() => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      const first = el.firstElementChild as HTMLElement | null;
      const step = first ? first.offsetWidth + 24 : clientWidth;
      if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 1) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(id);
  }, [isPaused]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="recent-work" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-cta" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-cta">
                Recent Work
              </span>
              <span className="h-px w-8 bg-cta" aria-hidden="true" />
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Every Die Tells a Story
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Every die is carefully manufactured to achieve clean detailing, consistent quality, and dependable performance in production.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14">
            <div className="mb-6 flex justify-end gap-3">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous slide"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-all hover:bg-surface-muted disabled:opacity-50 disabled:hover:bg-surface"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Next slide"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-all hover:bg-surface-muted disabled:opacity-50 disabled:hover:bg-surface"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div
              ref={scrollContainerRef}
              onScroll={checkScroll}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {recentWork.map((item) => (
                <div
                  key={item.id}
                  className="min-w-[85vw] shrink-0 snap-start sm:min-w-[calc(50%-12px)] lg:min-w-[calc(25%-18px)]"
                >
                  <WorkCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
