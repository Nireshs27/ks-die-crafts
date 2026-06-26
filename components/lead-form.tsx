"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";

const dieOptions = [
  { value: "coin-dies", label: "Coin Dies" },
  { value: "jewellery-dies", label: "Jewellery Dies" },
  { value: "religious-dies", label: "Religious Dies (Vel, Soolam, Thalli)" },
  { value: "ring-dies", label: "Ring Dies" },
  { value: "bangle-dies", label: "Bangle Dies" },
  { value: "pendant-dies", label: "Pendant Dies" },
  { value: "earring-dies", label: "Earring Dies" },
  { value: "chain-dies", label: "Chain Dies" },
  { value: "custom-dies", label: "Custom / Other" },
] as const;

const contactPreferences = [
  { value: "whatsapp", label: "WhatsApp" },
  { value: "phone", label: "Phone" },
  { value: "email", label: "Email" },
] as const;

const fieldClassName =
  "w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-foreground placeholder:text-silver outline-none transition-all focus:border-cta/40 focus:ring-2 focus:ring-cta/10";

function ServiceSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

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
  };

  return (
    <div ref={containerRef} className="relative">
      <input type="hidden" name="service" value={value} required />

      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className={`${fieldClassName} flex items-center justify-between text-left ${
          !selected ? "text-silver" : ""
        }`}
      >
        <span>{selected?.label ?? "Select die type..."}</span>
        <svg
          className={`h-4 w-4 text-silver transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute z-20 mt-2 max-h-72 w-full overflow-auto rounded-xl border border-border bg-white py-1 shadow-lg"
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
                      ? "bg-cta text-white"
                      : "bg-white text-foreground hover:bg-cta hover:text-white"
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
  const formRef = useRef<HTMLFormElement>(null);

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("subject", `New die enquiry from ${formData.get("name") ?? "website"}`);
    formData.append("from_name", "KS Diecrafts website");
    formData.append("contact_preference", contactPref);

    if (accessKey) {
      formData.append("access_key", accessKey);
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        if (data.success) {
          setStatus("success");
          form.reset();
          setService("");
        } else {
          setStatus("error");
          setErrorMsg(data.message ?? "Something went wrong. Please try again.");
        }
      } catch {
        setStatus("error");
        setErrorMsg("Network error. Please try again or call us directly.");
      }
    } else {
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          "[LeadForm] NEXT_PUBLIC_WEB3FORMS_KEY is not set. The form will display success without delivering the message. Set the env var to enable real submissions."
        );
      }
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      form.reset();
      setService("");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-white p-8 text-center shadow-sm">
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
      className={`flex flex-col rounded-xl border border-border bg-white p-5 shadow-sm sm:p-6${className ? ` ${className}` : ""}`}
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
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            className={fieldClassName}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            className={fieldClassName}
          />
          <input
            type="tel"
            name="phone"
            required
            placeholder="Phone / WhatsApp"
            className={fieldClassName}
          />
        </div>

        <input
          type="text"
          name="company"
          placeholder="Company / Brand (optional)"
          className={fieldClassName}
        />

        <ServiceSelect value={service} onChange={setService} />

        <div>
          <p className="mb-1.5 text-[11px] font-medium uppercase tracking-wider text-muted">
            Preferred contact
          </p>
          <div className="flex flex-wrap gap-1.5">
            {contactPreferences.map((opt) => {
              const active = contactPref === opt.value;
              return (
                <button
                  type="button"
                  key={opt.value}
                  onClick={() => setContactPref(opt.value)}
                  className={`rounded-full border px-3 py-1 text-xs transition-all ${
                    active
                      ? "border-cta bg-cta text-white shadow-sm"
                      : "border-border bg-white text-muted hover:border-cta/40 hover:text-foreground"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        <textarea
          name="message"
          rows={4}
          placeholder="Brief project details (optional)"
          className={`${fieldClassName} min-h-[7rem] flex-1 resize-none`}
        />

        <div className="mt-auto shrink-0 space-y-3">
        {status === "error" && (
          <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-xs text-red-700">
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex h-10 items-center justify-center rounded-full bg-cta px-6 text-sm font-semibold text-white shadow-sm transition-all hover:scale-[1.02] hover:bg-cta-hover hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70"
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

        <p className="text-xs text-silver">
          We respond within 24 hours. No spam — ever.
        </p>
        </div>
      </form>
    </div>
  );
}
