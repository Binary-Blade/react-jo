/**
 * `NavLink` defines the structure of a navigation link.
 * It includes properties for the link name, href, and an optional icon.
 *
 * @interface NavLink
 * @property {string} name - The name of the navigation link.
 * @property {string} href - The URL the navigation link points to.
 * @property {JSX.Element} [icon] - An optional icon for the navigation link.
 *
 * @example
 * const navLink: NavLink = {
 *   name: 'Home',
 *   href: '/',
 *   icon: <HomeIcon />
 * };
 *
 * @remarks
 * This interface is used to type navigation links, ensuring they contain the necessary details
 * for creating navigation menus within the application.
 */
export interface NavLink {
  name: string;
  href: string;
  icon?: JSX.Element;
}

/**
 * `NavBarProps` defines the structure of the properties passed to a NavBar component.
 * It includes properties for public and admin navigation links.
 *
 * @interface NavBarProps
 * @property {NavLink[]} navLinksPublic - An array of public navigation links.
 * @property {NavLink[]} navLinksAdmin - An array of admin navigation links.
 *
 * @example
 * const navBarProps: NavBarProps = {
 *   navLinksPublic: [
 *     { name: 'Home', href: '/' },
 *     { name: 'About', href: '/about' }
 *   ],
 *   navLinksAdmin: [
 *     { name: 'Dashboard', href: '/dashboard' },
 *     { name: 'Settings', href: '/settings' }
 *   ]
 * };
 *
 * @remarks
 * This interface is used to type the properties passed to a NavBar component, ensuring it receives
 * the necessary navigation links for both public and admin users.
 */
export interface NavBarProps {
  navLinksPublic: NavLink[];
  navLinksAdmin: NavLink[];
}

/**
 * `NavLinkProps` defines the structure of the properties passed to a component that renders navigation links.
 * It includes a single property for an array of navigation links.
 *
 * @interface NavLinkProps
 * @property {Array<{ name: string; href: string }>} navLinks - An array of navigation links.
 *
 * @example
 * const navLinkProps: NavLinkProps = {
 *   navLinks: [
 *     { name: 'Home', href: '/' },
 *     { name: 'About', href: '/about' }
 *   ]
 * };
 *
 * @remarks
 * This interface is used to type the properties passed to a component that renders navigation links,
 * ensuring it receives the necessary links to display.
 */
export interface NavLinkProps {
  navLinks: { name: string; href: string }[];
}
