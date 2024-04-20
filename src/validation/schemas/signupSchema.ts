import { z } from 'zod';

const nameValidationPattern = /^[A-Za-z\s'-]+$/; // Regex for validating names (letters, spaces, hyphens, apostrophes)

export const signupSchema = z.object({
    firstName: z.string()
        .min(2, "First name must be at least 2 characters")
        .max(50, "First name must be less than 50 characters")
        .regex(nameValidationPattern, "First name can only contain alphabets, hyphens, and apostrophes"),
    lastName: z.string()
        .min(2, "Last name must be at least 2 characters")
        .max(50, "Last name must be less than 50 characters")
        .regex(nameValidationPattern, "Last name can only contain alphabets, hyphens, and apostrophes"),
    email: z.string()
        .email("Invalid email address"),
    password: z.string()
        .min(6, "Password must be at least 6 characters long")
        .max(100, "Password must be less than 100 characters"),
});

export type SignupFormData = z.infer<typeof signupSchema>;
