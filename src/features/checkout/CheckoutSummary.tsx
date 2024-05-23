import { useCartStore } from '@/stores/useCartStore';
import { useGroupByTicketType } from '@/hooks/useGroupByTicketType';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ButtonCheckoutPayment } from '@/features/payment/ButtonCheckoutPayment';
import { TotalEventTicketPerFormula } from './TotalEventTicketPerFormula';

interface Totals {
  [key: string]: number;
}

/**
 * `CheckoutSummary` component displays a summary of the items in the user's cart.
 * It groups items by ticket type and calculates the total cost, providing a review
 * and payment section for the checkout process.
 *
 * @component
 * @returns {JSX.Element} The rendered checkout summary component.
 *
 * @example
 * return (
 *   <CheckoutSummary />
 * )
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components and hooks:
 * - `Card`, `CardHeader`, `CardContent`, `CardFooter`, `CardTitle`, `CardDescription` for card layout.
 * - `Separator` for separating content sections.
 * - `ButtonCheckoutPayment` for the checkout button.
 * - `TotalEventTicketPerFormula` for displaying grouped cart items.
 * - `useCartStore` for accessing cart state.
 * - `useGroupByTicketType` hook for grouping cart items by ticket type.
 */
export const CheckoutSummary = (): JSX.Element => {
  // Extract cart ID and items from the cart store
  const { cartId, cartItems } = useCartStore(state => ({
    cartItems: state.cartItems,
    cartId: state.cartId
  }));

  // Group cart items by ticket type using custom hook
  const groupedItems = useGroupByTicketType(cartItems);

  // Calculate totals for each price formula
  const totals: Totals = Object.entries(groupedItems).reduce(
    (acc: Totals, [priceFormula, items]) => {
      const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      acc[priceFormula] = total;
      return acc;
    },
    {}
  );

  // Calculate the overall total price
  const total = Object.values(totals).reduce((sum, value) => sum + value, 0);

  return (
    <Card>
      <CardHeader>
        {/* CardTitle: Displays the title of the checkout summary */}
        <CardTitle>Revue & Paiement</CardTitle>
        {/* CardDescription: Provides a brief description of the checkout process */}
        <CardDescription>Confirmez votre commande et complétez l'achat.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {/* Map through grouped items and render TotalEventTicketPerFormula for each */}
          {Object.entries(groupedItems).map(([priceFormula, items]) => (
            <TotalEventTicketPerFormula
              key={priceFormula}
              priceFormula={priceFormula}
              items={items}
            />
          ))}
        </div>
        <Separator className="my-4" />
        <div className="flex items-center justify-between font-semibold">
          <div>Total</div>
          <div>€{total}</div>
        </div>
      </CardContent>
      <CardFooter>
        {/* ButtonCheckoutPayment: Button to proceed with the payment */}
        <ButtonCheckoutPayment cartId={cartId} />
      </CardFooter>
    </Card>
  );
};
