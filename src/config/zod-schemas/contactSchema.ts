import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Le nom doit comporter au moins 2 caractères' })
    .max(50, { message: 'Le nom doit comporter moins de 50 caractères' })
    .trim(),
  email: z
    .string()
    .email({ message: 'Adresse email invalide' })
    .max(100, { message: "L'adresse email doit comporter moins de 100 caractères" })
    .trim(),
  subject: z
    .string()
    .min(5, { message: 'Le sujet doit comporter au moins 5 caractères' })
    .max(100, { message: 'Le sujet doit comporter moins de 100 caractères' })
    .trim(),
  message: z
    .string()
    .min(10, { message: 'Le message doit comporter au moins 10 caractères' })
    .max(500, { message: 'Le message doit comporter moins de 500 caractères' })
    .trim()
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
