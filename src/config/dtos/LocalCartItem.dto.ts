import { PriceFormula } from '../enums/PriceFormula.enum';

/**
 * `CreateCartItemLocalDto` represents the data transfer object for creating a new local cart item.
 *
 * @interface CreateCartItemLocalDto
 * @property {number} quantity - The quantity of the event tickets to add to the cart.
 * @property {PriceFormula} priceFormula - The formula or method used to calculate the price.
 * @property {number} eventId - The unique identifier of the event.
 * @property {number} price - The price of the event ticket.
 * @property {string} title - The title of the event.
 *
 * @example
 * const newLocalCartItem: CreateCartItemLocalDto = {
 *   quantity: 2,
 *   priceFormula: PriceFormula.STANDARD,
 *   eventId: 1,
 *   price: 100,
 *   title: "Concert"
 * };
 */
export interface CreateCartItemLocalDto {
  quantity: number;
  priceFormula: PriceFormula;
  eventId: number;
  price: number;
  title: string;
}
