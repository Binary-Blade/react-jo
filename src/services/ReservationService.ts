import axiosClient from "@/utils/axiosConfig";

export class ReservationService {
  static async addReservation(userId: number, cartId: number) {
    try {
      const response = await axiosClient.post(`/reservations/${cartId}`, { userId, cartId });
      return response.data[0];
    } catch (error) {
      console.error("Failed to add reservation", error);
      throw new Error("Failed to add reservation");
    }
  }

  static async findAllReservations(userId: number) {
    try {
      const response = await axiosClient.get(`/reservations/${userId}/find-all`);
      return response.data;
    } catch (error) {
      console.error("Failed to retrieve all reservations", error);
      throw new Error("Failed to retrieve all reservations");
    }
  }

  static async findAllAdminReservations() {
    try {
      const response = await axiosClient.get(`/reservations/find-all-admin`);
      return response.data;
    } catch (error) {
      console.error("Failed to retrieve all admin reservations", error);
      throw new Error("Failed to retrieve all admin reservations");
    }
  }

  static async findReservationById(reservationId: number) {
    try {
      const response = await axiosClient.get(`/reservations/${reservationId}`);
      return response.data;
    } catch (error) {
      console.error(`Failed to find reservation by id ${reservationId}`, error);
      throw new Error("Failed to find reservation");
    }
  }

}
