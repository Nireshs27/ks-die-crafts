import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <p className="text-sm font-medium text-silver">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">Page not found</h1>
      <p className="mt-4 max-w-md text-muted">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-11 items-center justify-center rounded-md bg-cta px-6 text-sm font-semibold text-cta-foreground transition-colors hover:bg-cta-hover"
      >
        Back to {siteConfig.name}
      </Link>
    </div>
  );
}
