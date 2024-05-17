import { useAuthStore } from '@/stores/useAuthStore';
import { useLocalCartStore } from '@/stores/useLocalCartStore';
import { useCartStore } from '@/stores/useCartStore';
import { useMemo } from 'react';
import { NavBar } from '@/components/navbar/NavBar';
import { SideBarMenu } from '@/components/navbar/SideBarMenu';

export const Header = () => {
  const { isAuthenticated } = useAuthStore();
  const { cartItemsLocal } = useLocalCartStore();
  const { cartItems } = useCartStore();

  const totalItems = useMemo(() => {
    let total = 0;
    if (!isAuthenticated) {
      total = cartItemsLocal.reduce((acc, item) => acc + item.quantity, 0);
    } else {
      total = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    }
    return total;
  }, [cartItems, isAuthenticated]);

  return (
    <header className="sticky top-0 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
      <div className="flex items-center space-x-2 md:space-x-4 md:ml-auto">
        <SideBarMenu hiddenValue="md" />
      </div>
      <NavBar isAuthenticated={isAuthenticated} totalItems={totalItems} />
    </header>
  );
};
