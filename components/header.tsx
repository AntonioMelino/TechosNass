"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Users } from "lucide-react"; // ← Agregué Users

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
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

            <span className="text-2xl font-bold text-foreground">
              Techos <span className="text-primary">Nass</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {" "}
            {/* ← Cambié gap-8 a gap-6 */}
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors px-2 py-1"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-foreground hover:text-primary transition-colors px-2 py-1"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("trabajos")}
              className="text-foreground hover:text-primary transition-colors px-2 py-1"
            >
              Trabajos
            </button>
            <button
              onClick={() => scrollToSection("clientes")}
              className="text-foreground hover:text-primary transition-colors px-2 py-1"
            >
              Clientes
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-foreground hover:text-primary transition-colors px-2 py-1"
            >
              Nosotros
            </button>
            <Button onClick={() => scrollToSection("contacto")} size="lg">
              <Phone className="mr-2 h-4 w-4" />
              Contactar
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
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
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("trabajos")}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Trabajos
            </button>
            <button
              onClick={() => scrollToSection("clientes")}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Clientes
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Nosotros
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              size="lg"
              className="w-full"
            >
              <Phone className="mr-2 h-4 w-4" />
              Contactar
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
