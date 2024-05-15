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
import { TicketCheckout } from './TicketCheckout';

export const CardReviewCheckout = () => {
  const { cartId, cartItems } = useCartStore(state => ({
    cartItems: state.cartItems,
    cartId: state.cartId
  }));

  const groupedItems = useGroupByTicketType(cartItems);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Review & Checkout</CardTitle>
        <CardDescription>Confirm your order and complete the purchase.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {Object.entries(groupedItems).map(([priceFormula, items]) => (
            <TicketCheckout key={priceFormula} priceFormula={priceFormula} items={items} />
          ))}
        </div>
        <Separator className="my-4" />
        <div className="flex items-center justify-between font-semibold ">
          <div>Total</div>
          <div></div>
        </div>
      </CardContent>
      <CardFooter>
        <ButtonCheckoutPayment cartId={cartId} totalTaxes={1} /> {/* Assuming tax rate of 10% */}
      </CardFooter>
    </Card>
  );
};
