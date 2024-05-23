/**
 * `SORTING_OPTIONS_TRANSACTIONS` is a constant array defining the sorting options for transactions.
 * It provides an option to sort transactions based on the order date.
 *
 * @constant
 *
 * @example
 * const sortingOptions = SORTING_OPTIONS_TRANSACTIONS;
 * sortingOptions.forEach(option => {
 *   console.log(option.label, option.value);
 * });
 *
 * @remarks
 * This constant is used to configure the sorting options in the transaction management dashboard,
 * allowing users to sort transactions by the date they were created.
 */
export const SORTING_OPTIONS_TRANSACTIONS = [
  { value: 'createdAt', label: 'Date de commande' } // Option to sort by order date
];
