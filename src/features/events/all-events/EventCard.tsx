import placeholderImage from '@/assets/images/bg_image5.webp';
import { FC } from 'react';
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

export const EventCard: FC<EventCardProps> = ({
  eventId,
  title,
  shortDescription,
  categoryType,
  quantityAvailable,
  startDate,
  endDate
}) => {
  const dateText = useFormattedDates(startDate, endDate);
  const IconComponent = iconMapping[categoryType] || ActivityIcon;

  return (
    <Card
      className="group relative overflow-hidden rounded-lg 
      border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
    >
      <img
        alt="Card Event"
        className="object-cover w-full"
        height={200}
        src={placeholderImage}
        style={{
          aspectRatio: '400/200',
          objectFit: 'cover'
        }}
      />
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white truncate">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-500 dark:text-gray-400 break-words">
          {shortDescription}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <IconComponent className="h-8 w-8 text-rose-500 group-hover:text-rose-600 transition-colors duration-300" />
          <div>
            <div className="font-medium text-gray-900 dark:text-white">{categoryType}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Places available: {quantityAvailable}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{dateText}</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-4">
        {eventId && (
          <Link to={`/events/${eventId}`}>
            <Button variant="default" className="bg-gray-900 text-white hover:bg-rose-600">
              View Event
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};
