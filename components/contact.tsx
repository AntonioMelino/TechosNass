"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Crear mensaje para WhatsApp
    const message = `Hola! Me contacto desde la web.%0A%0ANombre: ${formData.nombre}%0ATeléfono: ${formData.telefono}%0AEmail: ${formData.email}%0A%0AMensaje: ${formData.mensaje}`

    // Número de WhatsApp (reemplazar con el número real)
    const whatsappNumber = "5491122334455"

    // Abrir WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Contáctenos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Estamos listos para ayudarle con su proyecto. Presupuesto sin cargo!
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
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Teléfono</h3>
                    <p className="text-muted-foreground">+54 9 11 2233-4455</p>
                    <p className="text-sm text-muted-foreground">Lun - Sáb: 8:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">info@techosnass.com.ar</p>
                    <p className="text-sm text-muted-foreground">Respondemos en 24hs</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Zona de Trabajo</h3>
                    <p className="text-muted-foreground">Zona Norte de Buenos Aires</p>
                    <p className="text-sm text-muted-foreground">San Isidro, Vicente López, Olivos, Martínez y más</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent text-accent-foreground">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Presupuesto Sin Cargo</h3>
                <p className="text-sm leading-relaxed">
                  Realizamos visitas y presupuestos sin cargo dentro de la Zona Norte de Buenos Aires. Contáctenos ahora
                  para coordinar una visita!
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
                    placeholder="Su teléfono"
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
                    placeholder="Cuéntenos sobre su proyecto..."
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
      </div>
    </section>
  )
}
