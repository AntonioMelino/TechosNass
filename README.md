# Techos Nass

Página web desarrollada para un cliente real dedicado al rubro de techos. El proyecto consiste en una landing page simple, moderna y completamente responsive, enfocada en brindar información clara del negocio y facilitar el contacto directo con potenciales clientes.

---

## 📌 Descripción

**Techos Nass** es un sitio web institucional que presenta los servicios de una empresa familiar con 40 años de experiencia en instalación, reparación y mantenimiento de techos (chapa, teja, impermeabilización, canaletas y más), su zona de cobertura y la experiencia de clientes anteriores. Se priorizó un diseño limpio, una navegación intuitiva y una correcta visualización en todo tipo de dispositivos.

El sitio incluye un mapa con la ubicación real del local, reseñas reales de clientes, una galería de trabajos realizados y un formulario de contacto que redirige directamente al WhatsApp del negocio.

---

## 🚀 Tecnologías utilizadas

* **Next.js 16** (App Router)
* **React 19** + **TypeScript**
* **Tailwind CSS 4**
* **shadcn/ui** + **Radix UI** (componentes accesibles)
* **React Hook Form** + **Zod** (formularios y validación)
* **Google Maps** (ubicación embebida)
* **Vercel Analytics**
* **Vercel** (deploy)

---

## 📁 Estructura del proyecto

```
app/            → Rutas y layout principal (App Router de Next.js)
components/     → Secciones del sitio (Hero, Services, Works, About, Testimonials, Contact, Footer...)
components/ui/  → Librería de componentes UI (shadcn/ui)
hooks/          → Hooks personalizados
lib/            → Utilidades compartidas
public/         → Imágenes y assets estáticos
styles/         → Estilos globales
```

---

## 🛠️ Instalación y uso

Requisitos: Node.js 18+ y [pnpm](https://pnpm.io/).

```bash
# Instalar dependencias
pnpm install

# Levantar entorno de desarrollo
pnpm dev

# Generar build de producción
pnpm build

# Iniciar en modo producción
pnpm start

# Linter
pnpm lint
```

El sitio queda disponible en `http://localhost:3000`.

---

## ✨ Funcionalidades

* Diseño moderno y responsive
* Sección Hero con identidad visual del negocio y estadísticas animadas
* Sección de servicios y galería de trabajos realizados
* Mapa de Google Maps con la ubicación real
* Sección de reseñas/opiniones reales de clientes
* Formulario de contacto con redirección a WhatsApp (múltiples contactos)
* Enlaces directos a Instagram y Facebook
* Optimización básica de SEO y performance

---

## 🌐 Deploy

El proyecto está desplegado en **Vercel**, garantizando rapidez, seguridad y despliegue continuo.

---

## 📄 Estado del proyecto

✅ Proyecto finalizado y entregado al cliente.

---

## 👤 Autor

Desarrollado por **Antonio Melino**.

---

## ⚠️ Nota

Este repositorio corresponde a un proyecto realizado para un cliente real. Algunos datos sensibles fueron omitidos o reemplazados para su publicación pública.
