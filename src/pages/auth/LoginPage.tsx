import image from "@/assets/images/2024.png"
import { Link, useLocation } from "wouter"
import { LoginForm } from "@/components/forms/LoginForm"
import { LoginFormData } from "@/validation/schemas/loginSchema"
import { useAuthStore } from "@/stores/useAuthStore"

export const LoginPage = () => {
  const login = useAuthStore(state => state.login);
  const [, navigate] = useLocation();

  const handleLogin = async (formData: LoginFormData) => {
    try {
      const result = await login(formData);
      if (result.success) {
        console.log('Login successful');
        navigate('/'); // Redirect to home or dashboard as necessary
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
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold flex place-items-start ">Login</h1>
            <p className="text-balance text-muted-foreground flex place-items-start">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <LoginForm onSubmit={handleLogin} />
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          src={image}
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}