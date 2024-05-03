import { Event, EventResponse } from '@/types/EventTypes';
import axiosClient from '@/utils/axiosConfig';

/**
 * Service class for handling API requests related to events.
 */
export class EventService {

  /**
   * Fetches all events from the server.
   * @returns {Promise<{success: boolean; data: any}>} A promise that resolves with the events data.
   */
  static async getAllEvents(): Promise<EventResponse> {
    try {
      const response = await axiosClient.get('/events/get-all');
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error('Get all events error:', error);
      throw new Error("Failed to fetch events");
    }
  }

  /**
   * Creates a new event with the specified details.
   * @param {Event} createEventDto - The event data to create.
   * @returns {Promise<{success: boolean; data: any}>} A promise that resolves with the created event data.
   */
  static async createEvent(createEventDto: Event): Promise<EventResponse> {
    try {
      const response = await axiosClient.post('/events/create', createEventDto);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error('Create event error:', error);
      throw new Error("Failed to create event");
    }
  }
  /**
   * Fetches the price of a ticket for a specific event and ticket type.
   * @param {number} eventId - The ID of the event to get the ticket price for.
   * @param {string} ticketType - The type of ticket to get the price for.
   * @returns {Promise<{success: boolean; price: number}>} A promise that resolves with the ticket price.
   */
  static async getTicketPrice(eventId: number, ticketType: string): Promise<{ success: boolean; price: number }> {
    try {
      const response = await axiosClient.get(`/events/${eventId}/price/${ticketType}`);
      return {
        success: true,
        price: response.data
      };
    } catch (error) {
      console.error('Get ticket price error:', error);
      throw new Error("Failed to fetch ticket price");
    }
  }

  /**
   * Fetches a single event by its ID.
   * @param {number} eventId - The ID of the event to retrieve.
   * @returns {Promise<{success: boolean; data: any}>} A promise that resolves with the event data.
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
      throw new Error("Failed to fetch event");
    }
  }

  /**
   * Updates an event by its ID with the given data.
   * @param {number} eventId - The ID of the event to update.
   * @param {Event} updateEventDto - The data to update the event with.
   * @returns {Promise<{success: boolean; data: any}>} A promise that resolves with the updated event data.
   */
  static async updateEvent(eventId: number, updateEventDto: Event): Promise<EventResponse> {
    try {
      const response = await axiosClient.patch(`/events/${eventId}`, updateEventDto);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error(`Update event error: ${eventId}`, error);
      throw new Error("Failed to update event");
    }
  }

  /**
   * Deletes an event by its ID.
   * @param {number} eventId - The ID of the event to delete.
   * @returns {Promise<{success: boolean; data: any}>} A promise that resolves with the confirmation of deletion.
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
      throw new Error("Failed to delete event");
    }
  }
}
