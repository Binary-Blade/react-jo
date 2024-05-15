import { z } from 'zod';
import { CategoryEvent } from '../enums/CategoryEvent.enum';

export const eventSchema = z.object({
  title: z
    .string()
    .min(4, 'Title must be at least 4 characters')
    .max(50, 'Title must be less than 50 characters'),
  startDate: z.string().min(1, 'Date is required'),
  endDate: z.string().min(1, 'Date is required'),
  categoryType: z.nativeEnum(CategoryEvent, {
    errorMap: () => ({ message: 'Please select a valid category' })
  }),
  basePrice: z
    .number()
    .min(1, 'Price must be a non-negative number')
    .max(50000, 'Price must be less than $50,000'),
  quantityAvailable: z
    .number()
    .min(0, 'Quantity must be a non-negative number')
    .max(1000000, 'Quantity must be less than 1000'),
  shortDescription: z
    .string()
    .min(10, 'Description is required')
    .max(255, 'Description must be less than 250 characters'),
  longDescription: z
    .string()
    .min(10, 'Description is required')
    .max(500, 'Description must be less than 500 characters')
});

export type EventFormData = z.infer<typeof eventSchema>;

export interface FormErrors {
  [key: string]: string[] | undefined;
}
