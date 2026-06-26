import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "h-9 w-auto", priority = false }: LogoProps) {
  return (
    <Image
      src={siteConfig.logo}
      alt={`${siteConfig.name} logo`}
      width={240}
      height={48}
      priority={priority}
      className={className}
    />
  );
}

export function LogoLink({
  className,
  priority,
  onClick,
}: LogoProps & { onClick?: () => void }) {
  return (
    <Link href="/" className="inline-flex shrink-0" onClick={onClick}>
      <Logo className={className} priority={priority} />
    </Link>
  );
}
