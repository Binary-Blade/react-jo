import { Button } from '@/components/ui/button';
import { TrashIcon } from '@/components/ui/IconComponents';
import { CartItemLocal } from '@/config/interfaces/cart/cart-item.interface';

interface GroupedCartItemsProps {
  groupedItems: { [key: string]: CartItemLocal[] };
  handleDelete: (item: CartItemLocal) => void;
  handleUpdateQuantity: (item: CartItemLocal, newQuantity: number) => void;
}
/**
 * `GroupedCartItems` component displays grouped items in the cart with the ability to modify their quantity or remove them.
 *
 * @component
 * @param {GroupedCartItemsProps} props - The props for the component.
 * @returns {JSX.Element} The rendered grouped cart items component.
 *
 * @example
 * return (
 *   <GroupedCartItems
 *     groupedItems={groupedItems}
 *     handleDelete={handleDelete}
 *     handleUpdateQuantity={handleUpdateQuantity}
 *   />
 * )
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on custom `Button` and `TrashIcon` components:
 * - `Button` for the quantity modification and delete buttons.
 * - `TrashIcon` for the delete icon.
 */
export const GroupedCartItems = ({
  groupedItems,
  handleDelete,
  handleUpdateQuantity
}: GroupedCartItemsProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-6">
      {Object.keys(groupedItems).map(title => (
        <div key={title} className="space-y-4">
          {/* Title of the event */}
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
          <div className="flex flex-col gap-4">
            {groupedItems[title].map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white dark:bg-gray-800 p-1 rounded-lg  transition-transform duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  {/* Quantity modification buttons */}
                  <div className="flex items-center gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => handleDelete(item)}
                      className="hover:bg-red-500 hover:text-white transition-colors duration-200"
                    >
                      <TrashIcon className="w-5 h-5" />
                    </Button>
                    <Button
                      onClick={() => handleUpdateQuantity(item, Math.max(1, item.quantity - 1))}
                      disabled={item.quantity === 1}
                      className="px-4 py-1 text-sm border border-gray-300 text-black bg-white hover:bg-rose-500 hover:text-white rounded transition-colors duration-200"
                    >
                      -
                    </Button>
                    <span className="text-gray-900 dark:text-gray-100">{item.quantity}</span>
                    <Button
                      onClick={() => handleUpdateQuantity(item, item.quantity + 1)}
                      className="px-4 py-1 text-sm border border-gray-300 text-black bg-white hover:bg-rose-500 hover:text-white rounded transition-colors duration-200"
                    >
                      +
                    </Button>
                  </div>
                  <div className="text-gray-900 dark:text-gray-100 font-medium">
                    {`${item.priceFormula}`}
                  </div>
                </div>
                <div className="text-gray-900 dark:text-gray-100 font-semibold">
                  {`€${item.price * item.quantity}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
