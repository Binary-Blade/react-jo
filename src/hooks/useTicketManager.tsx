import { useState, useEffect } from 'react';
import { useEventStore } from '@/stores/useEventStore';
import { PriceFormula } from '@/config/enums/PriceFormula.enum';

export const useTicketManager = (basePrice: number | undefined, eventId: number | undefined, initialTicketType: PriceFormula) => {
  const [selectedTicketType, setSelectedTicketType] = useState<PriceFormula>(initialTicketType);
  const [quantity, setQuantity] = useState<number>(1);
  const [currentPrice, setCurrentPrice] = useState<number | undefined>(basePrice);

  const getTicketQuantity = (type: PriceFormula): number => {
    const ticketQuantities: Record<PriceFormula, number> = {
      [PriceFormula.SOLO]: 1,
      [PriceFormula.DUO]: 2,
      [PriceFormula.FAMILY]: 4
    };
    return ticketQuantities[type] || 1;
  };
  const handleTicketTypeChange = (newType: PriceFormula) => {
    setSelectedTicketType(newType);
    setQuantity(getTicketQuantity(newType));
  };
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



  return {
    selectedTicketType,
    quantity,
    setQuantity,
    currentPrice,
    handleTicketTypeChange
  };
};
