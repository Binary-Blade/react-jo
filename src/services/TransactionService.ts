import axiosClient from '@/config/axiosConfig';
import { PaginationParams } from '@/config/types/common/PaginationTypes';

export class TransactionService {
  static async findAllTransactions(userId: number, params: PaginationParams) {
    try {
      const response = await axiosClient.get(`/transactions/${userId}/find-all`, { params });
      return response.data;
    } catch (error) {
      console.error('Failed to retrieve all reservations', error);
      throw new Error('Failed to retrieve all reservations');
    }
  }
}
