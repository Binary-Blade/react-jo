import { z } from 'zod';

/**
 * `contactFormSchema` defines the schema for a contact form.
 * It includes properties for the name, email, subject, and message, each with specific validation rules.
 *
 * @constant
 *
 * @example
 * const validData = {
 *   name: 'John Doe',
 *   email: 'john.doe@example.com',
 *   subject: 'Inquiry about product',
 *   message: 'I would like to know more about your product.'
 * };
 *
 * const result = contactFormSchema.safeParse(validData);
 * if (result.success) {
 *   // Data is valid
 * } else {
 *   // Data is invalid
 *   console.error(result.error);
 * }
 *
 * @remarks
 * This schema is used to validate the data for a contact form, ensuring that each field meets the specified requirements
 * such as minimum and maximum lengths, and valid email format.
 */
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

/**
 * `ContactFormData` defines the TypeScript type for the `contactFormSchema` object.
 * It includes properties for the name, email, subject, and message.
 *
 * @property {string} name - The name of the person submitting the contact form.
 * @property {string} email - The email address of the person submitting the contact form.
 * @property {string} subject - The subject of the contact form.
 * @property {string} message - The message content of the contact form.
 *
 * @example
 * const contactFormData: ContactFormData = {
 *   name: 'John Doe',
 *   email: 'john.doe@example.com',
 *   subject: 'Inquiry about product',
 *   message: 'I would like to know more about your product.'
 * };
 *
 * @remarks
 * This type is inferred from the `contactFormSchema` object, ensuring that it matches the structure and validation rules
 * defined in the schema.
 */
export type ContactFormData = z.infer<typeof contactFormSchema>;
