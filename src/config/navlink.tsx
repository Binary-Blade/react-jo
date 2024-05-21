import {
  CalendarIcon,
  LandmarkIcon,
  LayoutDashboardIcon,
  SettingsIcon,
  UsersIcon
} from '@/components/ui/IconComponents';
import { NavLink } from '@/config/types/NavLink';
import { HomeIcon } from 'lucide-react';

export const NAVLINKS_PUBLIC: NavLink[] = [
  { icon: <HomeIcon className="h-4 w-4" />, name: 'Accueil', href: '/' },
  { icon: <LandmarkIcon className="h-4 w-4" />, name: 'Événements', href: '/events' },
  { icon: <CalendarIcon className="h-4 w-4" />, name: 'Réservations', href: '/reservations' },
  { icon: <UsersIcon className="h-4 w-4" />, name: 'Commandes', href: '/checkout' }
];

export const NAVLINKS_ADMIN: NavLink[] = [
  {
    icon: <LayoutDashboardIcon className="h-4 w-4" />,
    name: 'Tableau de bord - Événements',
    href: '/dashboard'
  },
  {
    icon: <UsersIcon className="h-4 w-4" />,
    name: 'Tableau de bord - Clients',
    href: '/dashboard/customers'
  },
  {
    icon: <SettingsIcon className="h-4 w-4" />,
    name: 'Tableau de bord - Paramètres',
    href: '/dashboard/settings'
  }
];
