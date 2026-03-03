import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative pb-safe">
      <Navbar />
      <HeroSection />

      <div className="hidden md:block">
        <ServicesSection />
        <WhyUsSection />
        <ContactSection />
        <Footer />
      </div>

      <MobileBottomNav />
    </div>
  );
};

export default Index;
