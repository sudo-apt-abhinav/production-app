"use client";
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/promotion', label: 'Promotion' },
  { label: 'Clients', dropdown: [
      { href: '/clients/partners', label: 'Partners' },
      { href: '/clients/artists', label: 'Artists' },
    ] },
  { href: '/review', label: 'Review' },
  { href: '/contact-me', label: 'Contact Me' },
];

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Helper to close dropdown on click
  const handleDropdownClick = () => setDropdownOpen(false);

  return (
    <nav
      id="main-navbar"
      className="w-full flex items-center justify-between py-4 px-8 bg-white dark:bg-gray-900 shadow-md relative z-50 sticky top-0"
    >
      <div className="text-xl font-bold text-gray-900 dark:text-white">MySite</div>
      {/* Desktop Nav */}
      <div className="hidden md:flex gap-6 items-center">
        {navLinks.map((link) =>
          link.dropdown ? (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="text-gray-700 dark:text-gray-200 font-medium px-2 py-1 focus:outline-none relative transition-colors duration-200 group-hover:text-yellow-400"
                tabIndex={0}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                {link.label}
                <span className="block h-[2px] bg-yellow-400 absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-300 origin-left"></span>
              </button>
              {dropdownOpen && (
                <div
                  className="absolute left-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-10 py-2"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-yellow-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                      onClick={handleDropdownClick}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 dark:text-gray-200 font-medium px-2 py-1 relative transition-colors duration-200 group hover:text-yellow-400"
            >
              <span className="relative group">
                {link.label}
                <span className="block h-[2px] bg-yellow-400 absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-300 origin-left"></span>
              </span>
            </Link>
          )
        )}
      </div>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none text-gray-900 dark:text-gray-100"
        onClick={() => setMobileMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700 z-40 animate-fade-in flex flex-col gap-2 py-4">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="relative group">
                <button
                  className="w-full text-left text-gray-700 dark:text-gray-200 font-medium px-4 py-2 focus:outline-none flex items-center justify-between"
                  onClick={() => setDropdownOpen((open) => !open)}
                >
                  {link.label}
                  <svg className={`w-4 h-4 ml-2 transition-transform ${dropdownOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="pl-4 flex flex-col gap-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-yellow-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                        onClick={() => { setDropdownOpen(false); setMobileMenuOpen(false); }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-gray-700 dark:text-gray-200 font-medium hover:text-yellow-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
} 