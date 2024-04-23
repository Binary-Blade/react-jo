import { Link, useLocation } from 'wouter';
import imageParis from "../../../assets/icons/Logo.png";
import { useAuthStore } from "@/stores/useAuthStore";
import { FC, useEffect, useState } from 'react';
import { SignUpForm } from '@/components/forms/SignUpForm';
import { DropDownAccount } from './DropDownAccount';
import useCartStore from '@/stores/useCartStore';
import { ShoppingCartIcon } from '@/assets/icons/IconComponents';

interface NavLinkProps {
  navLinks: { name: string, href: string }[];
}


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
      await logout(); // Assume logout() is an async function that clears user session
      console.log('Logout successful');
      navigate('/'); // Redirect to home or dashboard as necessary
    } catch (error: any) {
      const errorMessage = error.message || "Logout failed due to an unexpected error";
      console.error('Logout failed:', errorMessage);
      alert(errorMessage); // Show a user-friendly error message
    }
  };


  return (
    <header className="w-full bg-white shadow-sm dark:bg-gray-950">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <img src={imageParis} alt="Paris 2024" className="w-16" />
        <nav className="hidden md:flex items-center gap-20 text-md font-medium">
          {navLinks.map(link => (
            <Link key={link.name} href={link.href} className="hover:text-gray-900 dark:hover:text-gray-50">
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

