import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useLocation } from 'wouter';
import { useAuthStore } from '@/stores/useAuthStore';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { SignupFormData, signupSchema } from '@/config/zod-schemas/signupSchema';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import { EyeOffIcon } from '@/components/ui/IconComponents';
import { EyeIcon } from 'lucide-react';
import { useToast } from '../ui/use-toast';
import DOMPurify from 'dompurify';

/**
 * `SignUpForm` component provides a sign-up form for user registration.
 * It includes fields for first name, last name, email, password, and a terms and conditions checkbox.
 *
 * @component
 * @returns {JSX.Element} The rendered SignUpForm component.
 *
 * @example
 * return <SignUpForm />;
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components and hooks:
 * - `useForm`, `Controller` from `react-hook-form` for form handling and validation.
 * - `zodResolver` for schema validation with Zod.
 * - `Label`, `Input`, `Button` for form elements.
 * - `Checkbox` for the terms and conditions checkbox.
 * - `useLocation` from `wouter` for navigation.
 * - `useAuthStore` for authentication state management.
 * - `useToast` for displaying toast notifications.
 * - `EyeOffIcon`, `EyeIcon` for showing/hiding password visibility.
 */
export const SignUpForm = (): JSX.Element => {
  const { signup } = useAuthStore();
  const [, navigate] = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  const {
    control,
    handleSubmit,
    formState: {}
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  });

  /**
   * Handle the sign-up form submission.
   *
   * @param {SignupFormData} formData - The form data containing first name, last name, email, and password.
   */
  const handleSignUp = async (formData: SignupFormData): Promise<void> => {
    const sanitizedData = {
      firstName: DOMPurify.sanitize(formData.firstName),
      lastName: DOMPurify.sanitize(formData.lastName),
      email: DOMPurify.sanitize(formData.email),
      password: DOMPurify.sanitize(formData.password)
    };

    const response = await signup(sanitizedData);
    if (response.success) {
      navigate('/success-creation');
    } else {
      toast({
        variant: 'destructive',
        title: 'Erreur lors de la création du compte',
        description: response.error
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleSignUp)} className="space-y-2">
        <div className="grid gap-4 py-4">
          {/* First Name Field */}
          <Controller
            name="firstName"
            control={control}
            render={({ field, fieldState }) => (
              <div className="flex flex-col space-y-1">
                <Label htmlFor="firstName">Prénom</Label>
                <Input {...field} id="firstName" type="text" placeholder="Entrez votre prénom" />
                {fieldState.error && (
                  <span className="text-red-500 text-sm">{fieldState.error.message}</span>
                )}
              </div>
            )}
          />
          {/* Last Name Field */}
          <Controller
            name="lastName"
            control={control}
            render={({ field, fieldState }) => (
              <div className="flex flex-col space-y-1">
                <Label htmlFor="lastName">Nom de famille</Label>
                <Input {...field} id="lastName" type="text" placeholder="Entrez votre nom" />
                {fieldState.error && (
                  <span className="text-red-500 text-sm">{fieldState.error.message}</span>
                )}
              </div>
            )}
          />
          {/* Email Field */}
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <div className="flex flex-col space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input {...field} id="email" type="email" placeholder="Entrez votre email" />
                {fieldState.error && (
                  <span className="text-red-500 text-sm">{fieldState.error.message}</span>
                )}
              </div>
            )}
          />
          {/* Password Field */}
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <div className="flex flex-col space-y-1">
                <Label htmlFor="password">Mot de passe</Label>
                <div className="relative">
                  <Input
                    {...field}
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Entrez votre mot de passe"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {fieldState.error && (
                  <span className="text-red-500 text-sm">{fieldState.error.message}</span>
                )}
              </div>
            )}
          />
        </div>
        {/* Terms and Conditions Checkbox */}
        <Checkbox id="terms" />
        <Label className="text-sm p-2 " htmlFor="terms">
          Je suis d'accord avec les{' '}
          <Link
            className="underline underline-offset-2 hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            termes et conditions
          </Link>
        </Label>
        {/* Submit Button */}
        <Button className="w-full" type="submit">
          Créer un compte
        </Button>
      </form>
    </>
  );
};
