"use client";

import { Button } from "@/components/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">Something went wrong</h1>
      <p className="mt-4 max-w-md text-body text-muted">
        An unexpected error occurred. Please try again.
      </p>
      <Button onClick={reset} variant="primary" size="sm" className="mt-8">
        Try again
      </Button>
    </div>
  );
}
