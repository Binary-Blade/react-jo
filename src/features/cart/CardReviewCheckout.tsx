import { useCartStore } from '@/stores/useCartStore';
import useGroupByTicketType from '@/hooks/useGroupByTicketType';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ButtonCheckoutPayment } from '../payment/ButtonCheckoutPayment';

export const CardReviewCheckout = () => {
  const { cartId, cartItems } = useCartStore(state => ({
    cartItems: state.cartItems,
    cartId: state.cartId
  }));
  const groupedItems = useGroupByTicketType(cartItems);
  const { total, taxes, totalTaxes } = useCartStore(state => state.aggregateCartData());
  return (
    <Card>
      <CardHeader>
        <CardTitle>Review & Checkout</CardTitle>
        <CardDescription>Confirm your order and complete the purchase.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {Object.entries(groupedItems).map(([priceFormula, items]) => (
            <div key={priceFormula} className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{priceFormula} Tickets</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {items.map((item, index) => (
                    <span key={`${priceFormula}-${item.cartItemId}-${index}`}>
                      {`${item.event.title} x ${item.quantity}`}
                      {index < items.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>
              </div>
              <div className="font-medium pl-2">
                ${items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        <Separator className="my-4" />
        <div className="flex items-center justify-between font-semibold ">
          <div>Total</div>
          <div>{total}</div>
        </div>
      </CardContent>
      <CardFooter>
        <ButtonCheckoutPayment cartId={cartId} totalTaxes={totalTaxes} />
      </CardFooter>
    </Card>
  );
};
