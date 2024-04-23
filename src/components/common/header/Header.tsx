import { NavLink } from "@/types/NavLink";
import { SheetMenu } from "./SheetMenu"
import { NavBarHeader } from "./NavBarHeader";

export const Header = () => {

  const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/events' },
    { name: 'Reservations', href: '/reservations' },
  ];

  return (
    <header className="sticky top-0 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
      <div className="flex items-center space-x-2 md:space-x-4 md:ml-auto">
        <SheetMenu navLinks={navLinks} />
      </div>
      <NavBarHeader navLinks={navLinks} />
    </header>
  )
}
