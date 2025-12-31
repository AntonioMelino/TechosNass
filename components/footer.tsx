import {
  Phone,
  MessageCircle,
  Instagram,
  Facebook,
  MapPin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-2">
                {/* Logo */}
                <div className="w-10 h-10 relative flex items-center justify-center">
                  <img
                    src="/logo.PNG"
                    alt="Techos Nass Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <span className="text-2xl font-bold">Techos Nass</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              40 años de experiencia en instalación, reparación y mantenimiento
              de techos en toda la Zona Norte.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-bold mb-4">Servicios</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Techos de chapa y teja</li>
              <li>Impermeabilización</li>
              <li>Canaletas y zinguería</li>
              <li>Reparación de filtraciones</li>
              <li>Estructuras de madera y metal</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              {/* WhatsApp de Alex */}
              <li>
                <a
                  href="https://wa.me/5491134854971"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Alex: 11-3485-4971</span>
                </a>
              </li>

              {/* Instagram */}
              <li>
                <a
                  href="https://www.instagram.com/techosnass/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  <span>@techosnass</span>
                </a>
              </li>

              {/* Facebook */}
              <li>
                <a
                  href="https://www.facebook.com/techos.nass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                  <span>Techos Nass</span>
                </a>
              </li>

              {/* Zona de Trabajo */}
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Zona Norte Buenos Aires</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Techos Nass. Todos los derechos
            reservados. Hecho por Antonio Melino.
          </p>
        </div>
      </div>
    </footer>
  );
}
