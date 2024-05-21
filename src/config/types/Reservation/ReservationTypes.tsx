export interface EventDetails {
  eventId: number;
  categoryType: string;
  startDate: string;
}

export interface ReservationDetails {
  priceFormula: string;
  title: string;
  price: number;
  shortDescription: string;
  event: EventDetails;
}

export interface Ticket {
  ticketId: number;
  purchaseKey: string;
  secureKey: string;
  qrCode: string;
}

export interface Reservation {
  reservationId: number;
  ticket: Ticket;
  reservationDetails: ReservationDetails;
}

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
