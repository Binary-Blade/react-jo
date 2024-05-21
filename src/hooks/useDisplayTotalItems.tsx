import { useMemo } from 'react';
import useLocalCartStore from '@/stores/useLocalCartStore';
import useCartStore from '@/stores/useCartStore';

const useTakeQuantityFromLocal = () => {
  const { cartItemsLocal } = useLocalCartStore();

  return useMemo(() => {
    return cartItemsLocal;
  }, [cartItemsLocal]);
};

const useTakeQuantityFromServer = () => {
  const { cartItems } = useCartStore();

  return useMemo(() => {
    return cartItems;
  }, [cartItems]);
};

export const useDisplayTotalItems = () => {
  const localItems = useTakeQuantityFromLocal();
  return useMemo(() => localItems.reduce((acc, item) => acc + item.quantity, 0), [localItems]);
};

export const useDisplayTotalCommands = () => {
  const ItemsServer = useTakeQuantityFromServer();
  return useMemo(() => ItemsServer.reduce((acc, item) => acc + item.quantity, 0), [ItemsServer]);
};
