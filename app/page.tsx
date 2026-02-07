import Navbar from "@/components/navbar";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import HeroSection from "@/components/sections/hero";
import WhyGTSection from "@/components/sections/why-gt";
import ServicesSection from "@/components/sections/services";
import PricingSection from "@/components/sections/pricing";
import TrustSection from "@/components/sections/trust";
import PortfolioSection from "@/components/sections/portfolio";
import BlogSection from "@/components/sections/blog";
import CTAFinalSection from "@/components/sections/cta-final";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyGTSection />
      <ServicesSection />
      <PricingSection />
      <TrustSection />
      <PortfolioSection />
      <BlogSection />
      <CTAFinalSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
