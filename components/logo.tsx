import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Logo({ size = "md", className = "" }: LogoProps) {
  const sizes = {
    sm: {
      container: "w-10 h-10",
      image: 40,
    },
    md: {
      container: "w-12 h-12",
      image: 48,
    },
    lg: {
      container: "w-16 h-16",
      image: 64,
    },
  };

  const config = sizes[size];

  return (
    <div
      className={`${config.container} rounded-lg bg-white flex items-center justify-center flex-shrink-0 ${className}`}
    >
      <Image
        src="/logo/logogttecnology-removebg-preview.png"
        alt="GT Tecnology"
        width={config.image}
        height={config.image}
        priority
        className="object-contain"
      />
    </div>
  );
}
