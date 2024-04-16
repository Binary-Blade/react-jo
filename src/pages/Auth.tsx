import { LoginForm } from "@/components/AuthPage/LoginForm"
import { SignUpForm } from "@/components/AuthPage/SignUpForm"

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

