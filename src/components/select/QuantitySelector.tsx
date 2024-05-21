import { Button } from '@/components/ui/button';
import { MinusIcon, PlusIcon } from '@/components/ui/IconComponents';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
}

export const QuantitySelector = ({ quantity, onQuantityChange }: QuantitySelectorProps) => {
  const decrementQuantity = () => {
    if (quantity === 1) return;
    const newQuantity = quantity - 1;
    onQuantityChange(newQuantity);
  };

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    onQuantityChange(newQuantity);
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        className="flex items-center justify-center  rounded-full 
        text-gray-900 hover:bg-rose-500 hover:text-white transition-colors"
        variant="outline"
        onClick={decrementQuantity}
        aria-label="decrement"
      >
        <MinusIcon className="w-4 h-4" />
      </Button>
      <div className="font-semibold text-lg text-gray-900 dark:text-gray-100">{quantity}</div>
      <Button
        className="flex items-center justify-center  rounded-full 
        text-gray-900 hover:bg-rose-500 hover:text-white transition-colors"
        variant="outline"
        onClick={incrementQuantity}
        aria-label="increment"
      >
        <PlusIcon className="w-4 h-4" />
      </Button>
    </div>
  );
};
