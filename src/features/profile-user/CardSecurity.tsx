import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

/**
 * `CardSecurity` component allows the user to manage their account's security settings.
 * It provides options for enabling two-factor authentication and managing logout sessions.
 *
 * @component
 * @returns {JSX.Element} The rendered CardSecurity component.
 *
 * @example
 * return <CardSecurity />;
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components:
 * - `Card`, `CardTitle`, `CardDescription`, `CardHeader`, `CardContent` for the card layout.
 * - `Button` for action buttons.
 * - `Switch` for toggling two-factor authentication.
 */
export const CardSecurity = (): JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Security</CardTitle>
        <CardDescription>Manage your account's security settings.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Two-Factor Authentication Section */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Two-Factor Authentication</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Add an extra layer of security to your account.
            </p>
          </div>
          <Switch />
        </div>
        {/* Logout Sessions Section */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Logout Sessions</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Manage your active login sessions.
            </p>
          </div>
          <Button variant="outline">Manage</Button>
        </div>
      </CardContent>
    </Card>
  );
};
