import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LoginFormData, loginSchema } from '@/utils/zod-schemas/loginSchema';
import { Link, useLocation } from 'wouter';
import { useAuthStore } from '@/stores/useAuthStore';

export const LoginForm = () => {
    const [, navigate] = useLocation();
    const login = useAuthStore(state => state.login);

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    // TODO: Improve error handling and feedback
    const handleLogin = async (formData: LoginFormData) => {
        try {
            const result = await login(formData);
            if (result.success) {
                console.log('Login successful');
                navigate('/');
            } else {
                throw new Error(result.message);
            }
        } catch (error: any) {
            const errorMessage = error.message || "Login failed due to an unexpected error";
            console.error('Login failed:', errorMessage);
            alert(errorMessage);
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
                                <Input
                                    {...field}
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                />
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
                                <Input
                                    {...field}
                                    id="password"
                                    type="password"
                                />
                                {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                            </div>
                        )}
                    />
                    <Button type="submit">Login</Button>
                    <Link className="inline-block w-full text-center text-sm underline" href="#">
                        Forgot your password?
                    </Link>
                </form>
            </div>
        </>
    );
};
