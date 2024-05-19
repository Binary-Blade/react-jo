import { navigate } from 'wouter/use-browser-location';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useAuthStore } from '@/stores/useAuthStore';
import useLocalCartStore from '@/stores/useLocalCartStore';
import { useCallback } from 'react';
import useCartStore from '@/stores/useCartStore';
import { ShoppingCartIcon } from '@/components/ui/IconComponents';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { CardPreviewCart } from './CardPreviewCart';

export const CartPopoverPreview = () => {
  const { userId } = useAuthStore();
  const { cartItemsLocal, removeCartItemLocal } = useLocalCartStore();
  const { syncCartItems } = useCartStore();

  const totalItems = cartItemsLocal.reduce((acc, item) => acc + item.quantity, 0);
  const totalCartPrice = cartItemsLocal.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleDelete = (item: any) => {
    removeCartItemLocal(item.eventId, item.priceFormula);
  };

  const handleReserve = useCallback(async () => {
    if (!userId) {
      console.error('User ID is missing.');
      return;
    }
    await syncCartItems(userId);
    navigate('/checkout');
  }, [userId, navigate, syncCartItems]);

  return (
    <Popover>
      <PopoverTrigger>
        <ShoppingCartIcon className="w-6 h-6 navbar-cart-button" aria-label="Open Cart" />
      </PopoverTrigger>
      <PopoverContent className="w-96 mx-4 my-10 p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold" aria-label="Cart Title">
              Panier
            </h2>
            <p className="text-md text-gray" aria-live="polite">
              {totalItems ? `Total : ${totalItems} articles` : 'Aucun article dans le panier'}
            </p>
          </div>
          <CardPreviewCart cartItemsLocal={cartItemsLocal} handleDelete={handleDelete} />
          <div className="flex justify-between items-center">
            <div className="font-semibold">Total</div>
            <div className="text-sm text-gray-500 dark:text-gray-400" aria-label="Total Items">
              {totalItems} items
            </div>
            <div aria-label="Total Price">{`€${totalCartPrice}`}</div>
          </div>
          <Separator />
          <Button
            variant="outline"
            className="w-full flex justify-center items-center"
            onClick={handleReserve}
            aria-label="Proceed to Checkout"
            data-id="checkout-button"
          >
            Passer la commande
          </Button>
          <div className="text-sm text-gray-500 text-center dark:text-gray-400">
            Vous ne serez pas encore facturé
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
