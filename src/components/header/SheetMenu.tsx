import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { NavBarProps } from "@/types/NavLink";
import { MenuIcon } from '@/assets/icons/IconComponents';

export const SheetMenu: React.FC<NavBarProps> = ({ navLinks }) => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[300px] bg-white dark:bg-gray-950 p-6" side="left">
          <div className="flex flex-col gap-6">
            <nav className="grid gap-6 text-lg font-medium">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-gray-900 dark:hover:text-gray-50">
                  {link.icon && <span className="inline-block">{link.icon}</span>}
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

