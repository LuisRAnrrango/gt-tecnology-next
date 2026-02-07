import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import WhatsAppButton from "@/components/whatsapp-button";
import { NAP, PHONE_LINK, WHATSAPP_LINK, DEFAULT_MESSAGES } from "@/lib/constants";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Respuesta en menos de 2 horas",
    value: NAP.phone,
    action: "Chatear ahora",
    link: WHATSAPP_LINK(DEFAULT_MESSAGES.home),
    color: "from-[#25D366] to-[#128C7E]",
  },
  {
    icon: Phone,
    title: "Teléfono",
    description: "Llamadas de lunes a sábado",
    value: NAP.phone,
    action: "Llamar ahora",
    link: PHONE_LINK,
    color: "from-[#2563EB] to-[#06B6D4]",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Respuesta en 24 horas",
    value: NAP.email,
    action: "Enviar email",
    link: `mailto:${NAP.email}`,
    color: "from-[#06B6D4] to-[#10B981]",
  },
];

const faqs = [
  {
    question: "¿Cuánto tiempo tarda un proyecto web?",
    answer: "Depende del plan elegido: Plan Inicio (7 días), Plan Pro (14 días), Plan Business (21 días). Tiempos garantizados desde la aprobación del diseño.",
  },
  {
    question: "¿Ofrecen mantenimiento después de entregar?",
    answer: "Sí, ofrecemos planes de mantenimiento mensuales y soporte técnico. También damos garantía de 30 días en todos nuestros servicios.",
  },
  {
    question: "¿Puedo pagar en cuotas?",
    answer: "Sí, aceptamos pagos en cuotas para proyectos mayores a $200. Contáctanos para conocer las opciones disponibles.",
  },
  {
    question: "¿Trabajan con empresas fuera de Guayaquil?",
    answer: "¡Por supuesto! Trabajamos con clientes de todo Ecuador e incluso internacionales. Todo el proceso se maneja de forma remota.",
  },
];

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-[#0B1220]">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Hablemos de tu{" "}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
                Proyecto
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-[#94A3B8]">
              Estamos listos para escucharte y ayudarte a hacer realidad tus ideas
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.link}
                  target={method.title === "WhatsApp" ? "_blank" : undefined}
                  rel={method.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-8 border border-[#2563EB]/20 transition-all hover:border-[#06B6D4]/50 hover:shadow-2xl hover:shadow-[#2563EB]/20 hover:-translate-y-2"
                >
                  <div
                    className={`absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br ${method.color} opacity-10 blur-3xl transition-opacity group-hover:opacity-20`}
                  ></div>

                  <div className="relative">
                    <div
                      className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${method.color} shadow-lg`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    <h3 className="mb-2 text-xl font-bold text-white">
                      {method.title}
                    </h3>
                    <p className="mb-4 text-sm text-[#94A3B8]">
                      {method.description}
                    </p>
                    <p className="mb-4 text-lg font-semibold text-[#06B6D4]">
                      {method.value}
                    </p>

                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                      {method.action}
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="grid gap-12 lg:grid-cols-2 mb-16">
            <div className="rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-8 border border-[#2563EB]/20">
              <h2 className="mb-6 text-2xl font-bold text-white">
                Información de Contacto
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2563EB]/20">
                    <MapPin className="h-5 w-5 text-[#06B6D4]" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-white">Ubicación</h3>
                    <p className="text-sm text-[#94A3B8]">{NAP.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2563EB]/20">
                    <Clock className="h-5 w-5 text-[#06B6D4]" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-white">Horario</h3>
                    <p className="text-sm text-[#94A3B8]">{NAP.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2563EB]/20">
                    <MessageCircle className="h-5 w-5 text-[#06B6D4]" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-white">
                      Contacto Rápido
                    </h3>
                    <p className="text-sm text-[#94A3B8] mb-3">
                      Preferimos WhatsApp para respuestas más rápidas
                    </p>
                    <WhatsAppButton
                      message={DEFAULT_MESSAGES.home}
                      variant="primary"
                      className="text-sm"
                    >
                      Abrir chat
                    </WhatsAppButton>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-8 border border-[#2563EB]/20">
              <h2 className="mb-6 text-2xl font-bold text-white">
                Preguntas Frecuentes
              </h2>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="mb-2 font-semibold text-white">
                      {faq.question}
                    </h3>
                    <p className="text-sm text-[#94A3B8] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-8 border border-[#2563EB]/20">
            <div className="text-center mb-8">
              <h2 className="mb-4 text-2xl font-bold text-white">
                ¿Listo para empezar?
              </h2>
              <p className="text-[#94A3B8]">
                El primer paso es una conversación. Sin compromiso, sin presión.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppButton
                message={DEFAULT_MESSAGES.home}
                variant="primary"
                className="text-base"
              >
                Iniciar conversación por WhatsApp
              </WhatsAppButton>
              <a
                href={PHONE_LINK}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white border-2 border-[#2563EB] hover:bg-[#2563EB]/10 transition-all hover:scale-[1.02]"
              >
                <Phone className="h-5 w-5" />
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
