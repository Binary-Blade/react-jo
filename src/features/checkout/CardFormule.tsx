import { FC } from 'react';
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ticketDescriptions } from '@/config/constants';
import { CardOneTicket } from './CardOneTicket';
import { CartItem } from '@/config/types/Cart/CartTypes';

interface CartFormuleProps {
  priceFormula: string;
  items: CartItem[];
}

export const CardFormule: FC<CartFormuleProps> = ({ priceFormula, items }) => {
  const description = ticketDescriptions[priceFormula];
  return (
    <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">
          {priceFormula} Tickets
        </CardTitle>
        <CardDescription className="text-md text-gray-600 dark:text-gray-400">
          {description}
        </CardDescription>
        <Separator className="my-2" />
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
