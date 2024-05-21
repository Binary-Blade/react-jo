import { useAuthStore } from '@/stores/useAuthStore';
import { useDisplayTotalCommands, useDisplayTotalItems } from '@/hooks/useDisplayTotalItems';
import { SideBarMenu } from '../navbar/SideBarMenu';
import { NavBar } from '../navbar/NavBar';

export const Header = () => {
  const { isAuthenticated, role } = useAuthStore();
  const totalItems = useDisplayTotalItems();
  const totalCommands = useDisplayTotalCommands();

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between bg-white dark:bg-gray-900 shadow-md px-4 md:px-6">
      <div className="flex items-center space-x-2 md:space-x-4">
        <SideBarMenu hiddenValue="md" />
      </div>
      <NavBar
        isAuthenticated={isAuthenticated}
        totalItemsCart={totalItems}
        role={role}
        totalCommands={totalCommands}
      />
    </header>
  );
};
