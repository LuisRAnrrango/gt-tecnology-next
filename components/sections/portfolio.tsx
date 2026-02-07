"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";

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




];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portafolio" className="relative bg-[#0F172A] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Nuestro{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
              Portafolio
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#94A3B8]">
            Proyectos reales que transformaron negocios
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
                <div className="mb-2 inline-block rounded-full bg-[#2563EB]/20 px-3 py-1 text-xs font-semibold text-[#06B6D4]">
                  {project.category}
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-[#94A3B8]">{project.description}</p>

                <div className="mt-4 flex items-center gap-2 text-[#06B6D4] font-semibold text-sm">
                  <span>Ver caso</span>
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
