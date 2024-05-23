import { PaginationParams } from '@/config/interfaces/common/pagination-params.interface';
import { TransactionStoreType } from '@/config/interfaces/transaction/transaction-store.interface';
import { TransactionService } from '@/services/TransactionService';
import { create } from 'zustand';

/**
 * `useTransactionStore` is a Zustand store for managing transaction state and actions.
 *
 * @constant
 *
 * @example
 * const { transactions, fetchTransactions } = useTransactionStore();
 *
 * @remarks
 * This store handles transaction operations such as fetching transactions.
 */
export const useTransactionStore = create<TransactionStoreType>(set => ({
  transactions: [],
  total: 0,
  loading: false,
  error: null,

  /**
   * Fetch transactions with pagination.
   *
   * @param {number} userId - The ID of the user.
   * @param {PaginationParams} params - Pagination parameters.
   *
   * @example
   * const params: PaginationParams = { limit: 10, offset: 0, sortBy: 'date', sortOrder: 'asc' };
   * await useTransactionStore.getState().fetchTransactions(1, params);
   * console.log('Transactions fetched');
   */
  fetchTransactions: async (userId: number, params: PaginationParams) => {
    set({ loading: true, error: null });
    try {
      const data = await TransactionService.findAllTransactions(userId, params);
      set({
        transactions: data.transactions,
        total: data.total,
        loading: false
      });
    } catch (error: any) {
      set({ loading: false, error: error.message || 'Failed to fetch transactions' });
    }
  }
}));
