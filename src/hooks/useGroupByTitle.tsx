import { useMemo } from 'react';
import { CartItemLocal } from '@/config/types/Cart/CartTypes';

export interface GroupedItems {
  [title: string]: CartItemLocal[];
}

export const useGroupByTitle = (items: CartItemLocal[]): GroupedItems => {
  return useMemo(() => {
    const grouped = items.reduce((acc: GroupedItems, item) => {
      (acc[item.title] = acc[item.title] || []).push(item);
      return acc;
    }, {});
    return grouped;
  }, [items]);
};
