"use client";

import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Coffee Shops", href: "/coffee-shops" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="bg-zinc-50 border-b border-zinc-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/*Logo/Brand*/}
        <div className="flex items-center">
          <Link href="/" className="text-zinc-800 font-bold text-xl">
            BrewFinder
          </Link>
        </div>

        {/* nav links */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-zinc-600 hover:text-zinc-900 transition:colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* mobile menu btn */}
        <div className="md-hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
          >
            <span className="sr-only">Open Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* mobile menu panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-zinc-50 border-b border-zinc-200">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
