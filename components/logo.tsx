import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

type LogoProps = {
  className?: string;
  priority?: boolean;
  src?: string;
  width?: number;
  height?: number;
};

export function Logo({
  className = "h-7 w-auto",
  priority = false,
  src = siteConfig.logo,
  width = 300,
  height = 139,
}: LogoProps) {
  return (
    <Image
      src={src}
      alt={`${siteConfig.name} logo`}
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
}

export function LogoLink({
  className,
  priority,
  src,
  width,
  height,
  onClick,
}: LogoProps & { onClick?: () => void }) {
  return (
    <Link href="/" className="inline-flex shrink-0" onClick={onClick}>
      <Logo
        className={className}
        priority={priority}
        src={src}
        width={width}
        height={height}
      />
    </Link>
  );
}
