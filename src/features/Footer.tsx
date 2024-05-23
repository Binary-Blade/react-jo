import { MedalIcon } from '@/components/ui/IconComponents';
import { Link } from 'wouter';

/**
 * `Footer` component displays the footer section of the website.
 * It includes the website's logo and links to privacy policy, terms of use, and contact us pages.
 *
 * @component
 * @returns {JSX.Element} The rendered Footer component.
 *
 * @example
 * return <Footer />;
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components and icons:
 * - `MedalIcon` for the logo icon.
 * - `Link` from `wouter` for navigation links.
 */
export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-gray-900 mt-10 py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex items-center">
          {/* Logo Section */}
          <MedalIcon className="w-8 h-8 text-rose-500" />
          <span className="text-xl font-bold tracking-tight text-white ml-2">Paris 2024</span>
        </div>
        {/* Navigation Links */}
        <nav className="flex space-x-4">
          <Link className="text-gray-400 hover:text-rose-500 transition-colors" href="#">
            Privacy Policy
          </Link>
          <Link className="text-gray-400 hover:text-rose-500 transition-colors" href="#">
            Terms of Use
          </Link>
          <Link className="text-gray-400 hover:text-rose-500 transition-colors" href="#">
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
};
