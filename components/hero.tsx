"use client";

import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [guarantee, setGuarantee] = useState(0);
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Animar 40+
            let expCounter = 0;
            const expInterval = setInterval(() => {
              expCounter += 2;
              setExperience(expCounter);
              if (expCounter >= 40) {
                clearInterval(expInterval);
                setExperience(40);
              }
            }, 20);

            // Animar 1000+
            let projectsCounter = 0;
            const projectsInterval = setInterval(() => {
              projectsCounter += 40;
              setProjects(projectsCounter);
              if (projectsCounter >= 1000) {
                clearInterval(projectsInterval);
                setProjects(1000);
              }
            }, 20);

            // Animar 100%
            let guaranteeCounter = 0;
            const guaranteeInterval = setInterval(() => {
              guaranteeCounter += 5;
              setGuarantee(guaranteeCounter);
              if (guaranteeCounter >= 100) {
                clearInterval(guaranteeInterval);
                setGuarantee(100);
              }
            }, 10);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767394810/FondoSeccionHero_mrqoll.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 z-0 bg-primary/60" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold border border-white/30">
            40 años de experiencia en Zona Norte
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <img
                src="https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767394946/LogoTechosNass_wutrlh.png"
                alt="Techos Nass Logo"
                className="w-16 h-16 md:w-24 md:h-24 object-contain"
              />
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Techos <span className="text-[#ff751f]">Nass</span>
              </h1>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-white font-medium">
            Especialistas en instalación, reparación y mantenimiento de techos
          </p>

          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Empresa familiar con 40 años de trayectoria. Ofrecemos un equipo
            sumamente profesional y garantía en todos nuestros trabajos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="text-lg h-14 px-8 shadow-lg bg-accent hover:bg-accent/90 text-white"
              onClick={scrollToContact}
            >
              <Phone className="mr-2 h-5 w-5" />
              Solicitar Presupuesto
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

          {/* Stats con efecto de conteo */}
          <div
            ref={statsRef}
            className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto"
          >
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-white">
                {experience}+
              </div>
              <div className="text-sm text-white/80">Años de experiencia</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-white">
                {projects}+
              </div>
              <div className="text-sm text-white/80">Trabajos realizados</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-white">
                {guarantee}%
              </div>
              <div className="text-sm text-white/80">Con garantía</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
