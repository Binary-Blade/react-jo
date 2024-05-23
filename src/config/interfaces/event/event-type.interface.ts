import { CategoryEvent } from '@/config/enums/CategoryEvent.enum';

/**
 * `prices` defines the structure of a price object.
 * It includes properties for the event price ID, price formula, and the price amount.
 *
 * @interface prices
 * @property {number} eventPriceId - The ID of the event price.
 * @property {string} priceFormula - The formula used to calculate the price.
 * @property {number} price - The price amount.
 *
 * @example
 * const price: prices = {
 *   eventPriceId: 1,
 *   priceFormula: 'standard',
 *   price: 50.00
 * };
 *
 * @remarks
 * This interface is used to type the price objects, ensuring they contain the necessary details
 * for managing event pricing within the application.
 */
export interface prices {
  eventPriceId: number;
  priceFormula: string;
  price: number;
}

/**
 * `EventDetails` defines the structure of event details.
 * It includes properties for the event ID, category type, and start date.
 *
 * @interface EventDetails
 * @property {number} eventId - The ID of the event.
 * @property {string} categoryType - The category type of the event.
 * @property {string} startDate - The start date of the event.
 */
export interface EventDetails {
  eventId: number;
  categoryType: string;
  startDate: string;
}

/**
 * `EventType` defines the structure of an event.
 * It includes properties for event details, such as ID, title, descriptions, category, pricing, dates, quantities, and revenue.
 *
 * @interface EventType
 * @property {number|undefined} eventId - The ID of the event (optional).
 * @property {string} title - The title of the event.
 * @property {string} shortDescription - A short description of the event.
 * @property {string} longDescription - A long description of the event.
 * @property {CategoryEvent} categoryType - The category of the event.
 * @property {number} basePrice - The base price of the event.
 * @property {string} eventName - The name of the event.
 * @property {string} startDate - The start date of the event.
 * @property {string} endDate - The end date of the event.
 * @property {number} quantityAvailable - The quantity of tickets available for the event.
 * @property {number} quantitySold - The quantity of tickets sold for the event.
 * @property {number} revenueGenerated - The revenue generated from the event.
 * @property {string} createdAt - The timestamp when the event was created.
 * @property {string} updatedAt - The timestamp when the event was last updated.
 * @property {prices[]} prices - An array of price objects associated with the event.
 *
 * @example
 * const event: EventType = {
 *   eventId: 1,
 *   title: 'Concert',
 *   shortDescription: 'A short description of the concert.',
 *   longDescription: 'A detailed description of the concert.',
 *   categoryType: CategoryEvent.MUSIC,
 *   basePrice: 50.00,
 *   eventName: 'Live Concert',
 *   startDate: '2023-06-01T00:00:00Z',
 *   endDate: '2023-06-01T23:59:59Z',
 *   quantityAvailable: 100,
 *   quantitySold: 50,
 *   revenueGenerated: 2500.00,
 *   createdAt: '2023-05-01T00:00:00Z',
 *   updatedAt: '2023-05-02T00:00:00Z',
 *   prices: [
 *     { eventPriceId: 1, priceFormula: 'standard', price: 50.00 }
 *   ]
 * };
 *
 * @remarks
 * This interface is used to type the event objects, ensuring they contain the necessary details
 * for managing event data within the application.
 */
export interface EventType {
  eventId?: number | undefined;
  title: string;
  shortDescription: string;
  longDescription: string;
  categoryType: CategoryEvent;
  basePrice: number;
  eventName: string;
  startDate: string;
  endDate: string;
  quantityAvailable: number;
  quantitySold: number;
  revenueGenerated: number;
  createdAt: string;
  updatedAt: string;
  prices: prices[];
}

/**
 * `EventValues` defines the structure of event values.
 * It includes properties for quantities, revenue, and pricing.
 *
 * @interface EventValues
 * @property {number} quantityAvailable - The quantity of tickets available for the event.
 * @property {number} quantitySold - The quantity of tickets sold for the event.
 * @property {number} revenueGenerated - The revenue generated from the event.
 * @property {prices[]} prices - An array of price objects associated with the event.
 *
 * @example
 * const eventValues: EventValues = {
 *   quantityAvailable: 100,
 *   quantitySold: 50,
 *   revenueGenerated: 2500.00,
 *   prices: [
 *     { eventPriceId: 1, priceFormula: 'standard', price: 50.00 }
 *   ]
 * };
 *
 * @remarks
 * This interface is used to type the event values, ensuring they contain the necessary details
 * for managing summary event data within the application.
 */
export interface EventValues {
  quantityAvailable: number;
  quantitySold: number;
  revenueGenerated: number;
  prices: prices[];
}
