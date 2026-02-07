import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import WhatsAppButton from "@/components/whatsapp-button";
import { blogPosts } from "@/lib/blog-data";
import { DEFAULT_MESSAGES } from "@/lib/constants";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0B1220]">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Blog y{" "}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
                Guías
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-[#94A3B8]">
              Consejos, tutoriales y soluciones para sacarle el máximo provecho a tu tecnología
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
                  <div className="mb-3 flex items-center gap-4 text-xs text-[#94A3B8]">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime} de lectura</span>
                    </div>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-white leading-tight">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-sm text-[#94A3B8] leading-relaxed">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#06B6D4] hover:gap-3 transition-all"
                  >
                    Leer artículo completo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex flex-col gap-4 rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-8 border border-[#2563EB]/20">
              <h3 className="text-2xl font-bold text-white">
                ¿Tienes alguna duda técnica?
              </h3>
              <p className="text-[#94A3B8]">
                Pregúntanos por WhatsApp y te ayudamos a resolver tu problema
              </p>
              <WhatsAppButton message={DEFAULT_MESSAGES.home} variant="primary">
                Consultar por WhatsApp
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
