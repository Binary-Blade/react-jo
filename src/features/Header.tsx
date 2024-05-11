import { NavBar } from '@/components/header/NavBar';
import { SideBarMenu } from '@/components/header/SideBarMenu';

// TODO: ADD USER ROLE ADMIN LINK TO NAVBAR ADMIN
export const Header = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
      <div className="flex items-center space-x-2 md:space-x-4 md:ml-auto">
        <SideBarMenu hiddenValue="md" />
      </div>
      <NavBar />
    </header>
  );
};
