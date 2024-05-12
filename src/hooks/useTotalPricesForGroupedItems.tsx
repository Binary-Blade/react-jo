// import { useMemo } from 'react';
//
// export function useGroupedItemsWithTotals(cartItems) {
//   return useMemo(() => {
//     const groupedItems = useGroupByTicketType(cartItems);
//     const totalsByGroup = {};
//     let grandTotal = 0;
//
//     Object.entries(groupedItems).forEach(([priceFormula, items]) => {
//       const totalForGroup = items.reduce((sum, item) => sum + item.price, 0);
//       totalsByGroup[priceFormula] = totalForGroup;
//       grandTotal += totalForGroup;
//     });
//
//     return { groupedItems, totalsByGroup, grandTotal };
//   }, [cartItems]);
// }
