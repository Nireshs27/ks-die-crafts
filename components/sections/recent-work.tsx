"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import { SectionHeader } from "@/components/section-header";
import { recentWork, type RecentWorkItem } from "@/lib/recent-work";

const GAP = 20;

function WorkCard({ item, priority = false }: { item: RecentWorkItem; priority?: boolean }) {
  return (
    <div className="group relative block w-full overflow-hidden rounded-2xl contain-layout">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          loading={priority ? "eager" : "lazy"}
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
    </div>
  );
}

function getStep(el: HTMLDivElement) {
  const first = el.firstElementChild as HTMLElement | null;
  return first ? first.offsetWidth + GAP : el.clientWidth;
}

function measureSetWidth(el: HTMLDivElement, itemCount: number) {
  const { children } = el;
  if (children.length < itemCount) return 0;

  let width = 0;
  for (let i = 0; i < itemCount; i++) {
    width += (children[i] as HTMLElement).offsetWidth;
    if (i < itemCount - 1) width += GAP;
  }
  return width;
}

export function RecentWorkSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const setWidthRef = useRef(0);
  const isRepositioningRef = useRef(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const loopItems = useMemo(
    () => [...recentWork, ...recentWork, ...recentWork],
    [],
  );

  const repositionIfNeeded = useCallback(() => {
    const el = scrollContainerRef.current;
    const setWidth = setWidthRef.current;
    if (!el || !setWidth || isRepositioningRef.current) return;

    const { scrollLeft } = el;

    if (scrollLeft >= setWidth * 2) {
      isRepositioningRef.current = true;
      el.scrollLeft = scrollLeft - setWidth;
      isRepositioningRef.current = false;
    } else if (scrollLeft < setWidth) {
      isRepositioningRef.current = true;
      el.scrollLeft = scrollLeft + setWidth;
      isRepositioningRef.current = false;
    }
  }, []);

  const updateSetWidth = useCallback((preservePosition = false) => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const oldSetWidth = setWidthRef.current;
    const newSetWidth = measureSetWidth(el, recentWork.length);
    if (!newSetWidth) return;

    if (preservePosition && oldSetWidth > 0) {
      let normalizedScroll = el.scrollLeft;
      if (normalizedScroll >= oldSetWidth * 2) {
        normalizedScroll -= oldSetWidth;
      } else if (normalizedScroll < oldSetWidth) {
        normalizedScroll += oldSetWidth;
      }

      const ratio = (normalizedScroll - oldSetWidth) / oldSetWidth;
      el.scrollLeft = newSetWidth + ratio * newSetWidth;
    } else {
      el.scrollLeft = newSetWidth;
    }

    setWidthRef.current = newSetWidth;
    setIsReady(true);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    updateSetWidth(false);

    const onResize = () => updateSetWidth(true);
    window.addEventListener("resize", onResize);

    const observer = new ResizeObserver(() => updateSetWidth(true));
    observer.observe(el);

    return () => {
      window.removeEventListener("resize", onResize);
      observer.disconnect();
    };
  }, [updateSetWidth]);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    let scrollTimeout: ReturnType<typeof setTimeout>;

    const onScrollEnd = () => repositionIfNeeded();
    const onScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(repositionIfNeeded, 150);
    };

    el.addEventListener("scrollend", onScrollEnd);
    el.addEventListener("scroll", onScroll);

    return () => {
      el.removeEventListener("scrollend", onScrollEnd);
      el.removeEventListener("scroll", onScroll);
      clearTimeout(scrollTimeout);
    };
  }, [repositionIfNeeded]);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el || isPaused || !isReady) return;

    const id = setInterval(() => {
      const step = getStep(el);
      el.scrollBy({ left: step, behavior: "smooth" });
    }, 3000);

    return () => clearInterval(id);
  }, [isPaused, isReady]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const step = getStep(el);
    el.scrollBy({
      left: direction === "right" ? step : -step,
      behavior: "smooth",
    });
  };

  return (
    <section id="recent-work" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            badge="Recent Work"
            title="Every Die Tells a Story"
            description="Every die is carefully manufactured to achieve clean detailing, consistent quality and dependable performance in production."
          />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14">
            <div className="mb-6 flex justify-end gap-3">
              <button
                onClick={() => scroll("left")}
                aria-label="Previous slide"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-all hover:bg-surface-muted"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Next slide"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-all hover:bg-surface-muted"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div
              ref={scrollContainerRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className={`flex gap-5 overflow-x-auto pb-8 scrollbar-hide transition-opacity duration-200 ${isReady ? "opacity-100" : "opacity-0"}`}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {loopItems.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="min-w-[85vw] shrink-0 sm:min-w-[calc(50%-10px)] lg:min-w-[calc(25%-15px)]"
                >
                  <WorkCard item={item} priority={index < 4} />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
