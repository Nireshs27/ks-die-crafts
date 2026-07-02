import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp" | "light";
type Size = "sm" | "md";

const sizeStyles: Record<Size, string> = {
  sm: "h-10 px-6",
  md: "h-12 px-8",
};

const variantStyles: Record<Variant, string> = {
  primary: "bg-cta text-cta-foreground hover:bg-cta-hover hover:scale-[1.02]",
  secondary:
    "border border-border bg-background text-foreground hover:border-foreground/20 hover:shadow-md",
  ghost:
    "border border-white/50 bg-white/15 text-white backdrop-blur-md hover:border-white/70 hover:bg-white/25",
  whatsapp: "bg-[#25D366] text-white hover:opacity-90",
  // Fixed light pill for use over dark/photo backgrounds — intentionally
  // theme-independent so it stays high-contrast regardless of light/dark mode.
  light: "bg-white text-zinc-900 hover:bg-zinc-100 hover:scale-[1.02]",
};

function buttonClasses(variant: Variant, size: Size, className?: string) {
  return [
    "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all",
    sizeStyles[size],
    variantStyles[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  href?: string;
  newTab?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  "aria-label"?: string;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  newTab,
  type = "button",
  onClick,
  disabled,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = buttonClasses(variant, size, className);

  if (href) {
    const isInternal = href.startsWith("/") && !newTab;
    if (isInternal) {
      return (
        <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
