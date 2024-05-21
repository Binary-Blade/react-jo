import { PaginationParams } from '../common/PaginationTypes';

export interface TransactionStoreType {
  loading: boolean; // This holds a boolean value for loading state
  total: number;
  transactions: any[]; // This holds all reservations
  error: string | null; // This holds an error message if any
  fetchTransactions: (userId: number, params: PaginationParams) => Promise<void>;
}
