import { FC } from 'react';
import { CartItemLocal } from '@/config/types/Cart/CartTypes';
import { Button } from '@/components/ui/button';
import { TrashIcon } from '@/components/ui/IconComponents';

interface GroupedCartItemsProps {
  groupedItems: { [eventTitle: string]: CartItemLocal[] };
  handleDelete: (item: CartItemLocal) => void;
}

export const GroupedCartItems: FC<GroupedCartItemsProps> = ({ groupedItems, handleDelete }) => {
  return (
    <div className="flex flex-col gap-6">
      {Object.keys(groupedItems).map(title => (
        <div key={title} className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
          <div className="flex flex-col gap-4">
            {groupedItems[title].map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white dark:bg-gray-800 transition-transform duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => handleDelete(item)}
                    className="hover:bg-red-500 hover:text-white transition-colors duration-200"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </Button>
                  <div className="text-gray-900 dark:text-gray-100 font-medium">
                    {`${item.quantity} x Formule ${item.priceFormula}`}
                  </div>
                </div>
                <div className="text-gray-900 dark:text-gray-100 font-semibold">{`€${item.price * item.quantity}`}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
