import { useState } from 'react';
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GenericAlertDialog } from '@/components/dialog/AlertDialogGeneric';
import { navigate } from 'wouter/use-browser-location';
import { useAuthStore } from '@/stores/useAuthStore';
import { useToast } from '@/components/ui/use-toast';

interface CardAccountProps {
  userId: number | null;
}

/**
 * `CardAccount` is a component that allows users to manage their account settings, including deleting their account and logging out.
 *
 * @component
 * @param {CardAccountProps} props - The properties object.
 * @param {number | null} props.userId - The ID of the user.
 * @returns {JSX.Element} The rendered card account component.
 *
 * @example
 * return <CardAccount userId={1} />;
 *
 * @remarks
 * This component uses `useState` to manage the state of the confirmation dialog,
 * `useAuthStore` to handle authentication actions, and `useToast` to display toast notifications.
 * It includes actions for logging out and deleting the user's account, with a confirmation dialog for the delete action.
 */
export const CardAccount = ({ userId }: CardAccountProps): JSX.Element => {
  const { logout, deleteUser } = useAuthStore();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  /**
   * Handle logging out the user.
   */
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error: any) {
      const errorMessage = error.message || 'Logout failed due to an unexpected error';
      console.error('Logout failed:', errorMessage);
      alert(errorMessage);
    }
  };

  /**
   * Handle deleting the user account.
   */
  const handleDelete = async () => {
    if (!userId) return;
    const response = await deleteUser(userId);
    if (response.success) {
      toast({
        variant: 'success',
        title: 'User deleted',
        description: `${response.message}`
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: `${response.error}`
      });
    }
  };

  /**
   * Confirm the account deletion, trigger the delete handler, close the dialog, and navigate to success page.
   */
  const confirmDelete = () => {
    handleDelete();
    closeDialog();
    navigate('/success-delete');
  };

  /**
   * Open the confirmation dialog.
   */
  const openDialog = () => setIsDialogOpen(true);

  /**
   * Close the confirmation dialog.
   */
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Compte</CardTitle>
        <CardDescription>Gérez les paramètres de votre compte.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Section for deleting the account */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Supprimer le Compte</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Supprimez définitivement votre compte et toutes ses données.
            </p>
          </div>
          <Button variant="destructive" onClick={openDialog}>
            Supprimer
          </Button>
        </div>
        {/* Section for logging out */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Déconnexion</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Déconnectez-vous de votre compte.
            </p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            Déconnexion
          </Button>
        </div>
      </CardContent>
      {/* Confirmation dialog for account deletion */}
      <GenericAlertDialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        onConfirm={confirmDelete}
        title="Êtes-vous sûr ?"
        description="Cette action est irréversible. Cela supprimera définitivement votre compte."
        cancelText="Annuler"
        confirmText="Supprimer"
      />
    </Card>
  );
};
