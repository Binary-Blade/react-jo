import { useForm, Controller } from 'react-hook-form';
import { ToastAction } from '@/components/ui/toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LoginFormData, loginSchema } from '@/config/zod-schemas/loginSchema';
import { useLocation } from 'wouter';
import { useAuthStore } from '@/stores/useAuthStore';
import { useToast } from '../ui/use-toast';
import { useState } from 'react';
import { EyeOffIcon } from '@/components/ui/IconComponents';
import { EyeIcon } from 'lucide-react';

/**
 * `LoginForm` component provides a login form for user authentication.
 * It includes fields for email and password with validation and error handling.
 *
 * @component
 * @returns {JSX.Element} The rendered LoginForm component.
 *
 * @example
 * return <LoginForm />;
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components and hooks:
 * - `useForm`, `Controller` from `react-hook-form` for form handling and validation.
 * - `zodResolver` for schema validation with Zod.
 * - `Label`, `Input`, `Button` for form elements.
 * - `useLocation` from `wouter` for navigation.
 * - `useAuthStore` for authentication state management.
 * - `useToast` for displaying toast notifications.
 * - `EyeOffIcon`, `EyeIcon` for showing/hiding password visibility.
 */
export const LoginForm = (): JSX.Element => {
  const [, navigate] = useLocation();
  const { login } = useAuthStore();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    }
  });

  /**
   * Handle the login form submission.
   *
   * @param {LoginFormData} formData - The form data containing email and password.
   */
  const handleLogin = async (formData: LoginFormData) => {
    const response = await login(formData);
    if (response.success) {
      navigate('/success-connexion');
    } else {
      console.error('Signup failed:', response.error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: `${response.error}`,
        action: <ToastAction altText="Try again">Ressayez</ToastAction>
      });
    }
  };

  return (
    <>
      <div className="grid gap-4">
        <form onSubmit={handleSubmit(handleLogin)} className="grid gap-4">
          {/* Email Field */}
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <div>
                <Label htmlFor="email">Email</Label>
                <Input {...field} id="email" type="email" placeholder="m@example.com" />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
              </div>
            )}
          />
          {/* Password Field */}
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <div>
                <Label htmlFor="password">Mot de passe</Label>
                <div className="relative">
                  <Input {...field} id="password" type={showPassword ? 'text' : 'password'} />
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
                {errors.password && <span className="text-red-500">{errors.password.message}</span>}
              </div>
            )}
          />
          {/* Submit Button */}
          <Button type="submit">Se connecter</Button>
        </form>
      </div>
    </>
  );
};
