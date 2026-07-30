"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader2 } from "lucide-react";
import { newsletterSchema, type NewsletterFormValues } from "@/lib/schemas/newsletterSchema";
import { cn } from "@/lib/utils";

interface NewsletterFormProps {
  layout?: "inline" | "stacked";
  inputPlaceholder?: string;
  submitLabel?: string;
  onSuccess?: () => void;
}

export function NewsletterForm({
  layout = "inline",
  inputPlaceholder = "Your email address",
  submitLabel = "Subscribe",
  onSuccess,
}: NewsletterFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (_data: NewsletterFormValues) => {
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    onSuccess?.();
  };

  if (submitted) {
    return (
      <p
        style={{
          fontFamily: "var(--font-heading)",
          fontStyle: "italic",
          fontSize: "1.125rem",
          color: "var(--oak)",
        }}
      >
        You&rsquo;re in. First issue comes when there&rsquo;s something worth saying.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={cn("flex gap-3", layout === "stacked" ? "flex-col" : "flex-col sm:flex-row")}>
        <div className="flex-1">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            autoComplete="email"
            placeholder={inputPlaceholder}
            className={cn(
              "w-full h-11 px-4 bg-transparent border transition-colors duration-200 rounded-[2px]",
              "placeholder:text-[var(--warmstone)] focus:outline-none",
              errors.email
                ? "border-[var(--clay)]"
                : "border-[var(--warmstone)] focus:border-[var(--char)]"
            )}
            style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-body)", color: "var(--char)" }}
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs" style={{ color: "var(--clay)" }}>
              {errors.email.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-[2px] font-sans font-medium uppercase tracking-[0.06em] text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
          style={{ backgroundColor: "var(--oak)", color: "var(--birch)" }}
        >
          {isSubmitting ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <>
              {submitLabel}
              <ArrowRight size={14} strokeWidth={1.5} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
