import { Heart, Users, Smile, TrendingUp } from "lucide-react";

const culturePongo = [
  {
    icon: Heart,
    value: "Carisma",
    description: "Conexión humana en cada interacción",
  },
  {
    icon: Users,
    value: "Lealtad",
    description: "Compromiso a largo plazo con nuestros clientes",
  },
  {
    icon: Smile,
    value: "Alegría",
    description: "Pasión y entusiasmo en lo que hacemos",
  },
];

const metrics = [
  { number: "<2h", label: "Tiempo de respuesta promedio" },
  { number: "98%", label: "Satisfacción de clientes" },
  { number: "150+", label: "Proyectos entregados" },
  { number: "5★", label: "Calificación promedio" },
];

const testimonials = [
  {
    name: "María González",
    city: "Guayaquil",
    text: "Excelente servicio. Mi página web quedó hermosa y funcional. Respondieron todas mis dudas por WhatsApp al instante.",
    rating: 5,
  },
  {
    name: "Carlos Mendoza",
    city: "Quito",
    text: "Repararon mi laptop en el mismo día. Profesionales y honestos. Totalmente recomendados.",
    rating: 5,
  },
  {
    name: "Ana Pérez",
    city: "Cuenca",
    text: "El software a medida que desarrollaron automatizó mi negocio. Vale cada dólar invertido.",
    rating: 5,
  },
];

export default function TrustSection() {
  return (
    <section className="relative bg-[#0B1220] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Por qué GT TECNOLOGY{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
              importa
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#94A3B8]">
            Más que tecnología, construimos relaciones basadas en confianza
          </p>
        </div>

        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-white">
            Cultura Pongo: Nuestros Valores
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            {culturePongo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] shadow-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="mb-2 text-xl font-bold text-white">
                    {item.value}
                  </h4>
                  <p className="text-[#94A3B8]">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-6 border border-[#2563EB]/20 text-center"
              >
                <div className="mb-2 text-4xl font-bold bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
                  {metric.number}
                </div>
                <div className="text-sm text-[#94A3B8]">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-8 text-center text-2xl font-bold text-white">
            Lo que dicen nuestros clientes
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-6 border border-[#2563EB]/20"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#F59E0B] text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="mb-4 text-[#E5F2FF] italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[#94A3B8]">{testimonial.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#2563EB]/10 px-6 py-3 border border-[#2563EB]/20">
            <TrendingUp className="h-5 w-5 text-[#06B6D4]" />
            <span className="text-[#E5F2FF] font-semibold">
              Clientes satisfechos desde 2020
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
