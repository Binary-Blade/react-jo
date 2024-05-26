/**
 * `SORTING_EVENTS_DASHBOARD` is a constant array defining the sorting options for events in the dashboard.
 * It provides options to sort events based on various criteria such as title, quantity available, quantity sold, revenue generated, base price, and start date.
 *
 * @constant
 *
 * @example
 * const sortingOptions = SORTING_EVENTS_DASHBOARD;
 * sortingOptions.forEach(option => {
 *   console.log(option.label, option.value);
 * });
 *
 * @remarks
 * This constant is used to configure the sorting options in the event management dashboard,
 * allowing users to sort events by different attributes to better manage and analyze event data.
 */
export const SORTING_EVENTS_DASHBOARD = [
  { value: 'title', label: 'Alphabet' }, // Option to sort by event title
  { value: 'quantityAvailable', label: 'Quantité disponible' }, // Option to sort by quantity available
  { value: 'quantitySold', label: 'Quantité vendue' }, // Option to sort by quantity sold
  { value: 'revenueGenerated', label: 'Revenu généré' }, // Option to sort by revenue generated
  { value: 'basePrice', label: 'Prix de base' }, // Option to sort by base price
  { value: 'startDate', label: 'Date' } // Option to sort by start date
];

/**
 * `SORTING_EVENTS_PUBLIC` is a constant array defining the sorting options for events in the public view.
 * It provides options to sort events based on criteria such as title, quantity available, and start date.
 *
 * @constant
 *
 * @example
 * const sortingOptions = SORTING_EVENTS_PUBLIC;
 * sortingOptions.forEach(option => {
 *   console.log(option.label, option.value);
 * });
 *
 * @remarks
 * This constant is used to configure the sorting options in the public view of events,
 * allowing users to sort events by different attributes for easier navigation and selection of events.
 */
export const SORTING_EVENTS_PUBLIC = [
  { value: 'title', label: 'Alphabet' }, // Option to sort by event title
  { value: 'quantityAvailable', label: 'Places disponibles' }, // Option to sort by quantity available
  { value: 'startDate', label: 'Date' } // Option to sort by start date
];
