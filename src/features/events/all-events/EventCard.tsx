import placeholderImage from '@/assets/images/bg_image5.webp';
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
  CardFooter
} from '@/components/ui/card';
import { ActivityIcon } from '@/components/ui/IconComponents';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { useFormattedDates } from '@/hooks';
import { iconMapping } from '@/components/ui/IconCategories';

export interface EventCardProps {
  eventId: number | undefined;
  title: string;
  shortDescription: string;
  categoryType: string;
  quantityAvailable: number;
  startDate: string;
  endDate: string;
}

/**
 * `EventCard` component displays an event card with details such as title, description,
 * category, available quantity, and event dates. It also includes a button to view more details.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {number | undefined} props.eventId - The ID of the event.
 * @param {string} props.title - The title of the event.
 * @param {string} props.shortDescription - The short description of the event.
 * @param {string} props.categoryType - The category type of the event.
 * @param {number} props.quantityAvailable - The number of available tickets.
 * @param {string} props.startDate - The start date of the event.
 * @param {string} props.endDate - The end date of the event.
 * @returns {JSX.Element} The rendered event card component.
 *
 * @example
 * return (
 *   <EventCard
 *     eventId={1}
 *     title="Music Concert"
 *     shortDescription="Join us for an amazing music concert."
 *     categoryType="Music"
 *     quantityAvailable={100}
 *     startDate="2023-06-01"
 *     endDate="2023-06-02"
 *   />
 * );
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components:
 * - `Card`, `CardHeader`, `CardContent`, `CardTitle`, `CardDescription`, `CardFooter` for card layout.
 * - `Button` for the view event button.
 * - `ActivityIcon` for the default category icon.
 * - `useFormattedDates` hook for formatting event dates.
 * - `iconMapping` for mapping category types to icons.
 */
export const EventCard = ({
  eventId,
  title,
  shortDescription,
  categoryType,
  quantityAvailable,
  startDate,
  endDate
}: EventCardProps): JSX.Element => {
  // Format the start and end dates using the custom hook
  const dateText = useFormattedDates(startDate, endDate);
  // Determine the appropriate icon based on the category type
  const IconComponent = iconMapping[categoryType] || ActivityIcon;

  return (
    <Card
      className="group relative overflow-hidden rounded-lg 
      border border-gray-200 bg-white flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-rose-500"
    >
      {/* Event image */}
      <img
        alt="Événement de la carte"
        className="object-cover w-full"
        height={200}
        src={placeholderImage}
        style={{
          aspectRatio: '400/200',
          objectFit: 'cover'
        }}
      />
      <div className="flex flex-col flex-grow justify-between">
        <CardHeader>
          {/* Event title */}
          <CardTitle className="text-xl font-bold text-gray-900 dark:text-white truncate">
            {title}
          </CardTitle>
          {/* Event short description */}
          <CardDescription className="text-sm text-gray-500 dark:text-gray-400 break-words">
            {shortDescription}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            {/* Category icon */}
            <IconComponent className="h-8 w-8 text-rose-500 group-hover:text-rose-600 transition-colors duration-300" />
            <div>
              {/* Category type */}
              <div className="font-medium text-gray-900 dark:text-white">{categoryType}</div>
              {/* Available quantity */}
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Places disponibles : {quantityAvailable}
              </div>
              {/* Formatted event dates */}
              <div className="text-sm text-gray-500 dark:text-gray-400">{dateText}</div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-4">
          {/* View event button */}
          {eventId && (
            <Link to={`/events/${eventId}`} className="w-full">
              <Button variant="default" className="bg-gray-900 text-white hover:bg-rose-600 w-full">
                Voir l'événement
              </Button>
            </Link>
          )}
        </CardFooter>
      </div>
    </Card>
  );
};
