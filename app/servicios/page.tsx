import {
  Wrench,
  Monitor,
  HardDrive,
  Globe,
  Code2,
  Tv,
  Radio,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import WhatsAppButton from "@/components/whatsapp-button";
import { DEFAULT_MESSAGES } from "@/lib/constants";

const services = [
  {
    slug: "mantenimiento-computadoras",
    icon: Wrench,
    title: "Mantenimiento de Computadoras",
    shortDesc: "Diagnóstico, limpieza y reparación profesional",
    fullDesc:
      "Servicio completo de mantenimiento preventivo y correctivo para computadoras de escritorio y laptops. Mantén tu equipo funcionando como nuevo.",
    features: [
      "Limpieza profunda interna y externa",
      "Diagnóstico completo gratuito",
      "Formateo e instalación de sistemas operativos",
      "Reparación de discos duros",
      "Recuperación de datos básica",
      "Optimización de rendimiento",
      "Eliminación de virus y malware",
      "Actualización de drivers",
    ],
    benefits: ["Diagnóstico gratuito", "Reparación el mismo día", "Garantía de 30 días"],
    message: DEFAULT_MESSAGES.maintenance,
  },
  {
    slug: "venta-computadoras",
    icon: Monitor,
    title: "Venta de Computadoras y Equipos",
    shortDesc: "PC, laptops y periféricos de última generación",
    fullDesc:
      "Encuentra el equipo perfecto para tu trabajo, estudio o entretenimiento. Asesoría personalizada para elegir lo que realmente necesitas.",
    features: [
      "PC de escritorio armadas a medida",
      "Laptops para trabajo y gaming",
      "Monitores LED, 4K y gaming",
      "Teclados y mouse gaming/oficina",
      "Routers y equipos de red",
      "Impresoras multifuncionales",
      "Webcams y accesorios",
      "Garantía de fábrica",
    ],
    benefits: ["Asesoría personalizada", "Precios competitivos", "Instalación incluida"],
    message: DEFAULT_MESSAGES.sales,
  },
  {
    slug: "repuestos-upgrades",
    icon: HardDrive,
    title: "Repuestos y Upgrades",
    shortDesc: "Mejora el rendimiento de tu equipo",
    fullDesc:
      "Dale nueva vida a tu computadora con repuestos originales y upgrades profesionales. Instalación y migración de datos incluida.",
    features: [
      "Memoria RAM DDR4 y DDR5",
      "Discos duros HDD 1TB-4TB",
      "SSD SATA y NVMe M.2",
      "Tarjetas gráficas gaming",
      "Fuentes de poder certificadas",
      "Procesadores Intel y AMD",
      "Placas madre gaming",
      "Migración de datos incluida",
    ],
    benefits: ["Repuestos originales", "Instalación profesional", "Mejora de rendimiento"],
    message: DEFAULT_MESSAGES.sales,
  },
  {
    slug: "desarrollo-web",
    icon: Globe,
    title: "Desarrollo de Sitios Web",
    shortDesc: "Sitios modernos que convierten visitantes en clientes",
    fullDesc:
      "Diseñamos y desarrollamos sitios web profesionales, rápidos y optimizados para generar ventas. Desde landing pages hasta tiendas online completas.",
    features: [
      "Landing pages de alta conversión",
      "Sitios corporativos profesionales",
      "Tiendas online con pasarela de pagos",
      "Diseño responsive (móvil y desktop)",
      "SEO on-page incluido",
      "Optimización de velocidad",
      "Integración con redes sociales",
      "Formularios de contacto",
    ],
    benefits: ["Diseño responsive", "Carga ultrarrápida", "Optimizado para ventas"],
    message: DEFAULT_MESSAGES.webDev,
  },
  {
    slug: "software-medida",
    icon: Code2,
    title: "Software a Medida",
    shortDesc: "Soluciones personalizadas para tu negocio",
    fullDesc:
      "Desarrollamos software personalizado que se adapta exactamente a las necesidades de tu negocio. Automatiza procesos y ahorra tiempo.",
    features: [
      "Automatizaciones y bots",
      "Paneles de control (dashboards)",
      "Integraciones con APIs",
      "Sistemas de gestión empresarial",
      "CRM personalizado",
      "Aplicaciones web progresivas",
      "Sistemas de facturación",
      "Reportes y analíticas",
    ],
    benefits: ["Soluciones únicas", "Escalable", "Soporte continuo"],
    message: DEFAULT_MESSAGES.software,
  },
  {
    slug: "streaming",
    icon: Tv,
    title: "Streaming Premium",
    shortDesc: "Cuentas de plataformas de streaming",
    fullDesc:
      "Accede a las mejores plataformas de streaming a precios accesibles. Venta de cuentas y renovación con garantía y soporte.",
    features: [
      "Netflix (todos los planes)",
      "HBO Max",
      "Disney+",
      "Spotify Premium",
      "Prime Video",
      "Crunchyroll",
      "YouTube Premium",
      "Apple TV+",
    ],
    benefits: ["Activación inmediata", "Precios accesibles", "Soporte 24/7"],
    message: DEFAULT_MESSAGES.streaming,
  },
  {
    slug: "canales-online",
    icon: Radio,
    title: "Canales Online (Flujo/Flujo TV)",
    shortDesc: "Televisión por internet en alta definición",
    fullDesc:
      "Disfruta de televisión en vivo por internet con la mejor calidad. Activación en Android TV, PC y dispositivos móviles android.",
    features: [
      "Canales en vivo HD",
      "Deportes y eventos PPV",
      "Películas y series on demand",
      "Configuración en múltiples dispositivos",
      "Sin contratos a largo plazo",
      "Actualización constante de contenido",
      "Canales internacionales",
      "Soporte técnico incluido",
    ],
    benefits: ["Canales en HD", "Sin contratos largos", "Asistencia técnica"],
    message: DEFAULT_MESSAGES.streaming,
  },
];

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-[#0B1220]">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Nuestros{" "}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
                Servicios
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-[#94A3B8]">
              Soluciones tecnológicas completas para llevar tu negocio al siguiente nivel
            </p>
          </div>

          <div className="grid gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  id={service.slug}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#2563EB]/20"
                >
                  <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] opacity-5 blur-3xl transition-opacity group-hover:opacity-10"></div>

                  <div className="relative p-8 md:p-12">
                    <div className="grid gap-8 lg:grid-cols-2">
                      <div>
                        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] shadow-lg">
                          <Icon className="h-8 w-8 text-white" />
                        </div>

                        <h2 className="mb-4 text-3xl font-bold text-white">
                          {service.title}
                        </h2>
                        <p className="mb-6 text-lg text-[#E5F2FF] font-semibold">
                          {service.shortDesc}
                        </p>
                        <p className="mb-8 text-[#94A3B8] leading-relaxed">
                          {service.fullDesc}
                        </p>

                        <div className="mb-6 flex flex-wrap gap-3">
                          {service.benefits.map((benefit, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-2 rounded-full bg-[#2563EB]/20 px-4 py-2 text-sm font-semibold text-[#06B6D4] border border-[#2563EB]/30"
                            >
                              <span className="text-[#06B6D4]">✓</span>
                              {benefit}
                            </span>
                          ))}
                        </div>

                        <WhatsAppButton
                          message={service.message}
                          variant="primary"
                          className="text-base"
                        >
                          Solicitar este servicio
                        </WhatsAppButton>
                      </div>

                      <div>
                        <h3 className="mb-4 text-xl font-bold text-white">
                          ¿Qué incluye?
                        </h3>
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-[#E5F2FF]"
                            >
                              <ArrowRight className="h-5 w-5 flex-shrink-0 text-[#06B6D4] mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex flex-col gap-4 rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-8 border border-[#2563EB]/20">
              <h3 className="text-2xl font-bold text-white">
                ¿No encuentras lo que buscas?
              </h3>
              <p className="text-[#94A3B8]">
                Contáctanos por WhatsApp y cuéntanos qué necesitas
              </p>
              <WhatsAppButton
                message={DEFAULT_MESSAGES.home}
                variant="primary"
              >
                Consultar disponibilidad
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
