import { Shield, Unlock, Eye, Zap } from "lucide-react";
import WhatsAppButton from "../whatsapp-button";
import { DEFAULT_MESSAGES } from "@/lib/constants";

const pillars = [
  {
    icon: Unlock,
    title: "Independencia del Cliente",
    description:
      "Te entregamos acceso y control total. Sin ataduras, sin dependencias. Tu proyecto es tuyo.",
    color: "from-[#2563EB] to-[#06B6D4]",
  },
  {
    icon: Shield,
    title: "Seguridad",
    description:
      "Copias de respaldo, encriptación y buenas prácticas. Protegemos tu información como si fuera nuestra.",
    color: "from-[#06B6D4] to-[#10B981]",
  },
  {
    icon: Eye,
    title: "Transparencia",
    description:
      "Tareas y costos claros desde el día uno. Sin sorpresas, sin letras pequeñas.",
    color: "from-[#10B981] to-[#2563EB]",
  },
  {
    icon: Zap,
    title: "Eficiencia",
    description:
      "Tiempos de entrega y precios justos. Hacemos más con menos, sin comprometer calidad.",
    color: "from-[#F59E0B] to-[#2563EB]",
  },
];

export default function WhyGTSection() {
  return (
    <section id="por-que-gt" className="relative bg-[#0F172A] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Por qué elegir{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
              GT TECNOLOGY
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#94A3B8]">
            Cuatro pilares que nos diferencian y garantizan tu éxito digital
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-8 border border-[#2563EB]/20 transition-all hover:border-[#06B6D4]/50 hover:shadow-2xl hover:shadow-[#2563EB]/20 hover:-translate-y-2"
              >
                <div
                  className={`absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br ${pillar.color} opacity-10 blur-3xl transition-opacity group-hover:opacity-20`}
                ></div>

                <div className="relative">
                  <div
                    className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${pillar.color} shadow-lg`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mb-6 text-[#94A3B8] leading-relaxed">
                    {pillar.description}
                  </p>

                  <WhatsAppButton
                    message={DEFAULT_MESSAGES.home}
                    variant="outline"
                    className="text-xs px-4 py-2"
                  >
                    Cotizar ahora
                  </WhatsAppButton>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
