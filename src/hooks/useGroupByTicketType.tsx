import { useMemo } from 'react';
import { PriceFormula } from '@/config/enums/PriceFormula.enum';
import { CartItem } from '@/config/interfaces/cart/cart-item.interface';

interface GroupedItems {
  [key: string]: CartItem[];
}

// Define the order for price formulas
const priceFormulaOrder: { [key in PriceFormula]: number } = {
  [PriceFormula.SOLO]: 1,
  [PriceFormula.DUO]: 2,
  [PriceFormula.FAMILY]: 3
};

/**
 * Custom hook `useGroupByTicketType` is responsible for grouping cart items
 * by their price formula and sorting them based on a predefined order.
 *
 * @param {CartItem[]} items - The array of cart items to group and sort.
 * @returns {GroupedItems} An object where keys are price formulas and values are arrays of cart items.
 *
 * @example
 * const groupedItems = useGroupByTicketType(cartItems);
 *
 * @remarks
 * The hook uses `useMemo` to optimize the grouping and sorting process, ensuring it only recalculates
 * when the items array changes.
 */
export const useGroupByTicketType = (items: CartItem[]): GroupedItems => {
  return useMemo(() => {
    // Group the items by price formula
    const grouped = items.reduce((acc: GroupedItems, item) => {
      (acc[item.priceFormula] = acc[item.priceFormula] || []).push(item);
      return acc;
    }, {});

    // Sort the grouped items by price formula order
    const sortedKeys = Object.keys(grouped).sort(
      (a, b) => priceFormulaOrder[a as PriceFormula] - priceFormulaOrder[b as PriceFormula]
    );

    // Construct a new sorted object
    return sortedKeys.reduce((acc: GroupedItems, key) => {
      acc[key] = grouped[key];
      return acc;
    }, {});
  }, [items]);
};
