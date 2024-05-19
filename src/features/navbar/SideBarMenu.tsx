import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { MedalIcon, MenuIcon } from '@/components/ui/IconComponents';
import { NAVLINKS_PUBLIC, NAVLINKS_ADMIN } from '@/config/navlink';
import { useAuthStore } from '@/stores/useAuthStore';
import { UserRole } from '@/config/enums/UserRole.enum';

type SideBarMenuProps = {
  hiddenValue: 'lg' | 'md'; // specifying possible values for better type checking
};

export const SideBarMenu = ({ hiddenValue }: SideBarMenuProps) => {
  const { role } = useAuthStore();
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button className={`${hiddenValue}:hidden`} size="icon" variant="ghost">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-4 py-6 border-b">
              <div className="flex items-center gap-2">
                <MedalIcon className="h-6 w-6" />
                <span className="font-semibold text-xl">Paris 2024</span>
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
