import { useState, useCallback } from 'react';
import { useEventStore } from '@/stores/useEventStore';
import { TicketType } from '@/features/events/EventSelectTypes';

export const useTicketManager = (basePrice: number, eventId: number, initialTicketType: TicketType) => {
  const [selectedTicketType, setSelectedTicketType] = useState<TicketType>(initialTicketType);
  const [quantity, setQuantity] = useState<number>(1);
  const [currentPrice, setCurrentPrice] = useState<number>(basePrice);

  const ticketQuantities: Record<TicketType, number> = {
    [TicketType.SOLO]: 1,
    [TicketType.DUO]: 2,
    [TicketType.FAMILY]: 4
  };

  const fetchPrice = useCallback(async () => {
    if (!eventId) {
      console.error("Event ID is missing");
      return;
    }

    const priceResponse = await useEventStore.getState().getTicketPrice(eventId, selectedTicketType);
    if (priceResponse) {
      setCurrentPrice(priceResponse.price);
    } else {
      console.error("Failed to fetch ticket price");
    }
  }, [eventId, selectedTicketType]);


  const handleTicketTypeChange = (newType: TicketType) => {
    setSelectedTicketType(newType);
    setQuantity(ticketQuantities[newType] || 1);
    fetchPrice();
  };

  return {
    selectedTicketType,
    quantity,
    currentPrice,
    handleTicketTypeChange
  };
};
