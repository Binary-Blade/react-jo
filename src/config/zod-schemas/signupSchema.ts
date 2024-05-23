import { z } from 'zod';
import { nameSchema, passwordSchema } from '@/config/zod-schemas/zod-config'; // Adjust the path according to your project structure

/**
 * `signupSchema` defines the schema for a signup form.
 * It includes properties for the first name, last name, email, and password, each with specific validation rules.
 *
 * @constant
 *
 * @example
 * const validData = {
 *   firstName: 'John',
 *   lastName: 'Doe',
 *   email: 'john.doe@example.com',
 *   password: 'securePassword123'
 * };
 *
 * const result = signupSchema.safeParse(validData);
 * if (result.success) {
 *   // Data is valid
 * } else {
 *   // Data is invalid
 *   console.error(result.error);
 * }
 *
 * @remarks
 * This schema is used to validate the data for a signup form, ensuring that the first name and last name
 * meet the requirements defined in the `nameSchema`, the email is in a valid format, and the password
 * meets the requirements defined in the `passwordSchema`.
 */
export const signupSchema = z.object({
  firstName: nameSchema,
  lastName: nameSchema,
  email: z.string().email('Invalid email address'),
  password: passwordSchema
});

/**
 * `SignupFormData` defines the TypeScript type for the `signupSchema` object.
 * It includes properties for the first name, last name, email, and password.
 *
 * @property {string} firstName - The first name of the user.
 * @property {string} lastName - The last name of the user.
 * @property {string} email - The email address of the user.
 * @property {string} password - The password of the user.
 *
 * @example
 * const signupData: SignupFormData = {
 *   firstName: 'John',
 *   lastName: 'Doe',
 *   email: 'john.doe@example.com',
 *   password: 'securePassword123'
 * };
 *
 * @remarks
 * This type is inferred from the `signupSchema` object, ensuring that it matches the structure and validation rules
 * defined in the schema.
 */
export type SignupFormData = z.infer<typeof signupSchema>;
