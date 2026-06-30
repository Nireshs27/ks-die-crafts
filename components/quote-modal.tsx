"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { LeadForm } from "@/components/lead-form";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function QuoteModal({
  open,
  onClose,
  defaultService,
}: {
  open: boolean;
  onClose: () => void;
  defaultService?: string;
}) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (open) {
      previousFocus.current = document.activeElement as HTMLElement | null;
      let innerId = 0;
      const outerId = requestAnimationFrame(() => {
        setMounted(true);
        innerId = requestAnimationFrame(() => setVisible(true));
      });
      return () => {
        cancelAnimationFrame(outerId);
        cancelAnimationFrame(innerId);
      };
    }

    const closeId = requestAnimationFrame(() => setVisible(false));
    const timeout = setTimeout(() => setMounted(false), 250);
    return () => {
      cancelAnimationFrame(closeId);
      clearTimeout(timeout);
    };
  }, [open]);

  useEffect(() => {
    if (!mounted) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mounted]);

  useEffect(() => {
    if (!visible) return;
    const node = dialogRef.current;
    if (!node) return;

    const focusable = node.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
    focusable?.focus();
  }, [visible]);

  useEffect(() => {
    if (!open) {
      if (previousFocus.current) {
        previousFocus.current.focus();
        previousFocus.current = null;
      }
    }
  }, [open]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const node = dialogRef.current;
      if (!node) return;

      const focusable = Array.from(
        node.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      ).filter((el) => el.offsetParent !== null);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    },
    [onClose]
  );

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-4 transition-opacity duration-200 sm:items-center sm:p-6 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden={!open}
      onKeyDown={handleKeyDown}
    >
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Request a free quote"
        className={`relative my-auto w-full max-w-lg transition-all duration-200 ${
          visible ? "translate-y-0 scale-100 opacity-100" : "translate-y-2 scale-95 opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close quote form"
          className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-muted shadow-sm transition-colors hover:bg-surface-muted hover:text-foreground"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        <LeadForm defaultService={defaultService} />
      </div>
    </div>
  );
}
