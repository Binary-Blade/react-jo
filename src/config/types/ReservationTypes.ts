import { PaginationParams } from './common/PaginationTypes';

export interface ReservationStoreType {
  error: any; // This holds an error message
  loading: boolean; // This holds a boolean value for loading state
  total: number;
  newReservation: any; // This holds a single reservation for the list view
  reservations: any[]; // This holds all reservations
  reservation: any; // This holds a single reservation for details view
  addReservation: (userId: number, cartId: number) => Promise<void>;
  fetchReservations: (userId: number, params: PaginationParams) => Promise<void>;
  fetchReservationsAdmin: () => Promise<void>;
  catchTicket: (reservationId: number) => Promise<void>;
}
