import { Shield, Unlock, Eye, Zap, Heart, Users, Smile, TrendingUp } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import WhatsAppButton from "@/components/whatsapp-button";
import { DEFAULT_MESSAGES } from "@/lib/constants";

const pillars = [
  {
    icon: Unlock,
    title: "Independencia del Cliente",
    description:
      "Te entregamos acceso y control total. Sin ataduras, sin dependencias. Tu proyecto es tuyo.",
    details: [
      "Accesos completos a tu hosting y dominio",
      "Código fuente entregado al finalizar",
      "Sin renovaciones forzosas",
      "Libertad de elegir tu proveedor de hosting",
    ],
    color: "from-[#2563EB] to-[#06B6D4]",
  },
  {
    icon: Shield,
    title: "Seguridad",
    description:
      "Copias de respaldo, encriptación y buenas prácticas. Protegemos tu información como si fuera nuestra.",
    details: [
      "Backups automáticos programados",
      "Certificados SSL incluidos",
      "Protección contra malware",
      "Actualizaciones de seguridad",
    ],
    color: "from-[#06B6D4] to-[#10B981]",
  },
  {
    icon: Eye,
    title: "Transparencia",
    description:
      "Tareas y costos claros desde el día uno. Sin sorpresas, sin letras pequeñas.",
    details: [
      "Cotizaciones detalladas por escrito",
      "Informes de progreso regulares",
      "Comunicación directa por WhatsApp",
      "Sin costos ocultos",
    ],
    color: "from-[#10B981] to-[#2563EB]",
  },
  {
    icon: Zap,
    title: "Eficiencia",
    description:
      "Tiempos de entrega y precios justos. Hacemos más con menos, sin comprometer calidad.",
    details: [
      "Plazos de entrega realistas y cumplidos",
      "Metodología ágil de desarrollo",
      "Respuesta en menos de 2 horas",
      "Optimización de recursos",
    ],
    color: "from-[#F59E0B] to-[#2563EB]",
  },
];

const culturePongo = [
  {
    icon: Heart,
    value: "Carisma",
    description: "Conexión humana en cada interacción",
    detail: "Tratamos cada proyecto con pasión y dedicación, porque entendemos que detrás de cada web hay sueños y metas personales.",
  },
  {
    icon: Users,
    value: "Lealtad",
    description: "Compromiso a largo plazo con nuestros clientes",
    detail: "No desaparecemos después de entregar. Estamos aquí para el mantenimiento, las dudas y el crecimiento de tu proyecto.",
  },
  {
    icon: Smile,
    value: "Alegría",
    description: "Pasión y entusiasmo en lo que hacemos",
    detail: "Amamos la tecnología y se nota. Cada proyecto es una oportunidad de crear algo increíble.",
  },
];

const metrics = [
  { number: "<2h", label: "Tiempo de respuesta promedio" },
  { number: "98%", label: "Satisfacción de clientes" },
  { number: "150+", label: "Proyectos entregados" },
  { number: "5★", label: "Calificación promedio" },
];

export default function PorQueGTPage() {
  return (
    <div className="min-h-screen bg-[#0B1220]">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Por qué elegir{" "}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
                GT TECNOLOGY
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-[#94A3B8]">
              Más que tecnología, construimos relaciones basadas en confianza y resultados
            </p>
          </div>

          <div className="mb-24">
            <h2 className="mb-12 text-3xl font-bold text-white text-center">
              Nuestros 4 Pilares Fundamentales
            </h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-8 border border-[#2563EB]/20 transition-all hover:border-[#06B6D4]/50 hover:shadow-2xl hover:shadow-[#2563EB]/20"
                  >
                    <div
                      className={`absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br ${pillar.color} opacity-10 blur-3xl transition-opacity group-hover:opacity-20`}
                    ></div>

                    <div className="relative">
                      <div
                        className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${pillar.color} shadow-lg`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>

                      <h3 className="mb-3 text-2xl font-bold text-white">
                        {pillar.title}
                      </h3>
                      <p className="mb-6 text-[#94A3B8] leading-relaxed">
                        {pillar.description}
                      </p>

                      <ul className="space-y-2">
                        {pillar.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-[#E5F2FF]"
                          >
                            <span className="text-[#06B6D4] mt-1">✓</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-24">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-white">
                Cultura Pongo: Nuestros Valores
              </h2>
              <p className="mx-auto max-w-2xl text-[#94A3B8]">
                Más que un eslogan, es nuestra filosofía de trabajo diaria
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {culturePongo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-8 border border-[#2563EB]/20 text-center"
                  >
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] shadow-lg">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="mb-3 text-xl font-bold text-white">
                      {item.value}
                    </h4>
                    <p className="mb-4 text-[#94A3B8]">{item.description}</p>
                    <p className="text-sm text-[#E5F2FF] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="mb-8 text-3xl font-bold text-white text-center">
              Números que nos respaldan
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-8 border border-[#2563EB]/20 text-center"
                >
                  <div className="mb-2 text-5xl font-bold bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
                    {metric.number}
                  </div>
                  <div className="text-sm text-[#94A3B8]">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex flex-col gap-6 rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-8 border border-[#2563EB]/20">
              <TrendingUp className="h-12 w-12 text-[#06B6D4] mx-auto" />
              <h3 className="text-2xl font-bold text-white">
                ¿Listo para trabajar con nosotros?
              </h3>
              <p className="text-[#94A3B8] max-w-lg">
                Únete a más de 150 clientes satisfechos que ya confiaron en GT TECNOLOGY
              </p>
              <WhatsAppButton
                message={DEFAULT_MESSAGES.home}
                variant="primary"
              >
                Comenzar mi proyecto ahora
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
