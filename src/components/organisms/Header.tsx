"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../atoms/Button";
import { FaRegHeart } from "react-icons/fa";
import Input from "../atoms/Input";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Adopción", href: "/adoption" },
  { label: "Casos de éxito", href: "/success-stories" },
  { label: "Refugio", href: "/shelter" },
  { label: "Contacto", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2 text-xl font-bold text-gray-900">
              <span className="text-2xl">🐾</span>
              <span>Huellitas</span>
            </div>
          </div>
          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-500 transition duration-150 ease-in-out font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="primary">
              <FaRegHeart className="inline mr-2" />
              Donar
            </Button>
            <Input placeholder="Buscar"></Input>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-expanded={isMenuOpen}
              aria-label="Abrir menú"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 pb-3 pt-2">
          <div className="px-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={toggleMenu}
                className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-500 transition duration-150 ease-in-out"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-4 border-t border-gray-200 pt-4 px-2">
            <Button className="w-full text-center" variant="primary" fullWidth>
              <FaRegHeart className="inline mr-2" />
              Donar
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
