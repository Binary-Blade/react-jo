import { HeroReservation } from '@/components/hero/HeroReservation';
import { Footer } from '@/features/Footer';
import { Header } from '@/features/header/Header';
import { AllReservations } from '@/features/reservations/AllReservations';
import useReservationStore from '@/stores/useReservationStore';

export default function ReservationPage() {
  const { reservations, total } = useReservationStore();

  // count number of event by reservation
  const uniqueEventCount = () => {
    const eventIds = new Set(); // Création d'un Set pour stocker les eventId uniques
    reservations.forEach(reservation => {
      if (
        reservation &&
        reservation.reservationDetails.event &&
        reservation.transaction.statusPayment === 'APPROVED'
      ) {
        eventIds.add(reservation.reservationDetails.event.eventId);
      }
    });
    return eventIds.size; // Retourne le nombre d'éléments uniques dans le Set
  };

  const firstName = reservations[0]?.user?.firstName;
  const lastName = reservations[0]?.user?.lastName;
  const fullName = `${firstName} ${lastName}`;

  const numberEvents = uniqueEventCount();

  return (
    <>
      <Header />
      <HeroReservation fullName={fullName} numberEvents={numberEvents} totalTickets={total} />
      <div className="flex flex-col min-h-screen">
        <AllReservations />
      </div>
      <Footer />
    </>
  );
}
