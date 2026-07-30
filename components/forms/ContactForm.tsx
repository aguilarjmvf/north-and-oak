"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormValues } from "@/lib/schemas/contactSchema";
import { Button } from "@/components/ui/button";
import { inputStyle, labelStyle, errorStyle } from "./formStyles";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { subject: "general" },
  });

  async function onSubmit(_data: ContactFormValues) {
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="p-8 text-center"
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
          Message received.
        </p>
        <p style={{ fontSize: "var(--text-small)", color: "var(--slate)" }}>
          We respond to all inquiries within one business day.
        </p>
      </div>
    );
  }

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
        <label htmlFor="email" style={labelStyle}>Email address</label>
        <input id="email" type="email" style={inputStyle} {...register("email")} />
        {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="subject" style={labelStyle}>Subject</label>
        <select
          id="subject"
          style={{ ...inputStyle, appearance: "none" }}
          {...register("subject")}
        >
          <option value="general">General inquiry</option>
          <option value="product">Product question</option>
          <option value="showroom">Showroom visit</option>
          <option value="trade">Trade program</option>
          <option value="warranty">Warranty or repair</option>
          <option value="press">Press</option>
          <option value="other">Other</option>
        </select>
        {errors.subject && <p style={errorStyle}>{errors.subject.message}</p>}
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>Message</label>
        <textarea
          id="message"
          rows={6}
          style={{ ...inputStyle, resize: "vertical" }}
          {...register("message")}
        />
        {errors.message && <p style={errorStyle}>{errors.message.message}</p>}
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
