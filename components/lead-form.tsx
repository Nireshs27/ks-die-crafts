"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";
import {
  contactFormSchema,
  contactPreferences,
  dieOptions,
  type ContactFieldErrors,
} from "@/lib/validations/contact";

const fieldClassName =
  "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-silver outline-none transition-all focus:border-cta/40 focus:ring-2 focus:ring-cta/10";

const fieldErrorClassName =
  "border-red-300 focus:border-red-400 focus:ring-red-100";

const labelClassName = "sr-only";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-red-600">{message}</p>;
}

function ServiceSelect({
  value,
  onChange,
  hasError,
}: {
  value: string;
  onChange: (value: string) => void;
  hasError?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const selected = dieOptions.find((option) => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectOption = (optionValue: string) => {
    onChange(optionValue);
    setOpen(false);
    buttonRef.current?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        if (!open) {
          setOpen(true);
          return;
        }
        setHighlighted((current) => Math.min(current + 1, dieOptions.length - 1));
        break;
      case "ArrowUp":
        event.preventDefault();
        if (!open) {
          setOpen(true);
          return;
        }
        setHighlighted((current) => Math.max(current - 1, 0));
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        if (!open) {
          setOpen(true);
          return;
        }
        selectOption(dieOptions[highlighted].value);
        break;
      case "Escape":
        if (open) {
          event.preventDefault();
          setOpen(false);
        }
        break;
      case "Tab":
        if (open) setOpen(false);
        break;
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Die type"
        onClick={() => setOpen((current) => !current)}
        onKeyDown={handleKeyDown}
        className={`${fieldClassName} flex items-center justify-between text-left ${
          !selected ? "text-silver" : ""
        } ${hasError ? fieldErrorClassName : ""}`}
      >
        <span>{selected?.label ?? "Select die type..."}</span>
        <svg
          className={`h-4 w-4 text-silver transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Die type options"
          className="absolute z-20 mt-2 max-h-72 w-full overflow-auto rounded-xl border border-border bg-background py-1 shadow-lg"
        >
          {dieOptions.map((option, index) => {
            const isSelected = option.value === value;
            const isHighlighted = index === highlighted;

            return (
              <li key={option.value} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onMouseEnter={() => setHighlighted(index)}
                  onClick={() => selectOption(option.value)}
                  className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${
                    isSelected || isHighlighted
                      ? "bg-cta text-cta-foreground"
                      : "bg-background text-foreground hover:bg-cta hover:text-cta-foreground"
                  }`}
                >
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

type Status = "idle" | "submitting" | "success" | "error";

export function LeadForm({
  defaultService,
  className,
}: { defaultService?: string; className?: string } = {}) {
  const [status, setStatus] = useState<Status>("idle");
  const [service, setService] = useState(defaultService ?? "");
  const [contactPref, setContactPref] = useState<string>("whatsapp");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const formRef = useRef<HTMLFormElement>(null);

  const clearFieldError = (field: keyof ContactFieldErrors) => {
    setFieldErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      company: String(formData.get("company") ?? ""),
      service,
      contactPreference: contactPref,
      message: String(formData.get("message") ?? ""),
      botcheck: String(formData.get("botcheck") ?? ""),
    };

    const parsed = contactFormSchema.safeParse(payload);

    if (!parsed.success) {
      const errors: ContactFieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !(key in errors)) {
          errors[key as keyof ContactFieldErrors] = issue.message;
        }
      }
      setFieldErrors(errors);
      setStatus("idle");
      return;
    }

    setFieldErrors({});
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setStatus("success");
        form.reset();
        setService("");
        setContactPref("whatsapp");
        return;
      }

      if (res.status === 400 && data.errors) {
        setFieldErrors(data.errors as ContactFieldErrors);
        setStatus("idle");
        return;
      }

      setStatus("error");
      setErrorMsg(
        data.message ?? "Something went wrong. Please try again or call us directly."
      );
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again or call us directly.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-background p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
          <svg className="h-7 w-7 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-foreground">Thank You!</h3>
        <p className="mt-2 text-sm text-muted">
          Your request has been received. We&apos;ll get back to you within 24 hours.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-medium text-white transition-colors hover:opacity-90"
          >
            Continue on WhatsApp
          </a>
          <button
            onClick={() => setStatus("idle")}
            className="text-sm font-medium text-cta transition-colors hover:text-cta-hover"
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col rounded-2xl border border-border bg-background p-5 shadow-sm sm:p-6${className ? ` ${className}` : ""}`}
    >
      <div className="mb-4 shrink-0">
        <h3 className="text-base font-semibold text-foreground">Request a Free Quote</h3>
        <p className="mt-0.5 text-xs text-muted">
          Tell us about your project and we&apos;ll respond within 24 hours.
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        noValidate
        className="flex min-h-0 flex-1 flex-col space-y-3.5"
      >
        {/* Honeypot */}
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
        />

        <div>
          <label htmlFor="lead-name" className={labelClassName}>
            Full Name
          </label>
          <input
            id="lead-name"
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={() => clearFieldError("name")}
            aria-invalid={Boolean(fieldErrors.name)}
            className={`${fieldClassName} ${fieldErrors.name ? fieldErrorClassName : ""}`}
          />
          <FieldError message={fieldErrors.name} />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="lead-email" className={labelClassName}>
              Email Address
            </label>
            <input
              id="lead-email"
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={() => clearFieldError("email")}
              aria-invalid={Boolean(fieldErrors.email)}
              className={`${fieldClassName} ${fieldErrors.email ? fieldErrorClassName : ""}`}
            />
            <FieldError message={fieldErrors.email} />
          </div>
          <div>
            <label htmlFor="lead-phone" className={labelClassName}>
              Phone / WhatsApp
            </label>
            <input
              id="lead-phone"
              type="tel"
              name="phone"
              placeholder="Phone / WhatsApp"
              onChange={() => clearFieldError("phone")}
              aria-invalid={Boolean(fieldErrors.phone)}
              className={`${fieldClassName} ${fieldErrors.phone ? fieldErrorClassName : ""}`}
            />
            <FieldError message={fieldErrors.phone} />
          </div>
        </div>

        <div>
          <label htmlFor="lead-company" className={labelClassName}>
            Company / Brand (optional)
          </label>
          <input
            id="lead-company"
            type="text"
            name="company"
            placeholder="Company / Brand (optional)"
            onChange={() => clearFieldError("company")}
            aria-invalid={Boolean(fieldErrors.company)}
            className={`${fieldClassName} ${fieldErrors.company ? fieldErrorClassName : ""}`}
          />
          <FieldError message={fieldErrors.company} />
        </div>

        <div>
          <ServiceSelect
            value={service}
            onChange={(value) => {
              setService(value);
              clearFieldError("service");
            }}
            hasError={Boolean(fieldErrors.service)}
          />
          <FieldError message={fieldErrors.service} />
        </div>

        <fieldset>
          <legend className="mb-1.5 text-badge font-medium uppercase tracking-wider text-muted">
            Preferred contact
          </legend>
          <div role="radiogroup" aria-label="Preferred contact method" className="flex flex-wrap gap-1.5">
            {contactPreferences.map((opt) => {
              const active = contactPref === opt.value;
              return (
                <button
                  type="button"
                  key={opt.value}
                  role="radio"
                  aria-checked={active}
                  onClick={() => setContactPref(opt.value)}
                  className={`rounded-full border px-3 py-1 text-xs transition-all ${
                    active
                      ? "border-cta bg-cta text-cta-foreground shadow-sm"
                      : "border-border bg-background text-muted hover:border-cta/40 hover:text-foreground"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </fieldset>

        <div className="flex min-h-0 flex-1 flex-col">
          <label htmlFor="lead-message" className={labelClassName}>
            Brief project details (optional)
          </label>
          <textarea
            id="lead-message"
            name="message"
            rows={4}
            placeholder="Brief project details (optional)"
            onChange={() => clearFieldError("message")}
            aria-invalid={Boolean(fieldErrors.message)}
            className={`${fieldClassName} min-h-[7rem] flex-1 resize-none ${fieldErrors.message ? fieldErrorClassName : ""}`}
          />
          <FieldError message={fieldErrors.message} />
        </div>

        <div className="mt-auto shrink-0 space-y-3">
        {status === "error" && (
          <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-xs text-red-700">
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex h-10 items-center justify-center rounded-full bg-cta px-6 text-sm font-medium text-cta-foreground shadow-sm transition-all hover:scale-[1.02] hover:bg-cta-hover hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              <svg className="mr-2 h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending...
            </>
          ) : (
            "Request Free Quote"
          )}
        </button>

       
        </div>
      </form>
    </div>
  );
}
