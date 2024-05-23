import { z } from 'zod';
import { passwordSchema } from './zod-config';

/**
 * `changePasswordSchema` defines the schema for changing a user's password.
 * It includes properties for the old password and the new password, both validated against the `passwordSchema`.
 *
 * @constant
 *
 * @example
 * const validData = {
 *   oldPassword: 'oldPassword123',
 *   newPassword: 'newPassword123'
 * };
 *
 * const result = changePasswordSchema.safeParse(validData);
 * if (result.success) {
 *   // Data is valid
 * } else {
 *   // Data is invalid
 *   console.error(result.error);
 * }
 *
 * @remarks
 * This schema is used to validate the data for changing a user's password, ensuring that both the old and new passwords
 * meet the requirements defined in the `passwordSchema`.
 */
export const changePasswordSchema = z.object({
  oldPassword: passwordSchema,
  newPassword: passwordSchema
});

/**
 * `ChangePasswordSchema` defines the TypeScript type for the `changePasswordSchema` object.
 * It includes properties for the old password and the new password.
 *
 * @property {string} oldPassword - The old password of the user.
 * @property {string} newPassword - The new password chosen by the user.
 *
 * @example
 * const changePasswordData: ChangePasswordSchema = {
 *   oldPassword: 'oldPassword123',
 *   newPassword: 'newPassword123'
 * };
 *
 * @remarks
 * This type is inferred from the `changePasswordSchema` object, ensuring that it matches the structure and validation rules
 * defined in the schema.
 */
export type ChangePasswordSchema = z.infer<typeof changePasswordSchema>;
