import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "Name is too long."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(200, "Email address is too long."),

  phone: z
    .string()
    .trim()
    .max(30, "Phone number is too long.")
    .optional(),

  projectType: z
    .string()
    .trim()
    .min(1, "Please select a project type."),

  location: z
    .string()
    .trim()
    .max(150, "Location is too long.")
    .optional(),

  budget: z
    .string()
    .trim()
    .max(100, "Budget selection is invalid.")
    .optional(),

  message: z
    .string()
    .trim()
    .min(20, "Please tell us a little more about your project.")
    .max(5000, "Message is too long."),

  website: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;