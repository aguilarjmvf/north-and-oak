import { z } from "zod";

export const contactSubjects = [
  "general",
  "product",
  "showroom",
  "press",
  "trade",
  "warranty",
  "other",
] as const;

export const contactSchema = z.object({
  firstName:      z.string().min(1, "First name is required"),
  lastName:       z.string().min(1, "Last name is required"),
  email:          z.string().email("Please enter a valid email address"),
  subject:        z.enum(contactSubjects),
  message:        z.string().min(20, "Please include at least 20 characters"),
  referralSource: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
