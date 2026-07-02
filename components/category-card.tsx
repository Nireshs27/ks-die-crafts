"use client";

import Image from "next/image";
import Link from "next/link";

type CategoryCardProps = {
  title: string;
  subtitle?: string;
  features?: readonly string[];
  image: string;
  imageAlt: string;
  href?: string;
  badge?: string;
};

function BadgePill({ badge }: { badge?: string }) {
  if (!badge) return null;

  return (
    <div className="absolute left-3 top-3 z-10">
      <span className="rounded-full bg-cta px-3 py-1 text-badge font-semibold uppercase tracking-wider text-cta-foreground shadow-sm">
        {badge}
      </span>
    </div>
  );
}

export function CategoryCard({
  title,
  subtitle,
  image,
  imageAlt,
  href,
  badge,
}: CategoryCardProps) {
  const cardClassName = "group relative block w-full overflow-hidden rounded-2xl";

  const content = (
    <>
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent transition-colors duration-300 group-hover:from-black/50"
          aria-hidden="true"
        />
        <BadgePill badge={badge} />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 px-3 pb-4 pt-10 text-center sm:px-4 sm:pb-5">
        <h3 className="text-sm font-semibold text-white transition-transform duration-300 group-hover:-translate-y-1 sm:text-base">{title}</h3>
        {subtitle ? (
          <p className="mt-1 text-badge leading-snug text-white/85 transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-0 sm:text-xs">
            {subtitle}
          </p>
        ) : null}
      </div>

      {href ? (
        <span className="absolute bottom-4 right-4 z-10 flex translate-x-2 items-center gap-1.5 text-xs font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:text-sm">
          View Details
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cardClassName}>
        {content}
      </Link>
    );
  }

  return <div className={cardClassName}>{content}</div>;
}
