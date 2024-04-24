import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormProps } from '@/types/FormType';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { loginSchema } from '@/utils/zod-schemas/loginSchema';

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
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
        </form>
    );
};
