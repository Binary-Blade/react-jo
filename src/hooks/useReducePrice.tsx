import { useMemo } from 'react';

// Define the hook using generic type T, where T is the type of items in the array.
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
      totalTaxes: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total + taxes),
    };
  }, [items, propertyExtractor, taxesValue]); // Include all dependencies in the useMemo hook to ensure proper updates.
};

