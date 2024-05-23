import { PaginationParams } from "../common/pagination-params.interface";

/**
 * `TransactionStoreType` defines the structure of the transaction store.
 * It includes properties for transaction state and methods for handling transaction actions.
 *
 * @interface TransactionStoreType
 * @property {boolean} loading - Indicates if a transaction action is in progress.
 * @property {number} total - The total number of transactions.
 * @property {any[]} transactions - An array of transactions.
 * @property {string|null} error - The error message if a transaction action fails.
 * @property {function} fetchTransactions - Method to fetch transactions with pagination.
 *
 * @example
 * const transactionStore: TransactionStoreType = {
 *   loading: false,
 *   total: 0,
 *   transactions: [],
 *   error: null,
 *   fetchTransactions: async (userId, params) => { / implementation / }
 * };
 *
 * @remarks
 * This interface is used to type the transaction store, ensuring it contains the necessary properties
 * and methods for managing transaction state and actions within the application.
 */
export interface TransactionStoreType {
  loading: boolean; // This holds a boolean value for loading state
  total: number; // This holds the total number of transactions
  transactions: any[]; // This holds all transactions
  error: string | null; // This holds an error message if any

  /**
   * Method to fetch transactions with pagination.
   *
   * @param {number} userId - The ID of the user whose transactions are being fetched.
   * @param {PaginationParams} params - The pagination parameters.
   * @returns {Promise<void>} A promise that resolves when the transactions are fetched.
   */
  fetchTransactions: (userId: number, params: PaginationParams) => Promise<void>;
}
