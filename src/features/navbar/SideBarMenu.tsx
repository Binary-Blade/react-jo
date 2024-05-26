import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { MedalIcon, MenuIcon } from '@/components/ui/IconComponents';
import { useAuthStore } from '@/stores/useAuthStore';
import { UserRole } from '@/config/enums/UserRole.enum';
import { NAVLINKS_ADMIN, NAVLINKS_PUBLIC } from '@/config/constants/navbar/navlink';

type SideBarMenuProps = {
  hiddenValue: 'lg' | 'md'; // specifying possible values for better type checking
};

/**
 * `SideBarMenu` component displays a sidebar navigation menu that can be toggled.
 * It supports different visibility settings for large and medium screens.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {'lg' | 'md'} props.hiddenValue - The screen size at which the menu should be hidden.
 * @returns {JSX.Element} The rendered SideBarMenu component.
 *
 * @example
 * return (
 *   <SideBarMenu hiddenValue="lg" />
 * );
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components:
 * - `Sheet`, `SheetContent`, `SheetTrigger` for the sliding menu.
 * - `Button` for the menu toggle button.
 * - `MedalIcon`, `MenuIcon` for icons used in the navigation menu.
 * - `useAuthStore` to get the user's role.
 * It also conditionally renders links for public and admin users based on their role.
 */
export const SideBarMenu = ({ hiddenValue }: SideBarMenuProps): JSX.Element => {
  const { role } = useAuthStore();
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button className={`${hiddenValue}:hidden`} size="icon" variant="ghost">
            <MenuIcon className="h-6 w-6 text-gray-900" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-4 py-6 border-b">
              <div className="flex items-center gap-2">
                <MedalIcon className="h-6 w-6" />
                <span className="font-semibold text-xl">OlymTickets</span>
              </div>
            </div>
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start pt-4 gap-4 px-4 text-lg font-medium">
                <p className="text-md font-medium text-gray-500 dark:text-gray-400">Public</p>
                {NAVLINKS_PUBLIC.map(link => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  
                  transition-all hover:text-gray-900 dark:bg-gray-800 
                  dark:text-gray-50 dark:hover:text-gray-50"
                  >
                    {link.icon && <span className="inline-block">{link.icon}</span>}
                    {link.name}
                  </Link>
                ))}

                {role === UserRole.ADMIN && (
                  <>
                    <p className="text-md font-medium text-gray-500 dark:text-gray-400">Admin</p>
                    {NAVLINKS_ADMIN.map(link => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  
                  transition-all hover:text-gray-900 dark:bg-gray-800 
                  dark:text-gray-50 dark:hover:text-gray-50"
                      >
                        {link.icon && <span className="inline-block">{link.icon}</span>}
                        {link.name}
                      </Link>
                    ))}
                  </>
                )}
              </nav>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
