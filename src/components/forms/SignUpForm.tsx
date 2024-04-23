import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { SignupFormData, signupSchema } from '@/validation/schemas/signupSchema';
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"
import { Link, useLocation } from 'wouter';
import { useAuthStore } from '@/stores/useAuthStore';

export const SignUpForm = () => {
    const signup = useAuthStore((state) => state.signup);
    const [, navigate] = useLocation();

    const handleSignUp = async (formData: SignupFormData): Promise<void> => {
        try {
            await signup(formData);
            console.log('Signup successful');
            navigate('/login');
        } catch (error: any) {
            console.error('Signup failed:', error.response?.data || error.message);
            alert('Signup failed: ' + (error.response?.data?.message || error.message));
        }
    };

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
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Sign Up</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Sign Up</DialogTitle>
                        <DialogDescription>Create an account to get started.</DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit(handleSignUp)} className="space-y-6">
                        <div className="grid gap-4 py-4">
                            <Controller
                                name="firstName"
                                control={control}
                                render={({ field, fieldState }) => (
                                    <div className="flex flex-col space-y-1">
                                        <Label htmlFor="firstName">
                                            First Name
                                        </Label>
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
                        </div>
                        <DialogFooter>
                            <Button type="submit">Sign Up</Button>
                            <div className="mt-4 text-center text-sm">
                                Already have an account?{" "}
                                <Link href="/login" className="underline">
                                    Sign in
                                </Link>
                            </div>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog >

        </>
    );
};
