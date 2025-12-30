"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

const works = [
  {
    id: 1,
    title: "Techo de chapa",
    description: "Instalación, mantenimiento y reparación",
    details: "Máxima eficacia para su techo, requiere poco mantenimiento.",
    mainImage: "/new-metal-sheet-roofing-installation-on-house.jpg",
    gallery: ["/professional-metal-sheet-roof-being-installed.jpg", "/completed-metal-sheet-roof-installation-close-up.jpg", "/metal-sheet-roofing-tools-and-materials.jpg"],
  },
  {
    id: 2,
    title: "Techo de teja",
    description: "Instalación, mantenimiento y reparación",
    details: "Es importante realizar su mantenimiento para evitar futuros problemas.",
    mainImage: "/tile-roof-installation-on-residential-building.jpg",
    gallery: ["/clay-tile-roof-being-installed-by-workers.jpg", "/beautiful-tile-roof-completed-installation.jpg", "/tile-roof-repair-and-maintenance-work.jpg"],
  },
  {
    id: 3,
    title: "Canaletas y zinguería",
    description: "Instalación, mantenimiento y reparación",
    details: "Proteja los cimientos, paredes y techos de posibles deterioros.",
    mainImage: "/gutter-installation-and-flashing-work-on-roof.jpg",
    gallery: ["/aluminum-gutter-system-being-installed.jpg", "/roof-flashing-and-gutter-details-close-up.jpg", "/completed-gutter-system-on-residential-house.jpg"],
  },
  {
    id: 4,
    title: "Goteras y filtraciones",
    description: "Detección y reparación especializada",
    details:
      "Somos especialistas, detectamos la posible gotera o filtración y actuamos con todas las medidas para que no vuelva a manifestarse.",
    mainImage: "/roof-leak-repair-and-waterproofing-work.jpg",
    gallery: [
      "/worker-repairing-roof-leak-with-sealant.jpg",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: 5,
    title: "Estructuras en madera y metal",
    description: "Construcción artesanal y alta resistencia",
    details: "Trabajos en madera realizados de forma artesanal. Estructuras metálicas de alta resistencia.",
    mainImage: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: 6,
    title: "Visita y presupuesto sin cargo",
    description: "Evaluación profesional gratuita",
    details: "Realizamos visitas y presupuestos sin cargo dentro de la Zona Norte de Buenos Aires.",
    mainImage: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
]

export function Works() {
  const [selectedWork, setSelectedWork] = useState<(typeof works)[0] | null>(null)

  return (
    <section id="trabajos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Trabajos Realizados</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conozca los diferentes tipos de trabajos que realizamos con excelencia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work) => (
            <Card
              key={work.id}
              className="overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 group"
              onClick={() => setSelectedWork(work)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={work.mainImage || "/placeholder.svg"}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                  <CheckCircle2 className="mr-1 h-3 w-3" />
                  Disponible
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{work.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{work.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Gallery Dialog */}
      <Dialog open={!!selectedWork} onOpenChange={() => setSelectedWork(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedWork?.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">{selectedWork?.details}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedWork?.gallery.map((image, index) => (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${selectedWork.title} - Imagen ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
