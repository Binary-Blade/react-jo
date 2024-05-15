import { Separator } from '@radix-ui/react-dropdown-menu';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { PreviewItemsTicket } from './PreviewItemsTicket';
import { Link } from 'wouter';
import { Button } from '../ui/button';
import { FC } from 'react';

interface CardPreviewCartProps {
  cartItemsLocal: any;
  handleDelete: (eventId: number) => void;
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
}) => (
  <Card>
    <CardHeader>
      <CardTitle>Cart Preview</CardTitle>
      <CardDescription className="text-md">
        {totalItems ? `Total: ${totalItems} items` : 'No items in cart'}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <PreviewItemsTicket
        cartItemsLocal={cartItemsLocal}
        handleDelete={handleDelete}
        totalItems={totalItems}
        totalPrice={totalPrice}
      />
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
