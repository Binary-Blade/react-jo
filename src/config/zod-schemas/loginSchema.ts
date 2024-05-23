import { z } from 'zod';
import { passwordSchema } from './zod-config';

/**
 * `loginSchema` defines the schema for a login form.
 * It includes properties for the email and password, with specific validation rules.
 *
 * @constant
 *
 * @example
 * const validData = {
 *   email: 'john.doe@example.com',
 *   password: 'securepassword123'
 * };
 *
 * const result = loginSchema.safeParse(validData);
 * if (result.success) {
 *   // Data is valid
 * } else {
 *   // Data is invalid
 *   console.error(result.error);
 * }
 *
 * @remarks
 * This schema is used to validate the data for a login form, ensuring that the email is in a valid format
 * and the password meets the requirements defined in the `passwordSchema`.
 */
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: passwordSchema
});

/**
 * `LoginFormData` defines the TypeScript type for the `loginSchema` object.
 * It includes properties for the email and password.
 *
 * @property {string} email - The email address of the user.
 * @property {string} password - The password of the user.
 *
 * @example
 * const loginFormData: LoginFormData = {
 *   email: 'john.doe@example.com',
 *   password: 'securepassword123'
 * };
 *
 * @remarks
 * This type is inferred from the `loginSchema` object, ensuring that it matches the structure and validation rules
 * defined in the schema.
 */
export type LoginFormData = z.infer<typeof loginSchema>;
