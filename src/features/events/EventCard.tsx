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
import { Link } from 'wouter'; // Import Link from wouter
import useFormattedDateRange from '@/hooks/useFormattedEventDates';

interface EventCardProps {
  eventId: number | undefined;
  title: string;
  description: string;
  categoryType: string;
  quantityAvailable: number;
  startDate: string;
  endDate: string;
}

export const EventCard: FC<EventCardProps> = ({
  eventId,
  title,
  description,
  categoryType,
  quantityAvailable,
  startDate,
  endDate
}) => {
  const dateText = useFormattedDateRange(startDate, endDate);

  // TODO: MODIFY ICON FOR EACH CATEGORY TYPE
  return (
    <Card className="group hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <ActivityIcon className="h-8 w-8 text-primary group-hover:text-primary-600 transition-colors duration-300" />
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

// const iconType = (
//   < div className="grid gap-8" >
//     <h3 className="text-xl font-semibold">Featured Events</h3>
//     <ul className="grid lg:grid-cols-2 gap-6">
//       <li className="flex gap-4">
//         <ActivityIcon className="w-6 h-6" />
//         Track & Field
//       </li>
//       <li className="flex gap-4">
//         <FishIcon className="w-6 h-6" />
//         Swimming
//       </li>
//       <li className="flex gap-4">
//         <ShoppingBasketIcon className="w-6 h-6" />
//         Basketball
//       </li>
//       <li className="flex gap-4">
//         <DumbbellIcon className="w-6 h-6" />
//         Gymnastics
//       </li>
//       <li className="flex gap-4">
//         <GoalIcon className="w-6 h-6" />
//         Soccer
//       </li>
//       <li className="flex gap-4">
//         <TurtleIcon className="w-6 h-6" />
//         Tennis
//       </li>
//     </ul>
//   </div >
// )
