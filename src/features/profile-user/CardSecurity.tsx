import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

export const CardSecurity = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Security</CardTitle>
        <CardDescription>Manage your account's security settings.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Two-Factor Authentication</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Add an extra layer of security to your account.
            </p>
          </div>
          <Switch />
        </div>
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
