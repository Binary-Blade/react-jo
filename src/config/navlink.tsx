import {
  CalendarIcon,
  LandmarkIcon,
  LayoutDashboardIcon,
  SettingsIcon,
  TicketIcon,
  UsersIcon
} from '@/components/ui/IconComponents';
import { NavLink } from '@/config/types/NavLink';
import { HomeIcon } from 'lucide-react';

export const NAVLINKS_PUBLIC: NavLink[] = [
  { icon: <HomeIcon className="h-4 w-4" />, name: 'Home', href: '/' },
  { icon: <LandmarkIcon className="h-4 w-4" />, name: 'Events', href: '/events' },
  { icon: <CalendarIcon className="h-4 w-4" />, name: 'Reservations', href: '/reservations' }
];

export const NAVLINKS_ADMIN: NavLink[] = [
  {
    icon: <LayoutDashboardIcon className="h-4 w-4" />,
    name: 'Dashboard - Events',
    href: '/dashboard'
  },
  {
    icon: <TicketIcon className="h-4 w-4" />,
    name: 'Dashboard - Statistic',
    href: '/dashboard/events'
  },
  {
    icon: <UsersIcon className="h-4 w-4" />,
    name: 'Dashboard - Customers',
    href: '/dashboard/customers'
  },
  {
    icon: <SettingsIcon className="h-4 w-4" />,
    name: 'Dashboard - Settings',
    href: '/dashboard/settings'
  }
];
