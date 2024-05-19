import { FC } from 'react';
import { CartItemLocal } from '@/config/types/Cart/CartTypes';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { XIcon } from '@/components/ui/IconComponents';

interface CardPreviewCartProps {
  cartItemsLocal: any;
  handleDelete: (item: CartItemLocal) => void;
}

export const CardPreviewCart: FC<CardPreviewCartProps> = ({ cartItemsLocal, handleDelete }) => {
  return (
    <Card>
      <div className="flex flex-col justify-between p-2 gap-2">
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
    </Card>
  );
};
