import { PaginationParams } from '@/config/interfaces/common/pagination-params.interface';
import { ReservationStoreType } from '@/config/interfaces/reservation/reservation-store.interface';
import { ReservationService } from '@/services/ReservationService';
import { create } from 'zustand';

/**
 * `useReservationStore` is a Zustand store for managing reservation state and actions.
 *
 * @constant
 *
 * @example
 * const { reservations, addReservation, fetchReservations } = useReservationStore();
 *
 * @remarks
 * This store handles reservation operations such as adding, fetching, and managing reservations.
 */
export const useReservationStore = create<ReservationStoreType>(set => ({
  newReservation: null,
  reservations: [],
  reservation: null,
  total: 0,
  loading: false,
  error: null,

  /**
   * Add a reservation.
   *
   * @param  userId - The ID of the user.
   * @param  cartId - The ID of the cart.
   *
   * @example
   * await useReservationStore.getState().addReservation(1, 10);
   * console.log('Reservation added');
   */
  addReservation: async (userId, cartId) => {
    set({ loading: true, error: null });
    try {
      const data = await ReservationService.addReservation(userId, cartId);
      set(state => ({
        newReservation: [...state.reservations, data],
        loading: false
      }));
    } catch (error: any) {
      set({ loading: false, error: error.message || 'Failed to add reservation' });
    }
  },

  /**
   * Fetch reservations with pagination.
   *
   * @param {number} userId - The ID of the user.
   * @param {PaginationParams} params - Pagination parameters.
   *
   * @example
   * const params: PaginationParams = { limit: 10, offset: 0 };
   * await useReservationStore.getState().fetchReservations(1, params);
   * console.log('Reservations fetched');
   */
  fetchReservations: async (userId: number, params: PaginationParams) => {
    set({ loading: true, error: null });
    try {
      const data = await ReservationService.findAllReservations(userId, params);
      set({
        reservations: data.reservations,
        total: data.total,
        loading: false
      });
    } catch (error: any) {
      set({ loading: false, error: error.message || 'Failed to fetch reservations' });
    }
  },

  /**
   * Fetch all reservation data for a user.
   *
   * @param {number} userId - The ID of the user.
   *
   * @example
   * await useReservationStore.getState().fetchAllDataReservations(1);
   * console.log('All data reservations fetched');
   */
  fetchAllDataReservations: async (userId: number) => {
    set({ loading: true, error: null });
    try {
      const data = await ReservationService.findAllDataReservations(userId);
      set({
        reservations: data,
        loading: false
      });
    } catch (error: any) {
      set({ loading: false, error: error.message || 'Failed to fetch reservations' });
    }
  },

  /**
   * Get a ticket by reservation ID.
   *
   * @param reservationId - The ID of the reservation.
   *
   * @example
   * await useReservationStore.getState().catchTicket(1);
   * console.log('Ticket fetched');
   */
  catchTicket: async reservationId => {
    set({ loading: true, error: null });
    try {
      const data = await ReservationService.catchTicketById(reservationId);
      set({
        reservation: data,
        loading: false
      }); // Update the single reservation state
    } catch (error: any) {
      set({ loading: false, error: error.message || 'Failed to fetch reservation' });
    }
  }
}));

export default useReservationStore;
