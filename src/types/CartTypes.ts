export interface CartState {
    cartItems: CartItem[];
    cartId: number | null;
    fetchCartItems: (userId: number, cartId: number) => Promise<void>;
    addItemToCart: (userId: number, cartItem: CreateCartItemDto) => Promise<void>;
    updateCartItem: (userId: number, cartId: number, cartItemId: number, quantity: number) => Promise<void>;
    removeCartItem: (userId: number, cartId: number, cartItemId: number) => Promise<void>;
}

export interface CartItem {
    cartItemId: number;
    quantity: number;
    price: number;
    ticketType: string;
    createdAt: string;
    updatedAt: string;
    eventId: number;
    event: {
        title: string;
    };
    cart: {
        cartId: number;
    };
}

export interface CreateCartItemDto {
    eventId: number;
    quantity: number;
}

export interface CartTicketProps {
    cartItems: CartItem[];
}

export interface GroupedItems {
    [key: string]: CartItem[];
}
