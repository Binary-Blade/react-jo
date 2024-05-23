/**
 * `SORTING_RESERVATION_PUBLIC` is a constant array defining the sorting options for reservations in the public view.
 * It provides options to sort reservations based on criteria such as total price and title.
 *
 * @constant
 *
 * @example
 * const sortingOptions = SORTING_RESERVATION_PUBLIC;
 * sortingOptions.forEach(option => {
 *   console.log(option.label, option.value);
 * });
 *
 * @remarks
 * This constant is used to configure the sorting options in the public view of reservations,
 * allowing users to sort reservations by different attributes for easier navigation and selection.
 */
export const SORTING_RESERVATION_PUBLIC = [
  { value: 'reservationDetails.price', label: 'Prix total' }, // Option to sort by total price
  { value: 'reservationDetails.title', label: 'Titre' } // Option to sort by reservation title
];
