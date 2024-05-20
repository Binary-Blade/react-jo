import { FC } from 'react';

import placeholderImage from '@/assets/images/bg_image2.webp';
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
      border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
    >
      <img
        alt="Profile picture"
        className="object-cover w-full"
        height="30"
        src={placeholderImage}
        style={{
          objectFit: 'cover'
        }}
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{shortDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <IconComponent className="h-8 w-8 text-rose-500 group-hover:text-primary-600 transition-colors duration-300" />
          <div>
            <div className="font-medium">{categoryType}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Place available: {quantityAvailable}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{dateText}</div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        {eventId && (
          <Link to={`/events/${eventId}`}>
            <Button variant="default">View Event</Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};
