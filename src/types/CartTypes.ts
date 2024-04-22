
// Interface for the functions available in the cart store
export interface CartState {
    cartItems: CartItem[];
    fetchCartItems: (userId: number, cartId: number) => Promise<void>;
    addItemToCart: (userId: number, cartItem: CreateCartItemDto) => Promise<void>;
    updateCartItem: (userId: number, cartId: number, cartItemId: number, updateData: UpdateCartItemDto) => Promise<void>;
    removeCartItem: (userId: number, cartId: number, cartItemId: number) => Promise<void>;
}

// src/types/CartItemTypes.ts
export interface CartItem {
    cartItemId: number;
    eventId: number; // Assuming event ID is needed explicitly
    quantity: number;
    createdAt: string;
    updatedAt: string;
}

export interface CreateCartItemDto {
    eventId: number;
    quantity: number;
}

export interface UpdateCartItemDto {
    quantity: number;
}
