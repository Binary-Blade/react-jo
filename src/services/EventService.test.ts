import axiosClient from '@/config/axiosConfig';
import { EventService } from './EventService';
import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('@/config/axiosConfig', () => ({
  default: {
    get: vi.fn(),
    post: vi.fn(),
    patch: vi.fn(),
    delete: vi.fn()
  }
}));

describe('EventService', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('getAllValues should return all events successfully', async () => {
    const mockResponse = { data: [{ id: 1, name: 'Event A' }] };
    vi.mocked(axiosClient.get).mockResolvedValue(mockResponse);

    const response = await EventService.getAllValues();
    expect(response).toEqual({ success: true, data: mockResponse.data });
    expect(axiosClient.get).toHaveBeenCalledWith('/events/get-events-values');
  });

  it('getAllEventsFiltered should return filtered events', async () => {
    const params = { sortBy: 'date', sortOrder: 'asc' };
    const mockResponse = { data: [{ id: 1, name: 'Event B' }] };
    vi.mocked(axiosClient.get).mockResolvedValue(mockResponse);

    const response = await EventService.getAllEventsFiltered(params);
    expect(response).toEqual({ success: true, data: mockResponse.data });
    expect(axiosClient.get).toHaveBeenCalledWith('/events/get-all-filtered', { params });
  });

  it('createEvent should successfully create an event', async () => {
    const eventData = {
      title: 'New Event',
      shortDescription: 'A brand new event',
      longDescription: 'A brand new event',
      basePrice: 100,
      categoryType: 'Conference',
      quantityAvailable: 150,
      startDate: '2024-05-01',
      endDate: '2024-05-02'
    };
    const mockResponse = { data: { id: 1, ...eventData } };
    vi.mocked(axiosClient.post).mockResolvedValue(mockResponse);

    const response = await EventService.createEvent(eventData);
    expect(response).toEqual({ success: true, data: mockResponse.data });
    expect(axiosClient.post).toHaveBeenCalledWith('/events/create', eventData);
  });

  it('getTicketPrice should return ticket price', async () => {
    const eventId = 1;
    const ticketType = 'VIP';
    const mockResponse = { data: 300 };
    vi.mocked(axiosClient.get).mockResolvedValue(mockResponse);

    const response = await EventService.getTicketPrice(eventId, ticketType);
    expect(response).toEqual({ success: true, price: mockResponse.data });
    expect(axiosClient.get).toHaveBeenCalledWith(`/events/${eventId}/price/${ticketType}`);
  });

  it('getEventById should fetch event by ID', async () => {
    const eventId = 1;
    const mockResponse = { data: { id: eventId, name: 'Event C' } };
    vi.mocked(axiosClient.get).mockResolvedValue(mockResponse);

    const response = await EventService.getEventById(eventId);
    expect(response).toEqual({ success: true, data: mockResponse.data });
    expect(axiosClient.get).toHaveBeenCalledWith(`/events/${eventId}`);
  });

  it('updateEvent should update the event', async () => {
    const eventId = 1;
    const updateData = {
      title: 'Updated Event Title',
      shortDescription: 'A brand new event',
      longDescription: 'A brand new event',
      basePrice: 120,
      categoryType: 'Seminar',
      quantityAvailable: 100,
      startDate: '2024-05-03',
      endDate: '2024-05-04'
    };
    const mockResponse = { data: { id: eventId, ...updateData } };
    vi.mocked(axiosClient.patch).mockResolvedValue(mockResponse);

    const response = await EventService.updateEvent(eventId, updateData);
    expect(response).toEqual({ success: true, data: mockResponse.data });
    expect(axiosClient.patch).toHaveBeenCalledWith(`/events/${eventId}`, updateData);
  });

  it('deleteEvent should delete the event', async () => {
    const eventId = 2;
    const mockResponse = { data: {} };
    vi.mocked(axiosClient.delete).mockResolvedValue(mockResponse);

    const response = await EventService.deleteEvent(eventId);
    expect(response).toEqual({ success: true, data: mockResponse.data });
    expect(axiosClient.delete).toHaveBeenCalledWith(`/events/${eventId}`);
  });

  it('getAllValues should handle failure', async () => {
    vi.mocked(axiosClient.get).mockRejectedValue(new Error('Network error'));

    await expect(EventService.getAllValues()).rejects.toThrow('Failed to fetch events');
  });

  // Include similar error tests for other methods to ensure complete coverage
});
