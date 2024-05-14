import axiosClient from '@/config/axiosConfig';
import { ReservationService } from './ReservationService';
import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('@/config/axiosConfig', () => ({
  default: {
    post: vi.fn(),
    get: vi.fn()
  }
}));

describe('ReservationService', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('addReservation should successfully add a reservation', async () => {
    const userId = 1;
    const cartId = 2;
    const mockResponse = { data: [{ id: 1, userId, cartId }] };
    vi.mocked(axiosClient.post).mockResolvedValue(mockResponse);

    const response = await ReservationService.addReservation(userId, cartId);
    expect(response).toEqual(mockResponse.data[0]);
    expect(axiosClient.post).toHaveBeenCalledWith(`/reservations/${cartId}`, { userId, cartId });
  });

  it('addReservation should handle failure', async () => {
    const userId = 1;
    const cartId = 2;
    vi.mocked(axiosClient.post).mockRejectedValue(new Error('Network error'));

    await expect(ReservationService.addReservation(userId, cartId)).rejects.toThrow(
      'Failed to add reservation'
    );
  });

  it('findAllReservations should retrieve all reservations for a user', async () => {
    const userId = 1;
    const mockResponse = { data: { reservations: [{ id: 1, userId }] } };
    vi.mocked(axiosClient.get).mockResolvedValue(mockResponse);

    const response = await ReservationService.findAllReservations(userId);
    expect(response).toEqual(mockResponse.data.reservations);
    expect(axiosClient.get).toHaveBeenCalledWith(`/reservations/${userId}/find-all`);
  });

  it('findAllReservations should handle retrieval failures', async () => {
    const userId = 1;
    vi.mocked(axiosClient.get).mockRejectedValue(new Error('Network error'));

    await expect(ReservationService.findAllReservations(userId)).rejects.toThrow(
      'Failed to retrieve all reservations'
    );
  });

  it('findAllAdminReservations should retrieve all reservations by admin', async () => {
    const mockResponse = { data: [{ id: 1, admin: true }] };
    vi.mocked(axiosClient.get).mockResolvedValue(mockResponse);

    const response = await ReservationService.findAllAdminReservations();
    expect(response).toEqual(mockResponse.data);
    expect(axiosClient.get).toHaveBeenCalledWith(`/reservations/find-all-admin`);
  });

  it('findAllAdminReservations should handle admin retrieval failures', async () => {
    vi.mocked(axiosClient.get).mockRejectedValue(new Error('Network error'));

    await expect(ReservationService.findAllAdminReservations()).rejects.toThrow(
      'Failed to retrieve all admin reservations'
    );
  });

  it('catchTicketById should retrieve a reservation by ID', async () => {
    const reservationId = 1;
    const mockResponse = { data: { id: reservationId, ticket: 'VIP' } };
    vi.mocked(axiosClient.get).mockResolvedValue(mockResponse);

    const response = await ReservationService.catchTicketById(reservationId);
    expect(response).toEqual(mockResponse.data);
    expect(axiosClient.get).toHaveBeenCalledWith(`/reservations/${reservationId}`);
  });

  it('catchTicketById should handle failure when trying to find a reservation', async () => {
    const reservationId = 1;
    vi.mocked(axiosClient.get).mockRejectedValue(new Error('Network error'));

    await expect(ReservationService.catchTicketById(reservationId)).rejects.toThrow(
      'Failed to find reservation'
    );
  });
});
