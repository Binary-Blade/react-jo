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
    eventName: string;
    prices: {
        eventPriceId: number;
        priceFormula: string;
        price: number;
    };
    categoryType: string;
    quantityAvailable: number;
    quantitySold: number;
    category: string;
    revenueGenerated: number;
    startDate: string;
    endDate: string;
}


export type EventResponse = {
    success: boolean;
    data: any;
}


export interface EventStoreType {
    events: EventType[];
    event: EventType | null;
    fetchEvents: () => Promise<void>;
    getEvent: (eventId: number) => Promise<any>;
    getTicketPrice: (eventId: number, ticketType: string) => Promise<any>;
    addEvent: (eventData: EventType) => Promise<void>;
    updateEvent: (eventId: number, eventData: EventType) => Promise<void>;
    deleteEvent: (eventId: number) => Promise<void>;
}
