"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import WhatsAppButton from "@/components/whatsapp-button";
import { DEFAULT_MESSAGES } from "@/lib/constants";

const categories = ["Todos", "Sitios Web", "Mantenimiento", "Software"];

const projects = [

 
    {
    title: "Sitio Web Almont S.A",
    category: "Software",
    description: "Automatización de informes y notificaciones para PYME",
    client: "Compañia de Transporte Pesado Almont SA, San Gabriel, Carchi",
    year: "2023",
     technologies: ["Next.js", "Tailwind CSS", "EmailJS"],
      results: ["150% más leads", "4000+ visitas/mes", "Posición en Google"],
    image: "images/portafolio/almontsavf.png",
  },
  {
    title: "Sitio Web Fundación Kawsay",
    category: "Sitios Web",
    description: "Página corporativa con portafolio y formulario de contacto",
    client: "Fundacion Kawsay, Cayambe",
    year: "2023",
    technologies: ["Next.js", "Tailwind CSS", "EmailJS"],
    results: ["150% más leads", "4000+ visitas/mes", "Posición en Google"],
    image: "images/portafolio/fundacionkawsay.png",
  },
  {
    title: "Sitio Web GT Tecnology",
    category: "Software",
    description: "Sistema web para la empresa GT Tecnology",
    client: "GT Tecnology , Pimampiro",
    year: "2022",
    technologies: ["Angular", "Firebase", "Tailwind CSS"],
   results: ["150% más leads", "4000+ visitas/mes", "Posición en Google"],
    image: "images/portafolio/gttecnology.png",
  },
 
    {
    title: "UPS Quito",
    category: "Sitios Web",
    description: "Sitio web Oficial de Soluciones electricas Quito",
    client: "Soluciones Eléctricas, Quito",
    year: "2024",
    technologies: ["Next.js", "Stripe", "Tailwind CSS"],
    results: ["300% aumento en ventas online", "2000+ visitas mensuales", "Tiempo de carga: 0.8s"],
   image: "images/portafolio/upsquito.png",
  },
 
  {
    title: "Mantenimiento de Computadoras",
    category: "Mantenimiento",
    description: "Limpieza profunda y optimización de 20+ equipos corporativos",
    client: "Radio Nexo, Pimampiro",
    year: "2024",
    technologies: ["Diagnóstico avanzado", "Optimización SSD", "Limpieza profunda"],
    results: ["50% mejora rendimiento", "Cero fallas "],
  image: "images/portafolio/radio.png",
  },
  {
    title: "Desarrollo de Software a Medida Control de Fumigación",
    category: "Software",
    description: "Dashboard para seguimiento de envíos y rutas en tiempo real",
    client: "TransRápido, Ecuador",
    year: "2024",
    technologies: ["JavaServer Faces", "Java", "PostgreSQL", "Wildfly"],
    results: ["Reducción 30% tiempos", "Visibilidad 100% recetas", "ROI en 3 meses"],
 image: "images/portafolio/agricolapimampiro.png",
  },
   {
    title: "Upgrade Gaming",
    category: "Mantenimiento",
    description: "Actualización completa de PC gaming con nuevos componentes",
    client: "Cliente particular, Ibarra",
    year: "2024",
    technologies: ["RTX 4060", "32GB RAM", "1TB NVMe SSD"],
    results: ["300% mejora FPS", "Streaming sin lag", "Temperatura -20°C"],
   image: "images/portafolio/reparacion.jpg",
  },
  {
    title: "Gestión de Taller de Reparación",
    category: "Software",
    description: "Dashboard para seguimiento de equipos en reparación en GT Tecnology",
    client: "GT Tecnology, Ecuador",
    year: "2025",
    technologies: ["React", "Firebase", "PostgreSQL", "GitHub"],
    results: ["Reducción 30% tiempos", "Visibilidad 100% seguimiento", "Incremento de confiabilidad"],
 image: "images/portafolio/gestionserviciotecnico.png",
  },
  {
    title: "Aplicación Web Odontológica UTN",
    category: "Software",
    description: "Web profesional con sistema de citas online,gestión, odontograma, procedimeintos realizados",
    client: "Dr.Bladimir Benavides,Universidad Técnica del Norte, Ibarra",
    year: "2021",
    technologies: ["Oracle APEX", "Calendly API", "CSS y Javascript"],
    results: ["80% citas online", "200+ pacientes/mes", "Ahorro tiempo 60%"],
    image: "images/portafolio/odontologicoutn.jpg",
  },
];

export default function PortafolioPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0B1220]">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Nuestro{" "}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
                Portafolio
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-[#94A3B8]">
              Proyectos reales que transformaron negocios y superaron expectativas
            </p>
          </div>

          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 py-2 font-semibold transition-all ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white shadow-lg"
                    : "bg-[#1E293B] text-[#94A3B8] hover:text-white border border-[#2563EB]/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-[#1E293B] border border-[#2563EB]/20 transition-all hover:border-[#06B6D4]/50 hover:shadow-2xl hover:shadow-[#2563EB]/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] to-transparent opacity-60"></div>
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="inline-block rounded-full bg-[#2563EB]/20 px-3 py-1 text-xs font-semibold text-[#06B6D4]">
                      {project.category}
                    </div>
                    <span className="text-xs text-[#94A3B8]">{project.year}</span>
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mb-3 text-sm text-[#94A3B8]">{project.description}</p>

                  <p className="mb-4 text-xs text-[#06B6D4] font-semibold">
                    {project.client}
                  </p>

                  <div className="mb-4">
                    <p className="mb-2 text-xs font-semibold text-[#E5F2FF]">Tecnologías:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-[#0B1220] text-[#94A3B8] px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="mb-2 text-xs font-semibold text-[#E5F2FF]">Resultados:</p>
                    <ul className="space-y-1">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="text-xs text-[#94A3B8] flex items-start gap-2">
                          <span className="text-[#06B6D4]">•</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-2 text-[#06B6D4] font-semibold text-sm">
                    <span>Ver caso completo</span>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex flex-col gap-4 rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-8 border border-[#2563EB]/20">
              <h3 className="text-2xl font-bold text-white">
                ¿Listo para ser nuestro próximo caso de éxito?
              </h3>
              <p className="text-[#94A3B8]">
                Cuéntanos tu proyecto y te mostraremos cómo podemos ayudarte
              </p>
              <WhatsAppButton
                message={DEFAULT_MESSAGES.home}
                variant="primary"
              >
                Iniciar mi proyecto
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
