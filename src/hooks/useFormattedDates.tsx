import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

/**
 * Custom hook `useFormattedDates` is responsible for formatting date intervals.
 * It formats the start and end dates in a readable French format, handling cases
 * where the dates are in the same year or different years.
 *
 * @param {string | undefined} startDate - The start date in ISO string format.
 * @param {string | undefined} endDate - The end date in ISO string format.
 * @returns {string | undefined} A formatted date interval or an error message.
 *
 * @example
 * const formattedDates = useFormattedDates('2023-01-01', '2023-12-31');
 *
 * @remarks
 * The hook uses `date-fns` for date formatting and `fr` locale for French formatting.
 */
export const useFormattedDates = (
  startDate: string | undefined,
  endDate: string | undefined
): string | undefined => {
  // Ensure dates are defined and are valid ISO strings
  if (!startDate || !endDate) {
    return 'Intervalle de dates invalide';
  }

  try {
    const formattedStartDate = format(parseISO(startDate), 'd MMMM', { locale: fr });
    const formattedEndDate = format(parseISO(endDate), 'd MMMM yyyy', { locale: fr });

    const startYear = format(parseISO(startDate), 'yyyy', { locale: fr });
    const endYear = format(parseISO(endDate), 'yyyy', { locale: fr });

    if (startYear === endYear) {
      return `${formattedStartDate} - ${formattedEndDate}`;
    } else {
      const formattedStartDateWithYear = format(parseISO(startDate), 'd MMMM yyyy', { locale: fr });
      return `${formattedStartDateWithYear} - ${formattedEndDate}`;
    }
  } catch (error) {
    console.error('Erreur de formatage des dates:', error);
    return 'Erreur de formatage des dates';
  }
};
