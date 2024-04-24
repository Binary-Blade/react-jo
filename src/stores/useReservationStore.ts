import { ReservationService } from '@/services/ReservationService';
import { create } from 'zustand';

interface ReservationState {
    reservations: any[];  // This holds all reservations
    reservation: any;     // This holds a single reservation for details view
    addReservation: (userId: number, cartId: number) => Promise<void>;
    fetchReservations: (userId: number) => Promise<void>;
    fetchOneReservation: (reservationId: number) => Promise<void>;
}

export const useReservationStore = create<ReservationState>((set) => ({
    reservations: [],
    reservation: null,

    addReservation: async (userId, cartId) => {
        try {
            const data = await ReservationService.addReservation(userId, cartId);
            set(state => ({ reservations: [...state.reservations, data] }));
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
    fetchOneReservation: async (reservationId) => {
        try {
            const data = await ReservationService.findReservationById(reservationId);
            set({ reservation: data });  // Update the single reservation state
        } catch (error) {
            console.error('Failed to fetch reservation', error);
        }
    }
}));

export default useReservationStore;
