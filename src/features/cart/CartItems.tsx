import { Button } from '@/components/ui/button';
import { TrashIcon } from '@/components/ui/IconComponents';
import { CartItemLocal } from '@/config/interfaces/cart/cart-item.interface';

interface GroupedCartItemsProps {
  groupedItems: { [eventTitle: string]: CartItemLocal[] };
  handleDelete: (item: CartItemLocal) => void;
}

/**
 * `GroupedCartItems` component is responsible for displaying a list of cart items grouped by event titles.
 * Each group displays the event title and the list of items with options to delete each item.
 *
 * @component
 * @param {GroupedCartItemsProps} props - The props for the component.
 * @param {Object<string, CartItemLocal[]>} props.groupedItems - A dictionary of cart items grouped by event titles.
 * @param {Function} props.handleDelete - Function to handle the deletion of a cart item.
 * @returns {JSX.Element} The rendered grouped cart items component.
 *
 * @example
 * const groupedItems = {
 *   'Event Title 1': [{ id: 1, quantity: 2, priceFormula: 'Standard', price: 50 }],
 *   'Event Title 2': [{ id: 2, quantity: 1, priceFormula: 'VIP', price: 100 }]
 * };
 * const handleDelete = (item) => { console.log(item); };
 * return (
 *   <GroupedCartItems groupedItems={groupedItems} handleDelete={handleDelete} />
 * );
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on custom UI components:
 * - `Button` for the delete button.
 * - `TrashIcon` for the delete icon.
 */
export const GroupedCartItems = ({
  groupedItems,
  handleDelete
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
                className="flex justify-between items-center bg-white dark:bg-gray-800 transition-transform duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  {/* Delete button for the cart item */}
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
