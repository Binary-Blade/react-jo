import { PriceFormula } from '@/config/enums/PriceFormula.enum';

export interface CartItem {
  cartItemId: number;
  eventId: number;
  priceFormula: string;
  quantity: number;
  price: number; // Ensure price is a number
  event: {
    eventId: number;
    title: string;
    startDate: string;
    endDate: string;
  };
  createdAt: string;
  updatedAt: string;
  cart: {
    cartId: number;
  };
}

export interface CartItemLocal {
  price: number;
  priceFormula: PriceFormula;
  eventId: number;
  quantity: number;
}
