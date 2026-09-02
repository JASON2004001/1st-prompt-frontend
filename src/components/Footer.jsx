// components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t py-6 px-6 text-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Logo */}
        <span className="font-serif font-bold">AESTHETIQUE</span>

        {/* Links */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 text-center md:text-left">
          <a href="#privacy" className="hover:text-gray-600">Privacy</a>
          <a href="#terms" className="hover:text-gray-600">Terms</a>
          <a href="#linkedin" className="hover:text-gray-600">LinkedIn</a>
          <a href="#instagram" className="hover:text-gray-600">Instagram</a>
        </div>

        {/* Copyright */}
        <span className="text-gray-500 text-center md:text-right">
          © 2024 AESTHETIQUE ARCHITECTS. ALL RIGHTS RESERVED.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
