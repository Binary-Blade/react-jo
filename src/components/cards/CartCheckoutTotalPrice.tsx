import { ButtonCheckoutPayment } from '@/features/payment/ButtonCheckoutPayment';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { FC } from 'react';

interface CheckoutTotalProps {
  total: string;
  taxes: string;
  totalTaxes: number;
  cartId: number | null | undefined;
}

export const CartCheckoutTotalPrice: FC<CheckoutTotalProps> = ({
  total,
  taxes,
  totalTaxes,
  cartId
}) => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Checkout</h2>
      <div className="grid gap-4">
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span className="font-medium">{total}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Taxes</span>
          <span className="font-medium">{taxes}</span>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <span className="font-bold">Total</span>
          <span className="font-bold">{totalTaxes}</span>
        </div>
        <ButtonCheckoutPayment cartId={cartId} />
      </div>
    </>
  );
};
