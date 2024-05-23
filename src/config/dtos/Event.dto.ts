/**
 * `CreateEventDto` represents the data transfer object for creating a new event.
 *
 * @interface CreateEventDto
 * @property {number} [eventId] - The unique identifier of the event (optional).
 * @property {string} title - The title of the event.
 * @property {string} shortDescription - A short description of the event.
 * @property {string} longDescription - A detailed description of the event.
 * @property {number} basePrice - The base price of the event ticket.
 * @property {string} categoryType - The category or type of the event.
 * @property {number} quantityAvailable - The number of available tickets for the event.
 * @property {string} startDate - The start date and time of the event in ISO format.
 * @property {string} endDate - The end date and time of the event in ISO format.
 *
 * @example
 * const newEvent: CreateEventDto = {
 *   title: "Concert",
 *   shortDescription: "A great music concert.",
 *   longDescription: "Enjoy an evening of fantastic music with renowned artists.",
 *   basePrice: 50,
 *   categoryType: "Music",
 *   quantityAvailable: 200,
 *   startDate: "2023-06-01T19:00:00Z",
 *   endDate: "2023-06-01T22:00:00Z"
 * };
 */
export type CreateEventDto = {
  eventId?: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  basePrice: number;
  categoryType: string;
  quantityAvailable: number;
  startDate: string;
  endDate: string;
};

/**
 * `UpdateEventDto` represents the data transfer object for updating an existing event.
 * Fields are optional and can be partially updated.
 *
 * @interface UpdateEventDto
 * @property {string} [title] - The title of the event (optional).
 * @property {string} shortDescription - A short description of the event.
 * @property {string} longDescription - A detailed description of the event.
 * @property {number} [basePrice] - The base price of the event ticket (optional).
 * @property {string} [categoryType] - The category or type of the event (optional).
 * @property {number} [quantityAvailable] - The number of available tickets for the event (optional).
 * @property {string} [startDate] - The start date and time of the event in ISO format (optional).
 * @property {string} [endDate] - The end date and time of the event in ISO format (optional).
 *
 * @example
 * const updatedEvent: UpdateEventDto = {
 *   title: "Updated Concert Title",
 *   shortDescription: "Updated short description.",
 *   longDescription: "Updated detailed description.",
 *   basePrice: 60,
 *   categoryType: "Updated Music",
 *   quantityAvailable: 150,
 *   startDate: "2023-06-01T20:00:00Z",
 *   endDate: "2023-06-01T23:00:00Z"
 * };
 */
export type UpdateEventDto = {
  title?: string;
  shortDescription: string;
  longDescription: string;
  basePrice?: number;
  categoryType?: string;
  quantityAvailable?: number;
  startDate?: string;
  endDate?: string;
};
