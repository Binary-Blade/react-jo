import { Link, useLocation } from 'wouter';
import { useAuthStore } from "@/stores/useAuthStore";
import { FC, useEffect, useState } from 'react';
import { DropDownAccount } from './DropDownAccount';
import useCartStore from '@/stores/useCartStore';
import { MedalIcon, ShoppingCartIcon } from '@/assets/icons/IconComponents';
import { SignUpForm } from '@/features/auth/SignUpForm';
import { NavLinkProps } from '@/types/NavLink';

export const NavBarHeader: FC<NavLinkProps> = ({ navLinks }) => {
  const logout = useAuthStore((state) => state.logout);
  const [, navigate] = useLocation();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const cartItems = useCartStore((state) => state.cartItems);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setTotalItems(total);
  }, [cartItems]);

  const handleLogout = async () => {
    try {
      await logout();
      console.log('Logout successful');
      navigate('/');
    } catch (error: any) {
      const errorMessage = error.message || "Logout failed due to an unexpected error";
      console.error('Logout failed:', errorMessage);
      alert(errorMessage);
    }
  };

  return (
    <header className="w-full bg-white shadow-sm dark:bg-gray-950">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <MedalIcon className="w-8 h-8 text-rose-500" />
          <span className="text-xl font-semibold tracking-tight">Paris 2024</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-md font-medium">
          {navLinks.map(link => (
            <Link key={link.name} href={link.href} className="text-md font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link className="relative" href="/cart">
            <ShoppingCartIcon className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-0.5 text-xs font-medium">
                {totalItems}
              </span>
            )}
          </Link>
          {!isAuthenticated ? (
            <>
              <SignUpForm />
              <Link href="/login" className="text-primary-500 dark:text-primary-400 font-medium">Login</Link>
            </>
          ) : (
            <DropDownAccount handleLogout={handleLogout} />
          )}
        </div>
      </div>
    </header >
  )
}

