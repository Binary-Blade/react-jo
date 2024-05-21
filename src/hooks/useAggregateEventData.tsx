import { useEffect, useState } from 'react';
import { useEventStore } from '@/stores/useEventStore';

export const useAggregateEventData = () => {
  const { allEventsValues, fetchValues } = useEventStore();
  const [cardDataEvent, setCardDataEvent] = useState({
    totalQuantity: 0,
    totalSold: 0,
    totalRevenue: 0
  });

  useEffect(() => {
    fetchValues(); // This assumes fetchValues updates allEventsValues in your store
  }, []);

  useEffect(() => {
    const totalQuantity = allEventsValues.reduce((acc, event) => acc + event.quantityAvailable, 0);
    const totalSold = allEventsValues.reduce((acc, event) => acc + event.quantitySold, 0);
    const totalRevenue = allEventsValues.reduce((acc, event) => acc + event.revenueGenerated, 0);
    setCardDataEvent({ totalQuantity, totalSold, totalRevenue });
  }, [allEventsValues]);

  return cardDataEvent;
};
