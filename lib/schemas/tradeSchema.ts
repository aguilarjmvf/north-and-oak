import { z } from "zod";

export const tradeRoles = [
  "interior-designer",
  "architect",
  "home-stager",
  "hospitality-designer",
  "student",
  "other",
] as const;

export const tradeSchema = z.object({
  firstName:           z.string().min(1, "First name is required"),
  lastName:            z.string().min(1, "Last name is required"),
  businessName:        z.string().min(1, "Business name is required"),
  role:                z.enum(tradeRoles),
  licenseNumber:       z.string().optional(),
  website:             z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  email:               z.string().email("Please enter a valid email address"),
  phone:               z.string().optional(),
  practiceDescription: z.string().min(30, "Please tell us a little more about your practice"),
});

export type TradeFormValues = z.infer<typeof tradeSchema>;
