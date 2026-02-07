import {
  Wrench,
  Monitor,
  HardDrive,
  Globe,
  Code2,
  Tv,
  Radio,
} from "lucide-react";
import Link from "next/link";
import WhatsAppButton from "../whatsapp-button";
import { DEFAULT_MESSAGES } from "@/lib/constants";

const services = [
  {
    slug: "mantenimiento-computadoras",
    icon: Wrench,
    title: "Mantenimiento de Computadoras",
    description:
      "Limpieza profesional, diagnóstico completo, formateo e instalación de sistemas operativos, reparación de discos y recuperación de datos.",
    benefits: [
      "Diagnóstico gratuito",
      "Reparación el mismo día",
      "Garantía de 30 días",
    ],
    message: DEFAULT_MESSAGES.maintenance,
  },
  {
    slug: "venta-computadoras",
    icon: Monitor,
    title: "Venta de Computadoras",
    description:
      "PC y laptops de última generación, periféricos gaming y oficina, monitores 4K, routers y equipos de red, impresoras multifuncionales.",
    benefits: [
      "Asesoría personalizada",
      "Precios competitivos",
      "Instalación incluida",
    ],
    message: DEFAULT_MESSAGES.sales,
  },
  {
    slug: "repuestos-upgrades",
    icon: HardDrive,
    title: "Repuestos y Upgrades",
    description:
      "Memoria RAM DDR4/DDR5, discos HDD, SSD y NVMe M.2, reemplazo y migración de datos, tarjetas gráficas, fuentes de poder certificadas.",
    benefits: [
      "Repuestos originales",
      "Instalación profesional",
      "Mejora de rendimiento",
    ],
    message: DEFAULT_MESSAGES.sales,
  },
  {
    slug: "desarrollo-web",
    icon: Globe,
    title: "Desarrollo de Sitios Web",
    description:
      "Landing pages efectivas, sitios corporativos profesionales, tiendas online con pasarela de pagos, SEO on-page incluido.",
    benefits: [
      "Diseño responsive",
      "Carga ultrarrápida",
      "Optimizado para ventas",
    ],
    message: DEFAULT_MESSAGES.webDev,
  },
  {
    slug: "software-medida",
    icon: Code2,
    title: "Software a Medida",
    description:
      "Automatizaciones y bots personalizados, paneles de control y dashboards, integraciones con APIs, sistemas de gestión empresarial.",
    benefits: [
      "Soluciones únicas",
      "Escalable",
      "Soporte continuo",
    ],
    message: DEFAULT_MESSAGES.software,
  },
  {
    slug: "streaming",
    icon: Tv,
    title: "Streaming Premium",
    description:
      "Cuentas Netflix, HBO Max, Disney+, Spotify Premium, Prime Video, Crunchyroll, YouTube Premium. Venta y renovación con garantía.",
    benefits: [
      "Activación inmediata",
      "Precios accesibles",
      "Soporte 24/7",
    ],
    message: DEFAULT_MESSAGES.streaming,
  },
  {
    slug: "canales-online",
    icon: Radio,
    title: "Canales Online (Fluho/Flow TV)",
    description:
      "Activación de servicios de televisión por internet, configuración en Smart TV y dispositivos, soporte técnico especializado.",
    benefits: [
      "Canales en HD",
      "Sin contratos largos",
      "Asistencia técnica",
    ],
    message: DEFAULT_MESSAGES.streaming,
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="relative bg-[#0B1220] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Servicios que{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
              transforman
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#94A3B8]">
            Soluciones tecnológicas completas para particulares y empresas
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                href={`/servicios#${service.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-8 border border-[#2563EB]/20 transition-all hover:border-[#06B6D4]/50 hover:shadow-2xl hover:shadow-[#2563EB]/20 block"
              >
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] opacity-5 blur-3xl transition-opacity group-hover:opacity-10"></div>

                <div className="relative">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] shadow-lg">
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-sm text-[#94A3B8] leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mb-6 space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-[#E5F2FF]"
                      >
                        <span className="text-[#06B6D4]">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="w-full text-center rounded-full px-6 py-3 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white font-semibold shadow-lg text-sm">
                    Ver detalles del servicio
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[#94A3B8] italic">
            * Servicios de streaming sujetos a disponibilidad y términos de las
            plataformas
          </p>
        </div>
      </div>
    </section>
  );
}
