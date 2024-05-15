import { FC } from 'react';
import { Button } from '../ui/button';
import { XIcon } from '../ui/IconComponents';
import { Separator } from '../ui/separator';

interface TicketPriceReserveCartProps {
  cartItemsLocal: any[];
  handleDelete: (item: any) => void;
  totalItems: number;
  totalPrice: number;
}

export const PreviewItemsTicket: FC<TicketPriceReserveCartProps> = ({
  cartItemsLocal,
  handleDelete,
  totalItems,
  totalPrice
}) => {
  return (
    <>
      <div className="flex flex-col justify-between pb-2 gap-2">
        {cartItemsLocal.map((item, index) => (
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
    </>
  );
};
