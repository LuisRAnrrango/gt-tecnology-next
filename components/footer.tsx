import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Logo from "./logo";
import { NAP, PHONE_LINK, WHATSAPP_LINK, DEFAULT_MESSAGES } from "@/lib/constants";

const footerLinks = {
  servicios: [
    { label: "Mantenimiento PC", href: "#servicios" },
    { label: "Desarrollo Web", href: "#servicios" },
    { label: "Software a Medida", href: "#servicios" },
    { label: "Streaming", href: "#servicios" },
  ],
  empresa: [
    { label: "Por qué GT", href: "#por-que-gt" },
    { label: "Portafolio", href: "#portafolio" },
    { label: "Blog", href: "#blog" },
    { label: "Planes y Precios", href: "#planes" },
  ],
  legal: [
    { label: "Política de Privacidad", href: "#" },
    { label: "Términos y Condiciones", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer id="contacto" className="relative bg-[#0B1220] border-t border-[#2563EB]/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-3 w-fit">
              <Logo size="md" />
              <div className="hidden sm:block">
                <span className="text-2xl font-bold text-white">GT</span>
                <span className="text-2xl font-bold text-[#06B6D4]">TECNOLOGY</span>
              </div>
            </Link>
            <p className="mb-6 text-sm text-[#94A3B8] leading-relaxed">
              Tecnología humana que te responde hoy. Sitios web rápidos, seguros y listos para vender.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1BxTpGdtiH/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2563EB]/20 text-[#06B6D4] transition-all hover:bg-[#2563EB]/40 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1BxTpGdtiH/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2563EB]/20 text-[#06B6D4] transition-all hover:bg-[#2563EB]/40 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1BxTpGdtiH/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2563EB]/20 text-[#06B6D4] transition-all hover:bg-[#2563EB]/40 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Servicios</h3>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#94A3B8] hover:text-[#06B6D4] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#94A3B8] hover:text-[#06B6D4] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-[#94A3B8]">
                <MapPin className="h-5 w-5 flex-shrink-0 text-[#06B6D4] mt-0.5" />
                <span>{NAP.address}</span>
              </li>
              <li>
                <a
                  href={PHONE_LINK}
                  className="flex items-start gap-3 text-sm text-[#94A3B8] hover:text-[#06B6D4] transition-colors"
                >
                  <Phone className="h-5 w-5 flex-shrink-0 text-[#06B6D4] mt-0.5" />
                  <span>{NAP.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${NAP.email}`}
                  className="flex items-start gap-3 text-sm text-[#94A3B8] hover:text-[#06B6D4] transition-colors"
                >
                  <Mail className="h-5 w-5 flex-shrink-0 text-[#06B6D4] mt-0.5" />
                  <span>{NAP.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#94A3B8]">
                <Clock className="h-5 w-5 flex-shrink-0 text-[#06B6D4] mt-0.5" />
                <span>{NAP.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2563EB]/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-[#94A3B8]">
  © {new Date().getFullYear()} GT TECNOLOGY. Todos los derechos reservados.
</p>

            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#94A3B8] hover:text-[#06B6D4] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: NAP.name,
            url: "https://gttecnology.com",
            telephone: `+${NAP.whatsapp}`,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Pimampiro",
              addressCountry: "EC",
            },
            sameAs: [
              "https://facebook.com/gttecnology",
              "https://instagram.com/gttecnology",
            ],
          }),
        }}
      />
    </footer>
  );
}
