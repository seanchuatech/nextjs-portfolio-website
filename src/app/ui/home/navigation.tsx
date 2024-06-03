'use client';
import Link from 'next/link';
import NavLinks from "./nav-links";
import ThemeSwitcher from "../ThemeSwitcher";
import { useState } from 'react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle state on button click
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-screen z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sean.</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            
            <ThemeSwitcher />
            <button 
              data-collapse-toggle="navbar-sticky" 
              type="button" 
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-500 dark:focus:ring-gray-600" 
              aria-controls="navbar-sticky" 
              aria-expanded={isMobileMenuOpen} // Update based on state
              onClick={toggleMobileMenu} // Call toggle function
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between  w-full md:flex md:w-auto md:order-1 ${ // Conditional classes
            isMobileMenuOpen ? '' : 'hidden'
          }`}
          id="navbar-sticky"
        >
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}
