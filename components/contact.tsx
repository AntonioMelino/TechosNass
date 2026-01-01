"use client";

import type React from "react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  User,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Crear mensaje para WhatsApp
    const message = `Hola! Me contacto desde la página Techos Nass.%0A%0ANombre: ${formData.nombre}%0ATeléfono: ${formData.telefono}%0AEmail: ${formData.email}%0A%0AMensaje: ${formData.mensaje}`;

    // Número de WhatsApp (usar el número principal)
    const whatsappNumber = "5491134854971"; // Usar el número de Alex como principal

    // Abrir WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Contáctenos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Estamos listos para ayudarle con su problema.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Información de contacto */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">
                        WhatsApp Directo
                      </h3>

                      <div className="space-y-3">
                        {/* Alex - WhatsApp */}
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-accent rounded-full"></div>
                              <span className="font-medium text-foreground">
                                Alex
                              </span>
                            </div>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                              WhatsApp
                            </span>
                          </div>
                          <a
                            href="https://wa.me/5491134854971"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-green-600 transition-colors flex items-center gap-2"
                          >
                            <MessageCircle className="h-4 w-4" />
                            11-3485-4971
                          </a>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mt-4 flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Lunes a viernes: 8:00 - 18:00
                      </p>
                    </div>
                  </div>
                </div>

                {/* Instagram y Facebook */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Instagram className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">
                        Instagram
                      </h3>
                      <a
                        href="https://www.instagram.com/techosnass/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-pink-600 transition-colors block"
                      >
                        @techosnass
                      </a>
                      <p className="text-sm text-muted-foreground">
                        Seguinos para ver nuestros trabajos
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Facebook className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">
                        Facebook
                      </h3>
                      <a
                        href="https://www.facebook.com/techos.nass"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-blue-600 transition-colors block"
                      >
                        Techos Nass
                      </a>
                      <p className="text-sm text-muted-foreground">
                        Conectá con nosotros
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">
                      Zona de Trabajo
                    </h3>
                    <p className="text-muted-foreground">
                      Zona Norte - Buenos Aires
                    </p>
                    <p className="text-sm text-muted-foreground">
                      San Isidro, Vicente López, Olivos, Martínez y más
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent text-accent-foreground">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">
                  Visita técnica especializada
                </h3>
                <p className="text-sm leading-relaxed">
                  Realizamos visitas y presupuestos dentro de Zona Norte de
                  Buenos Aires. Contáctenos ahora para coordinar una visita!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Formulario */}
          <Card>
            <CardHeader>
              <CardTitle>Enviar Consulta por WhatsApp</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="nombre"
                    placeholder="Su nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    name="telefono"
                    type="tel"
                    placeholder="Su teléfono (ej: 11-1234-5678)"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Su email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="mensaje"
                    placeholder="Cuéntenos sobre su problema..."
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar por WhatsApp
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Al enviar, se abrirá WhatsApp con su mensaje prellenado
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Nota adicional */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Nota:</span> Puede
            contactar directamente Alex según su disponibilidad. Él está
            capacitado para atender sus consultas y coordinar visitas sin cargo.
          </p>
        </div>
      </div>
    </section>
  );
}
