import { useToast } from '@/components/ui/use-toast';
import { useState, useCallback } from 'react';

// V for Item type, U for FormData type, K for Key type (id)
/**
 * Custom hook `useSidebarForm` is responsible for managing the state and logic
 * for a sidebar form. It handles opening, closing, editing, and saving form data.
 *
 * @param {Function} updateFunction - The function to call for updating an item.
 * @param {Function} getIdFromItem - Function to extract the ID from the item.
 * @returns An object containing state and methods for handling the sidebar form.
 *
 * @example
 * const { isSidebarOpen, handleEdit, handleCloseSidebar, handleSave } = useSidebarForm(updateFunction, getIdFromItem);
 *
 * @remarks
 * The hook uses generics for flexibility, `useState` for state management, and `useCallback` for memoizing functions.
 */
export const useSidebarForm = <V, U, K extends string | number>(
  updateFunction: (id: K, formData: U) => Promise<void>,
  getIdFromItem: (item: V) => K
) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<V | null>(null);
  const { toast } = useToast();

  /**
   * Handles the edit action by setting the selected item and opening the sidebar.
   *
   * @param {V} item - The item to be edited.
   */
  const handleEdit = useCallback((item: V) => {
    setSelectedItem(item);
    setIsSidebarOpen(true);
  }, []);

  /**
   * Handles closing the sidebar and resetting the selected item.
   */
  const handleCloseSidebar = useCallback(() => {
    setIsSidebarOpen(false);
    setSelectedItem(null);
  }, []);

  /**
   * Handles saving the form data by calling the update function and closing the sidebar.
   *
   * @param {U} formData - The form data to be saved.
   */
  const handleSave = async (formData: U) => {
    if (!selectedItem) return;
    const itemId = getIdFromItem(selectedItem);
    if (itemId === undefined) {
      console.error('Failed to save changes: itemId is undefined');
      return;
    }
    try {
      await updateFunction(itemId, formData);
      handleCloseSidebar();
      toast({
        variant: 'success',
        title: 'Changes saved successfully'
      });
    } catch (error: any) {
      console.error('Failed to save changes:', error);
      toast({
        variant: 'destructive',
        title: 'Failed to save changes',
        description: error.message
      });
    }
  };

  return {
    isSidebarOpen,
    setIsSidebarOpen,
    selectedItem,
    setSelectedItem,
    handleEdit,
    handleCloseSidebar,
    handleSave
  };
};
