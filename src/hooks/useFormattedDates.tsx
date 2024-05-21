import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

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
