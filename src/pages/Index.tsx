import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

const Index = () => {
  const [activeMobileView, setActiveMobileView] = useState<'dashboard' | 'medication' | 'insurance-claims' | 'bookings' | 'appointments' | 'profile' | 'vitals' | 'essentials' | 'consult' | 'doctor' | 'scanner' | 'sos' | 'safezone'>('dashboard');
  return (
    <div className="min-h-screen bg-[#222222] flex items-center justify-center p-0 md:p-4 overflow-hidden">
      <div className="w-full max-w-[400px] h-full md:h-[852px] bg-background relative shadow-2xl md:rounded-[40px] overflow-hidden border-0 md:border-[8px] border-gray-900 flex flex-col">
        <div className="flex-1 overflow-y-auto no-scrollbar pb-safe">
          <Navbar
            isVisible={activeMobileView === 'dashboard'}
            onProfileClick={() => setActiveMobileView('profile')}
            isMobileOnly={true}
          />
          <HeroSection
            activeMobileView={activeMobileView}
            onViewChange={setActiveMobileView}
            isMobileOnly={true}
          />

          <MobileBottomNav
            activeTab={
              activeMobileView === 'dashboard' ? 'home' :
                activeMobileView === 'bookings' ? 'calendar' :
                  activeMobileView === 'appointments' ? 'health' :
                    'other'
            }
            onHomeClick={() => setActiveMobileView('dashboard')}
            onCalendarClick={() => setActiveMobileView('bookings')}
            onDoctorClick={() => setActiveMobileView('appointments')}
            isMobileOnly={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
