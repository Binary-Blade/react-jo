import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CardOneTicket } from './CardOneTicket';
import { TICKET_DESCRIPTIONS } from '@/config/constants/constants-common';
import { CartItem } from '@/config/interfaces/cart/cart-item.interface';

interface CartFormuleProps {
  priceFormula: string;
  items: CartItem[];
}

/**
 * `CardFormule` component displays a list of cart items grouped by a price formula.
 * Each item is rendered using the `CardOneTicket` component.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.priceFormula - The price formula name.
 * @param {CartItem[]} props.items - The list of cart items associated with the price formula.
 * @returns {JSX.Element} The rendered card formule component.
 *
 * @example
 * const items = [
 *   { cartItemId: 1, cart: { cartId: 1 }, event: { title: 'Event 1', startDate: '2023-01-01', endDate: '2023-01-02' }, quantity: 2 },
 *   { cartItemId: 2, cart: { cartId: 1 }, event: { title: 'Event 2', startDate: '2023-02-01', endDate: '2023-02-02' }, quantity: 1 }
 * ];
 * return <CardFormule priceFormula="Standard" items={items} />;
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components:
 * - `Card`, `CardHeader`, `CardContent`, `CardTitle`, `CardDescription` for card layout.
 * - `Separator` for separating content sections.
 * - `CardOneTicket` for displaying individual cart items.
 * - `ticketDescriptions` for fetching the description based on the price formula.
 */
export const CardFormule = ({ priceFormula, items }: CartFormuleProps): JSX.Element => {
  // Fetch the description based on the price formula
  const description = TICKET_DESCRIPTIONS[priceFormula];

  return (
    <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <CardHeader>
        {/* CardTitle: Displays the price formula as the title */}
        <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">
          {priceFormula} Tickets
        </CardTitle>
        {/* CardDescription: Displays the description for the price formula */}
        <CardDescription className="text-md text-gray-600 dark:text-gray-400">
          {description}
        </CardDescription>
        <Separator className="my-2" />
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {/* Map through the items and render CardOneTicket for each */}
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
