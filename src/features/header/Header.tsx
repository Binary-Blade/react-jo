import { useAuthStore } from '@/stores/useAuthStore';
import { useDisplayTotalCommands, useDisplayTotalItems } from '@/hooks/useDisplayTotalItems';
import { SideBarMenu } from '../navbar/SideBarMenu';
import { NavBar } from '../navbar/NavBar';

/**
 * `Header` component provides the main header of the application.
 * It includes navigation elements, authentication status, and item counts.
 *
 * @component
 * @returns {JSX.Element} The rendered header component.
 *
 * @example
 * return (
 *   <Header />
 * )
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components and hooks:
 * - `SideBarMenu` for displaying the sidebar menu.
 * - `NavBar` for displaying the main navigation bar.
 * - `useAuthStore` for managing authentication state.
 * - `useDisplayTotalItems`, `useDisplayTotalCommands` for displaying item and command counts.
 */
export const Header = (): JSX.Element => {
  // Extract authentication status and user role from the auth store
  const { isAuthenticated, role } = useAuthStore();
  // Get total items in the cart using a custom hook
  const totalItems = useDisplayTotalItems();
  // Get total commands using a custom hook
  const totalCommands = useDisplayTotalCommands();

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between bg-white dark:bg-gray-900 shadow-md px-4 md:px-6">
      <div className="flex items-center space-x-2 md:space-x-4">
        {/* SideBarMenu component for displaying the sidebar menu */}
        <SideBarMenu hiddenValue="md" />
      </div>
      {/* NavBar component for displaying the main navigation bar */}
      <NavBar
        isAuthenticated={isAuthenticated}
        totalItemsCart={totalItems}
        role={role}
        totalCommands={totalCommands}
      />
    </header>
  );
};
