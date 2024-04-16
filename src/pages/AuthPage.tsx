import { LoginForm } from "@/components/auth/LoginForm";
import { SignUpForm } from "@/components/auth/SignUpForm";

export const AuthPage = () => {

  const logged = false;

  return (
    <>
      {logged ?
        <SignUpForm /> : <LoginForm />
      }
    </>
  )
}

