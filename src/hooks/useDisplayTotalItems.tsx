import { useMemo } from 'react';
import useLocalCartStore from '@/stores/useLocalCartStore';

const useTakeQuantityFromLocal = () => {
  const { cartItemsLocal } = useLocalCartStore();

  return useMemo(() => {
    return cartItemsLocal;
  }, [cartItemsLocal]);
};

export const useDisplayTotalItems = () => {
  const localItems = useTakeQuantityFromLocal();
  return useMemo(() => localItems.reduce((acc, item) => acc + item.quantity, 0), [localItems]);
};
