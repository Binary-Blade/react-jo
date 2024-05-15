import { FC, useCallback, useMemo, useState } from 'react';
import { PriceFormula } from '@/config/enums/PriceFormula.enum';
import { navigate } from 'wouter/use-browser-location';
import { CardPreviewCart } from '@/components/one-event/CardPreviewCart';
import { CardTicketSelect } from '@/components/one-event/CardTicketSelect';
import { useTicketManager } from '@/hooks';

type CardEventPricesProps = {
  eventId: number | undefined;
  userId: number;
  basePrice: number | undefined;
  isAuthenticated: boolean;
  syncCartItems: (userId: number) => Promise<void>;
  cartItemsLocal: any[];
};

export const CardEventPrices: FC<CardEventPricesProps> = ({
  eventId,
  userId,
  isAuthenticated,
  basePrice,
  syncCartItems,
  cartItemsLocal,
  addItemToCartLocal,
  removeCartItemLocal
}) => {
  const initialTicketType = PriceFormula.SOLO;
  const { selectedTicketType, quantity, setQuantity, currentPrice, handleTicketTypeChange } =
    useTicketManager(basePrice, eventId, initialTicketType);

  const { totalItems, totalPrice } = useMemo(() => {
    const totalItems = cartItemsLocal.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cartItemsLocal.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return { totalItems, totalPrice };
  }, [cartItemsLocal]);

  const handleAddToCart = useCallback(() => {
    if (eventId && currentPrice && selectedTicketType) {
      const cartItemLocal = {
        eventId,
        quantity,
        price: currentPrice,
        priceFormula: selectedTicketType
      };
      addItemToCartLocal(cartItemLocal);
    } else {
      console.error('Required information is missing for adding item to cart.');
    }
  }, [eventId, currentPrice, selectedTicketType, addItemToCartLocal]);

  const handleDelete = useCallback(
    (item: any) => {
      if (eventId && item.priceFormula) {
        removeCartItemLocal(eventId, item.priceFormula);
      } else {
        console.error('Event ID or Price Formula is undefined.');
      }
    },
    [eventId, removeCartItemLocal]
  );

  const showPreview = useMemo(() => cartItemsLocal.length > 0, [cartItemsLocal]);

  // FIX: Fix route to auth
  const handleReserve = useCallback(async () => {
    if (!isAuthenticated) {
      navigate('/auth');
    } else {
      await syncCartItems(userId);
      navigate('/cart');
    }
  }, [isAuthenticated, userId, navigate, syncCartItems]);

  return (
    <>
      <CardTicketSelect
        currentPrice={currentPrice}
        selectedTicketType={selectedTicketType}
        quantity={quantity}
        setQuantity={setQuantity}
        handleTicketTypeChange={handleTicketTypeChange}
        handleAddToCart={handleAddToCart}
      />
      {showPreview && (
        <CardPreviewCart
          cartItemsLocal={cartItemsLocal}
          handleDelete={handleDelete}
          totalItems={totalItems}
          totalPrice={totalPrice}
          handleReserve={handleReserve}
        />
      )}
    </>
  );
};
