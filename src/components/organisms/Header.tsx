"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../atoms/Button";
import { FaRegHeart } from "react-icons/fa";
import { LogIn, UserIcon, UserPlus } from "lucide-react";

const navLinks = [
  { label: "Adopción", href: "/adopcion" },
  { label: "Casos de éxito", href: "/#casos-exito" }, // Changed to hash link for home sections if needed, or keeping it as is. User mentioned /adopcion specifically.
  { label: "Refugios", href: "/refugios" },
  { label: "Contacto", href: "/contact" },
];

import { useRouter } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const user = false; // Replace with actual user authentication logic

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onNavigateToDashboard = () => {
    router.push("/dashboard");
  };

  const logout = () => {
    // Logic to log out the user
    console.log("Logging out...");
  };

  const onNavigateToLogin = () => {
    router.push("/login");
  };

  const onNavigateToRegister = () => {
    router.push("/register");
  };

  return (
    <header className="fixed w-full top-0 left-0 rigth-0 z-50 glass-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center gap-2 text-xl font-bold text-gray-900 cursor-pointer">
              <span className="text-2xl">🐾</span>
              <span>Huellitas</span>
            </div>
          </Link>
          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-500 transition duration-150 ease-in-out font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          {/* CTA Button Desktop */}

          <div className="flex gap-3 items-center">
            {user ? (
              <>
                <Button
                  onClick={onNavigateToDashboard}
                  variant="secondary"
                  className="flex items-center gap-2 bg-white/90 backdrop-blur-sm hover:bg-white"
                >
                  <UserIcon className="w-4 h-4 mr-2" />
                  Mi Cuenta
                </Button>
                <Button
                  onClick={logout}
                  variant="secondary"
                  className="flex items-center gap-2 bg-white/90 backdrop-blur-sm hover:bg-white"
                >
                  Cerrar Sesión
                </Button>{" "}
              </>
            ) : (
              <>
                <Button
                  onClick={onNavigateToLogin}
                  variant="secondary"
                  className="flex items-center gap-2 bg-white/90 backdrop-blur-sm hover:bg-white"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Iniciar Sesión
                </Button>
                <Button
                  onClick={onNavigateToRegister}
                  variant="secondary"
                  className="flex items-center gap-2 gradient-primary gradient-primary-hover text-white border-0"
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  Registrarse
                </Button>
              </>
            )}
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
