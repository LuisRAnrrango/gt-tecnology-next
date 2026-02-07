import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  message: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  children?: React.ReactNode;
}

export default function WhatsAppButton({
  message,
  variant = "primary",
  className,
  children,
}: WhatsAppButtonProps) {
  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white hover:opacity-90 shadow-lg",
    secondary: "bg-[#06B6D4] text-white hover:bg-[#0891B2]",
    outline:
      "border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white",
  };

  return (
    <a
      href={WHATSAPP_LINK(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-all hover:scale-[1.02]",
        variantStyles[variant],
        className
      )}
    >
      <MessageCircle className="h-5 w-5" />
      {children || "Hablar por WhatsApp"}
    </a>
  );
}
