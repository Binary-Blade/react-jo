import { useMemo } from 'react';

/**
 * Custom hook `useReducePrice` is responsible for calculating the total price,
 * taxes, and total with taxes for a given array of items. It uses a property extractor
 * function to get the numerical value from each item and applies a given tax rate.
 *
 * @param {any[]} items - The array of items to calculate prices for.
 * @param {Function} propertyExtractor - A function to extract the numerical value from each item.
 * @param {number} taxesValue - The tax rate to apply to the total price.
 * @returns  An object containing formatted total, taxes, and total with taxes.
 *
 * @example
 * const { total, taxes, totalTaxes } = useReducePrice(cartItems, item => item.price, 0.2);
 *
 * @remarks
 * The hook uses `useMemo` to optimize the calculation, ensuring it only recalculates
 * when the items, propertyExtractor, or taxesValue change.
 */
export const useReducePrice = (
  items: any[],
  propertyExtractor: (item: any) => number,
  taxesValue: number
) => {
  return useMemo(() => {
    // Calculate the total using the propertyExtractor to get the numerical value from each item.
    const total = items.reduce((acc, item) => acc + propertyExtractor(item), 0);
    const taxes = total * taxesValue; // Calculate the taxes based on the total and the given tax rate.

    // Return formatted values using Intl.NumberFormat for currency formatting.
    return {
      total: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total),
      taxes: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(taxes),
      totalTaxes: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
        total + taxes
      )
    };
  }, [items, propertyExtractor, taxesValue]); // Include all dependencies in the useMemo hook to ensure proper updates.
};
