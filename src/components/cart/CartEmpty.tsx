import { Button } from '@/components/ui/button';
import { navigate } from 'wouter/use-browser-location';
import { ButtonBack } from '../common/ButtonBack';

export const CartEmpty = () => (
  <div className="container mx-auto py-12 px-4 md:px-6">
    <div className="flex flew-row items-center gap-4">
      <ButtonBack />
      <h1 className="text-3xl font-bold ">Your Cart</h1>
    </div>
    <div className="text-center">
      <p className="text-xl text-gray-600">Your cart is empty.</p>
      <Button
        className="mt-6"
        onClick={() => {
          navigate('/events');
        }}
      >
        Start Shopping
      </Button>
    </div>
  </div>
);
