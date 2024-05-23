import { HeroReservation } from '@/features/reservations/HeroReservation';
import { Footer } from '@/features/Footer';
import { Header } from '@/features/header/Header';
import { AllReservations } from '@/features/reservations/AllReservations';

/**
 * `ReservationPage` component is responsible for displaying the reservations page.
 * It includes a header, a hero section for reservations, the main content area that lists
 * all reservations, and a footer.
 *
 * @component
 * @returns {JSX.Element} The rendered reservation page component.
 *
 * @example
 * return (
 *   <ReservationPage />
 * )
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components:
 * - `Header` for displaying the page header.
 * - `HeroReservation` for displaying the reservation-related hero section.
 * - `AllReservations` for displaying the main content listing all reservations.
 * - `Footer` for displaying the page footer.
 */
export default function ReservationPage(): JSX.Element {
  return (
    <>
      {/* Header: Displays the page header */}
      <Header />

      {/* HeroReservation: Displays the reservation-related hero section */}
      <HeroReservation />

      <div className="flex flex-col min-h-screen">
        {/* AllReservations: Displays the main content listing all reservations */}
        <AllReservations />
      </div>

      {/* Footer: Displays the page footer */}
      <Footer />
    </>
  );
}
