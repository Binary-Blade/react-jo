import axiosClient from '@/config/axiosConfig';
import { CreateEventDto, UpdateEventDto } from '@/config/dtos/Event.dto';
import { PaginationParams } from '@/config/interfaces/common/pagination-params.interface';
import { EventResponse } from '@/config/interfaces/event/event-response.interface';

/**
 * `EventService` provides methods for managing event-related operations.
 * It includes methods for fetching event values, fetching filtered events, creating events,
 * getting ticket prices, fetching event by ID, updating events, and deleting events.
 *
 * @class EventService
 */
export class EventService {
  /**
   * Get all event values.
   *
   * @returns {Promise<EventResponse>} The response from the server.
   *
   * @example
   * const response = await EventService.getAllValues();
   * console.log(response);
   */
  static async getAllValues(): Promise<EventResponse> {
    try {
      const response = await axiosClient.get('/events/get-events-values');
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error('Get all events error:', error);
      throw new Error('Failed to fetch events');
    }
  }

  /**
   * Get all events with optional filtering and pagination.
   *
   * @param {PaginationParams} [params] - Optional pagination and filtering parameters.
   * @returns {Promise<EventResponse>} The response from the server.
   *
   * @example
   * const params: PaginationParams = { limit: 10, offset: 0, sortBy: 'date', sortOrder: 'asc' };
   * const response = await EventService.getAllEventsFiltered(params);
   * console.log(response);
   */
  static async getAllEventsFiltered(params?: PaginationParams): Promise<EventResponse> {
    try {
      const response = await axiosClient.get('/events/get-all-filtered', { params });
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error('Get all events error:', error);
      throw new Error('Failed to fetch events');
    }
  }

  /**
   * Create a new event.
   *
   * @param {CreateEventDto} createEventDto - The data for creating a new event.
   * @returns {Promise<EventResponse>} The response from the server.
   *
   * @example
   * const createEventDto: CreateEventDto = {
   *   title: 'New Event',
   *   startDate: '2023-06-01',
   *   endDate: '2023-06-05',
   *   categoryType: 'Music',
   *   basePrice: 50,
   *   quantityAvailable: 100,
   *   shortDescription: 'A short description of the event.',
   *   longDescription: 'A detailed description of the event.'
   * };
   * const response = await EventService.createEvent(createEventDto);
   * console.log(response);
   */
  static async createEvent(createEventDto: CreateEventDto): Promise<EventResponse> {
    try {
      const response = await axiosClient.post('/events/create', createEventDto);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error('Create event error:', error);
      throw new Error('Failed to create event');
    }
  }

  /**
   * Get the ticket price for a specific event and ticket type.
   *
   * @param {number} eventId - The ID of the event.
   * @param {string} ticketType - The type of the ticket.
   * @returns {Promise<{ success: boolean; price: number }>} The response from the server.
   *
   * @example
   * const response = await EventService.getTicketPrice(1, 'VIP');
   * console.log(response);
   */
  static async getTicketPrice(
    eventId: number,
    ticketType: string
  ): Promise<{ success: boolean; price: number }> {
    try {
      const response = await axiosClient.get(`/events/${eventId}/price/${ticketType}`);
      return {
        success: true,
        price: response.data
      };
    } catch (error) {
      console.error('Get ticket price error:', error);
      throw new Error('Failed to fetch ticket price');
    }
  }

  /**
   * Get event details by ID.
   *
   * @param {number} eventId - The ID of the event.
   * @returns {Promise<EventResponse>} The response from the server.
   *
   * @example
   * const response = await EventService.getEventById(1);
   * console.log(response);
   */
  static async getEventById(eventId: number): Promise<EventResponse> {
    try {
      const response = await axiosClient.get(`/events/${eventId}`);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error(`Get event by ID error: ${eventId}`, error);
      throw new Error('Failed to fetch event');
    }
  }

  /**
   * Update an existing event.
   *
   * @param {number} eventId - The ID of the event.
   * @param {UpdateEventDto} updateEventDto - The data for updating the event.
   * @returns {Promise<EventResponse>} The response from the server.
   *
   * @example
   * const updateEventDto: UpdateEventDto = {
   *   title: 'Updated Event',
   *   startDate: '2023-06-01',
   *   endDate: '2023-06-05',
   *   categoryType: 'Music',
   *   basePrice: 60,
   *   quantityAvailable: 150,
   *   shortDescription: 'An updated short description of the event.',
   *   longDescription: 'An updated detailed description of the event.'
   * };
   * const response = await EventService.updateEvent(1, updateEventDto);
   * console.log(response);
   */
  static async updateEvent(
    eventId: number,
    updateEventDto: UpdateEventDto
  ): Promise<EventResponse> {
    try {
      const response = await axiosClient.patch(`/events/${eventId}`, updateEventDto);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error(`Update event error: ${eventId}`, error);
      throw new Error('Failed to update event');
    }
  }

  /**
   * Delete an event by ID.
   *
   * @param {number} eventId - The ID of the event.
   * @returns {Promise<EventResponse>} The response from the server.
   *
   * @example
   * const response = await EventService.deleteEvent(1);
   * console.log(response);
   */
  static async deleteEvent(eventId: number): Promise<EventResponse> {
    try {
      const response = await axiosClient.delete(`/events/${eventId}`);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error(`Delete event error: ${eventId}`, error);
      throw new Error('Failed to delete event');
    }
  }
}
