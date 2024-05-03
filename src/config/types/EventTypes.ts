export type EventPropsType = {
    eventId?: number | undefined,
    title: string,
    description: string,
    imageSrc?: string,
    basePrice?: number | undefined,
    quantityAvailable: number
}

export type EventType = {
    eventId?: number | undefined;
    title: string;
    description: string;
    basePrice: number | undefined;
    quantityAvailable: number;
}


export type EventResponse = {
    success: boolean;
    data: any;
}


export interface EventStoreType {
    events: EventType[];
    fetchEvents: () => Promise<void>;
    getTicketPrice: (eventId: number, ticketType: string) => Promise<any>;
    addEvent: (eventData: EventType) => Promise<void>;
    updateEvent: (eventId: number, eventData: EventType) => Promise<void>;
    deleteEvent: (eventId: number) => Promise<void>;
}
