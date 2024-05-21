import { useCallback } from 'react';
import { navigate } from 'wouter/use-browser-location';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useAuthStore } from '@/stores/useAuthStore';
import useLocalCartStore from '@/stores/useLocalCartStore';
import useCartStore from '@/stores/useCartStore';
import { ShoppingCartIcon } from '@/components/ui/IconComponents';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { GroupedCartItems } from './CartItems';
import { useGroupByTitle } from '@/hooks/useGroupByTitle';
import placeholderImage from '@/assets/images/card_home.webp';

export const CartPopoverPreview = () => {
  const { userId, isAuthenticated } = useAuthStore();
  const { cartItemsLocal, removeCartItemLocal } = useLocalCartStore();
  const { syncCartItems } = useCartStore();
  const { toast } = useToast();

  const groupedItems = useGroupByTitle(cartItemsLocal);
  const totalItems = cartItemsLocal.reduce((acc, item) => acc + item.quantity, 0);
  const totalCartPrice = cartItemsLocal.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleDelete = (item: any) => {
    toast({
      title: 'Ticket supprimé',
      description: `Formule ${item.priceFormula} supprimée du panier`
    });
    removeCartItemLocal(item.eventId, item.priceFormula);
  };

  const handleReserve = useCallback(async () => {
    if (!isAuthenticated) {
      return navigate('/auth');
    }
    if (userId) await syncCartItems(userId);
    navigate('/checkout');
  }, [userId, navigate, syncCartItems]);

  return (
    <Popover>
      <PopoverTrigger>
        <ShoppingCartIcon
          className="w-7 h-7 text-gray-800 dark:text-gray-200 hover:text-rose-500 transition-colors"
          aria-label="Open Cart"
        />
      </PopoverTrigger>
      <PopoverContent className="w-96 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-gray-800">
        <img
          src={placeholderImage}
          alt="Cart Banner"
          className="w-full h-32 object-cover rounded-t-lg"
        />
        <div className="space-y-4 mt-4">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold" aria-label="Cart Title">
              Panier - {totalItems ? `${totalItems} articles` : 'Aucun article dans le panier'}
            </h2>
          </div>
          <Separator />
          <GroupedCartItems groupedItems={groupedItems} handleDelete={handleDelete} />
          <div className="flex justify-between items-center">
            <div className="font-semibold">Total</div>
            <div className="font-semibold" aria-label="Total Price">
              {`€${totalCartPrice}`}
            </div>
          </div>
          <Separator className="my-2" />
          <Button
            variant="outline"
            className="w-full flex justify-center items-center bg-rose-600 text-white hover:bg-rose-400 hover:text-white transition-all"
            onClick={handleReserve}
            aria-label="Proceed to Checkout"
          >
            Passer la commande
          </Button>
          <div className="text-sm text-gray-400 text-center">Vous ne serez pas encore facturé</div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
