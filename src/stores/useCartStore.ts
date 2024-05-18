import { create } from 'zustand';
import { CartService } from '@/services/CartService';
import { debounce, filterProperties } from '@/lib/utils';
import { LocalCartService } from '@/services/LocalCartService';
import { useLocalCartStore } from './useLocalCartStore';
import { CartStoreType } from '@/config/types/Cart/CartStoreType';
import { CreateCartItemDto } from '@/config/dtos/CartItem.dto';

export const useCartStore = create<CartStoreType>((set, get) => ({
  cartItems: [],
  cartId: LocalCartService.getStoredCartId(),
  loading: false,
  error: null,

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
