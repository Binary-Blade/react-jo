import { create } from 'zustand';
import { StoreLocalStorage } from '@/utils/storeLocalStorage';
import { CartItem, CreateCartItemDto } from '@/types/CartTypes';
import { CartService } from '@/services/CartService';

interface CartState {
    cartItems: CartItem[];
    cartId?: number | null;
    fetchCartItems: (userId: number, cartId: number) => Promise<void>;
    addItemToCart: (userId: number, cartItem: CreateCartItemDto) => Promise<void>;
    updateCartItem: (userId: number, cartId: number, cartItemId: number, updateData: number) => Promise<void>;
    removeCartItem: (userId: number, cartId: number, cartItemId: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
    cartItems: [],
    cartId: StoreLocalStorage.getStoredCartId(),

    addItemToCart: async (userId, cartItem) => {
        const data = await CartService.addItemToCart(userId, cartItem);
        StoreLocalStorage.setStoredCartId(data.cart.cartId);
        set({ cartItems: [...get().cartItems, data], cartId: data.cart.cartId });
    },
    fetchCartItems: async (userId, cartId) => {
        const data = await CartService.findAllItemsInCart(userId, cartId);
        set({ cartItems: data, cartId });
    },
    updateCartItem: async (userId, cartId, cartItemId, updateData) => {
        const data = await CartService.updateCartItem(userId, cartId, cartItemId, updateData);
        const updatedCartItems = get().cartItems.map(item => item.cartItemId === cartItemId ? { ...item, ...data } : item);
        set({ cartItems: updatedCartItems });
    },
    removeCartItem: async (userId, cartId, cartItemId) => {
        await CartService.removeItemFromCart(userId, cartId, cartItemId);
        const filteredCartItems = get().cartItems.filter(item => item.cartItemId !== cartItemId);
        set({ cartItems: filteredCartItems });
    }
}));

export default useCartStore;
