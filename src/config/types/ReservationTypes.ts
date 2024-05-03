
export interface ReservationStoreType {
    newReservation: any;  // This holds a single reservation for the list view
    reservations: any[];  // This holds all reservations
    reservation: any;     // This holds a single reservation for details view
    addReservation: (userId: number, cartId: number) => Promise<void>;
    fetchReservations: (userId: number) => Promise<void>;
    fetchOneReservation: (reservationId: number) => Promise<void>;
}
