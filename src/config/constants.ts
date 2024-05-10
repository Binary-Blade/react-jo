export const STATUSCOLOR: { [key: string]: string } = {
    PENDING: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
    APPROVED: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
    REJECTED: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
    CANCELLED: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
};

export const TAXES_10 = 0.1;

interface TicketDescriptions {
    [key: string]: string;
}
export const ticketDescriptions: TicketDescriptions = {
    SOLO: "Individual tickets for the 2024 Olympic Games.",
    DUO: "Tickets for two people to attend the 2024 Olympic Games.",
    FAMILY: "Tickets for a family of four to attend the 2024 Olympic Games."
};
