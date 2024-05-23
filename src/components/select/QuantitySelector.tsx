import { Button } from '@/components/ui/button';
import { MinusIcon, PlusIcon } from '@/components/ui/IconComponents';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
}

/**
 * `QuantitySelector` component allows the user to increment and decrement a quantity value.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {number} props.quantity - The current quantity value.
 * @param {Function} props.onQuantityChange - The function to handle quantity changes.
 * @returns {JSX.Element} The rendered QuantitySelector component.
 *
 * @example
 * return <QuantitySelector quantity={1} onQuantityChange={(newQuantity) => console.log(newQuantity)} />;
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components and icons:
 * - `Button` for the increment and decrement buttons.
 * - `MinusIcon`, `PlusIcon` for the button icons.
 */
export const QuantitySelector = ({
  quantity,
  onQuantityChange
}: QuantitySelectorProps): JSX.Element => {
  /**
   * Handle decrementing the quantity.
   * Prevents quantity from going below 1.
   */
  const decrementQuantity = () => {
    if (quantity === 1) return;
    const newQuantity = quantity - 1;
    onQuantityChange(newQuantity);
  };

  /**
   * Handle incrementing the quantity.
   */
  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    onQuantityChange(newQuantity);
  };

  return (
    <div className="flex items-center gap-4">
      {/* Decrement Button */}
      <Button
        className="flex items-center justify-center rounded-full text-gray-900 hover:bg-rose-500 hover:text-white transition-colors"
        variant="outline"
        onClick={decrementQuantity}
        aria-label="decrement"
      >
        <MinusIcon className="w-4 h-4" />
      </Button>
      {/* Quantity Display */}
      <div className="font-semibold text-lg text-gray-900 dark:text-gray-100">{quantity}</div>
      {/* Increment Button */}
      <Button
        className="flex items-center justify-center rounded-full text-gray-900 hover:bg-rose-500 hover:text-white transition-colors"
        variant="outline"
        onClick={incrementQuantity}
        aria-label="increment"
      >
        <PlusIcon className="w-4 h-4" />
      </Button>
    </div>
  );
};
