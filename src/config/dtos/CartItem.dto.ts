export interface CreateCartItemDto {
  eventId: number;
  quantity: number;
  price: number;
  priceFormula: string;
}

export interface UpdateCartItemDto {
  quantity: number;
  priceFormula: string;
  eventId: number;
}
