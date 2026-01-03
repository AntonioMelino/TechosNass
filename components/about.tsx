import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award, Clock } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "40 años de experiencia",
    description: "Empresa familiar con trayectoria comprobada",
  },
  {
    icon: Users,
    title: "Equipo capacitado",
    description: "Profesionales especializados en trabajos de altura",
  },
  {
    icon: Shield,
    title: "Todas las medidas de seguridad",
    description: "Cumplimos con todos los estándares de seguridad",
  },
  {
    icon: Award,
    title: "Garantía en todos los trabajos",
    description: "Respaldamos cada proyecto que realizamos",
  },
];

export function About() {
  return (
    <section id="nosotros" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Nosotros
            </h2>
            <p className="text-xl text-foreground leading-relaxed max-w-3xl mx-auto text-pretty">
              Somos una empresa familiar que comenzó su actividad hace ya 40
              años. Nos especializamos en los techos y nuestro objetivo para con
              nuestros clientes es lograr plasmar en la realidad sus ideas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-colors"
              >
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <p className="text-lg leading-relaxed">
                Contamos con un equipo altamente capacitado para todo tipo de
                trabajos en altura, con todas las medidas de seguridad
                correspondientes. Nos comprometemos con cada trabajo que
                realizamos ya sea una gran construcción o el arreglo más simple.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
