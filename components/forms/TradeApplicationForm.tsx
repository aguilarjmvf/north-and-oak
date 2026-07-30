"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { tradeSchema, type TradeFormValues } from "@/lib/schemas/tradeSchema";
import { Button } from "@/components/ui/button";
import { inputStyle, labelStyle, errorStyle } from "./formStyles";

export function TradeApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TradeFormValues>({
    resolver: zodResolver(tradeSchema),
    defaultValues: { role: "interior-designer" },
  });

  async function onSubmit(_data: TradeFormValues) {
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="p-10 text-center"
        style={{ border: "1px solid var(--border-subtle)", backgroundColor: "var(--birch)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "var(--text-h3)",
            fontWeight: 400,
            color: "var(--char)",
            marginBottom: "0.75rem",
          }}
        >
          Application received.
        </p>
        <p style={{ fontSize: "var(--text-small)", color: "var(--slate)" }}>
          We review all trade applications within 2–3 business days and will reach out to the email
          you provided.
        </p>
      </div>
    );
  }

  const optionalLabel = (
    <span style={{ color: "var(--warmstone)", fontWeight: 400 }}>(optional)</span>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" style={labelStyle}>First name</label>
          <input id="firstName" type="text" style={inputStyle} {...register("firstName")} />
          {errors.firstName && <p style={errorStyle}>{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="lastName" style={labelStyle}>Last name</label>
          <input id="lastName" type="text" style={inputStyle} {...register("lastName")} />
          {errors.lastName && <p style={errorStyle}>{errors.lastName.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="businessName" style={labelStyle}>Business name</label>
        <input id="businessName" type="text" style={inputStyle} {...register("businessName")} />
        {errors.businessName && <p style={errorStyle}>{errors.businessName.message}</p>}
      </div>

      <div>
        <label htmlFor="role" style={labelStyle}>Your role</label>
        <select
          id="role"
          style={{ ...inputStyle, appearance: "none" }}
          {...register("role")}
        >
          <option value="interior-designer">Interior Designer</option>
          <option value="architect">Architect</option>
          <option value="home-stager">Home Stager</option>
          <option value="hospitality-designer">Hospitality Designer</option>
          <option value="student">Student</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="licenseNumber" style={labelStyle}>License number {optionalLabel}</label>
          <input id="licenseNumber" type="text" style={inputStyle} {...register("licenseNumber")} />
        </div>
        <div>
          <label htmlFor="website" style={labelStyle}>Website {optionalLabel}</label>
          <input
            id="website"
            type="url"
            placeholder="https://"
            style={inputStyle}
            {...register("website")}
          />
          {errors.website && <p style={errorStyle}>{errors.website.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" style={labelStyle}>Email address</label>
          <input id="email" type="email" style={inputStyle} {...register("email")} />
          {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" style={labelStyle}>Phone {optionalLabel}</label>
          <input id="phone" type="tel" style={inputStyle} {...register("phone")} />
        </div>
      </div>

      <div>
        <label htmlFor="practiceDescription" style={labelStyle}>Tell us about your practice</label>
        <textarea
          id="practiceDescription"
          rows={5}
          placeholder="The kinds of projects you work on, your typical client, and how you plan to use North & Oak pieces."
          style={{ ...inputStyle, resize: "vertical" }}
          {...register("practiceDescription")}
        />
        {errors.practiceDescription && (
          <p style={errorStyle}>{errors.practiceDescription.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Submitting…" : "Submit application"}
      </Button>
    </form>
  );
}
