/**
 * `FilterParams` defines the structure of filter parameters used for sorting and filtering data.
 * It includes optional properties for specifying the sort by field, sort order, filter by field, and filter value.
 *
 * @interface FilterParams
 * @property {string|undefined} sortBy - The field to sort by (optional).
 * @property {string|undefined} sortOrder - The order to sort by, e.g., 'asc' or 'desc' (optional).
 * @property {string|undefined} filterBy - The field to filter by (optional).
 * @property {any|undefined} filterValue - The value to filter by (optional).
 *
 * @example
 * const filterParams: FilterParams = {
 *   sortBy: 'date',
 *   sortOrder: 'asc',
 *   filterBy: 'status',
 *   filterValue: 'approved'
 * };
 *
 * @remarks
 * This interface is used to type the filter parameters, ensuring they contain the necessary details
 * for managing sorting and filtering of data within the application.
 */
export interface FilterParams {
  sortBy?: string;
  sortOrder?: string;
  filterBy?: string;
  filterValue?: any;
}
