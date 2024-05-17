import { Link } from 'wouter';
import { MedalIcon, ShoppingCartIcon } from '../ui/IconComponents';
import { NAVLINKS_PUBLIC } from '@/config/navlink';
import { FC } from 'react';
import { DropDownAccount } from '@/features/header/DropDownAccount';

interface NavBarProps {
  isAuthenticated: boolean;
  totalItems: number;
}

export const NavBar: FC<NavBarProps> = ({ isAuthenticated, totalItems }) => {
  return (
    <header className="w-full bg-white shadow-sm dark:bg-gray-950">
      <div className="container flex items-center justify-between h-16 px-4 md:px-2">
        <div className="flex items-center gap-2">
          <MedalIcon className="w-8 h-8 text-rose-500" />
          <span className="text-xl font-semibold tracking-tight">Paris 2024</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-md font-medium">
          {NAVLINKS_PUBLIC.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className="text-md font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href={'/dashboard'}
            className="text-md font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            Dashboard
          </Link>
        </nav>
        <div className="flex items-center gap-6">
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
              <Link
                href="/auth"
                className="inline-flex items-center justify-center px-6 py-3 text-base 
                font-semibold text-gray-900 bg-white border border-transparent rounded-md shadow-sm hover:bg-gray-50"
              >
                Login
              </Link>
            </>
          ) : (
            <DropDownAccount />
          )}
        </div>
      </div>
    </header>
  );
};
