import { z } from 'zod';
import { nameSchema } from '@/config/zod-schemas/zod-config'; // Chemin à ajuster selon votre structure de projet

export const profileSchema = z.object({
  firstName: nameSchema,
  lastName: nameSchema,
  email: z.string().email('Invalid email address')
});

export type ProfileSchema = z.infer<typeof profileSchema>;
