import { ReservationStoreType } from '@/config/types/ReservationTypes';
import { ReservationService } from '@/services/ReservationService';
import { create } from 'zustand';

export const useReservationStore = create<ReservationStoreType>(set => ({
  newReservation: null,
  reservations: [],
  reservation: null,

  addReservation: async (userId, cartId) => {
    try {
      const data = await ReservationService.addReservation(userId, cartId);
      set(state => ({ newReservation: [...state.reservations, data] }));
    } catch (error) {
      console.error('Failed to add reservation', error);
    }
  },
  fetchReservations: async (userId: number) => {
    try {
      const data = await ReservationService.findAllReservations(userId);
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
