import { useState, useEffect, useCallback } from 'react';
import { useEventStore } from '@/stores/useEventStore';
import { PriceFormula } from '@/config/enums/PriceFormula.enum';

export const useTicketManager = (
  basePrice: number | undefined,
  eventId: number | undefined,
  initialTicketType: PriceFormula
) => {
  const [selectedTicketType, setSelectedTicketType] = useState<PriceFormula>(initialTicketType);
  const [quantity, setQuantity] = useState<number>(1);
  const [currentPrice, setCurrentPrice] = useState<number | undefined>(basePrice);

  const updatePrice = useCallback(async () => {
    if (eventId === undefined || selectedTicketType === undefined) {
      console.error('Event ID or ticket type is missing');
      return;
    }
    try {
      const priceResponse = await useEventStore
        .getState()
        .getTicketPrice(eventId, selectedTicketType);
      if (priceResponse) {
        setCurrentPrice(priceResponse.price); // Set only the base price fetched
      }
    } catch (error) {
      console.error('Failed to fetch ticket price', error);
    }
  }, [eventId, selectedTicketType]);

  useEffect(() => {
    updatePrice();
  }, [updatePrice]);

  // Returns the calculated price multiplied by quantity when needed
  const totalPrice = currentPrice ? currentPrice * quantity : undefined;

  return {
    selectedTicketType,
    setSelectedTicketType,
    quantity,
    setQuantity,
    currentPrice: totalPrice, // Return calculated total price
    handleTicketTypeChange: setSelectedTicketType
  };
};
