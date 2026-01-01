"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Users } from "lucide-react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            {/* Logo */}
            <div className="w-10 h-10 relative flex items-center justify-center">
              <img
                src="/logo.PNG"
                alt="Techos Nass Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <span className="text-2xl font-bold text-[#062d3f]">
              Techos <span className="text-[#ff751f]">Nass</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-[#062d3f] hover:text-[#ff751f] transition-colors px-2 py-1 font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-[#062d3f] hover:text-[#ff751f] transition-colors px-2 py-1 font-medium"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("trabajos")}
              className="text-[#062d3f] hover:text-[#ff751f] transition-colors px-2 py-1 font-medium"
            >
              Trabajos
            </button>
            <button
              onClick={() => scrollToSection("clientes")}
              className="text-[#062d3f] hover:text-[#ff751f] transition-colors px-2 py-1 font-medium"
            >
              Clientes
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-[#062d3f] hover:text-[#ff751f] transition-colors px-2 py-1 font-medium"
            >
              Nosotros
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              size="lg"
              className="bg-[#ff751f] hover:bg-[#e5671a] text-white"
            >
              <Phone className="mr-2 h-4 w-4" />
              Contactar
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#062d3f]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="flex flex-col py-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-[#062d3f] hover:text-[#ff751f] hover:bg-gray-50 transition-colors py-3 px-4 font-medium"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-left text-[#062d3f] hover:text-[#ff751f] hover:bg-gray-50 transition-colors py-3 px-4 font-medium"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("trabajos")}
                className="text-left text-[#062d3f] hover:text-[#ff751f] hover:bg-gray-50 transition-colors py-3 px-4 font-medium"
              >
                Trabajos
              </button>
              <button
                onClick={() => scrollToSection("clientes")}
                className="text-left text-[#062d3f] hover:text-[#ff751f] hover:bg-gray-50 transition-colors py-3 px-4 font-medium"
              >
                Clientes
              </button>
              <button
                onClick={() => scrollToSection("nosotros")}
                className="text-left text-[#062d3f] hover:text-[#ff751f] hover:bg-gray-50 transition-colors py-3 px-4 font-medium"
              >
                Nosotros
              </button>
              <div className="px-4 py-3 mt-2">
                <Button
                  onClick={() => scrollToSection("contacto")}
                  size="lg"
                  className="w-full bg-[#ff751f] hover:bg-[#e5671a] text-white"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Contactar
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
