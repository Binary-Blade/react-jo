import { useMemo } from "react";
import { CartItem, GroupedItems } from "@/types/CartTypes"; // Assuming correct path and types

const useGroupByTicketType = (items: CartItem[]): GroupedItems => {
  return useMemo(() => {
    return items.reduce((acc: GroupedItems, item) => {
      (acc[item.ticketType] = acc[item.ticketType] || []).push(item);
      return acc;
    }, {});
  }, [items]);
};

export default useGroupByTicketType;
