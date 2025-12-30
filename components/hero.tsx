"use client";

import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToWorks = () => {
    const element = document.getElementById("trabajos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/background1080.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-0 bg-primary/60" />

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold border border-white/30">
            40 años de experiencia en Zona Norte
          </div>

          {/* Main Heading con logo */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <img
                src="/logo.PNG"
                alt="Techos Nass Logo"
                className="w-16 h-16 md:w-24 md:h-24 object-contain"
              />
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Techos Nass
              </h1>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-white font-medium">
            Especialistas en instalación, reparación y mantenimiento de techos
          </p>

          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Empresa familiar con 40 años de trayectoria. Ofrecemos presupuesto
            sin cargo y garantía en todos nuestros trabajos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="text-lg h-14 px-8 shadow-lg bg-accent hover:bg-accent/90 text-white"
              onClick={scrollToContact}
            >
              <Phone className="mr-2 h-5 w-5" />
              Solicitar Presupuesto Gratis
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg h-14 px-8 border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent"
              onClick={scrollToWorks}
            >
              Ver Trabajos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-white">
                40+
              </div>
              <div className="text-sm text-white/80">Años de experiencia</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-white">
                1000+
              </div>
              <div className="text-sm text-white/80">Trabajos realizados</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-white">
                100%
              </div>
              <div className="text-sm text-white/80">Con garantía</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
