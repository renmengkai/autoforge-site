import { ParticleField } from "@/components/ParticleField";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductSection } from "@/components/ProductSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { VisionSection } from "@/components/VisionSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ParticleField />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <div className="glow-line" />
        <ProductSection />
        <div className="glow-line" />
        <FeaturesSection />
        <div className="glow-line" />
        <ProcessSection />
        <div className="glow-line" />
        <VisionSection />
        <div className="glow-line" />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
