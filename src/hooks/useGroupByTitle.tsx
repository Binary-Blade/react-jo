import { CartItemLocal } from '@/config/interfaces/cart/cart-item.interface';
import { useMemo } from 'react';

export interface GroupedItems {
  [title: string]: CartItemLocal[];
}

/**
 * Custom hook `useGroupByTitle` is responsible for grouping local cart items by their title.
 *
 * @param {CartItemLocal[]} items - The array of local cart items to group.
 * @returns {GroupedItems} An object where keys are item titles and values are arrays of cart items.
 *
 * @example
 * const groupedItems = useGroupByTitle(cartItemsLocal);
 *
 * @remarks
 * The hook uses `useMemo` to optimize the grouping process, ensuring it only recalculates
 * when the items array changes.
 */
export const useGroupByTitle = (items: CartItemLocal[]): GroupedItems => {
  return useMemo(() => {
    // Group the items by title
    const grouped = items.reduce((acc: GroupedItems, item) => {
      (acc[item.title] = acc[item.title] || []).push(item);
      return acc;
    }, {});
    return grouped;
  }, [items]);
};
