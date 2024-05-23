import { Button } from '@/components/ui/button';
import { MinusIcon, PlusIcon } from '@/components/ui/IconComponents';
import { useEffect, useState } from 'react';
import useCartStore from '@/stores/useCartStore';
import { useAuthStore } from '@/stores/useAuthStore';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { useFormattedDates } from '@/hooks';
import { GenericAlertDialog } from '@/components/dialog/AlertDialogGeneric';

interface CartItemsProps {
  cartId: number;
  cartItemId: number;
  eventName: string;
  quantity: number;
  startDate: string;
  endDate: string;
}

/**
 * `CardOneTicket` component displays an individual ticket in the cart.
 * It allows the user to adjust the quantity or remove the ticket from the cart.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {number} props.cartId - The ID of the cart.
 * @param {number} props.cartItemId - The ID of the cart item.
 * @param {string} props.eventName - The name of the event.
 * @param {number} props.quantity - The initial quantity of the item.
 * @param {string} props.startDate - The start date of the event.
 * @param {string} props.endDate - The end date of the event.
 * @returns {JSX.Element} The rendered card one ticket component.
 *
 * @example
 * return (
 *   <CardOneTicket
 *     cartId={1}
 *     cartItemId={1}
 *     eventName="Event Name"
 *     quantity={2}
 *     startDate="2023-01-01"
 *     endDate="2023-01-02"
 *   />
 * );
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components and hooks:
 * - `Button` for the increment and decrement buttons.
 * - `MinusIcon`, `PlusIcon` for the button icons.
 * - `Separator` for separating content sections.
 * - `GenericAlertDialog` for the confirmation dialog when removing an item.
 * - `useFormattedDates` hook for formatting event dates.
 * - `useCartStore`, `useAuthStore` for state management.
 */
export const CardOneTicket = ({
  cartId,
  cartItemId,
  eventName,
  quantity: initialQuantity,
  startDate,
  endDate
}: CartItemsProps): JSX.Element => {
  // Extract cart item update and removal functions from the cart store
  const updateCartItem = useCartStore(state => state.updateCartItem);
  const removeCartItem = useCartStore(state => state.removeCartItem);
  // Extract user ID from the auth store
  const userId = useAuthStore(state => state.userId);

  // Format the start and end dates using the custom hook
  const dateText = useFormattedDates(startDate, endDate);
  const [quantity, setQuantity] = useState<number>(initialQuantity);
  const [showDialog, setShowDialog] = useState<boolean>(false);

  /**
   * Handle incrementing the quantity.
   */
  const handleIncrement = () => handleQuantityChange(quantity + 1);

  /**
   * Handle decrementing the quantity.
   * If the quantity is 1, show the confirmation dialog.
   */
  const handleDecrement = () => {
    if (quantity === 1) {
      setShowDialog(true);
    } else if (quantity > 1) {
      handleQuantityChange(quantity - 1);
    }
  };

  /**
   * Handle changing the quantity.
   *
   * @param {number} newQuantity - The new quantity to set.
   */
  const handleQuantityChange = (newQuantity: number) => {
    if (cartId === null || userId === null) {
      console.error('Invalid operation without cartId or cartItemId');
      return; // Stop further execution
    }
    setQuantity(newQuantity);
    updateCartItem(userId, cartId, cartItemId, newQuantity);
  };

  /**
   * Confirm and remove the item from the cart.
   */
  const confirmRemoveItem = () => {
    handleRemoveItem();
    setShowDialog(false);
  };

  /**
   * Cancel the item removal.
   */
  const cancelRemoveItem = () => {
    setShowDialog(false);
  };

  /**
   * Handle removing the item from the cart.
   */
  const handleRemoveItem = () => {
    if (cartId === null || userId === null) {
      console.error('Invalid operation without cartId or cartItemId');
      return;
    }
    removeCartItem(userId, cartId, cartItemId).catch(console.error);
  };

  // Update the quantity state when the initial quantity changes
  useEffect(() => {
    setQuantity(initialQuantity);
  }, [initialQuantity]);

  return (
    <div className="flex items-center justify-between p-2">
      <div>
        <h3 className="font-semibold">{eventName}</h3>
        <p className="text-gray-500 dark:text-gray-400">{dateText}</p>
      </div>
      <div className="flex items-center gap-2">
        {/* Decrement button */}
        <Button
          size="icon"
          variant="outline"
          onClick={handleDecrement}
          aria-label="Decrease Quantity"
          className="hover:bg-red-500 hover:text-white transition-colors"
        >
          <MinusIcon className="h-5 w-5" />
        </Button>
        {/* Display the current quantity */}
        <span className="text-lg font-medium text-gray-900 dark:text-white">{quantity}</span>
        {/* Increment button */}
        <Button
          size="icon"
          variant="outline"
          onClick={handleIncrement}
          aria-label="Increase Quantity"
          className="hover:bg-green-500 hover:text-white transition-colors"
        >
          <PlusIcon className="h-5 w-5" />
        </Button>
      </div>
      <Separator />
      {/* Confirmation dialog for removing the item */}
      <GenericAlertDialog
        isOpen={showDialog}
        onClose={cancelRemoveItem}
        onConfirm={confirmRemoveItem}
        title="Are you sure?"
        description="This action cannot be undone. This will permanently remove the item from your cart."
      />
    </div>
  );
};
