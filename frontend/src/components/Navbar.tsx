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
];

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Helper to close dropdown on click
  const handleDropdownClick = () => setDropdownOpen(false);

  return (
    <nav
      id="main-navbar"
      className="w-full flex items-center justify-between py-4 px-8 bg-black shadow-md relative z-50 sticky top-0"
    >
      {/* Logo/Brand */}
      <div className="flex items-center">
        <div className="text-xl font-bold text-white tracking-wide">
          Vivek Parekh
          <span className="block text-xs font-normal text-gray-300 uppercase tracking-wider">PRODUCTION</span>
        </div>
      </div>
      
      {/* Desktop Nav - Centered */}
      <div className="hidden md:flex gap-8 items-center absolute left-1/2 transform -translate-x-1/2">
        {navLinks.map((link) =>
          link.dropdown ? (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="text-white font-medium px-3 py-2 focus:outline-none relative transition-all duration-300 group-hover:text-gray-200 flex items-center gap-2"
                tabIndex={0}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                {link.label}
                <span className={`text-white transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''} text-sm`}>
                  ▼
                </span>
                <span className="block h-[1px] bg-gray-400 absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-300 origin-left"></span>
              </button>
              {dropdownOpen && (
                <div
                  className="absolute left-0 mt-1 w-44 bg-black border border-gray-700 rounded-lg shadow-2xl z-10 py-2 animate-fade-in"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-3 text-white hover:text-gray-200 hover:bg-gray-800 transition-all duration-200 relative group"
                      onClick={handleDropdownClick}
                    >
                      {item.label}
                      <span className="block h-[1px] bg-gray-400 absolute left-4 bottom-0 w-0 group-hover:w-[calc(100%-2rem)] transition-all duration-300 origin-left"></span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className="text-white font-medium px-3 py-2 relative transition-all duration-300 group hover:text-gray-200"
            >
              <span className="relative group">
                {link.label}
                <span className="block h-[1px] bg-gray-400 absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-300 origin-left"></span>
              </span>
            </Link>
          )
        )}
      </div>
      
      {/* Contact Us Button */}
      <div className="hidden md:flex">
        <Link
          href="/contact-me"
          className="relative bg-gradient-to-r from-gray-500 to-black text-white font-semibold px-6 py-2 rounded-full overflow-hidden group transition-all duration-300 hover:shadow-lg transform"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></span>
          <span className="relative z-10">Contact Us</span>
        </Link>
      </div>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none text-white"
        onClick={() => setMobileMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black shadow-lg border-t border-gray-700 z-40 animate-fade-in flex flex-col gap-2 py-4">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="relative group">
                <button
                  className="w-full text-left text-white font-medium px-4 py-2 focus:outline-none flex items-center justify-between"
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
                        className="block px-4 py-2 text-white hover:text-gray-200 hover:bg-gray-800 transition-colors duration-200"
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
                className="block px-4 py-2 text-white font-medium hover:text-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          {/* Mobile Contact Us */}
          <div className="px-4 py-2">
            <Link
              href="/contact-me"
              className="relative block bg-gradient-to-r from-gray-500 to-black text-white font-semibold px-6 py-3 rounded-full text-center overflow-hidden group transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></span>
              <span className="relative z-10">Contact Us</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 