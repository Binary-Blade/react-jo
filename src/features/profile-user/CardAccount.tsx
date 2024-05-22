import { useState } from 'react';
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GenericAlertDialog } from '@/components/dialog/AlertDialogGeneric';
import { FC } from 'react';
import { navigate } from 'wouter/use-browser-location';

interface CardAccountProps {
  handleDelete: () => void;
  handleLogout: () => void;
}

export const CardAccount: FC<CardAccountProps> = ({ handleDelete, handleLogout }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const confirmDelete = () => {
    handleDelete();
    closeDialog();
    navigate('/success-delete');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Compte</CardTitle>
        <CardDescription>Gérez les paramètres de votre compte.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
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
