import { ArrowLeft, Clock, User, Tag } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import WhatsAppButton from "@/components/whatsapp-button";
import { getBlogPostBySlug, getAllBlogSlugs } from "@/lib/blog-data";
import { DEFAULT_MESSAGES } from "@/lib/constants";

interface BlogArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0B1220]">
        <Navbar />
        <div className="pt-40 pb-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Artículo no encontrado</h1>
            <p className="text-[#94A3B8] mb-8">Lo sentimos, el artículo que buscas no existe.</p>
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#06B6D4] hover:text-[#2563EB] transition-colors">
              <ArrowLeft className="h-5 w-5" />
              Volver al Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B1220]">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#06B6D4] hover:text-[#2563EB] transition-colors mb-8"
          >
            <ArrowLeft className="h-5 w-5" />
            Volver al Blog
          </Link>

          <div className="mb-8">
            <div className="mb-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] px-4 py-2 text-sm font-semibold text-white">
                {post.category}
              </span>
              <span className="rounded-full bg-[#1E293B] px-4 py-2 text-sm text-[#94A3B8]">
                {post.date}
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-sm text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-[#06B6D4]" />
                <span>{post.readTime} de lectura</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-[#06B6D4]" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>

          <div className="relative h-96 overflow-hidden rounded-2xl mb-12 border border-[#2563EB]/20">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] to-transparent opacity-40"></div>
          </div>

          <div className="prose prose-invert max-w-none mb-12">
            <div
              className="text-[#E5F2FF] leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/<h2>/g, '<h2 class="text-3xl font-bold text-white mt-8 mb-4">')
                  .replace(/<h3>/g, '<h3 class="text-2xl font-bold text-[#06B6D4] mt-6 mb-3">')
                  .replace(/<p>/g, '<p class="text-[#E5F2FF] leading-relaxed">')
                  .replace(/<ul>/g, '<ul class="list-disc list-inside space-y-2 text-[#E5F2FF]">')
                  .replace(/<ol>/g, '<ol class="list-decimal list-inside space-y-2 text-[#E5F2FF]">')
                  .replace(/<li>/g, '<li class="text-[#E5F2FF]">')
                  .replace(/<table>/g, '<table class="w-full border-collapse my-6">')
                  .replace(/<th>/g, '<th class="border border-[#2563EB]/50 p-3 bg-[#1E293B] text-left text-[#06B6D4]">')
                  .replace(/<td>/g, '<td class="border border-[#2563EB]/30 p-3 text-[#E5F2FF]">')
                  .replace(/<code>/g, '<code class="bg-[#1E293B] px-2 py-1 rounded text-[#06B6D4] text-sm">')
                  .replace(/<pre>/g, '<pre class="bg-[#1E293B] p-4 rounded-lg overflow-x-auto my-4">')
                  .replace(/<strong>/g, '<strong class="text-white font-bold">')
                  .replace(/<a /g, '<a class="text-[#06B6D4] hover:text-[#2563EB] transition-colors" ')
              }}
            />
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-8 border border-[#2563EB]/20 mb-12">
            <div className="mb-6">
              <p className="text-sm text-[#94A3B8] mb-2">Categoría</p>
              <div className="flex items-center gap-2">
                <Tag className="h-5 w-5 text-[#06B6D4]" />
                <span className="text-lg font-semibold text-white">
                  {post.category}
                </span>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-sm text-[#94A3B8] mb-2">Comparte este artículo</p>
              <div className="flex gap-4">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    post.title
                  )}&url=${encodeURIComponent(
                    `${typeof window !== "undefined" ? window.location.origin : ""}/blog/${post.slug}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#2563EB]/20 px-4 py-2 text-sm text-[#06B6D4] hover:bg-[#2563EB]/30 transition-colors"
                >
                  Twitter
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    `${typeof window !== "undefined" ? window.location.origin : ""}/blog/${post.slug}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#2563EB]/20 px-4 py-2 text-sm text-[#06B6D4] hover:bg-[#2563EB]/30 transition-colors"
                >
                  Facebook
                </a>
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                    `${post.title} - ${typeof window !== "undefined" ? window.location.origin : ""}/blog/${post.slug}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#10B981]/20 px-4 py-2 text-sm text-[#10B981] hover:bg-[#10B981]/30 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-8 border border-[#2563EB]/20">
            <h2 className="mb-4 text-2xl font-bold text-white">
              ¿Tienes alguna duda sobre este tema?
            </h2>
            <p className="mb-6 text-[#94A3B8]">
              Nuestro equipo de expertos está disponible para ayudarte. Contáctanos por WhatsApp.
            </p>
            <WhatsAppButton
              message={`Hola, tengo una pregunta sobre: ${post.title}`}
              variant="primary"
            >
              Preguntar por WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
