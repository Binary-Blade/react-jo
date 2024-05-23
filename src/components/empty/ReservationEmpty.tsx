import { CalendarIcon } from '../ui/IconComponents';

/**
 * `ReservationEmpty` component displays a message indicating that no reservations were found.
 * It includes an icon, a title, and a descriptive message.
 *
 * @component
 * @returns {JSX.Element} The rendered ReservationEmpty component.
 *
 * @example
 * return <ReservationEmpty />;
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components and icons:
 * - `CalendarIcon` for the icon indicating no reservations.
 */
export const ReservationEmpty = (): JSX.Element => {
  return (
    <div className="border border-dashed shadow-sm rounded-lg flex flex-col items-center justify-center p-6 text-center bg-white dark:bg-gray-800 col-span-4">
      {/* No Reservations Icon */}
      <CalendarIcon data-testid="calendar-icon" className="w-16 h-16 text-gray-400" />
      {/* No Reservations Title */}
      <h2 className="text-xl font-semibold mt-4">Réservation introuvable</h2>
      {/* No Reservations Description */}
      <p className="text-gray-500 dark:text-gray-400 mt-2">
        Aucune réservation n'a été trouvée pour cette date.
      </p>
    </div>
  );
};
