import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { FC } from 'react';
import { PriceFormula } from '@/config/enums/PriceFormula.enum';
import { SelectEventPrices } from '../select/SelectEventPrices';
import { QuantitySelector } from '../select/QuantitySelector';

interface CardTicketPriceProps {
  currentPrice: number | undefined;
  selectedTicketType: string;
  quantity: number;
  setQuantity: (quantity: number) => void;
  handleTicketTypeChange: (value: PriceFormula) => void;
  handleAddToCart: () => any;
}

export const CardTicketSelect: FC<CardTicketPriceProps> = ({
  currentPrice,
  selectedTicketType,
  quantity,
  setQuantity,
  handleTicketTypeChange,
  handleAddToCart
}) => (
  <Card>
    <CardHeader>
      <CardTitle>Ticket Prices </CardTitle>
      <CardDescription className="text-md">
        {currentPrice ? `Price: $${currentPrice}` : 'Select a ticket type'}{' '}
      </CardDescription>
    </CardHeader>
    <CardContent className="grid gap-6">
      <div className="flex gap-6 pb-3">
        <SelectEventPrices
          selectedTicketType={selectedTicketType}
          handleTicketTypeChange={handleTicketTypeChange}
        />

        <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />
      </div>

      <Button type="submit" onClick={handleAddToCart} className="w-full">
        Add to Cart
      </Button>
    </CardContent>
    <CardFooter>
      <div className="flex gap-2"></div>
    </CardFooter>
  </Card>
);
