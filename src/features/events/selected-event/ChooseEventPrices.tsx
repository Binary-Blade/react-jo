import { FC, useCallback } from 'react';
import { PriceFormula } from '@/config/enums/PriceFormula.enum';
import { useTicketManager } from '@/hooks';
import { CardTicketSelect } from '@/components/cards/CardTicketSelect';
import { Toast } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';

type CardEventPricesProps = {
  eventId: number | undefined;
  basePrice: number | undefined;
  addItemToCartLocal: (item: any) => void;
};

export const ChooseEventPrices: FC<CardEventPricesProps> = ({
  eventId,
  basePrice,
  addItemToCartLocal
}) => {
  const initialTicketType = PriceFormula.SOLO;
  const { toast } = useToast();
  const {
    selectedTicketType,
    quantity,
    setQuantity,
    unitPrice,
    totalPrice,
    handleTicketTypeChange
  } = useTicketManager(basePrice, eventId, initialTicketType);

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
    </>
  );
};
