import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LoginFormData, loginSchema } from '@/config/zod-schemas/loginSchema';
import { useLocation } from 'wouter';
import { useAuthStore } from '@/stores/useAuthStore';
import { useState } from 'react';
import { AlertDestructive } from '@/components/alert/AlertDestructive';

export const LoginForm = () => {
  const [, navigate] = useLocation();
  const login = useAuthStore(state => state.login);
  const [error, setError] = useState<string | null | undefined>(null);

  const {
    control,
    handleSubmit,
    formState: { isValid, errors }
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const handleLogin = async (formData: LoginFormData) => {
    const response = await login(formData);
    if (response.success) {
      console.log('Login successful');
      navigate('/');
    } else {
      console.error('Signup failed:', response.error);
      setError(response.error);
    }
  };

  return (
    <>
      <div className="grid gap-4">
        <form onSubmit={handleSubmit(handleLogin)} className="grid gap-4">
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
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <div>
                <Label htmlFor="password">Password</Label>
                <Input {...field} id="password" type="password" />
                {errors.password && <span className="text-red-500">{errors.password.message}</span>}
              </div>
            )}
          />
          <Button type="submit" disabled={!isValid}>
            Login
          </Button>
        </form>
      </div>
      {error && <AlertDestructive errorMessage={error} />}
    </>
  );
};
