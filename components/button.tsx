import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";
type Size = "sm" | "md";

const sizeStyles: Record<Size, string> = {
  sm: "h-10 px-6",
  md: "h-12 px-8",
};

const variantStyles: Record<Variant, string> = {
  primary: "bg-cta text-white hover:bg-cta-hover hover:scale-[1.02]",
  secondary:
    "border border-border bg-background text-foreground hover:border-foreground/20 hover:shadow-md",
  ghost:
    "border border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
  whatsapp: "bg-[#25D366] text-white hover:opacity-90",
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
