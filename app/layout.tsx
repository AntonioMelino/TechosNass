import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Techos Nass",
  description:
    "Empresa familiar con 40 años de experiencia en instalación, reparación y mantenimiento de techos. Servicios integrales: techos de chapa, teja, impermeabilización, canaletas y más.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/logo.PNG",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
