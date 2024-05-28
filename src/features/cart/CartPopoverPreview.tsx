import { FC, useCallback } from 'react';
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
import { CartItemLocal } from '@/config/interfaces/cart/cart-item.interface';

/**
 * `CartPopoverPreview` component displays a popover preview of the user's shopping cart.
 * It includes a summary of the cart items, total price, and actions to delete items or proceed to checkout.
 *
 * @component
 * @returns {JSX.Element} The rendered cart popover preview component.
 *
 * @example
 * return (
 *   <CartPopoverPreview />
 * )
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components, hooks, and stores:
 * - `Popover`, `PopoverContent`, `PopoverTrigger` for popover functionality.
 * - `ShoppingCartIcon` for the cart icon trigger.
 * - `GroupedCartItems` for displaying grouped cart items.
 * - `Button` for the checkout button.
 * - `Separator` for separating content sections.
 * - `useAuthStore`, `useLocalCartStore`, `useCartStore` for state management.
 * - `useGroupByTitle` hook for grouping cart items by title.
 * - `useToast` for displaying toast notifications.
 */
export const CartPopoverPreview: FC = (): JSX.Element => {
  // Extract authentication state and actions
  const { userId, isAuthenticated } = useAuthStore();

  // Extract local cart state and actions
  const { cartItemsLocal, removeCartItemLocal, updateCartItemQuantity } = useLocalCartStore();

  // Extract cart synchronization action
  const { syncCartItems } = useCartStore();

  // Extract toast notification function
  const { toast } = useToast();

  // Group cart items by title using custom hook
  const groupedItems = useGroupByTitle(cartItemsLocal);

  // Calculate total number of items in the cart
  const totalItems = cartItemsLocal.reduce((acc, item) => acc + item.quantity, 0);

  // Calculate total price of the cart
  const totalCartPrice = cartItemsLocal.reduce((acc, item) => acc + item.price * item.quantity, 0);

  /**
   * Handle item deletion from the cart.
   *
   * @param {CartItemLocal} item - The cart item to delete.
   */
  const handleDelete = (item: CartItemLocal) => {
    toast({
      title: 'Ticket supprimé',
      description: `Formule ${item.priceFormula} supprimée du panier`
    });
    removeCartItemLocal(item.eventId, item.priceFormula);
  };

  /**
   * Handle updating item quantity in the cart.
   *
   * @param {CartItemLocal} item - The cart item to update.
   * @param {number} newQuantity - The new quantity of the item.
   */
  const handleUpdateQuantity = (item: CartItemLocal, newQuantity: number) => {
    updateCartItemQuantity(item.eventId, item.priceFormula, newQuantity);
  };

  /**
   * Handle proceeding to checkout.
   * If the user is not authenticated, navigate to the authentication page.
   * Otherwise, synchronize cart items and navigate to the checkout page.
   */
  const handleReserve = useCallback(async () => {
    if (!isAuthenticated) {
      return navigate('/auth');
    }
    if (userId) await syncCartItems(userId);
    navigate('/checkout');
  }, [userId, isAuthenticated, syncCartItems, navigate]);

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
          <GroupedCartItems
            groupedItems={groupedItems}
            handleDelete={handleDelete}
            handleUpdateQuantity={handleUpdateQuantity}
          />
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
            Valider le panier
          </Button>
          <div className="text-sm text-gray-400 text-center">Vous ne serez pas encore facturé</div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
