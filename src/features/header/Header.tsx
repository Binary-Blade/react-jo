import { useAuthStore } from '@/stores/useAuthStore';
import { NavBar } from '@/components/navbar/NavBar';
import { SideBarMenu } from '@/components/navbar/SideBarMenu';
import { useDisplayTotalItems } from '@/hooks/useDisplayTotalItems';

export const Header = () => {
  const { isAuthenticated, role } = useAuthStore();
  const totalItems = useDisplayTotalItems();
  return (
    <header className="sticky top-0 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6 z-50">
      <div className="flex items-center space-x-2 md:space-x-4 md:ml-auto">
        <SideBarMenu hiddenValue="md" />
      </div>
      <NavBar isAuthenticated={isAuthenticated} totalItems={totalItems} role={role} />
    </header>
  );
};
