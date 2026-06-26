"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">Something went wrong</h1>
      <p className="mt-4 max-w-md text-muted">
        An unexpected error occurred. Please try again.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 inline-flex h-11 items-center justify-center rounded-md bg-cta px-6 text-sm font-semibold text-cta-foreground transition-colors hover:bg-cta-hover"
      >
        Try again
      </button>
    </div>
  );
}
