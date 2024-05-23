import { PaginationParams } from '../common/pagination-params.interface';

/**
 * `ReservationStoreType` defines the structure of the reservation store.
 * It includes properties for reservation state and methods for handling reservation actions.
 *
 * @interface ReservationStoreType
 * @property {any} error - This holds an error message.
 * @property {boolean} loading - This holds a boolean value for loading state.
 * @property {number} total - The total number of reservations.
 * @property {any} newReservation - This holds a single reservation for the list view.
 * @property {any[]} reservations - This holds all reservations.
 * @property {any} reservation - This holds a single reservation for details view.
 * @property {function} addReservation - Method to add a new reservation.
 * @property {function} fetchReservations - Method to fetch reservations with pagination.
 * @property {function} fetchAllDataReservations - Method to fetch all reservation data.
 * @property {function} catchTicket - Method to catch a ticket for a reservation.
 *
 * @example
 * const reservationStore: ReservationStoreType = {
 *   error: null,
 *   loading: false,
 *   total: 0,
 *   newReservation: null,
 *   reservations: [],
 *   reservation: null,
 *   addReservation: async (userId, cartId) => { / implementation / },
 *   fetchReservations: async (userId, params) => { / implementation / },
 *   fetchAllDataReservations: async (userId) => { / implementation / },
 *   catchTicket: async (reservationId) => { / implementation / }
 * };
 *
 * @remarks
 * This interface is used to type the reservation store, ensuring it contains the necessary properties
 * and methods for managing reservation state and actions within the application.
 */
export interface ReservationStoreType {
  error: any; // This holds an error message
  loading: boolean; // This holds a boolean value for loading state
  total: number; // The total number of reservations
  newReservation: any; // This holds a single reservation for the list view
  reservations: any[]; // This holds all reservations
  reservation: any; // This holds a single reservation for details view

  /**
   * Method to add a new reservation.
   *
   * @param {number} userId - The ID of the user making the reservation.
   * @param {number} cartId - The ID of the cart.
   * @returns {Promise<void>} A promise that resolves when the reservation is added.
   */
  addReservation: (userId: number, cartId: number) => Promise<void>;

  /**
   * Method to fetch reservations with pagination.
   *
   * @param {number} userId - The ID of the user whose reservations are being fetched.
   * @param {PaginationParams} params - The pagination parameters.
   * @returns {Promise<void>} A promise that resolves when the reservations are fetched.
   */
  fetchReservations: (userId: number, params: PaginationParams) => Promise<void>;

  /**
   * Method to fetch all reservation data.
   *
   * @param {number} userId - The ID of the user whose reservation data is being fetched.
   * @returns {Promise<void>} A promise that resolves when all reservation data is fetched.
   */
  fetchAllDataReservations: (userId: number) => Promise<void>;

  /**
   * Method to catch a ticket for a reservation.
   *
   * @param {number} reservationId - The ID of the reservation.
   * @returns {Promise<void>} A promise that resolves when the ticket is caught.
   */
  catchTicket: (reservationId: number) => Promise<void>;
}
