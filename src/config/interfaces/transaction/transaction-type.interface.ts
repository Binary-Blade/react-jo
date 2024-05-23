import { Reservation } from '../reservation/reservation-type.interface';

/**
 * `Transaction` defines the structure of a transaction.
 * It includes properties for the transaction ID, payment status, total amount, user details, and associated reservations.
 *
 * @interface Transaction
 * @property {number} transactionId - The ID of the transaction.
 * @property {string} statusPayment - The status of the payment.
 * @property {string} totalAmount - The total amount of the transaction.
 * @property {Object} user - The details of the user associated with the transaction.
 * @property {number} user.userId - The ID of the user.
 * @property {string} user.firstName - The first name of the user.
 * @property {string} user.lastName - The last name of the user.
 * @property {Reservation[]} reservation - An array of reservations associated with the transaction.
 *
 * @example
 * const transaction: Transaction = {
 *   transactionId: 1,
 *   statusPayment: 'APPROVED',
 *   totalAmount: '100.00',
 *   user: {
 *     userId: 123,
 *     firstName: 'John',
 *     lastName: 'Doe'
 *   },
 *   reservation: [
 *     {
 *       reservationId: 1,
 *       ticket: {
 *         ticketId: 1,
 *         purchaseKey: 'abcdef12345',
 *         secureKey: '12345abcdef',
 *         qrCode: 'qrCodeImageString'
 *       },
 *       reservationDetails: {
 *         priceFormula: 'standard',
 *         title: 'Concert Reservation',
 *         price: 50.00,
 *         shortDescription: 'A reservation for the live concert.',
 *         event: {
 *           eventId: 1,
 *           title: 'Concert',
 *           startDate: '2023-06-01T00:00:00Z',
 *           endDate: '2023-06-01T23:59:59Z'
 *         }
 *       }
 *     }
 *   ]
 * };
 *
 * @remarks
 * This interface is used to type the transaction objects, ensuring they contain the necessary details
 * for managing transaction data within the application.
 */
export interface Transaction {
  transactionId: number;
  statusPayment: string;
  totalAmount: string;
  user: {
    userId: number;
    firstName: string;
    lastName: string;
  };
  reservation: Reservation[];
}
