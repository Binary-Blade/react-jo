import { LogOutIcon } from '@/components/ui/IconComponents';
import { Link } from 'wouter';

export const ButtonToEvent = () => {
  return (
    <Link className="button ghost" href="/events">
      <LogOutIcon className="h-8 w-8 rotate-180" />
      <span className="sr-only">Logout</span>
    </Link>
  );
};
