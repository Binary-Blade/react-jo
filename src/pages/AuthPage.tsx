import { ReturnButton } from '@/components/button/ReturnButton';
import { LoginForm } from '@/components/form/LoginForm';
import { SignUpForm } from '@/components/form/SignUpForm';
import { MedalIcon } from '@/components/ui/IconComponents';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

/**
 * `AuthPage` component is the main authentication page that provides a user interface
 * for logging in and signing up. It utilizes a tab-based navigation system to switch
 * between the login and signup forms.
 *
 * @component
 * @returns {JSX.Element} The rendered authentication page component.
 *
 * @example
 * return (
 *   <AuthPage />
 * )
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components:
 * - `ReturnButton` for navigating back to the home page.
 * - `LoginForm` and `SignUpForm` for user authentication.
 * - `MedalIcon` for visual branding.
 * - `Tabs`, `TabsContent`, `TabsList`, `TabsTrigger` for tab-based navigation.
 * - `Card`, `CardContent` for structuring the form content.
 */
export default function AuthPage(): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center bg-white p-4 gap-6 px-4 sm:px-0">
        {/* Branding Section */}
        <div className="flex flex-col items-center gap-2">
          {/* MedalIcon: Display an icon for visual branding */}
          <MedalIcon className="h-12 w-12 text-rose-500" />
          <h1 className="text-3xl font-bold">Paris 2024</h1>
        </div>

        {/* Tabs Component: Handles the tab-based navigation */}
        <Tabs className="w-full" defaultValue="login">
          <div className="flex items-center justify-between">
            {/* ReturnButton: Navigate back to the home page */}
            <ReturnButton href="/" className="h-6 w-6" />

            {/* TabsList: Container for the tab triggers */}
            <TabsList className="flex items-center gap-4">
              {/* TabsTrigger: Tab for login form */}
              <TabsTrigger
                className="w-32 bg-white text-black data-[state=active]:bg-rose-600 data-[state=active]:text-white"
                value="login"
              >
                S'identifier
              </TabsTrigger>
              {/* TabsTrigger: Tab for signup form */}
              <TabsTrigger
                className="w-32 bg-white text-black data-[state=active]:bg-rose-600 data-[state=active]:text-white"
                value="signup"
              >
                Inscription
              </TabsTrigger>
            </TabsList>
          </div>

          {/* TabsContent: Content for the login tab */}
          <TabsContent className="mt-6 space-y-4" value="login">
            <Card>
              <CardContent>
                {/* LoginForm: Form component for user login */}
                <LoginForm />
              </CardContent>
            </Card>
          </TabsContent>

          {/* TabsContent: Content for the signup tab */}
          <TabsContent className="mt-6 space-y-4" value="signup">
            <Card>
              <CardContent>
                {/* SignUpForm: Form component for user signup */}
                <SignUpForm />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
