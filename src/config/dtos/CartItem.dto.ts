/**
 * `CreateCartItemDto` represents the data transfer object for creating a new cart item.
 *
 * @interface CreateCartItemDto
 * @property {number} eventId - The unique identifier of the event.
 * @property {number} quantity - The quantity of the event tickets to add to the cart.
 * @property {number} price - The price of the event ticket.
 * @property {string} priceFormula - The formula or method used to calculate the price.
 *
 * @example
 * const newCartItem: CreateCartItemDto = {
 *   eventId: 1,
 *   quantity: 2,
 *   price: 100,
 *   priceFormula: "standard"
 * };
 */
export interface CreateCartItemDto {
  eventId: number;
  quantity: number;
  price: number;
  priceFormula: string;
}

/**
 * `UpdateCartItemDto` represents the data transfer object for updating an existing cart item.
 *
 * @interface UpdateCartItemDto
 * @property {number} quantity - The updated quantity of the event tickets in the cart.
 * @property {string} priceFormula - The formula or method used to calculate the updated price.
 * @property {number} eventId - The unique identifier of the event.
 *
 * @example
 * const updatedCartItem: UpdateCartItemDto = {
 *   eventId: 1,
 *   quantity: 3,
 *   priceFormula: "discounted"
 * };
 */
export interface UpdateCartItemDto {
  quantity: number;
  priceFormula: string;
  eventId: number;
}
