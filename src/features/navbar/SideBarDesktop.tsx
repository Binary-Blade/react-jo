import { CalendarIcon, MedalIcon, UsersIcon } from '@/components/ui/IconComponents';
import { Link } from 'wouter';

type SideBarDesktopProps = {
  setActiveComponent: (component: string) => void;
};

/**
 * `SideBarDesktop` component displays a sidebar with navigation options.
 * It is only visible on large screens and allows the user to switch between different components.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {(component: string) => void} props.setActiveComponent - Function to set the active component.
 * @returns {JSX.Element} The rendered SideBarDesktop component.
 *
 * @example
 * return (
 *   <SideBarDesktop setActiveComponent={setActiveComponent} />
 * );
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom icon components:
 * - `CalendarIcon` for the events button.
 * - `MedalIcon` for the home link.
 * - `UsersIcon` for the users button.
 */
export const SideBarDesktop = ({ setActiveComponent }: SideBarDesktopProps): JSX.Element => {
  return (
    <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          {/* Home link with MedalIcon */}
          <Link className="flex items-center gap-2 font-semibold" href="/">
            <MedalIcon className="h-6 w-6" />
            <span>Tableau de bord</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            {/* Button to activate the events component */}
            <button
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500
              transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              onClick={() => setActiveComponent('events')}
            >
              <CalendarIcon className="h-4 w-4" />
              Événements
            </button>
            {/* Button to activate the users component */}
            <button
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500
              transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              onClick={() => setActiveComponent('users')}
            >
              <UsersIcon className="h-4 w-4" />
              Utilisateurs
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
