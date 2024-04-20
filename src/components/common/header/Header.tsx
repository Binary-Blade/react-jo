import { NavLink } from "@/types/NavLink";
import { NavBar } from "./Navbar"
import { SheetMenu } from "./SheetMenu"

export const Header = () => {

  const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/events' },
    { name: 'Offers', href: '/offers' },
    { name: 'Cart', href: '/cart' },
  ];
  return (
    <header className="sticky top-0 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
      <NavBar navLinks={navLinks} />
      <div className="flex items-center space-x-2 md:space-x-4 md:ml-auto">
        <SheetMenu navLinks={navLinks} />
      </div>
    </header>
  )
}
