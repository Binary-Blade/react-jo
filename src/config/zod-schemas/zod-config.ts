import { z } from 'zod';

const nameValidationPattern = /^[A-Za-z-]+$/;
const specialCharacters = '!@#$%^&*?';
const passwordValidationPattern = new RegExp(
  `^(?=.*[A-Z])(?=.*[${specialCharacters.replace(/./g, '\\$&')}])(?=.*[0-9]).{8,50}$`
);

/**
 * `nameSchema` defines the validation schema for a name.
 * It includes rules for minimum and maximum length, and a pattern that allows only letters and hyphens.
 *
 * @constant
 *
 * @example
 * const validName = 'John-Doe';
 * const result = nameSchema.safeParse(validName);
 * if (result.success) {
 *   // Name is valid
 * } else {
 *   // Name is invalid
 *   console.error(result.error);
 * }
 *
 * @remarks
 * This schema is used to validate names, ensuring they meet the specified requirements
 * such as minimum and maximum length, and containing only allowed characters.
 */
export const nameSchema = z
  .string()
  .min(2, 'Le nom doit comporter au moins 2 caractères')
  .max(50, 'Le nom doit comporter moins de 50 caractères')
  .regex(nameValidationPattern, "Le nom ne peut contenir que des lettres et des traits d'union");

/**
 * `passwordSchema` defines the validation schema for a password.
 * It includes rules for minimum length, a pattern that requires at least one uppercase letter,
 * one special character, and one number, and a maximum length.
 *
 * @constant
 *
 * @example
 * const validPassword = 'Password1!';
 * const result = passwordSchema.safeParse(validPassword);
 * if (result.success) {
 *   // Password is valid
 * } else {
 *   // Password is invalid
 *   console.error(result.error);
 * }
 *
 * @remarks
 * This schema is used to validate passwords, ensuring they meet the specified requirements
 * such as minimum length, containing required character types, and maximum length.
 */
export const passwordSchema = z
  .string()
  .min(8, 'Le mot de passe doit comporter au moins 8 caractères')
  .regex(
    passwordValidationPattern,
    'Le mot de passe doit contenir au moins une lettre majuscule, un caractère spécial (!, @, #, $, %, &, ?, *) et un chiffre'
  )
  .max(50);
