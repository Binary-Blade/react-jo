import { z } from 'zod';
import { nameSchema } from '@/config/zod-schemas/zod-config';

/**
 * `profileSchema` defines the schema for a user profile form.
 * It includes properties for the first name, last name, and email, each with specific validation rules.
 *
 * @constant
 *
 * @example
 * const validData = {
 *   firstName: 'John',
 *   lastName: 'Doe',
 *   email: 'john.doe@example.com'
 * };
 *
 * const result = profileSchema.safeParse(validData);
 * if (result.success) {
 *   // Data is valid
 * } else {
 *   // Data is invalid
 *   console.error(result.error);
 * }
 *
 * @remarks
 * This schema is used to validate the data for a user profile form, ensuring that the first name and last name
 * meet the requirements defined in the `nameSchema`, and the email is in a valid format.
 */
export const profileSchema = z.object({
  firstName: nameSchema,
  lastName: nameSchema,
  email: z.string().email('Invalid email address')
});

/**
 * `ProfileSchema` defines the TypeScript type for the `profileSchema` object.
 * It includes properties for the first name, last name, and email.
 *
 * @property {string} firstName - The first name of the user.
 * @property {string} lastName - The last name of the user.
 * @property {string} email - The email address of the user.
 *
 * @example
 * const profileData: ProfileSchema = {
 *   firstName: 'John',
 *   lastName: 'Doe',
 *   email: 'john.doe@example.com'
 * };
 *
 * @remarks
 * This type is inferred from the `profileSchema` object, ensuring that it matches the structure and validation rules
 * defined in the schema.
 */
export type ProfileSchema = z.infer<typeof profileSchema>;
