import { CreateCartItemDto } from '@/config/dtos/CartItem.dto';
import { CartItem } from './CartTypes';

export interface CartStoreType {
  cartItems: CartItem[];
  cartId?: number | null;
  loading: boolean;
  error: string | null;
  fetchCartItems: (userId: number, cartId: number) => Promise<void>;
  addItemToCart: (userId: number, cartItem: CreateCartItemDto) => Promise<void>;
  updateCartItem: (
    userId: number,
    cartId: number,
    cartItemId: number,
    newQuantity: number
  ) => Promise<void>;
  syncCartItems: (userId: number) => Promise<void>;
  removeCartItem: (userId: number, cartId: number, cartItemId: number) => Promise<void>;
  clearCart: () => void;
}
