import { PaginationParams } from '@/services/EventService';

export type EventPropsType = {
  eventId?: number | undefined;
  title: string;
  description: string;
  imageSrc?: string;
  basePrice?: number | undefined;
  quantityAvailable: number;
};

export type EventType = {
  eventId?: number | undefined;
  title: string;
  description: string;
  basePrice: number | undefined;
  eventName: string;
  prices: {
    eventPriceId: number;
    priceFormula: string;
    price: number;
  };
  categoryType: string;
  quantityAvailable: number;
  quantitySold: number;
  revenueGenerated: number;
  startDate: string;
  endDate: string;
};

export type EventRequest = {
  eventId?: number;
  title: string;
  description: string;
  basePrice: number;
  categoryType: string;
  quantityAvailable: number;
  startDate: string;
  endDate: string;
};

export type EventRequestUpdate = {
  title?: string;
  description?: string;
  basePrice?: number;
  categoryType?: string;
  quantityAvailable?: number;
  startDate?: string;
  endDate?: string;
};

export type EventResponse = {
  success: boolean;
  data: any;
};

export interface EventStoreType {
  allEventsValues: EventType[];
  event: EventType | null;
  total?: number; // Optional or required based on your design
  events: EventType[];
  fetchValues: () => Promise<void>;
  fetchEvents: (params: PaginationParams) => Promise<void>;
  getEvent: (eventId: number) => Promise<any>;
  getTicketPrice: (eventId: number, ticketType: string) => Promise<any>;
  addEvent: (eventData: EventRequest) => Promise<void>;
  updateEvent: (eventId: number, eventData: EventRequestUpdate) => Promise<void>;
  deleteEvent: (eventId: number) => Promise<void>;
}
