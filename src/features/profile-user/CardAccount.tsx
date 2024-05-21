import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FC } from 'react';

interface CardAccountProps {
  handleDelete: () => void;
  handleLogout: () => void;
}

export const CardAccount: FC<CardAccountProps> = ({ handleDelete, handleLogout }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account</CardTitle>
        <CardDescription>Manage your account settings.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Delete Account</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Permanently delete your account and all its data.
            </p>
          </div>
          <Button variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Logout</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Sign out of your account.</p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
