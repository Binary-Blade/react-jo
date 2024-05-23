import { useMemo } from 'react';
import useLocalCartStore from '@/stores/useLocalCartStore';
import useCartStore from '@/stores/useCartStore';

/**
 * Custom hook `useTakeQuantityFromLocal` is responsible for fetching the quantity of items
 * from the local cart store. It uses `useMemo` to optimize the calculation.
 *
 * @returns {Array} The array of local cart items.
 */
const useTakeQuantityFromLocal = (): Array<any> => {
  const { cartItemsLocal } = useLocalCartStore();

  return useMemo(() => {
    return cartItemsLocal;
  }, [cartItemsLocal]);
};

/**
 * Custom hook `useTakeQuantityFromServer` is responsible for fetching the quantity of items
 * from the server cart store. It uses `useMemo` to optimize the calculation.
 *
 * @returns {Array} The array of server cart items.
 */
const useTakeQuantityFromServer = (): Array<any> => {
  const { cartItems } = useCartStore();

  return useMemo(() => {
    return cartItems;
  }, [cartItems]);
};

/**
 * Custom hook `useDisplayTotalItems` calculates the total quantity of items in the local cart.
 * It uses `useTakeQuantityFromLocal` to get the local cart items and `useMemo` to optimize the calculation.
 *
 * @returns {number} The total quantity of items in the local cart.
 *
 * @example
 * const totalItems = useDisplayTotalItems();
 */
export const useDisplayTotalItems = (): number => {
  const localItems = useTakeQuantityFromLocal();
  return useMemo(() => localItems.reduce((acc, item) => acc + item.quantity, 0), [localItems]);
};

/**
 * Custom hook `useDisplayTotalCommands` calculates the total quantity of items in the server cart.
 * It uses `useTakeQuantityFromServer` to get the server cart items and `useMemo` to optimize the calculation.
 *
 * @returns {number} The total quantity of items in the server cart.
 *
 * @example
 * const totalCommands = useDisplayTotalCommands();
 */
export const useDisplayTotalCommands = (): number => {
  const ItemsServer = useTakeQuantityFromServer();
  return useMemo(() => ItemsServer.reduce((acc, item) => acc + item.quantity, 0), [ItemsServer]);
};
