import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { signupSchema } from '@/validation/schemas/signupSchema';
import { SignUpFormProps } from '@/types/FormType';


export const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
    const { control, handleSubmit } = useForm({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
                <Controller
                    name="firstName"
                    control={control}
                    render={({ field, fieldState }) => (
                        <div className="flex flex-col space-y-1">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input {...field} id="firstName" type="text" placeholder="Enter your first name" />
                            {fieldState.error && <span className="text-red-500 text-sm">{fieldState.error.message}</span>}
                        </div>
                    )}
                />

                <Controller
                    name="lastName"
                    control={control}
                    render={({ field, fieldState }) => (
                        <div className="flex flex-col space-y-1">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input {...field} id="lastName" type="text" placeholder="Enter your last name" />
                            {fieldState.error && <span className="text-red-500 text-sm">{fieldState.error.message}</span>}
                        </div>
                    )}
                />
            </div>

            <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                    <div className="flex flex-col space-y-1">
                        <Label htmlFor="email">Email</Label>
                        <Input {...field} id="email" type="email" placeholder="Enter your email" />
                        {fieldState.error &&
                            <span className="text-red-500 text-sm">{fieldState.error.message}</span>}
                    </div>
                )}
            />

            <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                    <div className="flex flex-col space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <Input {...field} id="password" type="password" placeholder="Enter your password" />
                        {fieldState.error &&
                            <span className="text-red-500 text-sm">{fieldState.error.message}</span>}
                    </div>
                )}
            />

            <Button type="submit" className="w-full">Create an account</Button>
        </form>
    );
};
