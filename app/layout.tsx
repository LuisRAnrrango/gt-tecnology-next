import "./globals.css";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GT TECNOLOGY | Desarrollo Web, Mantenimiento PC y Software en Ecuador",
  description:
    "Sitios web rápidos y seguros desde $95. Mantenimiento de computadoras, software a medida y streaming en Guayaquil, Ecuador. Respuesta hoy, resultados reales.",
  keywords: [
    "desarrollo web Ecuador",
    "mantenimiento computadoras Guayaquil",
    "diseño web Ecuador",
    "software a medida",
    "streaming Ecuador",
    "repuestos computadoras",
    "sitios web Ecuador",
  ],
  authors: [{ name: "GT TECNOLOGY" }],
  openGraph: {
    title: "GT TECNOLOGY | Tecnología Humana que Responde Hoy",
    description:
      "Sitios web profesionales, mantenimiento experto y software a medida. Desde $95. Guayaquil, Ecuador.",
    url: "https://gttecnology.ec",
    siteName: "GT TECNOLOGY",
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GT TECNOLOGY | Desarrollo Web y Tecnología en Ecuador",
    description:
      "Webs rápidas, mantenimiento experto, software a medida. Respuesta hoy.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-[#0B1220]`}>
        {children}
      </body>
    </html>
  );
}
