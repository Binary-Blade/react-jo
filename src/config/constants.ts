export const STATUSCOLOR: { [key: string]: string } = {
  APPROVED: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
  REJECTED: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
};

export const TAXES_10 = 0.1;

interface TicketDescriptions {
  [key: string]: string;
}
export const ticketDescriptions: TicketDescriptions = {
  SOLO: 'Billets individuels pour les Jeux Olympiques 2024.',
  DUO: 'Billets pour deux personnes pour assister aux Jeux Olympiques 2024.',
  FAMILY: 'Billets pour une famille de quatre personnes pour assister aux Jeux Olympiques 2024.'
};
