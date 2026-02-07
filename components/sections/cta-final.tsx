import { Sparkles } from "lucide-react";
import WhatsAppButton from "../whatsapp-button";
import { DEFAULT_MESSAGES } from "@/lib/constants";

export default function CTAFinalSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#0B1220] via-[#1E293B] to-[#0B1220] py-24">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-[#2563EB] blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-[#06B6D4] blur-[100px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#2563EB]/10 px-4 py-2 text-sm text-[#06B6D4] border border-[#2563EB]/20">
          <Sparkles className="h-4 w-4" />
          Cotización sin compromiso
        </div>

        <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          ¿Listo para{" "}
          <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
            empezar hoy?
          </span>
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-[#94A3B8] leading-relaxed">
          Cotiza tu proyecto por WhatsApp en menos de 1 minuto. Sin
          complicaciones, sin esperas largas. Respuesta real de personas
          reales.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <WhatsAppButton
            message={DEFAULT_MESSAGES.home}
            variant="primary"
            className="text-lg px-8 py-4"
          >
            Cotizar ahora por WhatsApp
          </WhatsAppButton>
        </div>

        <div className="mt-8 text-sm text-[#94A3B8]">
          <p>
            🚀 Respuesta en menos de 2 horas · ✅ Sin compromiso · 💯 100%
            transparente
          </p>
        </div>
      </div>
    </section>
  );
}
