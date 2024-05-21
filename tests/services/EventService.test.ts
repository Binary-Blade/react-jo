import { EventService } from '@/services/EventService';
import axiosClient from '@/config/axiosConfig';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { CreateEventDto, UpdateEventDto } from '@/config/dtos/Event.dto';

vi.mock('@/config/axiosConfig');

describe('EventService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should retrieve all event values successfully', async () => {
    const mockResponse = {
      data: [
        { id: 1, title: 'Event 1' },
        { id: 2, title: 'Event 2' }
      ]
    };

    vi.mocked(axiosClient.get).mockResolvedValue(mockResponse);

    const response = await EventService.getAllValues();

    expect(response).toEqual({ success: true, data: mockResponse.data });
    expect(axiosClient.get).toHaveBeenCalledWith('/events/get-events-values');
  });

  it('should handle failure to retrieve all event values', async () => {
    vi.mocked(axiosClient.get).mockRejectedValue(new Error('Network error'));

    // Spy on console.error to suppress error logs during the test
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    await expect(EventService.getAllValues()).rejects.toThrow('Failed to fetch events');

    // Restore console.error
    consoleErrorSpy.mockRestore();
  });

  it('should retrieve all filtered events successfully', async () => {
    const mockResponse = { data: [{ id: 1, title: 'Event 1' }] };
    const params = { page: 1, limit: 10 };

    vi.mocked(axiosClient.get).mockResolvedValue(mockResponse);

    const response = await EventService.getAllEventsFiltered(params);

    expect(response).toEqual({ success: true, data: mockResponse.data });
    expect(axiosClient.get).toHaveBeenCalledWith('/events/get-all-filtered', { params });
  });

  it('should handle failure to retrieve all filtered events', async () => {
    const params = { page: 1, limit: 10 };

    vi.mocked(axiosClient.get).mockRejectedValue(new Error('Network error'));

    // Spy on console.error to suppress error logs during the test
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    await expect(EventService.getAllEventsFiltered(params)).rejects.toThrow(
      'Failed to fetch events'
    );

    // Restore console.error
    consoleErrorSpy.mockRestore();
  });

  it('should create an event successfully', async () => {
    const createEventDto: CreateEventDto = {
      title: 'New Event',
      shortDescription: 'Short description',
      longDescription: 'Long description',
      basePrice: 100,
      categoryType: 'Concert',
      quantityAvailable: 50,
      startDate: '2023-01-01',
      endDate: '2023-01-02'
    };
    const mockResponse = { data: { id: 1, ...createEventDto } };

    vi.mocked(axiosClient.post).mockResolvedValue(mockResponse);

    const response = await EventService.createEvent(createEventDto);

    expect(response).toEqual({ success: true, data: mockResponse.data });
    expect(axiosClient.post).toHaveBeenCalledWith('/events/create', createEventDto);
  });

  it('should handle failure to create an event', async () => {
    const createEventDto: CreateEventDto = {
      title: 'New Event',
      shortDescription: 'Short description',
      longDescription: 'Long description',
      basePrice: 100,
      categoryType: 'Concert',
      quantityAvailable: 50,
      startDate: '2023-01-01',
      endDate: '2023-01-02'
    };

    vi.mocked(axiosClient.post).mockRejectedValue(new Error('Network error'));

    // Spy on console.error to suppress error logs during the test
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    await expect(EventService.createEvent(createEventDto)).rejects.toThrow(
      'Failed to create event'
    );

    // Restore console.error
    consoleErrorSpy.mockRestore();
  });

  it('should get the ticket price successfully', async () => {
    const eventId = 1;
    const ticketType = 'VIP';
    const mockResponse = { data: 200 };

    vi.mocked(axiosClient.get).mockResolvedValue(mockResponse);

    const response = await EventService.getTicketPrice(eventId, ticketType);

    expect(response).toEqual({ success: true, price: mockResponse.data });
    expect(axiosClient.get).toHaveBeenCalledWith(`/events/${eventId}/price/${ticketType}`);
  });

  it('should handle failure to get the ticket price', async () => {
    const eventId = 1;
    const ticketType = 'VIP';

    vi.mocked(axiosClient.get).mockRejectedValue(new Error('Network error'));

    // Spy on console.error to suppress error logs during the test
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    await expect(EventService.getTicketPrice(eventId, ticketType)).rejects.toThrow(
      'Failed to fetch ticket price'
    );

    // Restore console.error
    consoleErrorSpy.mockRestore();
  });

  it('should get an event by ID successfully', async () => {
    const eventId = 1;
    const mockResponse = { data: { id: 1, title: 'Event 1' } };

    vi.mocked(axiosClient.get).mockResolvedValue(mockResponse);

    const response = await EventService.getEventById(eventId);

    expect(response).toEqual({ success: true, data: mockResponse.data });
    expect(axiosClient.get).toHaveBeenCalledWith(`/events/${eventId}`);
  });

  it('should handle failure to get an event by ID', async () => {
    const eventId = 1;

    vi.mocked(axiosClient.get).mockRejectedValue(new Error('Network error'));

    // Spy on console.error to suppress error logs during the test
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    await expect(EventService.getEventById(eventId)).rejects.toThrow('Failed to fetch event');

    // Restore console.error
    consoleErrorSpy.mockRestore();
  });

  it('should update an event successfully', async () => {
    const eventId = 1;
    const updateEventDto: UpdateEventDto = {
      title: 'Updated Event',
      shortDescription: 'Updated short description',
      longDescription: 'Updated long description'
    };
    const mockResponse = { data: { id: 1, ...updateEventDto } };

    vi.mocked(axiosClient.patch).mockResolvedValue(mockResponse);

    const response = await EventService.updateEvent(eventId, updateEventDto);

    expect(response).toEqual({ success: true, data: mockResponse.data });
    expect(axiosClient.patch).toHaveBeenCalledWith(`/events/${eventId}`, updateEventDto);
  });

  it('should handle failure to update an event', async () => {
    const eventId = 1;
    const updateEventDto: UpdateEventDto = {
      title: 'Updated Event',
      shortDescription: 'Updated short description',
      longDescription: 'Updated long description'
    };

    vi.mocked(axiosClient.patch).mockRejectedValue(new Error('Network error'));

    // Spy on console.error to suppress error logs during the test
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    await expect(EventService.updateEvent(eventId, updateEventDto)).rejects.toThrow(
      'Failed to update event'
    );

    // Restore console.error
    consoleErrorSpy.mockRestore();
  });

  it('should delete an event successfully', async () => {
    const eventId = 1;
    const mockResponse = { data: { success: true } };

    vi.mocked(axiosClient.delete).mockResolvedValue(mockResponse);

    const response = await EventService.deleteEvent(eventId);

    expect(response).toEqual({ success: true, data: mockResponse.data });
    expect(axiosClient.delete).toHaveBeenCalledWith(`/events/${eventId}`);
  });

  it('should handle failure to delete an event', async () => {
    const eventId = 1;

    vi.mocked(axiosClient.delete).mockRejectedValue(new Error('Network error'));

    // Spy on console.error to suppress error logs during the test
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    await expect(EventService.deleteEvent(eventId)).rejects.toThrow('Failed to delete event');

    // Restore console.error
    consoleErrorSpy.mockRestore();
  });
});
