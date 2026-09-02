// components/Header.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="border-b shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo + Consultation button */}
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-serif font-bold">AESTHETIQUE</h1>
          <button
            onClick={() => navigate("/consultation")}
            className="mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Consultation
          </button>
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:space-x-6 md:items-center">
          <Link to="/portfolio" className="hover:text-gray-600">
            Portfolio
          </Link>
          <Link to="/services" className="hover:text-gray-600">
            Services
          </Link>
          <Link to="/philosophy" className="hover:text-gray-600">
            Philosophy
          </Link>
          <Link to="/inquiry" className="hover:text-gray-600">
            Inquiry
          </Link>
        </nav>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <Link
            to="/portfolio"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            to="/services"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/philosophy"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Philosophy
          </Link>
          <Link
            to="/inquiry"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Inquiry
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
