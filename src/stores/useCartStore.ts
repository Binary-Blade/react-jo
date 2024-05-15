import { create } from 'zustand';
import { CartService } from '@/services/CartService';
import { debounce, filterProperties } from '@/lib/utils';
import { LocalCartService } from '@/services/LocalCartService';
import { useLocalCartStore } from './useLocalCartStore';
import { CartStoreType } from '@/config/types/Cart/CartStoreType';

export const useCartStore = create<CartStoreType>((set, get) => ({
  cartItems: [],
  cartId: LocalCartService.getStoredCartId(),

  addItemToCart: async (userId: number, cartItem) => {
    const allowedProps = ['eventId', 'priceFormula', 'quantity'] as const;
    const dataToSend = filterProperties(cartItem, allowedProps);
    try {
      const data = await CartService.addItemToCart(userId, dataToSend);
      set(state => {
        // Ensure unique cart items by cartItemId
        const newCartItems = state.cartItems.some(item => item.cartItemId === data.cartItemId)
          ? state.cartItems.map(item =>
              item.cartItemId === data.cartItemId ? { ...item, ...data } : item
            )
          : [...state.cartItems, data];

        const cartId = data.cart.cartId;
        LocalCartService.setStoredCartId(cartId);
        return { cartItems: newCartItems, cartId: data.cart.cartId };
      });
    } catch (error) {
      console.error('Failed to add item to cart:', error);
    }
  },

  updateCartItem: debounce(async (userId, cartId, cartItemId, newQuantity) => {
    try {
      const data = await CartService.updateCartItem(userId, cartId, cartItemId, newQuantity);
      set(state => {
        const updatedCartItems = state.cartItems.map(item =>
          item.cartItemId === cartItemId ? { ...item, ...data } : item
        );
        return { cartItems: updatedCartItems };
      });
    } catch (error) {
      console.error('Failed to update cart item:', error);
    }
  }, 500),

  syncCartItems: async (userId: number) => {
    const localCartItems = LocalCartService.getStoredCartItems();
    if (localCartItems && localCartItems.length > 0) {
      try {
        await Promise.all(localCartItems.map(item => get().addItemToCart(userId, item)));
        // Assuming useLocalCartStore is accessible here
        useLocalCartStore.getState().clearCartItemsLocal();
      } catch (error) {
        console.error('Error syncing local cart items:', error);
        throw error;
      }
    }
  },

  fetchCartItems: async (userId, cartId) => {
    try {
      const data = await CartService.findAllItemsInCart(userId, cartId);
      set({ cartItems: data, cartId });
    } catch (error) {
      console.error('Failed to fetch cart items:', error);
    }
  },

  removeCartItem: async (userId, cartId, cartItemId) => {
    try {
      await CartService.removeItemFromCart(userId, cartId, cartItemId);
      set(state => ({
        cartItems: state.cartItems.filter(item => item.cartItemId !== cartItemId)
      }));
    } catch (error) {
      console.error('Failed to remove cart item:', error);
    }
  },

  clearCart: async () => {
    try {
      useLocalCartStore.getState().clearCartLocal();
    } catch (error) {
      console.error('Failed to clear cart:', error);
    }
  }
}));

export default useCartStore;
