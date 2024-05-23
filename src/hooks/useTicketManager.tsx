import { useState, useEffect, useCallback } from 'react';
import { useEventStore } from '@/stores/useEventStore';
import { PriceFormula } from '@/config/enums/PriceFormula.enum';

/**
 * Custom hook `useTicketManager` is responsible for managing the ticket selection process,
 * including fetching the price based on ticket type and event ID, and calculating the total price.
 *
 * @param {number | undefined} basePrice - The base price of the ticket.
 * @param {number | undefined} eventId - The ID of the event.
 * @param {PriceFormula} initialTicketType - The initial ticket type selected.
 * @returns  An object containing state and methods for managing tickets.
 *
 * @example
 * const { selectedTicketType, setSelectedTicketType, quantity, setQuantity, unitPrice, totalPrice, handleTicketTypeChange } = useTicketManager(basePrice, eventId, initialTicketType);
 *
 * @remarks
 * The hook uses `useState` for managing state, `useEffect` for fetching data on mount, and `useCallback` for memoizing the price update function.
 */
export const useTicketManager = (
  basePrice: number | undefined,
  eventId: number | undefined,
  initialTicketType: PriceFormula
) => {
  const [selectedTicketType, setSelectedTicketType] = useState<PriceFormula>(initialTicketType);
  const [quantity, setQuantity] = useState<number>(1);
  const [unitPrice, setUnitPrice] = useState<number | undefined>(basePrice);

  /**
   * Updates the price based on the selected ticket type and event ID.
   */
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

  // Fetch the price whenever the selected ticket type or event ID changes
  useEffect(() => {
    updatePrice();
  }, [updatePrice]);

  // Calculate the total price based on the unit price and quantity
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
