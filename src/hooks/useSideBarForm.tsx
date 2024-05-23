import { useToast } from '@/components/ui/use-toast';
import { useState, useCallback } from 'react';

// V for Item type, U for FormData type, K for Key type (id)
export const useSidebarForm = <V, U, K extends string | number>(
  updateFunction: (id: K, formData: U) => Promise<void>,
  getIdFromItem: (item: V) => K
) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<V | null>(null);
  const { toast } = useToast();

  const handleEdit = useCallback((item: V) => {
    setSelectedItem(item);
    setIsSidebarOpen(true);
  }, []);

  const handleCloseSidebar = useCallback(() => {
    setIsSidebarOpen(false);
    setSelectedItem(null);
  }, []);

  const handleSave = async (formData: U) => {
    if (!selectedItem) return;
    const itemId = getIdFromItem(selectedItem);
    if (itemId === undefined) {
      console.error('Failed to save changes: eventId is undefined');
      return;
    }
    try {
      const itemId = getIdFromItem(selectedItem);
      await updateFunction(itemId, formData);
      handleCloseSidebar();
    } catch (error: any) {
      console.error('Failed to save changes:', error);
      toast({
        variant: 'destructive',
        title: 'Failed to save changes'
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
