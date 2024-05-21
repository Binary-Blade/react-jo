import { useToast } from '@/components/ui/use-toast';
import { Response } from '@/config/types/Auth/AuthResponse';
import { useCallback, useState } from 'react';

// Define a generic type for items to be deleted
interface DeletableItem {
  [key: string]: any; // This will allow any key to access properties of the item
}

type ResponseDelete = Response | void;

// Define the type for the delete function
type DeleteFunctionType = (id: number) => Promise<ResponseDelete>;

export const useDelConfirmation = (deleteFunction: DeleteFunctionType, elementId: string) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [itemToDelete, setItemToDelete] = useState<DeletableItem | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const requestDelete = useCallback((item: DeletableItem) => {
    setItemToDelete(item);
    setIsDialogOpen(true);
    setError(null);
  }, []);

  const confirmDeletion = useCallback(async () => {
    if (!itemToDelete) return;
    try {
      await deleteFunction(itemToDelete[elementId] as number); // Assume elementId is always a number
      setIsDialogOpen(false);
      setItemToDelete(null);
      toast({
        title: "L'élément a été supprimé avec succès",
        variant: 'success'
      });
    } catch (error: any) {
      setError(error.message);
      toast({
        title: 'Erreur lors de la suppression',
        description: error.message,
        variant: 'destructive'
      });
    }
  }, [deleteFunction, itemToDelete, elementId]);

  const cancelDeletion = useCallback(() => {
    setIsDialogOpen(false);
    setItemToDelete(null);
    setError(null);
  }, []);

  return {
    isDialogOpen,
    error,
    requestDelete,
    confirmDeletion,
    cancelDeletion,
    itemToDelete
  };
};
