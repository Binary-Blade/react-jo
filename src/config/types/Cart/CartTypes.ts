import { PriceFormula } from '@/config/enums/PriceFormula.enum';

export interface CartItem {
  price: number;
  priceFormula: PriceFormula;
  event: {
    eventId: number;
    title: string;
    startDate: string;
    endDate: string;
  };
  cartItemId: number;
  quantity: number;
  cart: {
    cartId: number;
  };
  createdAt: string;
  updatedAt: string;
}
