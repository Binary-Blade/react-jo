import axiosClient from '@/config/axiosConfig';
import { PaginationParams } from '@/config/types/common/PaginationTypes';

export class ReservationService {
  static async addReservation(userId: number, cartId: number) {
    try {
      const response = await axiosClient.post(`/reservations/${cartId}`, { userId, cartId });
      return response.data[0];
    } catch (error) {
      console.error('Failed to add reservation', error);
      throw new Error('Failed to add reservation');
    }
  }

  static async findAllReservations(userId: number, params: PaginationParams) {
    try {
      const response = await axiosClient.get(`/reservations/${userId}/find-all`, { params });
      return response.data;
    } catch (error) {
      console.error('Failed to retrieve all reservations', error);
      throw new Error('Failed to retrieve all reservations');
    }
  }

  static async findAllAdminReservations() {
    try {
      const response = await axiosClient.get(`/reservations/find-all-admin`);
      return response.data;
    } catch (error) {
      console.error('Failed to retrieve all admin reservations', error);
      throw new Error('Failed to retrieve all admin reservations');
    }
  }

  static async catchTicketById(reservationId: number) {
    try {
      const response = await axiosClient.get(`/reservations/${reservationId}`);
      return response.data;
    } catch (error) {
      console.error(`Failed to find reservation by id ${reservationId}`, error);
      throw new Error('Failed to find reservation');
    }
  }
}
