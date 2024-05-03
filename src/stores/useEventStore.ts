import { EventStoreType, EventType } from '@/config/types/EventTypes';
import { EventService } from '@/services/EventService';
import { create } from 'zustand';


export const useEventStore = create<EventStoreType>((set, get) => ({
    events: [],

    fetchEvents: async () => {
        try {
            const response = await EventService.getAllEvents();
            if (response.success) {
                set({ events: response.data });
            }
        } catch (error) {
            console.error("Failed to fetch events:", error);
            throw new Error("Unable to fetch events.");
        }
    },

    getTicketPrice: async (eventId, ticketType) => {
        try {
            const response = await EventService.getTicketPrice(eventId, ticketType);
            if (response.success) {
                return response.price;
            }
        } catch (error) {
            console.error("Failed to fetch ticket price:", error);
            throw new Error("Unable to fetch ticket price.");
        }
    },

    addEvent: async (eventData: EventType) => {
        try {
            const response = await EventService.createEvent(eventData);
            if (response.success) {
                set({ events: [...get().events, response.data] });
            }
        } catch (error) {
            console.error("Failed to add event:", error);
            throw new Error("Unable to add event.");
        }
    },

    updateEvent: async (eventId: number, eventData: EventType) => {
        try {
            const response = await EventService.updateEvent(eventId, eventData);
            if (response.success) {
                const updatedEvents = get().events.map(event =>
                    event.eventId === eventId ? { ...event, ...response.data } : event
                );
                set({ events: updatedEvents });
            }
        } catch (error) {
            console.error("Failed to update event:", error);
            throw new Error("Unable to update event.");
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
            console.error("Failed to delete event:", error);
            throw new Error("Unable to delete event.");
        }
    },
}));

