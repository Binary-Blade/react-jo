export interface CartItem {
  price: number;
  priceFormula: string;
  event: {
    eventId: number;
  };
  cartItemId: number;
  quantity: number;
  cart: {
    cartId: number;
  };
  createdAt: string;
  updatedAt: string;
}
