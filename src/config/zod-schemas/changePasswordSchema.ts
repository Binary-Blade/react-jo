import { z } from 'zod';
import { passwordSchema } from './zod-config';

export const changePasswordSchema = z.object({
  oldPassword: passwordSchema,
  newPassword: passwordSchema
});

export type ChangePasswordSchema = z.infer<typeof changePasswordSchema>;
