/**
 * `SORTING_USERS_DASHBOARD` is a constant array defining the sorting options for users in the dashboard.
 * It provides options to sort users based on various criteria such as email, first name, last name, transactions count, total spent, creation date, and last login date.
 *
 * @constant
 *
 * @example
 * const sortingOptions = SORTING_USERS_DASHBOARD;
 * sortingOptions.forEach(option => {
 *   console.log(option.label, option.value);
 * });
 *
 * @remarks
 * This constant is used to configure the sorting options in the user management dashboard,
 * allowing administrators to sort users by different attributes to better manage and analyze user data.
 */
export const SORTING_USERS_DASHBOARD = [
  { value: 'email', label: 'Email' }, // Option to sort by user email
  { value: 'firstName', label: 'First Name' }, // Option to sort by user first name
  { value: 'lastName', label: 'Last Name' }, // Option to sort by user last name
  { value: 'transactionsCount', label: 'Transactions' }, // Option to sort by number of transactions
  { value: 'totalSpent', label: 'Total Spent' }, // Option to sort by total amount spent
  { value: 'createdAt', label: 'Created' }, // Option to sort by account creation date
  { value: 'lastLogin', label: 'Last Login' } // Option to sort by last login date
];
