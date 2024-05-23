import { EventDetails } from '../event/event-type.interface';

/**
 * `ReservationDetails` defines the structure of reservation details.
 * It includes properties for the price formula, title, price, short description, and associated event details.
 *
 * @interface ReservationDetails
 * @property {string} priceFormula - The formula used to calculate the price.
 * @property {string} title - The title of the reservation.
 * @property {number} price - The price of the reservation.
 * @property {string} shortDescription - A short description of the reservation.
 * @property {EventDetails} event - The associated event details.
 *
 * @example
 * const reservationDetails: ReservationDetails = {
 *   priceFormula: 'standard',
 *   title: 'Concert Reservation',
 *   price: 50.00,
 *   shortDescription: 'A reservation for the live concert.',
 *   event: {
 *     eventId: 1,
 *     title: 'Concert',
 *     // Other event details
 *   }
 * };
 *
 * @remarks
 * This interface is used to type the reservation details, ensuring they contain the necessary details
 * for managing reservation data within the application.
 */
export interface ReservationDetails {
  priceFormula: string;
  title: string;
  price: number;
  shortDescription: string;
  event: EventDetails;
}

/**
 * `Ticket` defines the structure of a ticket.
 * It includes properties for the ticket ID, purchase key, secure key, and QR code.
 *
 * @interface Ticket
 * @property {number} ticketId - The ID of the ticket.
 * @property {string} purchaseKey - The purchase key of the ticket.
 * @property {string} secureKey - The secure key of the ticket.
 * @property {string} qrCode - The QR code of the ticket.
 *
 * @example
 * const ticket: Ticket = {
 *   ticketId: 1,
 *   purchaseKey: 'abcdef12345',
 *   secureKey: '12345abcdef',
 *   qrCode: 'qrCodeImageString'
 * };
 *
 * @remarks
 * This interface is used to type the ticket objects, ensuring they contain the necessary details
 * for managing ticket data within the application.
 */
export interface Ticket {
  ticketId: number;
  purchaseKey: string;
  secureKey: string;
  qrCode: string;
}

/**
 * `Reservation` defines the structure of a reservation.
 * It includes properties for the reservation ID, associated ticket, and reservation details.
 *
 * @interface Reservation
 * @property {number} reservationId - The ID of the reservation.
 * @property {Ticket} ticket - The associated ticket details.
 * @property {ReservationDetails} reservationDetails - The reservation details.
 *
 * @example
 * const reservation: Reservation = {
 *   reservationId: 1,
 *   ticket: {
 *     ticketId: 1,
 *     purchaseKey: 'abcdef12345',
 *     secureKey: '12345abcdef',
 *     qrCode: 'qrCodeImageString'
 *   },
 *   reservationDetails: {
 *     priceFormula: 'standard',
 *     title: 'Concert Reservation',
 *     price: 50.00,
 *     shortDescription: 'A reservation for the live concert.',
 *     event: {
 *       eventId: 1,
 *       title: 'Concert',
 *       // Other event details
 *     }
 *   }
 * };
 *
 * @remarks
 * This interface is used to type the reservation objects, ensuring they contain the necessary details
 * for managing reservation data within the application.
 */
export interface Reservation {
  reservationId: number;
  ticket: Ticket;
  reservationDetails: ReservationDetails;
}
