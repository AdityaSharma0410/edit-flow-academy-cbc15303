import { HeroSection } from "@/components/hero-section";
import { CoursesSection } from "@/components/courses-section";
import { PricingSection } from "@/components/pricing-section";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <CoursesSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;