import { HeroReservation } from '@/features/reservations/HeroReservation';
import { Footer } from '@/features/Footer';
import { Header } from '@/features/header/Header';
import { AllReservations } from '@/features/reservations/AllReservations';

export default function ReservationPage() {
  return (
    <>
      <Header />
      <HeroReservation />
      <div className="flex flex-col min-h-screen">
        <AllReservations />
      </div>
      <Footer />
    </>
  );
}
