import { PriceFormula } from '../enums/PriceFormula.enum';

export interface CreateCartItemLocalDto {
  quantity: number;
  priceFormula: PriceFormula;
  eventId: number;
  price: number;
  title: string;
}
