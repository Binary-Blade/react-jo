/**
 * `TicketDescriptions` defines the structure for an object that holds ticket descriptions.
 * Each key is a string representing the ticket identifier, and the value is a string representing the description of the ticket.
 *
 * @interface TicketDescriptions
 * @property {string} [key] - The key is a string representing the ticket identifier.
 * @property {string} [key: string] - The value is a string representing the description of the ticket.
 *
 * @example
 * const ticketDescriptions: TicketDescriptions = {
 *   'VIP': 'Access to VIP lounge and priority seating.',
 *   'Standard': 'General admission with assigned seating.',
 *   'Student': 'Discounted ticket for students with valid ID.'
 * };
 *
 * @remarks
 * This interface is used to type an object where the keys are ticket identifiers and the values are the descriptions for those tickets.
 */
export interface TicketDescriptions {
  [key: string]: string;
}
