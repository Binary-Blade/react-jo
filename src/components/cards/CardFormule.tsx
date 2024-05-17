import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card';
import { FC } from 'react';
import { ticketDescriptions } from '@/config/constants';
import { CartItem } from '@/config/types/Cart/CartTypes';
import { CardOneTicket } from '@/features/cart/CardOneTicket';

interface CartFormuleProps {
  priceFormula: string;
  items: CartItem[];
}

export const CardFormule: FC<CartFormuleProps> = ({ priceFormula, items }) => {
  const description = ticketDescriptions[priceFormula];
  return (
    <Card>
      <CardHeader>
        <CardTitle>{priceFormula} Tickets</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {items.map((item, index) => (
            <CardOneTicket
              key={`${item.cartItemId}-${index}`}
              cartId={item.cart.cartId}
              cartItemId={item.cartItemId}
              eventName={item.event.title}
              quantity={item.quantity}
              startDate={item.event.startDate}
              endDate={item.event.endDate}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
