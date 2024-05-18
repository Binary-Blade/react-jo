import { CreateCartItemLocalDto } from '@/config/dtos/LocalCartItem.dto';
import { useAuthStore } from '@/stores/useAuthStore';
import useCartStore from '@/stores/useCartStore';
import useLocalCartStore from '@/stores/useLocalCartStore';
import { useMemo } from 'react';

const useTakeQuantityFromLocalOrServer = () => {
  const { cartItemsLocal } = useLocalCartStore();
  const { cartItems } = useCartStore();
  const { isAuthenticated } = useAuthStore();

  return useMemo(() => {
    if (isAuthenticated) {
      // Combine local and online cart items
      const combinedItems: CreateCartItemLocalDto[] = [...cartItemsLocal];

      cartItems.forEach((item: any) => {
        const existingItem = combinedItems.find(
          localItem =>
            localItem.eventId === item.eventId && localItem.priceFormula === item.priceFormula
        );

        if (existingItem) {
          existingItem.quantity += item.quantity;
        } else {
          combinedItems.push(item);
        }
      });

      return combinedItems;
    }

    return cartItemsLocal;
  }, [cartItems, cartItemsLocal, isAuthenticated]);
};

export const useDisplayTotalItems = () => {
  const combinedItems = useTakeQuantityFromLocalOrServer();
  return useMemo(
    () => combinedItems.reduce((acc, item) => acc + item.quantity, 0),
    [combinedItems]
  );
};
