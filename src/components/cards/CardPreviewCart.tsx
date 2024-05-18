import { Separator } from '@radix-ui/react-dropdown-menu';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Link } from 'wouter';
import { Button } from '../ui/button';
import { FC } from 'react';
import { XIcon } from '../ui/IconComponents';
import { CartItemLocal } from '@/config/types/Cart/CartTypes';

interface CardPreviewCartProps {
  cartItemsLocal: any;
  handleDelete: (item: CartItemLocal) => void;
  totalItems: number;
  totalPrice: number;
  handleReserve: () => void;
}

export const CardPreviewCart: FC<CardPreviewCartProps> = ({
  cartItemsLocal,
  handleDelete,
  totalItems,
  totalPrice,
  handleReserve
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cart Preview</CardTitle>
        <CardDescription className="text-md">
          {totalItems ? `Total: ${totalItems} items` : 'No items in cart'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col justify-between pb-2 gap-2">
          {cartItemsLocal.map((item: CartItemLocal, index: number) => (
            <div key={index} className="flex justify-between items-center gap-2">
              <div className="flex flex-row items-center gap-2">
                <Button size="icon" variant="outline" onClick={() => handleDelete(item)}>
                  <XIcon className="w-4 h-4" />
                </Button>
                <div className="text-gray-500 dark:text-gray-400">{`${item.quantity} x Formule ${item.priceFormula}`}</div>
              </div>
              <div>{`€${item.price * item.quantity}`}</div>
            </div>
          ))}
        </div>
        <Separator />
        <div className="flex justify-between items-center pt-4">
          <div className="font-semibold">Total</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{totalItems} items</div>
          <div>{`€${totalPrice}`}</div>
        </div>
        <Separator />
        <Link href="/cart" className="w-full pt-4">
          <Button variant="outline" className="w-full" onClick={handleReserve}>
            Reserve
          </Button>
        </Link>
        <div className="text-sm text-gray-500 text-center dark:text-gray-400">
          You won't be charged yet
        </div>
      </CardContent>
    </Card>
  );
};
