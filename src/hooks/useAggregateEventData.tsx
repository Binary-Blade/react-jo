import { useEffect, useState } from 'react';
import { useEventStore } from '@/stores/useEventStore';

/**
 * Custom hook `useAggregateEventData` is responsible for aggregating event data
 * from the event store. It calculates the total quantity, total sold, and total revenue
 * from all events and returns this aggregated data.
 *
 * @returns {Object} An object containing total quantity, total sold, and total revenue.
 *
 * @example
 * const { totalQuantity, totalSold, totalRevenue } = useAggregateEventData();
 *
 * @remarks
 * The hook uses the `useEventStore` to fetch and access event data. It performs calculations
 * using `useEffect` hooks to update the state whenever the event data changes.
 */
export const useAggregateEventData = (): {
  totalQuantity: number;
  totalSold: number;
  totalRevenue: number;
} => {
  // Extract event values and fetch function from the event store
  const { allEventsValues, fetchValues } = useEventStore();

  // State for storing aggregated event data
  const [cardDataEvent, setCardDataEvent] = useState<{
    totalQuantity: number;
    totalSold: number;
    totalRevenue: number;
  }>({
    totalQuantity: 0,
    totalSold: 0,
    totalRevenue: 0
  });

  // Fetch event values on component mount
  useEffect(() => {
    fetchValues(); // This assumes fetchValues updates allEventsValues in your store
  }, [fetchValues]);

  // Calculate total quantity, total sold, and total revenue whenever event values change
  useEffect(() => {
    const totalQuantity = allEventsValues.reduce((acc, event) => acc + event.quantityAvailable, 0);
    const totalSold = allEventsValues.reduce((acc, event) => acc + event.quantitySold, 0);
    const totalRevenue = allEventsValues.reduce((acc, event) => acc + event.revenueGenerated, 0);
    setCardDataEvent({ totalQuantity, totalSold, totalRevenue });
  }, [allEventsValues]);

  return cardDataEvent;
};
