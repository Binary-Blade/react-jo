/**
 * `EventResponse` defines the structure of a response object for events.
 * It includes properties for indicating success and holding the response data.
 *
 * @interface EventResponse
 * @property {boolean} success - Indicates if the response indicates a successful operation.
 * @property {any} data - The data returned from the event operation. This can be of any type.
 *
 * @example
 * const eventResponse: EventResponse = {
 *   success: true,
 *   data: {
 *     eventId: 1,
 *     title: 'Concert',
 *     // Other event properties
 *   }
 * };
 *
 * @remarks
 * This type is used to type the response objects for event-related operations, ensuring they contain the necessary properties
 * for managing event responses within the application.
 */
export interface EventResponse {
  success: boolean;
  data: any;
}
