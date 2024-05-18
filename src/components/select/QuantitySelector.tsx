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
    <div className="flex items-center gap-2">
      <Button
        className="w-10 h-10 grid place-items-center"
        variant="outline"
        onClick={decrementQuantity}
      >
        <MinusIcon className="w-4 h-4" />
      </Button>
      <div className="font-semibold">{quantity}</div>
      <Button
        className="w-10 h-10 grid place-items-center"
        variant="outline"
        onClick={incrementQuantity}
      >
        <PlusIcon className="w-4 h-4" />
      </Button>
    </div>
  );
};
