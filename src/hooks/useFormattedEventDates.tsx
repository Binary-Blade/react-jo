import { format, parseISO } from 'date-fns';

function useFormattedDateRange(startDate: string | undefined, endDate: string | undefined): string | undefined {
  // Ensure dates are defined and are valid ISO strings
  if (!startDate || !endDate) {
    return 'Invalid date range';
  }

  try {
    const formattedStartDate = format(parseISO(startDate), 'MMMM d');
    const formattedEndDate = format(parseISO(endDate), 'MMMM d, yyyy');

    const startYear = format(parseISO(startDate), 'yyyy');
    const endYear = format(parseISO(endDate), 'yyyy');

    if (startYear === endYear) {
      return `${formattedStartDate} - ${formattedEndDate} · Paris, France`;
    } else {
      const formattedStartDateWithYear = format(parseISO(startDate), 'MMMM d, yyyy');
      return `${formattedStartDateWithYear} - ${formattedEndDate} · Paris, France`;
    }
  } catch (error) {
    console.error('Error formatting dates:', error);
    return 'Error formatting dates';
  }
}

export default useFormattedDateRange;
