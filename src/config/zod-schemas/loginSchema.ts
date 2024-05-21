import { z } from 'zod';
import { passwordSchema } from './zod-config';

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: passwordSchema
});

export type LoginFormData = z.infer<typeof loginSchema>;
