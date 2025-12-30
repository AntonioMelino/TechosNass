import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

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
]

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Testimonios de Clientes</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>

        {/* Google Maps Embed */}
        <div className="max-w-5xl mx-auto mb-12">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.43805086308!2d-58.54806392089845!3d-34.51509260000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb0d7b5ab9eef%3A0xb835ad9d9b32c362!2sZona%20Norte%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Zona Norte Buenos Aires"
              />
            </CardContent>
          </Card>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-muted-foreground/20 mb-2" />
                <p className="text-foreground leading-relaxed mb-4">{testimonial.text}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
