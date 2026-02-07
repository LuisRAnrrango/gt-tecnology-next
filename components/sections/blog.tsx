import { Clock, ArrowRight } from "lucide-react";
import WhatsAppButton from "../whatsapp-button";
import { DEFAULT_MESSAGES } from "@/lib/constants";

const blogPosts = [
  {
    title: "Cómo enviar videos por WhatsApp sin perder calidad (iPhone/Android)",
    excerpt:
      "Guía completa para compartir videos en alta calidad usando WhatsApp en cualquier dispositivo.",
    category: "Tutoriales",
    readTime: "5 min",
    image: "https://images.pexels.com/photos/7664113/pexels-photo-7664113.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Disco duro lleno sin razón: causas y solución definitiva",
    excerpt:
      "Descubre qué está ocupando espacio en tu disco y cómo liberar GB de forma segura.",
    category: "Mantenimiento",
    readTime: "8 min",
    image: "https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Pantalla se apaga y vuelve: checklist de soluciones",
    excerpt:
      "Paso a paso para diagnosticar y resolver problemas de pantalla intermitente en PC y laptops.",
    category: "Reparación",
    readTime: "6 min",
    image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Elegir dominio .com vs .ec para tu negocio en Ecuador",
    excerpt:
      "Ventajas y desventajas de cada extensión. Cuál es mejor para tu proyecto local.",
    category: "Desarrollo Web",
    readTime: "7 min",
    image: "https://images.pexels.com/photos/1010973/pexels-photo-1010973.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Qué debe incluir tu sitio web en 2025",
    excerpt:
      "Elementos esenciales para un sitio moderno: velocidad, SEO, seguridad y experiencia de usuario.",
    category: "Desarrollo Web",
    readTime: "10 min",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "RAM vs SSD: ¿Qué mejora el rendimiento de mi PC?",
    excerpt:
      "Análisis técnico de cuándo invertir en memoria RAM o en un disco SSD para mayor velocidad.",
    category: "Hardware",
    readTime: "6 min",
    image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="relative bg-[#0B1220] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Blog y{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
              Guías
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#94A3B8]">
            Consejos, tutoriales y soluciones para sacarle el máximo provecho a
            tu tecnología
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#2563EB]/20 transition-all hover:border-[#06B6D4]/50 hover:shadow-2xl hover:shadow-[#2563EB]/20"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] px-3 py-1 text-xs font-semibold text-white">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-xs text-[#94A3B8]">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime} de lectura</span>
                </div>

                <h3 className="mb-3 text-lg font-bold text-white leading-tight">
                  {post.title}
                </h3>
                <p className="mb-4 text-sm text-[#94A3B8] leading-relaxed">
                  {post.excerpt}
                </p>

                <a
                  href="#blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#06B6D4] hover:gap-3 transition-all"
                >
                  Leer artículo
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <WhatsAppButton message={DEFAULT_MESSAGES.home} variant="outline">
            ¿Tienes una duda? Pregúntanos por WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
