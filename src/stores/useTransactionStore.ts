import { TransactionStoreType } from '@/config/types/Transaction/TransactionStoreType';
import { PaginationParams } from '@/config/types/common/PaginationTypes';
import { TransactionService } from '@/services/TransactionService';
import { create } from 'zustand';

export const useTransactionStore = create<TransactionStoreType>(set => ({
  transactions: [],
  total: 0,
  loading: false,
  error: null,

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
      set({ loading: false, error: error.message || 'Failed to fetch reservation' });
    }
  }
}));
