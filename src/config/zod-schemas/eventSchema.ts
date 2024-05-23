import { z } from 'zod';
import { CategoryEvent } from '../enums/CategoryEvent.enum';

/**
 * `eventSchema` defines the schema for an event form.
 * It includes properties for the title, start date, end date, category type, base price, quantity available,
 * short description, and long description, each with specific validation rules.
 *
 * @constant
 *
 * @example
 * const validData = {
 *   title: 'Concert',
 *   startDate: '2023-06-01T00:00:00Z',
 *   endDate: '2023-06-01T23:59:59Z',
 *   categoryType: CategoryEvent.MUSIC,
 *   basePrice: 50,
 *   quantityAvailable: 100,
 *   shortDescription: 'A short description of the concert.',
 *   longDescription: 'A detailed description of the concert.'
 * };
 *
 * const result = eventSchema.safeParse(validData);
 * if (result.success) {
 *   // Data is valid
 * } else {
 *   // Data is invalid
 *   console.error(result.error);
 * }
 *
 * @remarks
 * This schema is used to validate the data for an event form, ensuring that each field meets the specified requirements
 * such as minimum and maximum lengths, valid date format, and numeric constraints.
 */
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

/**
 * `EventFormData` defines the TypeScript type for the `eventSchema` object.
 * It includes properties for the title, start date, end date, category type, base price, quantity available,
 * short description, and long description.
 *
 * @property {string} title - The title of the event.
 * @property {string} startDate - The start date of the event.
 * @property {string} endDate - The end date of the event.
 * @property {CategoryEvent} categoryType - The category type of the event.
 * @property {number} basePrice - The base price of the event.
 * @property {number} quantityAvailable - The quantity of tickets available for the event.
 * @property {string} shortDescription - A short description of the event.
 * @property {string} longDescription - A detailed description of the event.
 *
 * @example
 * const eventFormData: EventFormData = {
 *   title: 'Concert',
 *   startDate: '2023-06-01T00:00:00Z',
 *   endDate: '2023-06-01T23:59:59Z',
 *   categoryType: CategoryEvent.MUSIC,
 *   basePrice: 50,
 *   quantityAvailable: 100,
 *   shortDescription: 'A short description of the concert.',
 *   longDescription: 'A detailed description of the concert.'
 * };
 *
 * @remarks
 * This type is inferred from the `eventSchema` object, ensuring that it matches the structure and validation rules
 * defined in the schema.
 */
export type EventFormData = z.infer<typeof eventSchema>;
