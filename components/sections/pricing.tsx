import { Check, Star } from "lucide-react";
import WhatsAppButton from "../whatsapp-button";
import { DEFAULT_MESSAGES } from "@/lib/constants";

const plans = [
  {
    name: "Inicio",
    price: "$95",
    popular: false,
    features: [
      "1 página profesional",
      "5 secciones personalizadas",
      "Integración WhatsApp",
      "Diseño responsive",
      "Optimización básica SEO",
      "Tiempo de entrega: 7 días",
    ],
    note: "Hosting y dominio no incluidos",
    message: DEFAULT_MESSAGES.planInicio,
  },
  {
    name: "Pro",
    price: "$220",
    popular: true,
    features: [
      "3-5 páginas completas",
      "Blog integrado",
      "Sección portafolio",
      "SEO on-page avanzado",
      "Formularios de contacto",
      "Google Analytics",
      "Optimización de velocidad",
      "Tiempo de entrega: 14 días",
    ],
    note: "Ideal para negocios establecidos",
    message: DEFAULT_MESSAGES.planPro,
  },
  {
    name: "Business",
    price: "$420",
    popular: false,
    features: [
      "8-12 páginas personalizadas",
      "CMS para gestión fácil",
      "E-commerce básico",
      "Automatizaciones",
      "Panel de administración",
      "Integraciones API",
      "Soporte prioritario 3 meses",
      "Capacitación incluida",
      "Tiempo de entrega: 21 días",
    ],
    note: "Solución empresarial completa",
    message: DEFAULT_MESSAGES.planBusiness,
  },
];

export default function PricingSection() {
  return (
    <section id="planes" className="relative bg-[#0F172A] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Planes y{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
              Precios
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#94A3B8]">
            Elige el plan perfecto para tu proyecto. Sin costos ocultos, sin
            sorpresas.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-8 border transition-all hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular
                  ? "border-[#06B6D4] shadow-lg shadow-[#06B6D4]/20 scale-105"
                  : "border-[#2563EB]/20 hover:border-[#06B6D4]/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-1 -right-1">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-[#F59E0B] to-[#F97316] px-4 py-1 rounded-bl-xl rounded-tr-xl">
                    <Star className="h-4 w-4 text-white fill-white" />
                    <span className="text-xs font-bold text-white">
                      Más elegido
                    </span>
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-white">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-[#94A3B8]">USD</span>
                </div>
                <p className="mt-2 text-sm text-[#94A3B8] italic">
                  {plan.note}
                </p>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-[#E5F2FF]"
                  >
                    <Check className="h-5 w-5 flex-shrink-0 text-[#06B6D4] mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <WhatsAppButton
                message={plan.message}
                variant={plan.popular ? "primary" : "outline"}
                className="w-full justify-center"
              >
                {plan.popular ? "Comenzar ahora" : "Cotizar plan"}
              </WhatsAppButton>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#94A3B8]">
            ¿Necesitas algo diferente?{" "}
            <a
              href={`https://wa.me/593993273984?text=${encodeURIComponent(
                "Hola, necesito un plan personalizado"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#06B6D4] hover:underline font-semibold"
            >
              Cotiza un plan personalizado
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
