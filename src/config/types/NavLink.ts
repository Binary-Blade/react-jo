export interface NavLink {
    name: string;
    href: string;
    icon?: JSX.Element;
}

export interface NavBarProps {
    navLinks: NavLink[];
}

export interface NavLinkProps {
    navLinks: { name: string, href: string }[];
}
