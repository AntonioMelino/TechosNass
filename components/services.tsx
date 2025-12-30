import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Droplet, Shield, Wrench, PlusCircle, Box } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Servicios integrales para techos",
    description: "Instalación, reparación y mantenimiento para todo tipo de techos.",
  },
  {
    icon: Shield,
    title: "Aislación",
    description: "Fundamental para mantener la temperatura adecuada dentro del hogar.",
  },
  {
    icon: Droplet,
    title: "Impermeabilización",
    description: "Evite filtraciones que podrían provocar el deterioro de materiales y manchas.",
  },
  {
    icon: Wrench,
    title: "Zinguería",
    description: "Prevenga filtraciones y problemas de humedad en techos, paredes y cimientos.",
  },
  {
    icon: PlusCircle,
    title: "Ampliaciones",
    description: "Realice cualquier modificación que precise su techo ante una eventual reforma.",
  },
  {
    icon: Box,
    title: "Entrepisos",
    description: "Trabajos en madera de una manera artesanal y estética a la vista.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Nuestros Servicios</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Soluciones completas para todas sus necesidades en techos y construcción
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
