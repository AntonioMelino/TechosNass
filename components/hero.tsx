"use client";

import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/background1080.jpg"
          alt="Trabajo de techos profesional"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-accent/90 text-accent-foreground rounded-full text-sm font-semibold">
            40 años de experiencia
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance leading-tight">
            Especialistas en Techos
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 text-pretty leading-relaxed">
            Instalación, reparación y mantenimiento de todo tipo de techos.
            Calidad garantizada y compromiso en cada trabajo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="text-lg h-14 px-8"
              onClick={scrollToContact}
            >
              <Phone className="mr-2 h-5 w-5" />
              Solicitar Presupuesto
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="text-lg h-14 px-8"
              onClick={() => {
                const element = document.getElementById("trabajos");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Ver Trabajos
            </Button>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="text-sm">Zona Norte Buenos Aires</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
              <Clock className="h-5 w-5 text-accent" />
              <span className="text-sm">Atención inmediata</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
              <Phone className="h-5 w-5 text-accent" />
              <span className="text-sm">Presupuesto sin cargo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
