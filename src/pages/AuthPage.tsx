import { ReturnButton } from '@/components/button/ReturnButton';
import { LoginForm } from '@/components/form/LoginForm';
import { SignUpForm } from '@/components/form/SignUpForm';
import { MedalIcon } from '@/components/ui/IconComponents';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

export default function AuthPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
      <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center bg-white p-4 gap-6 px-4 sm:px-0">
        <div className="flex flex-col items-center gap-2">
          <MedalIcon className="h-12 w-12 text-rose-500" />
          <h1 className="text-3xl font-bold">Paris 2024</h1>
        </div>
        <Tabs className="w-full" defaultValue="login">
          <div className="flex items-center justify-between">
            <ReturnButton href="/" className="h-6 w-6" />
            <TabsList className="flex items-center gap-4">
              <TabsTrigger
                className="w-32 bg-white text-black data-[state=active]:bg-rose-600 data-[state=active]:text-white"
                value="login"
              >
                Connexion
              </TabsTrigger>
              <TabsTrigger
                className="w-32 bg-white text-black data-[state=active]:bg-rose-600 data-[state=active]:text-white"
                value="signup"
              >
                Inscription
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent className="mt-6 space-y-4" value="login">
            <Card>
              <CardContent>
                <LoginForm />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent className="mt-6 space-y-4" value="signup">
            <Card>
              <CardContent>
                <SignUpForm />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
