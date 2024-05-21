import { z } from 'zod';
import { CategoryEvent } from '../enums/CategoryEvent.enum';

export const eventSchema = z.object({
  title: z
    .string()
    .min(4, 'Le titre doit comporter au moins 4 caractères')
    .max(25, 'Le titre doit comporter moins de 25 caractères'),
  startDate: z.string().min(1, 'La date de début est requise'),
  endDate: z.string().min(1, 'La date de fin est requise'),
  categoryType: z.nativeEnum(CategoryEvent, {
    errorMap: () => ({ message: 'Veuillez sélectionner une catégorie valide' })
  }),
  basePrice: z
    .number()
    .min(1, 'Le prix doit être un nombre non négatif')
    .max(5000, 'Le prix doit être inférieur à 5000 €'),
  quantityAvailable: z
    .number()
    .min(0, 'La quantité doit être un nombre non négatif')
    .max(10000, 'La quantité doit être inférieure à 10.000'),
  shortDescription: z
    .string()
    .min(10, 'La description courte est requise')
    .max(255, 'La description courte doit comporter moins de 250 caractères'),
  longDescription: z
    .string()
    .min(10, 'La description longue est requise')
    .max(500, 'La description longue doit comporter moins de 500 caractères')
});

export type EventFormData = z.infer<typeof eventSchema>;

export interface FormErrors {
  [key: string]: string[] | undefined;
}
