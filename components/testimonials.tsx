"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Star,
  Quote,
  MapPin,
  ExternalLink,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

const testimonials = [
  {
    name: "María González",
    rating: 5,
    text: "Excelente trabajo! Repararon el techo de mi casa con mucho profesionalismo. Muy recomendables.",
    location: "San Isidro",
  },
  {
    name: "Carlos Martínez",
    rating: 5,
    text: "Instalaron canaletas nuevas en tiempo récord. El equipo es muy responsable y prolijo. 100% recomendados.",
    location: "Vicente López",
  },
  {
    name: "Laura Fernández",
    rating: 5,
    text: "Solucionaron una filtración que otros no pudieron resolver. Trabajo impecable y con garantía.",
    location: "Olivos",
  },
  {
    name: "Roberto Díaz",
    rating: 5,
    text: "Hicieron un techo de chapa completo en mi galpón. Excelente calidad y precio justo.",
    location: "Martínez",
  },
];

// URL de tus reseñas de Google
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?kgmid=/g/11rchh8y1f&hl=es&q=Techista+Zona+Norte+-+Techos+Nass&shndl=30&shem=ptotple,shrtsdl&source=sh/x/loc/osrp/m5/1&kgs=14e8ed9622460f39&utm_source=ptotple,shrtsdl,sh/x/loc/osrp/m5/1#lrd=0x95bcbbf8e603c67d:0xfc59b713581b7248,1,,,,";

export function Testimonials() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleCardClick = () => {
    window.open(GOOGLE_REVIEWS_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="clientes" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Testimonios que avalan nuestro trabajo
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Experiencias reales de clientes satisfechos
          </p>
        </div>

        {/* Mapa simplificado */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Trabajamos en toda Zona Norte
            </h3>
            <p className="text-muted-foreground">
              Nuestra área de cobertura incluye San Isidro, Vicente López,
              Olivos, Martínez y más
            </p>
          </div>

          <Card className="overflow-hidden border-primary/20">
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.5154865272502!2d-58.5684619347828!3d-34.515165673749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbbf8e603c67d%3A0xfc59b713581b7248!2sTechista%20Zona%20Norte%20-%20Techos%20Nass!5e0!3m2!1ses-419!2sar!4v1767135113440!5m2!1ses-419!2sar"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Área de cobertura Techos Nass - Zona Norte"
                className="w-full"
              />
              <div className="p-4 bg-gradient-to-r from-primary/5 to-transparent">
                <p className="text-sm text-center text-muted-foreground">
                  <span className="font-bold text-foreground">
                    Punto de referencia:
                  </span>
                  Ubicación estratégica para atender toda Zona Norte
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonios Grid con efecto hover */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 relative">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative">
                {/* Tooltip que aparece al hacer hover */}
                {hoveredCard === index && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-20 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-3 py-2 bg-primary text-primary-foreground text-sm rounded-lg shadow-lg whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <MessageCircle className="h-3 w-3" />
                        Ver reseñas en Google
                      </div>
                      {/* Flecha del tooltip */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-primary rotate-45" />
                    </div>
                  </div>
                )}

                <Card
                  className={`relative transition-all duration-300 cursor-pointer group ${
                    hoveredCard === index
                      ? "shadow-xl border-primary/30 -translate-y-1 ring-1 ring-primary/20"
                      : "hover:shadow-lg hover:-translate-y-1 hover:border-primary/20"
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={handleCardClick}
                >
                  {/* Overlay sutil al hacer hover */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 rounded-lg pointer-events-none" />

                  <CardContent className="p-6 relative z-10">
                    {/* Header con rating y indicador de enlace */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                        <span className="ml-2 text-sm font-bold text-foreground">
                          {testimonial.rating}.0
                        </span>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Icono de comillas */}
                    <Quote className="h-8 w-8 text-muted-foreground/20 mb-4" />

                    {/* Texto del testimonio */}
                    <p className="text-foreground leading-relaxed mb-6 italic text-pretty">
                      "{testimonial.text}"
                    </p>

                    {/* Información del cliente */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/20">
                      <div>
                        <p className="font-bold text-foreground">
                          {testimonial.name}
                        </p>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {testimonial.location}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full font-medium">
                          Verificado
                        </span>
                      </div>
                    </div>

                    {/* Indicador sutil en el footer */}
                    <div className="mt-4 pt-3 border-t border-dashed border-border/30">
                      <p className="text-xs text-center text-primary/70 group-hover:text-primary transition-colors">
                        Haz clic para ver reseñas en Google
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Estadísticas */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 text-center border border-border/50 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  40+
                </div>
                <div className="text-foreground font-semibold">
                  Años de Experiencia
                </div>
                <p className="text-sm text-muted-foreground">
                  Empresa familiar desde 1984
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  1000+
                </div>
                <div className="text-foreground font-semibold">
                  Clientes Satisfechos
                </div>
                <p className="text-sm text-muted-foreground">
                  En toda Zona Norte
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  5.0
                </div>
                <div className="text-foreground font-semibold">
                  Calificación Promedio
                </div>
                <p className="text-sm text-muted-foreground">
                  Excelente en atención y trabajo
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-border/30">
              <p className="text-lg text-foreground font-semibold mb-2">
                ¿Listo para ser nuestro próximo cliente satisfecho?
              </p>
              <p className="text-muted-foreground mb-6">
                Desplázate hacia abajo para contactarnos y solicitar tu
                presupuesto
              </p>
              <div className="flex justify-center animate-bounce">
                <div className="inline-block w-6 h-10 border-2 border-primary/30 rounded-full">
                  <div className="w-1 h-3 bg-primary/50 rounded-full mt-2 mx-auto animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Banner de Google Reviews */}
          <Card className="border-blue-200 bg-gradient-to-r from-blue-50/50 to-white overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-xl font-bold text-foreground">
                      4.9★ en Google
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    ¿Quieres ver nuestras reseñas reales?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Más de 50 clientes han dejado su opinión verificada en
                    Google Maps
                  </p>
                </div>

                <button
                  onClick={() => window.open(GOOGLE_REVIEWS_URL, "_blank")}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white text-foreground border border-blue-300 rounded-lg hover:bg-blue-50 hover:shadow-md transition-all duration-300 group min-w-[200px] justify-center"
                >
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="font-semibold">Ver en Google Maps</span>
                  </div>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </button>
              </div>

              {/* Indicador de que es seguro */}
              <div className="mt-4 pt-4 border-t border-blue-100">
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>
                    Reseñas verificadas • Clientes reales • Opiniones auténticas
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
