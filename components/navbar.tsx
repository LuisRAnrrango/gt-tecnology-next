"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import WhatsAppButton from "./whatsapp-button";
import Logo from "./logo";
import { DEFAULT_MESSAGES } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Inicio", matchPath: "/" },
  { href: "/servicios", label: "Servicios", matchPath: "/servicios" },
  { href: "/planes", label: "Planes", matchPath: "/planes" },
  { href: "/por-que-gt", label: "Por qué GT", matchPath: "/por-que-gt" },
  { href: "/portafolio", label: "Portafolio", matchPath: "/portafolio" },
  { href: "/blog", label: "Blog", matchPath: "/blog" },
  { href: "/contacto", label: "Contacto", matchPath: "/contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (link: typeof navLinks[0]) => {
    if (link.matchPath === "/") {
      return pathname === "/" && !link.href.includes("#");
    }
    return pathname === link.matchPath;
  };

  return (
    <nav
      className={cn(
        "fixed top-0 z-40 w-full transition-all duration-300 bg-[#0B1220]/95 backdrop-blur-lg shadow-lg border-b border-[#2563EB]/20"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <Logo size="md" />
              <span className="hidden sm:inline-block">
                <span className="text-2xl font-bold text-white">GT</span>
                <span className="text-2xl font-bold text-[#06B6D4]">
                  TECNOLOGY
                </span>
              </span>
            </Link>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const active = isActive(link);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative",
                    active
                      ? "text-[#06B6D4]"
                      : "text-[#94A3B8] hover:text-[#06B6D4]"
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-gradient-to-r from-[#2563EB] to-[#06B6D4]"></span>
                  )}
                </Link>
              );
            })}
            <WhatsAppButton
              message={DEFAULT_MESSAGES.home}
              variant="primary"
              className="text-sm"
            >
              WhatsApp
            </WhatsAppButton>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0B1220]/98 backdrop-blur-lg border-t border-[#2563EB]/20">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navLinks.map((link) => {
              const active = isActive(link);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-2 text-base font-medium transition-colors",
                    active
                      ? "bg-[#2563EB]/20 text-[#06B6D4]"
                      : "text-[#94A3B8] hover:bg-[#2563EB]/10 hover:text-[#06B6D4]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2">
              <WhatsAppButton
                message={DEFAULT_MESSAGES.home}
                variant="primary"
                className="w-full justify-center"
              >
                WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
