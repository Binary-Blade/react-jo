import { create } from 'zustand';
import { CartService } from '@/services/CartService';
import { debounce, filterProperties } from '@/lib/utils';
import { LocalCartService } from '@/services/LocalCartService';
import { useLocalCartStore } from './useLocalCartStore';
import { CreateCartItemDto } from '@/config/dtos/CartItem.dto';
import { CartStoreType } from '@/config/interfaces/cart/cart-store.interface';

/**
 * `useCartStore` is a Zustand store for managing cart state and actions.
 *
 * @constant
 *
 * @example
 * const { cartItems, addItemToCart, removeCartItem } = useCartStore();
 *
 * @remarks
 * This store handles cart operations such as adding, updating, syncing, fetching, and removing cart items.
 */
export const useCartStore = create<CartStoreType>((set, get) => ({
  cartItems: [],
  cartId: LocalCartService.getStoredCartId(),
  loading: false,
  error: null,

  /**
   * Add an item to the cart.
   *
   * @param {number} userId - The ID of the user.
   * @param {CreateCartItemDto} cartItem - The data for the cart item to add.
   *
   * @example
   * const cartItem: CreateCartItemDto = { eventId: 1, priceFormula: 'standard', quantity: 2, price: 50 };
   * await useCartStore.getState().addItemToCart(1, cartItem);
   * console.log('Item added to cart');
   */
  addItemToCart: async (userId: number, cartItem: CreateCartItemDto) => {
    set({ loading: true, error: null });
    try {
      const allowedProps: (keyof CreateCartItemDto)[] = ['eventId', 'priceFormula', 'quantity'];
      const dataToSend = filterProperties(cartItem, allowedProps);
      const data = await CartService.addItemToCart(userId, dataToSend);
      set(state => {
        const cartItems = state.cartItems.map(item =>
          item.cartItemId === data.cartItemId ? { ...item, ...data, price: cartItem.price } : item
        );
        LocalCartService.setStoredCartId(data.cart.cartId);
        return {
          cartItems,
          cartId: data.cart.cartId,
          loading: false
        };
      });
    } catch (error: any) {
      set({ loading: false, error: error.message || 'Failed to add item to cart' });
    }
  },

  /**
   * Update a cart item quantity with debouncing.
   *
   * @param {number} userId - The ID of the user.
   * @param {number} cartId - The ID of the cart.
   * @param {number} cartItemId - The ID of the cart item.
   * @param {number} newQuantity - The new quantity of the cart item.
   * @returns {Promise<void>}
   *
   * @example
   * await useCartStore.getState().updateCartItem(1, 1, 1, 3);
   * console.log('Cart item updated');
   */
  updateCartItem: debounce(async (userId, cartId, cartItemId, newQuantity) => {
    set({ loading: true, error: null });
    try {
      const data = await CartService.updateCartItem(userId, cartId, cartItemId, newQuantity);
      set(state => {
        const updatedCartItems = state.cartItems.map(item =>
          item.cartItemId === cartItemId ? { ...item, ...data } : item
        );
        return {
          cartItems: updatedCartItems,
          loading: false
        };
      });
    } catch (error: any) {
      set({ loading: false, error: error.message || 'Failed to update item in cart' });
    }
  }, 500),

  /**
   * Sync local cart items with the server.
   *
   * @param {number} userId - The ID of the user.
   *
   * @example
   * await useCartStore.getState().syncCartItems(1);
   * console.log('Cart items synced');
   */
  syncCartItems: async (userId: number) => {
    const localCartItems = LocalCartService.getStoredCartItems();
    if (localCartItems && localCartItems.length > 0) {
      set({ loading: true, error: null });
      try {
        await Promise.all(localCartItems.map(item => get().addItemToCart(userId, item)));
        // Assuming useLocalCartStore is accessible here
        useLocalCartStore.getState().clearCartItemsLocal();
        set({ loading: false });
      } catch (error: any) {
        set({ loading: false, error: error.message || 'Failed to sync cart items' });
      }
    }
  },

  /**
   * Fetch all items in the cart.
   *
   * @param userId - The ID of the user.
   * @param cartId - The ID of the cart.
   *
   * @example
   * await useCartStore.getState().fetchCartItems(1, 1);
   * console.log('Cart items fetched');
   */
  fetchCartItems: async (userId, cartId) => {
    set({ loading: true, error: null });
    try {
      const data = await CartService.findAllItemsInCart(userId, cartId);
      set({
        cartItems: data,
        cartId,
        loading: false
      });
    } catch (error: any) {
      set({ loading: false, error: error.message || 'Failed to fetch cart items' });
    }
  },

  /**
   * Remove an item from the cart.
   *
   * @param  userId - The ID of the user.
   * @param  cartId - The ID of the cart.
   * @param  cartItemId - The ID of the cart item.
   *
   * @example
   * await useCartStore.getState().removeCartItem(1, 1, 1);
   * console.log('Cart item removed');
   */
  removeCartItem: async (userId, cartId, cartItemId) => {
    set({ loading: true, error: null });
    try {
      await CartService.removeItemFromCart(userId, cartId, cartItemId);
      set(state => ({
        cartItems: state.cartItems.filter(item => item.cartItemId !== cartItemId),
        loading: false
      }));
    } catch (error: any) {
      set({ loading: false, error: error.message || 'Failed to remove item from cart' });
    }
  },

  /**
   * Clear all items from the cart.
   *
   * @example
   * await useCartStore.getState().clearCart();
   * console.log('Cart cleared');
   */
  clearCart: async () => {
    set({ loading: true, error: null });
    try {
      useLocalCartStore.getState().clearCartLocal();
      set({ cartItems: [], loading: false });
    } catch (error: any) {
      set({ loading: false, error: error.message || 'Failed to clear cart' });
    }
  }
}));

export default useCartStore;
