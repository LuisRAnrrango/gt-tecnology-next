import { ArrowRight } from "lucide-react";
import NetworkBackground from "../network-background";
import WhatsAppButton from "../whatsapp-button";
import { DEFAULT_MESSAGES } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B1220]"
    >
      <NetworkBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#2563EB]/10 px-4 py-2 text-sm text-[#06B6D4] border border-[#2563EB]/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06B6D4] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06B6D4]"></span>
          </span>
          Disponibles hoy para tu proyecto
        </div>

        <h1 className="mb-6 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
          Desatamos el poder de la
          <br />
          <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
            tecnología para tu negocio
          </span>
        </h1>

        <p className="mx-auto mb-4 max-w-3xl text-lg text-[#94A3B8] sm:text-xl leading-relaxed">
          Webs rápidas, mantenimiento experto, software a medida y streaming.
          <br />
          <span className="text-[#E5F2FF] font-semibold">
            Respuesta hoy, resultados reales.
          </span>
        </p>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-4 text-sm text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <span className="text-[#06B6D4]">⚡</span> Carga ultrarrápida
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#06B6D4]">🔒</span> Seguridad
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#06B6D4]">📈</span> SEO local
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#06B6D4]">💬</span> Soporte real por
            WhatsApp
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <WhatsAppButton message={DEFAULT_MESSAGES.home} variant="primary">
            Hablar por WhatsApp
          </WhatsAppButton>
          <a
            href="#por-que-gt"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white border-2 border-[#2563EB] hover:bg-[#2563EB]/10 transition-all hover:scale-[1.02]"
          >
            Ver cómo trabajamos
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-16 text-sm text-[#94A3B8]">
          <p className="mb-2 font-semibold text-[#E5F2FF]">
            Tu negocio merece verse tan bien como trabaja
          </p>
          <p>
            Creamos sitios web modernos, rápidos y seguros desde $95. Diseñados
            para generar confianza y ventas.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent"></div>
    </section>
  );
}
