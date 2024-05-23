/**
 * `StatusPaymentEnum` represents the different statuses of a payment.
 *
 * @enum {string}
 * @property {string} APPROVED - Status indicating the payment has been approved.
 * @property {string} REJECTED - Status indicating the payment has been rejected.
 *
 * @example
 * const paymentStatus = StatusPaymentEnum.APPROVED;
 */
export enum StatusPaymentEnum {
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED'
}
