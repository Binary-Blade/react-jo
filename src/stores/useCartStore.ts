import { create } from 'zustand';
import { CartService } from '@/services/CartService';
import { CartItem, CartStoreType } from '@/config/types/CartTypes';
import { debounce } from '@/lib/utils';
import { LocalCartService } from '@/services/LocalCartService';
import { TAXES_10 } from '@/config/constants';

export const useCartStore = create<CartStoreType>((set, get) => ({
  cartItems: [],
  cartId: LocalCartService.getStoredCartId(),

  addItemToCart: async (userId, cartItem) => {
    try {
      const data = await CartService.addItemToCart(userId, cartItem);
      set(state => {
        // Ensure unique cart items by cartItemId
        const newCartItems = state.cartItems.some(item => item.cartItemId === data.cartItemId)
          ? state.cartItems.map(item =>
              item.cartItemId === data.cartItemId ? { ...item, ...data } : item
            )
          : [...state.cartItems, data];

        // Update local storage and state
        LocalCartService.setStoredCartId(data.cart.cartId);
        return { cartItems: newCartItems, cartId: data.cart.cartId };
      });
    } catch (error) {
      console.error('Failed to add item to cart:', error);
    }
  },

  aggregateCartData: () => {
    const items = get().cartItems;
    const totalsByCategory = {};
    let grandTotal = 0;

    items.forEach(item => {
      const categoryTotal = (totalsByCategory[item.priceFormula] || 0) + item.price * item.quantity;
      totalsByCategory[item.priceFormula] = categoryTotal;
      grandTotal += item.price * item.quantity;
    });

    return { totalsByCategory, grandTotal };
  },

  updateCartItem: debounce(async (userId, cartId, cartItemId, newQuantity) => {
    try {
      const data = await CartService.updateCartItem(userId, cartId, cartItemId, newQuantity);
      set(state => {
        const updatedCartItems = state.cartItems.map(item =>
          item.cartItemId === cartItemId ? { ...item, ...data } : item
        );
        LocalCartService.setStoredCartItems(updatedCartItems);
        return { cartItems: updatedCartItems };
      });
    } catch (error) {
      console.error('Failed to update cart item:', error);
    }
  }, 500),

  syncCartItems: async (userId: number) => {
    const localCartItems = LocalCartService.getStoredCartItems();
    if (localCartItems && localCartItems.length > 0) {
      await Promise.all(localCartItems.map((item: CartItem) => get().addItemToCart(userId, item)));
      LocalCartService.clearStoredCartItems();
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
      set({ cartItems: [], cartId: null });
    } catch (error) {
      console.error('Failed to clear cart:', error);
    }
  }
}));

export default useCartStore;
