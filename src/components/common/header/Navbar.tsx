import { NavBarProps } from "@/types/NavLink";
import imageParis from "../../../assets/icons/Logo.png";
import React from "react";
import { Link } from "wouter";

export const NavBar: React.FC<NavBarProps> = ({ navLinks }) => {

  return (
    <nav className="hidden md:flex md:flex-row md:items-center md:gap-5">
      <img src={imageParis} alt="Paris 2024" className="w-16" />
      {navLinks.map(link => (
        <Link key={link.name} href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
          {link.name}
        </Link>
      ))}
    </nav>
  )
}
