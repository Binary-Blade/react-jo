import { create } from 'zustand';
import { CartService } from '@/services/CartService';
import { CartItem, CreateCartItemDto, UpdateCartItemDto } from '@/types/CartTypes';

interface CartState {
    cartItems: CartItem[];
    cartId?: number;  // Optional if some carts might not yet have an ID
    fetchCartItems: (userId: number, cartId: number) => Promise<void>;
    addItemToCart: (userId: number, cartItem: CreateCartItemDto) => Promise<void>;
    updateCartItem: (userId: number, cartId: number, cartItemId: number, updateData: UpdateCartItemDto) => Promise<void>;
    removeCartItem: (userId: number, cartId: number, cartItemId: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
    cartItems: [],
    fetchCartItems: async (userId, cartId) => {
        const data = await CartService.findAllItemsInCart(userId, cartId);
        set({ cartItems: data });
    },
    addItemToCart: async (userId, cartItem) => {
        const data = await CartService.addItemToCart(userId, cartItem);
        set({ cartItems: [...get().cartItems, data] });
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
