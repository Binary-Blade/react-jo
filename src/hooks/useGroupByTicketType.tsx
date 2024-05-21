import { useMemo } from 'react';
import { PriceFormula } from '@/config/enums/PriceFormula.enum';
import { CartItem } from '@/config/types/Cart/CartTypes';

interface GroupedItems {
  [key: string]: CartItem[];
}
const priceFormulaOrder: { [key in PriceFormula]: number } = {
  [PriceFormula.SOLO]: 1,
  [PriceFormula.DUO]: 2,
  [PriceFormula.FAMILY]: 3
};

/**
 * Group the cart items by price formula and sort them in the correct order.
 *
 * @param items The cart items to group.
 * @returns The grouped items.
 */
export const useGroupByTicketType = (items: CartItem[]): GroupedItems => {
  return useMemo(() => {
    // Group the items by price formula
    const grouped = items.reduce((acc: GroupedItems, item) => {
      (acc[item.priceFormula] = acc[item.priceFormula] || []).push(item);
      return acc;
    }, {});

    // Correctly sort the grouped items
    const sortedKeys = Object.keys(grouped).sort(
      (a, b) => priceFormulaOrder[a as PriceFormula] - priceFormulaOrder[b as PriceFormula]
    );
    return sortedKeys.reduce((acc: GroupedItems, key) => {
      acc[key] = grouped[key];
      return acc;
    }, {});
  }, [items]);
};
