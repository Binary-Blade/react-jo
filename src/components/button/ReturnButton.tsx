import { LogOutIcon } from '@/components/ui/IconComponents';
import { Link } from 'wouter';

type ButtonToEventProps = {
  href: string;
  className?: string;
};

export const ReturnButton = ({ href, className }: ButtonToEventProps) => {
  return (
    <Link className="button ghost" href={href}>
      <LogOutIcon className={`rotate-180 ${className}`} />
      <span className="sr-only">Logout</span>
    </Link>
  );
};
