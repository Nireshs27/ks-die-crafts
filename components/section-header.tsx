import type { ReactNode } from "react";

type SectionHeaderProps = {
  badge: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
  className?: string;
  children?: ReactNode;
};

export function SectionHeader({
  badge,
  title,
  description,
  as: Heading = "h2",
  className,
  children,
}: SectionHeaderProps) {
  return (
    <div className={`mx-auto max-w-3xl text-center${className ? ` ${className}` : ""}`}>
      <div className="flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-cta" aria-hidden="true" />
        <span className="text-xs font-semibold uppercase tracking-widest text-cta">
          {badge}
        </span>
        <span className="h-px w-8 bg-cta" aria-hidden="true" />
      </div>
      <Heading className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </Heading>
      {description ? (
        <p className="mx-auto mt-4 max-w-2xl text-body leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
