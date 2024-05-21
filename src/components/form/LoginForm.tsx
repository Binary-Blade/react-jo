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

export const LoginForm = () => {
  const [, navigate] = useLocation();
  const { login } = useAuthStore();
  const { toast } = useToast();

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
                <Label htmlFor="password">Mot de passe</Label>
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
    </>
  );
};
