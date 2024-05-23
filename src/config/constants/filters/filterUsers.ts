/**
 * `FILTER_USERS_DASHBOARD` is a constant array defining the filter options for the user dashboard.
 * It provides options to filter users based on their roles.
 *
 * @constant
 *
 * @example
 * const filters = FILTER_USERS_DASHBOARD;
 * filters.forEach(filter => {
 *   console.log(filter.label);
 *   filter.options.forEach(option => {
 *     console.log(option.label, option.value);
 *   });
 * });
 *
 * @remarks
 * This constant is used to configure the filter options in the user dashboard, allowing
 * users to filter the displayed user list based on roles such as 'ADMIN' and 'USER'.
 */
export const FILTER_USERS_DASHBOARD = [
  {
    label: 'Roles',
    options: [
      { value: 'ALL', label: 'All Roles' }, // Option to display all roles
      { value: 'ADMIN', label: 'ADMIN' }, // Option to filter by ADMIN role
      { value: 'USER', label: 'USER' } // Option to filter by USER role
    ]
  }
];
