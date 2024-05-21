import { FC, useCallback } from 'react';
import { PriceFormula } from '@/config/enums/PriceFormula.enum';
import { useTicketManager } from '@/hooks';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { QuantitySelector } from '@/components/select/QuantitySelector';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { ShoppingCartIcon } from '@/components/ui/IconComponents';

type CardEventPricesProps = {
  title: string | undefined;
  eventId: number | undefined;
  basePrice: number | undefined;
  addItemToCartLocal: (item: any) => void;
};

export const AddItemEventToCart: FC<CardEventPricesProps> = ({
  title,
  eventId,
  basePrice,
  addItemToCartLocal
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

  const handleAddToCart = useCallback(() => {
    if (eventId && unitPrice && selectedTicketType) {
      const cartItemLocal = {
        eventId,
        quantity,
        price: unitPrice,
        priceFormula: selectedTicketType,
        title
      };
      addItemToCartLocal(cartItemLocal);
      toast('Ajouté au panier', {
        description: `${quantity} x ${selectedTicketType} ajouté. Total: ${totalPrice} €`,
        action: {
          label: 'Fermer',
          onClick: () => console.log()
        }
      });
    } else {
      console.error('Required information is missing for adding item to cart.');
    }
  }, [eventId, unitPrice, selectedTicketType, quantity, addItemToCartLocal, title, totalPrice]);

  return (
    <Card className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Prix des billets
          <div className="text-lg font-semibold text-gray-500 dark:text-gray-100">
            Total: {totalPrice ? `${totalPrice} €` : '—'}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <Label className="text-lg font-medium text-gray-900 dark:text-gray-100">
              Type de billet
            </Label>
            <RadioGroup
              defaultValue={selectedTicketType}
              onValueChange={(value: string) => handleTicketTypeChange(value as PriceFormula)}
              name="ticketType"
              className="flex flex-col gap-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={PriceFormula.SOLO} id="r1" />
                <Label htmlFor="r1" className="text-gray-900 dark:text-gray-100">
                  SOLO
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={PriceFormula.DUO} id="r2" />
                <Label htmlFor="r2" className="text-gray-900 dark:text-gray-100">
                  DUO
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={PriceFormula.FAMILY} id="r3" />
                <Label htmlFor="r3" className="text-gray-900 dark:text-gray-100">
                  FAMILY
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <Label className="text-lg font-medium text-gray-900 dark:text-gray-100">Quantité</Label>
            <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />
          </div>
        </div>
        <Button
          type="submit"
          onClick={handleAddToCart}
          className="w-full flex justify-center items-center bg-rose-500 text-white hover:bg-rose-600 transition-all"
        >
          <ShoppingCartIcon className="w-5 h-5 mr-2" />
          Ajouter au panier
        </Button>
      </CardContent>
    </Card>
  );
};
