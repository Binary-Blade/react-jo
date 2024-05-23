/**
 * `PaginationParams` defines the structure of pagination parameters used for fetching paginated data.
 * It includes optional properties for specifying the limit, offset, sort by field, sort order, filter by field, and filter value.
 *
 * @interface PaginationParams
 * @property {number|undefined} limit - The maximum number of items to return (optional).
 * @property {number|undefined} offset - The number of items to skip before starting to collect the result set (optional).
 * @property {string|undefined} sortBy - The field to sort by (optional).
 * @property {string|undefined} sortOrder - The order to sort by, e.g., 'asc' or 'desc' (optional).
 * @property {string|undefined} filterBy - The field to filter by (optional).
 * @property {any|undefined} filterValue - The value to filter by (optional).
 *
 * @example
 * const paginationParams: PaginationParams = {
 *   limit: 10,
 *   offset: 0,
 *   sortBy: 'date',
 *   sortOrder: 'asc',
 *   filterBy: 'status',
 *   filterValue: 'approved'
 * };
 *
 * @remarks
 * This interface is used to type the pagination parameters, ensuring they contain the necessary details
 * for managing pagination, sorting, and filtering of data within the application.
 */
export interface PaginationParams {
  limit?: number;
  offset?: number;
  sortBy?: string;
  sortOrder?: string;
  filterBy?: string;
  filterValue?: any;
}
