import { useState, useEffect } from 'react';
import { useEventStore } from '@/stores/useEventStore';
import { TicketType } from '@/config/enums/TicketType.enum';

export const useTicketManager = (basePrice: number | undefined, eventId: number | undefined, initialTicketType: TicketType) => {
  const [selectedTicketType, setSelectedTicketType] = useState<TicketType>(initialTicketType);
  const [quantity, setQuantity] = useState<number>(1);
  const [currentPrice, setCurrentPrice] = useState<number | undefined>(basePrice);

  useEffect(() => {
    const updatePrice = async () => {
      if (!eventId) {
        console.error("Event ID is missing");
        return;
      }

      const priceResponse = await useEventStore.getState().getTicketPrice(eventId, selectedTicketType);
      if (priceResponse) {
        setCurrentPrice(priceResponse.price * quantity);
      } else {
        console.error("Failed to fetch ticket price");
      }
    };

    updatePrice();
  }, [eventId, selectedTicketType, quantity]);

  const handleTicketTypeChange = (newType: TicketType) => {
    setSelectedTicketType(newType);
    setQuantity(getTicketQuantity(newType));
  };

  const getTicketQuantity = (type: TicketType): number => {
    const ticketQuantities: Record<TicketType, number> = {
      [TicketType.SOLO]: 1,
      [TicketType.DUO]: 2,
      [TicketType.FAMILY]: 4
    };
    return ticketQuantities[type] || 1;
  };

  return {
    selectedTicketType,
    quantity,
    currentPrice,
    handleTicketTypeChange
  };
};
