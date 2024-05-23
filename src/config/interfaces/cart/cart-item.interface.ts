import { PriceFormula } from '@/config/enums/PriceFormula.enum';

/**
 * `CartItem` defines the structure of a cart item.
 * It includes properties for the cart item details, associated event, and timestamps.
 *
 * @interface CartItem
 * @property {number} cartItemId - The ID of the cart item.
 * @property {number} eventId - The ID of the associated event.
 * @property {string} priceFormula - The formula used to calculate the price.
 * @property {number} quantity - The quantity of the cart item.
 * @property {number} price - The price of the cart item.
 * @property {Object} event - The associated event details.
 * @property {number} event.eventId - The ID of the event.
 * @property {string} event.title - The title of the event.
 * @property {string} event.startDate - The start date of the event.
 * @property {string} event.endDate - The end date of the event.
 * @property {string} createdAt - The timestamp when the cart item was created.
 * @property {string} updatedAt - The timestamp when the cart item was last updated.
 * @property {Object} cart - The associated cart details.
 * @property {number} cart.cartId - The ID of the cart.
 *
 * @example
 * const cartItem: CartItem = {
 *   cartItemId: 1,
 *   eventId: 100,
 *   priceFormula: 'standard',
 *   quantity: 2,
 *   price: 50.00,
 *   event: {
 *     eventId: 100,
 *     title: 'Concert',
 *     startDate: '2023-06-01T00:00:00Z',
 *     endDate: '2023-06-01T23:59:59Z',
 *   },
 *   createdAt: '2023-05-01T00:00:00Z',
 *   updatedAt: '2023-05-02T00:00:00Z',
 *   cart: {
 *     cartId: 10,
 *   },
 * };
 *
 * @remarks
 * This interface is used to type the cart items, ensuring they contain the necessary details
 * for managing cart state within the application.
 */
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

/**
 * `CartItemLocal` defines the structure of a local cart item.
 * It includes properties for the cart item details, such as price, formula, event ID, quantity, and title.
 *
 * @interface CartItemLocal
 * @property {number} price - The price of the cart item.
 * @property {PriceFormula} priceFormula - The formula used to calculate the price.
 * @property {number} eventId - The ID of the associated event.
 * @property {number} quantity - The quantity of the cart item.
 * @property {string} title - The title of the event.
 *
 * @example
 * const cartItemLocal: CartItemLocal = {
 *   price: 50.00,
 *   priceFormula: PriceFormula.STANDARD,
 *   eventId: 100,
 *   quantity: 2,
 *   title: 'Concert'
 * };
 *
 * @remarks
 * This interface is used to type the local cart items, ensuring they contain the necessary details
 * for managing local cart state within the application.
 */
export interface CartItemLocal {
  price: number;
  priceFormula: PriceFormula;
  eventId: number;
  quantity: number;
  title: string;
}
