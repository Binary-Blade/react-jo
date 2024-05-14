import { EventRequest, EventRequestUpdate, EventStoreType } from '@/config/types/EventTypes';
import { filterProperties } from '@/lib/utils';
import { EventService, PaginationParams } from '@/services/EventService';
import { create } from 'zustand';

export const useEventStore = create<EventStoreType>((set, get) => ({
  events: [],
  event: null,
  allEventsValues: [],
  total: 0,

  fetchEvents: async (params: PaginationParams) => {
    try {
      const response = await EventService.getAllEventsFiltered(params);
      if (response.success) {
        set({
          events: response.data.events,
          total: response.data.total
        });
      }
    } catch (error) {
      console.error('Failed to fetch events:', error);
      throw new Error('Unable to fetch events.');
    }
  },

  fetchValues: async () => {
    try {
      const response = await EventService.getAllValues();
      if (response.success) {
        set({ allEventsValues: response.data });
      }
    } catch (error) {
      console.error('Failed to fetch events:', error);
      throw new Error('Unable to fetch events.');
    }
  },

  addEvent: async (eventData: EventRequest) => {
    try {
      const response = await EventService.createEvent(eventData);
      if (response.success) {
        set({ events: [...get().events, response.data] });
      }
    } catch (error) {
      console.error('Failed to add event:', error);
      throw new Error('Unable to add event.');
    }
  },

  getEvent: async (eventId: number) => {
    try {
      const response = await EventService.getEventById(eventId);
      if (response.success) {
        set({ event: response.data });
      }
    } catch (error) {
      console.error('Failed to fetch event:', error);
      throw new Error('Unable to fetch event.');
    }
  },

  getTicketPrice: async (eventId, ticketType) => {
    try {
      const response = await EventService.getTicketPrice(eventId, ticketType);
      if (response.success) {
        return response.price;
      }
    } catch (error) {
      console.error('Failed to fetch ticket price:', error);
      throw new Error('Unable to fetch ticket price.');
    }
  },

  updateEvent: async (eventId: number, eventData: EventRequestUpdate) => {
    const allowedProps = [
      'title',
      'description',
      'startDate',
      'endDate',
      'basePrice',
      'quantityAvailable'
    ];
    const dataToSend = filterProperties(eventData, allowedProps);
    try {
      const response = await EventService.updateEvent(eventId, dataToSend);
      if (response.success) {
        const updatedEvents = get().events.map(event =>
          event.eventId === eventId ? { ...event, ...response.data } : event
        );
        set({ events: updatedEvents });
      }
    } catch (error) {
      console.error('Failed to update event:', error);
      throw new Error('Unable to update event.');
    }
  },

  deleteEvent: async (eventId: number) => {
    try {
      const response = await EventService.deleteEvent(eventId);
      if (response.success) {
        const filteredEvents = get().events.filter(event => event.eventId !== eventId);
        set({ events: filteredEvents });
      }
    } catch (error) {
      console.error('Failed to delete event:', error);
      throw new Error('Unable to delete event.');
    }
  }
}));
