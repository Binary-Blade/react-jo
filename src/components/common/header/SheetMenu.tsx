import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, CircleUser } from "lucide-react";
import { Link, useLocation } from "wouter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavBarProps } from "@/types/NavLink";
import { useAuthStore } from '@/stores/useAuthStore';

export const SheetMenu: React.FC<NavBarProps> = ({ navLinks }) => {
  const logout = useAuthStore((state) => state.logout);
  const [, navigate] = useLocation();

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
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden" // Aligned to the right
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground flex items-center gap-2">
                {link.icon && <span className="inline-block">{link.icon}</span>}
                {link.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/settings">Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/support">Support</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

