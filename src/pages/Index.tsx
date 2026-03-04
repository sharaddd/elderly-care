import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

const Index = () => {
  const [activeMobileView, setActiveMobileView] = useState<'dashboard' | 'medication'>('dashboard');

  return (
    <div className="min-h-screen bg-background relative pb-safe">
      <Navbar isVisible={activeMobileView === 'dashboard'} />
      <HeroSection
        activeMobileView={activeMobileView}
        onViewChange={setActiveMobileView}
      />

      <div className="hidden md:block">
        <ServicesSection />
        <WhyUsSection />
        <ContactSection />
        <Footer />
      </div>

      <MobileBottomNav
        activeTab={activeMobileView === 'dashboard' ? 'home' : 'other'}
        onHomeClick={() => setActiveMobileView('dashboard')}
      />
    </div>
  );
};

export default Index;
