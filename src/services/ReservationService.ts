import axiosClient from '@/config/axiosConfig';
import { PaginationParams } from '@/config/interfaces/common/pagination-params.interface';

/**
 * `ReservationService` provides methods for managing reservation-related operations.
 * It includes methods for adding reservations, finding all reservations for a user or admin,
 * retrieving all reservation data for a user, and finding reservations by ID.
 *
 * @class ReservationService
 */
export class ReservationService {
  /**
   * Add a reservation for a user.
   *
   * @param {number} userId - The ID of the user.
   * @param {number} cartId - The ID of the cart.
   * @returns {Promise<any>} The response from the server.
   *
   * @example
   * const response = await ReservationService.addReservation(1, 10);
   * console.log(response);
   */
  static async addReservation(userId: number, cartId: number): Promise<any> {
    try {
      const response = await axiosClient.post(`/reservations/${cartId}`, { userId, cartId });
      return response.data[0];
    } catch (error) {
      console.error('Failed to add reservation', error);
      throw new Error('Failed to add reservation');
    }
  }

  /**
   * Find all reservations for a user with pagination.
   *
   * @param {number} userId - The ID of the user.
   * @param {PaginationParams} params - Pagination parameters.
   * @returns {Promise<any>} The response from the server.
   *
   * @example
   * const params: PaginationParams = { limit: 10, offset: 0 };
   * const response = await ReservationService.findAllReservations(1, params);
   * console.log(response);
   */
  static async findAllReservations(userId: number, params: PaginationParams): Promise<any> {
    try {
      const response = await axiosClient.get(`/reservations/${userId}/find-all`, { params });
      return response.data;
    } catch (error) {
      console.error('Failed to retrieve all reservations', error);
      throw new Error('Failed to retrieve all reservations');
    }
  }

  /**
   * Find all reservations for admin.
   *
   * @returns {Promise<any>} The response from the server.
   *
   * @example
   * const response = await ReservationService.findAllAdminReservations();
   * console.log(response);
   */
  static async findAllAdminReservations(): Promise<any> {
    try {
      const response = await axiosClient.get(`/reservations/find-all-admin`);
      return response.data;
    } catch (error) {
      console.error('Failed to retrieve all admin reservations', error);
      throw new Error('Failed to retrieve all admin reservations');
    }
  }

  /**
   * Find all reservation data for a user.
   *
   * @param {number} userId - The ID of the user.
   * @returns {Promise<any>} The response from the server.
   *
   * @example
   * const response = await ReservationService.findAllDataReservations(1);
   * console.log(response);
   */
  static async findAllDataReservations(userId: number): Promise<any> {
    try {
      const response = await axiosClient.get(`/reservations/find-all-data/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Failed to retrieve all data reservations', error);
      throw new Error('Failed to retrieve all data reservations');
    }
  }

  /**
   * Get a reservation by its ID.
   *
   * @param {number} reservationId - The ID of the reservation.
   * @returns {Promise<any>} The response from the server.
   *
   * @example
   * const response = await ReservationService.catchTicketById(1);
   * console.log(response);
   */
  static async catchTicketById(reservationId: number): Promise<any> {
    try {
      const response = await axiosClient.get(`/reservations/${reservationId}`);
      return response.data;
    } catch (error) {
      console.error(`Failed to find reservation by id ${reservationId}`, error);
      throw new Error('Failed to find reservation');
    }
  }
}
