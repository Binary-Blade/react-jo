import { CalendarIcon } from '../ui/IconComponents';

export const ReservationEmpty = () => {
  return (
    <div className="border border-dashed shadow-sm rounded-lg flex flex-col items-center justify-center p-6 text-center bg-white dark:bg-gray-800 col-span-4">
      <CalendarIcon data-testid="calendar-icon" className="w-16 h-16 text-gray-400" />
      <h2 className="text-xl font-semibold mt-4">No reservations found</h2>
      <p className="text-gray-500 dark:text-gray-400 mt-2">
        Please try adjusting your filters or check back later.
      </p>
    </div>
  );
};
