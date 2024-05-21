import { z } from 'zod';
import { nameSchema, passwordSchema } from '@/config/zod-schemas/zod-config'; // Chemin à ajuster selon votre structure de projet

export const signupSchema = z.object({
  firstName: nameSchema,
  lastName: nameSchema,
  email: z.string().email('Invalid email address'),
  password: passwordSchema
});

export type SignupFormData = z.infer<typeof signupSchema>;
