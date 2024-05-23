import axiosClient from '@/config/axiosConfig';
import { PaginationParams } from '@/config/interfaces/common/pagination-params.interface';

/**
 * `TransactionService` provides methods for managing transaction-related operations.
 * It includes methods for fetching all transactions for a user with pagination.
 *
 * @class TransactionService
 */
export class TransactionService {
  /**
   * Find all transactions for a user with pagination.
   *
   * @param {number} userId - The ID of the user.
   * @param {PaginationParams} params - Pagination parameters.
   * @returns {Promise<any>} The response from the server.
   *
   * @example
   * const params: PaginationParams = { limit: 10, offset: 0, sortBy: 'date', sortOrder: 'asc' };
   * const response = await TransactionService.findAllTransactions(1, params);
   * console.log(response);
   */
  static async findAllTransactions(userId: number, params: PaginationParams): Promise<any> {
    try {
      const response = await axiosClient.get(`/transactions/${userId}/find-all`, { params });
      return response.data;
    } catch (error) {
      console.error('Failed to retrieve all transactions', error);
      throw new Error('Failed to retrieve all transactions');
    }
  }
}
