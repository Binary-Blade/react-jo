import { CalendarIcon, MedalIcon, SettingsIcon, UsersIcon } from '@/components/ui/IconComponents';
import { Link } from 'wouter';

type SideBarDesktopProps = {
  setActiveComponent: (component: string) => void;
};

export const SideBarDesktop = ({ setActiveComponent }: SideBarDesktopProps) => {
  return (
    <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link className="flex items-center gap-2 font-semibold" href="/">
            <MedalIcon className="h-6 w-6" />
            <span className="">Dashboard Admin</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <button
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500
              transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              onClick={() => setActiveComponent('events')}
            >
              <CalendarIcon className="h-4 w-4" />
              Events
            </button>
            <button
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500
              transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              onClick={() => setActiveComponent('users')}
            >
              <UsersIcon className="h-4 w-4" />
              Users
            </button>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <SettingsIcon className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};
