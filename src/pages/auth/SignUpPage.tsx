import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link, useLocation } from 'wouter';
import { SignupFormData } from '@/validation/schemas/signupSchema';
import { SignUpForm } from '@/components/forms/SignUpForm';
import { useAuthStore } from "@/stores/useAuthStore";

export const SignUpPage = () => {
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

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl flex place-items-start">Sign Up</CardTitle>
        <CardDescription className="flex place-items-start">
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpForm onSubmit={handleSignUp} />
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
