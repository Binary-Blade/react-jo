import { StatusPaymentEnum } from '@/config/enums/StatusPayment.enum';

/**
 * `FILTER_OPTIONS_TRANSACTIONS` is a constant array defining the filter options for transactions.
 * It provides options to filter transactions based on their payment status.
 *
 * @constant
 *
 * @example
 * const filters = FILTER_OPTIONS_TRANSACTIONS;
 * filters.forEach(filter => {
 *   console.log(filter.label);
 *   filter.options.forEach(option => {
 *     console.log(option.label, option.value);
 *   });
 * });
 *
 * @remarks
 * This constant is used to configure the filter options in the transaction management dashboard,
 * allowing users to filter transactions based on different payment statuses such as 'APPROUVÉ' and 'REJETÉ'.
 */
export const FILTER_OPTIONS_TRANSACTIONS = [
  {
    label: 'Statuts de paiement', // Label for the payment status filter category
    options: [
      { value: 'ALL', label: 'TOUS' }, // Option to display all payment statuses
      { value: StatusPaymentEnum.APPROVED, label: 'APPROUVÉ' }, // Option to filter by approved transactions
      { value: StatusPaymentEnum.REJECTED, label: 'REJETÉ' } // Option to filter by rejected transactions
    ]
  }
];
