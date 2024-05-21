import { z } from 'zod';

const nameValidationPattern = /^[A-Za-z-]+$/;

export const nameSchema = z
  .string()
  .min(2, 'Name must be at least 2 characters long') // Correction of the message
  .max(50, 'Name must be less than 50 characters')
  .regex(nameValidationPattern, 'Name can only contain alphabets and hyphens');

export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters long')
  .regex(
    /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])/,
    'Password must contain at least one uppercase letter, one special character, and one number'
  )
  .max(50);
