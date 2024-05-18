import { FC, useCallback, useMemo } from 'react';
import { PriceFormula } from '@/config/enums/PriceFormula.enum';
import { navigate } from 'wouter/use-browser-location';
import { useTicketManager } from '@/hooks';
import { CardTicketSelect } from '@/components/cards/CardTicketSelect';
import { CardPreviewCart } from '@/components/cards/CardPreviewCart';

type CardEventPricesProps = {
  eventId: number | undefined;
  userId: number | null;
  basePrice: number | undefined;
  isAuthenticated: boolean;
  syncCartItems: (userId: number) => Promise<void>;
  cartItemsLocal: any[];
  addItemToCartLocal: (item: any) => void;
  removeCartItemLocal: (eventId: number, priceFormula: PriceFormula) => void;
};

export const ChooseEventPrices: FC<CardEventPricesProps> = ({
  eventId,
  userId,
  basePrice,
  syncCartItems,
  cartItemsLocal,
  addItemToCartLocal,
  removeCartItemLocal
}) => {
  const initialTicketType = PriceFormula.SOLO;
  const {
    selectedTicketType,
    quantity,
    setQuantity,
    unitPrice,
    totalPrice,
    handleTicketTypeChange
  } = useTicketManager(basePrice, eventId, initialTicketType);

  const { totalItems, totalCartPrice } = useMemo(() => {
    const totalItems = cartItemsLocal.reduce((acc, item) => acc + item.quantity, 0);
    const totalCartPrice = cartItemsLocal.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return { totalItems, totalCartPrice };
  }, [cartItemsLocal]);

  const handleAddToCart = useCallback(() => {
    if (eventId && unitPrice && selectedTicketType) {
      const cartItemLocal = {
        eventId,
        quantity,
        price: unitPrice, // Use unit price here
        priceFormula: selectedTicketType
      };
      addItemToCartLocal(cartItemLocal);
    } else {
      console.error('Required information is missing for adding item to cart.');
    }
  }, [eventId, unitPrice, selectedTicketType, quantity, addItemToCartLocal]);

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

  const handleReserve = useCallback(async () => {
    if (!userId) {
      console.error('User ID is missing.');
      return;
    }
    await syncCartItems(userId);
    navigate('/cart');
  }, [userId, navigate, syncCartItems]);

  return (
    <>
      <CardTicketSelect
        currentPrice={totalPrice} // Use total price here
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
          totalPrice={totalCartPrice}
          handleReserve={handleReserve}
        />
      )}
    </>
  );
};
