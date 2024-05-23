import { useToast } from '@/components/ui/use-toast';
import { GenericResponse } from '@/config/interfaces/common.interface';
import { useCallback, useState } from 'react';

// Define a generic type for items to be deleted
interface DeletableItem {
  [key: string]: any; // This allows any key to access properties of the item
}

type ResponseDelete = GenericResponse | void;

// Define the type for the delete function
type DeleteFunctionType = (id: number) => Promise<ResponseDelete>;

/**
 * Custom hook `useDelConfirmation` is responsible for handling delete confirmations.
 * It manages the state for the deletion dialog, the item to be deleted, and any errors
 * that occur during the deletion process. It uses `useToast` for displaying notifications.
 *
 * @param {DeleteFunctionType} deleteFunction - The function to call for deleting an item.
 * @param {string} elementId - The key to access the ID of the item to be deleted.
 * @returns An object containing methods and state for handling deletions.
 *
 * @example
 * const {
 *   isDialogOpen,
 *   error,
 *   requestDelete,
 *   confirmDeletion,
 *   cancelDeletion,
 *   itemToDelete
 * } = useDelConfirmation(deleteFunction, 'id');
 *
 * @remarks
 * The hook uses `useCallback` to memoize functions and `useState` to manage state.
 * It assumes that the `elementId` corresponds to a number type property of the item.
 */
export const useDelConfirmation = (deleteFunction: DeleteFunctionType, elementId: string) => {
  // State for managing the dialog open status, item to be deleted, and any errors
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [itemToDelete, setItemToDelete] = useState<DeletableItem | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  /**
   * Requests the deletion of an item by opening the confirmation dialog.
   *
   * @param {DeletableItem} item - The item to be deleted.
   */
  const requestDelete = useCallback((item: DeletableItem) => {
    setItemToDelete(item);
    setIsDialogOpen(true);
    setError(null);
  }, []);

  /**
   * Confirms the deletion of the item and calls the delete function.
   */
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
  }, [deleteFunction, itemToDelete, elementId, toast]);

  /**
   * Cancels the deletion process and closes the confirmation dialog.
   */
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
