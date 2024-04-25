import { LoginForm } from "@/features/auth/LoginForm";
import { MedalIcon } from "@/assets/icons/IconComponents";
import { SignUpForm } from "@/features/auth/SignUpForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const AuthPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-950">
      <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center gap-6 px-4 sm:px-0">
        <div className="flex flex-col items-center gap-2">
          <MedalIcon className="h-12 w-12 text-rose-500" />
          <h1 className="text-3xl font-bold">Paris 2024</h1>
        </div>
        <Tabs className="w-full" defaultValue="login">
          <TabsList className="grid w-full grid-cols-2 rounded-md bg-gray-100 p-1 dark:bg-gray-800">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent className="mt-6 space-y-4" value="login">
            <LoginForm />
          </TabsContent>
          <TabsContent className="mt-6 space-y-4" value="signup">
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
