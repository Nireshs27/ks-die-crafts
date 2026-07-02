"use client";

import { useState } from "react";

type FaqItemProps = {
  question: string;
  answer: string;
};

export function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-foreground"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-foreground sm:text-base">
          {question}
        </span>
        <span
          className={`flex-shrink-0 text-muted transition-transform duration-300 ease-in-out ${open ? "rotate-180" : ""}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      <div className="accordion-panel" data-open={open}>
        <div>
          <p className="pb-5 text-body-sm leading-relaxed text-muted">{answer}</p>
        </div>
      </div>
    </div>
  );
}
