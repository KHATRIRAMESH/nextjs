// HamburgerMenu.tsx
"use client";

import React, { useState } from "react";

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <button
        className="lg:hidden block focus:outline-none pr-10"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      {isMenuOpen && (
        <div className="lg:hidden  text-white flex flex-col space-y-2 px-4 py-2">
          <a href="/pools" className="hover:text-gray-400">Pools</a>
          <a href="/about" className="hover:text-gray-400">About Us</a>
          <a href="/network" className="hover:text-gray-400">Our Networks</a>
          <a href="/updates" className="hover:text-gray-400">Updates</a>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
