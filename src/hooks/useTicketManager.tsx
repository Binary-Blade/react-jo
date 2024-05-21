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
  const [unitPrice, setUnitPrice] = useState<number | undefined>(basePrice);

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
        setUnitPrice(priceResponse.price); // Set only the base price fetched
      }
    } catch (error) {
      console.error('Failed to fetch ticket price', error);
    }
  }, [eventId, selectedTicketType]);

  useEffect(() => {
    updatePrice();
  }, [updatePrice]);

  const totalPrice = unitPrice ? unitPrice * quantity : undefined;

  return {
    selectedTicketType,
    setSelectedTicketType,
    quantity,
    setQuantity,
    unitPrice, // Return unit price
    totalPrice, // Return total price
    handleTicketTypeChange: setSelectedTicketType
  };
};
