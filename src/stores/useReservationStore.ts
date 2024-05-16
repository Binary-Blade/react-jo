import { ReservationStoreType } from '@/config/types/ReservationTypes';
import { PaginationParams } from '@/config/types/common/PaginationTypes';
import { ReservationService } from '@/services/ReservationService';
import { create } from 'zustand';

export const useReservationStore = create<ReservationStoreType>(set => ({
  newReservation: null,
  reservations: [],
  reservation: null,
  total: 0,
  loading: false,
  error: null,

  addReservation: async (userId, cartId) => {
    set({ loading: true, error: null });
    try {
      const data = await ReservationService.addReservation(userId, cartId);
      set(state => ({ newReservation: [...state.reservations, data], loading: false }));
    } catch (error) {
      console.error('Failed to add reservation', error);
    }
  },
  fetchReservations: async (userId: number, params: PaginationParams) => {
    set({ loading: true, error: null });
    try {
      const data = await ReservationService.findAllReservations(userId, params);
      set({
        reservations: data.reservations,
        total: data.total,
        loading: false
      });
    } catch (error) {
      console.error('Failed to fetch reservations', error);
    }
  },

  fetchReservationsAdmin: async () => {
    try {
      const data = await ReservationService.findAllAdminReservations();
      set({ reservations: data });
    } catch (error) {
      console.error('Failed to fetch reservations', error);
    }
  },

  catchTicket: async reservationId => {
    try {
      const data = await ReservationService.catchTicketById(reservationId);
      set({ reservation: data }); // Update the single reservation state
    } catch (error) {
      console.error('Failed to fetch reservation', error);
    }
  }
}));

export default useReservationStore;
