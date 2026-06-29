import { Button } from "@/components/button";
import { siteConfig } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <p className="text-sm font-medium text-silver">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">Page not found</h1>
      <p className="mt-4 max-w-md text-muted">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button href="/" variant="primary" size="sm" className="mt-8">
        Back to {siteConfig.name}
      </Button>
    </div>
  );
}
