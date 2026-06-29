"use client";

import { useEffect, useRef, useState } from "react";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function Counter({
  from = 0,
  to,
  duration = 2,
}: {
  from?: number;
  to: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-50px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!started || !el) return;

    const ms = duration * 1000;
    let start: number | null = null;
    let raf: number;

    const tick = (ts: number) => {
      if (start === null) start = ts;
      const elapsed = ts - start;
      const progress = Math.min(elapsed / ms, 1);
      const value = Math.floor(from + (to - from) * easeOutCubic(progress));
      el.textContent = Intl.NumberFormat("en-US").format(value);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, from, to, duration]);

  return <span ref={ref}>{from}</span>;
}
