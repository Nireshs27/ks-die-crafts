"use client";

import { useRef, useEffect, useState, type ReactNode, type CSSProperties } from "react";

function useIntersection(margin = "-40px") {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: margin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [margin]);

  return { ref, visible };
}

const offsets: Record<string, string> = {
  up: "translateY(24px)",
  down: "translateY(-24px)",
  left: "translateX(24px)",
  right: "translateX(-24px)",
  none: "translate(0,0)",
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6,
}: RevealProps) {
  const { ref, visible } = useIntersection();

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translate(0,0)" : offsets[direction],
    transition: `opacity ${duration}s cubic-bezier(0.25,0.4,0.25,1) ${delay}s, transform ${duration}s cubic-bezier(0.25,0.4,0.25,1) ${delay}s`,
    willChange: visible ? "auto" : "opacity, transform",
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
};

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  const { ref, visible } = useIntersection();

  return (
    <div
      ref={ref}
      className={className}
      style={{ "--stagger": `${staggerDelay}s` } as CSSProperties}
      data-stagger-visible={visible || undefined}
    >
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`stagger-item ${className ?? ""}`}>
      {children}
    </div>
  );
}
