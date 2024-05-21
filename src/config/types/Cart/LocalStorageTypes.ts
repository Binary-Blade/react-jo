import { CreateCartItemLocalDto } from '../../dtos/LocalCartItem.dto';

export interface LocalCartStoreType {
  cartItemsLocal: CreateCartItemLocalDto[];
  addItemToCartLocal: (cartItem: any) => void;
  updateCartItemLocal: (cartItemId: number, updateData: Partial<CreateCartItemLocalDto>) => void;
  removeCartItemLocal: (eventId: number, priceFormula: string) => void;
  clearCartItemsLocal: () => void;
  clearCartLocal: () => void;
}
