"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK, DEFAULT_MESSAGES } from "@/lib/constants";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK(DEFAULT_MESSAGES.home)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-2xl transition-all hover:scale-110 hover:shadow-[#25D366]/50"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
