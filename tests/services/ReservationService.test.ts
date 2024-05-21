import { ReservationService } from '@/services/ReservationService';
import axiosClient from '@/config/axiosConfig';
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

    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    await expect(ReservationService.addReservation(userId, cartId)).rejects.toThrow(
      'Failed to add reservation'
    );

    consoleErrorSpy.mockRestore();
  });

  it('findAllReservations should retrieve all reservations for a user with pagination', async () => {
    const userId = 1;
    const params = { page: 1, limit: 10 };
    const mockResponse = { data: { reservations: [{ id: 1, userId }] } };
    vi.mocked(axiosClient.get).mockResolvedValue(mockResponse);

    const response = await ReservationService.findAllReservations(userId, params);
    expect(response).toEqual(mockResponse.data);
    expect(axiosClient.get).toHaveBeenCalledWith(`/reservations/${userId}/find-all`, { params });
  });

  it('findAllReservations should handle retrieval failures', async () => {
    const userId = 1;
    const params = { page: 1, limit: 10 };
    vi.mocked(axiosClient.get).mockRejectedValue(new Error('Network error'));

    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    await expect(ReservationService.findAllReservations(userId, params)).rejects.toThrow(
      'Failed to retrieve all reservations'
    );

    consoleErrorSpy.mockRestore();
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

    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    await expect(ReservationService.findAllAdminReservations()).rejects.toThrow(
      'Failed to retrieve all admin reservations'
    );

    consoleErrorSpy.mockRestore();
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

    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    await expect(ReservationService.catchTicketById(reservationId)).rejects.toThrow(
      'Failed to find reservation'
    );

    consoleErrorSpy.mockRestore();
  });
});
