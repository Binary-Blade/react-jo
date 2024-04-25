import { MedalIcon } from "@/assets/icons/IconComponents";
import { Link } from "wouter";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 mt-10 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <MedalIcon className="w-8 h-8 text-rose-500" />
          <span className="text-xl font-bold tracking-tight text-white ml-2">Paris 2024</span>
        </div>
        <nav className="flex space-x-4">
          <Link className="text-gray-400 hover:text-white transition-colors" href="#">
            Privacy Policy
          </Link>
          <Link className="text-gray-400 hover:text-white transition-colors" href="#">
            Terms of Use
          </Link>
          <Link className="text-gray-400 hover:text-white transition-colors" href="#">
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  )
}


