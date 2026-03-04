import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

import MedicationSchedule from "@/components/MedicationSchedule";
import InsuranceClaimsDialog from "@/components/InsuranceClaimsDialog";
import BookingsView from "@/components/BookingsView";
import AppointmentsView from "@/components/AppointmentsView";
import ProfileView from "@/components/ProfileView";
import VitalsDashboard from "@/components/VitalsDashboard";
import VideoConsultDialog from "@/components/VideoConsultDialog";
import DailyEssentialsDialog from "@/components/DailyEssentialsDialog";
import FindDoctorDialog from "@/components/FindDoctorDialog";
import PrescriptionScanner from "@/components/PrescriptionScanner";
import SOSDialog from "@/components/SOSDialog";
import SafeZoneDialog from "@/components/SafeZoneDialog";
import MobileDashboard from "@/components/MobileDashboard";
import WalletDialog from "@/components/WalletDialog";

const Index = () => {
  const [activeMobileView, setActiveMobileView] = useState<'dashboard' | 'medication' | 'insurance-claims' | 'bookings' | 'appointments' | 'profile' | 'vitals' | 'essentials' | 'consult' | 'doctor' | 'scanner' | 'sos' | 'safezone'>('dashboard');
  const [isWalletOpen, setIsWalletOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#222222] flex items-center justify-center p-0 md:p-4 overflow-hidden">
      <div className="w-full max-w-[400px] h-[100dvh] md:h-[852px] bg-background relative shadow-2xl md:rounded-[40px] overflow-hidden border-0 md:border-[8px] border-gray-900 flex flex-col">

        {/* Sticky Navbar - Outside scrollable area */}
        {activeMobileView === 'dashboard' && (
          <Navbar
            isVisible={true}
            onProfileClick={() => setActiveMobileView('profile')}
            onWalletClick={() => setIsWalletOpen(true)}
            isMobileOnly={true}
          />
        )}

        {/* Main Content Layer - Scrollable */}
        <div className="flex-1 overflow-y-auto no-scrollbar relative">
          {activeMobileView === 'dashboard' && (
            <div className="flex flex-col">
              <HeroSection
                activeMobileView={activeMobileView}
                onViewChange={setActiveMobileView}
                isMobileOnly={true}
              />
              {/* Bottom Nav Spacer to allow scroll behind nav */}
              <div className="h-[100px] shrink-0" />
            </div>
          )}

          {/* Special case for bookings/appointments where they might want to scroll behind nav */}
          {(activeMobileView === 'bookings' || activeMobileView === 'appointments') && <div className="h-full" />}
        </div>

        {/* Global Full-Page Views (These cover everything including Navbar/BottomNav) */}
        {activeMobileView === 'medication' && (
          <MedicationSchedule onBack={() => setActiveMobileView('dashboard')} />
        )}
        {activeMobileView === 'insurance-claims' && (
          <InsuranceClaimsDialog
            open={true}
            onOpenChange={(open) => !open && setActiveMobileView('dashboard')}
            isPage={true}
          />
        )}
        {activeMobileView === 'bookings' && (
          <BookingsView onBack={() => setActiveMobileView('dashboard')} />
        )}
        {activeMobileView === 'appointments' && (
          <AppointmentsView onBack={() => setActiveMobileView('dashboard')} />
        )}
        {activeMobileView === 'profile' && (
          <ProfileView onBack={() => setActiveMobileView('dashboard')} />
        )}
        {activeMobileView === 'vitals' && (
          <VitalsDashboard open={true} onOpenChange={(open) => !open && setActiveMobileView('dashboard')} isPage={true} />
        )}
        {activeMobileView === 'essentials' && (
          <DailyEssentialsDialog open={true} onOpenChange={(open) => !open && setActiveMobileView('dashboard')} isPage={true} />
        )}
        {activeMobileView === 'consult' && (
          <VideoConsultDialog open={true} onOpenChange={(open) => !open && setActiveMobileView('dashboard')} isPage={true} />
        )}
        {activeMobileView === 'doctor' && (
          <FindDoctorDialog open={true} onOpenChange={(open) => !open && setActiveMobileView('dashboard')} isPage={true} />
        )}
        {activeMobileView === 'scanner' && (
          <PrescriptionScanner open={true} onOpenChange={(open) => !open && setActiveMobileView('dashboard')} isPage={true} />
        )}
        {activeMobileView === 'sos' && (
          <SOSDialog open={true} onOpenChange={(open) => !open && setActiveMobileView('dashboard')} isPage={true} />
        )}
        {activeMobileView === 'safezone' && (
          <SafeZoneDialog open={true} onOpenChange={(open) => !open && setActiveMobileView('dashboard')} isPage={true} />
        )}

        {/* Wallet Overlay - renders at phone container level */}
        <WalletDialog open={isWalletOpen} onOpenChange={setIsWalletOpen} />

        {/* Global Bottom Navigation (Only for specific views) */}
        {activeMobileView === 'dashboard' && (
          <MobileBottomNav
            activeTab="home"
            onHomeClick={() => setActiveMobileView('dashboard')}
            onCalendarClick={() => setActiveMobileView('bookings')}
            onDoctorClick={() => setActiveMobileView('appointments')}
            isMobileOnly={true}
          />
        )}

        {(activeMobileView === 'bookings' || activeMobileView === 'appointments') && (
          <MobileBottomNav
            activeTab={activeMobileView === 'bookings' ? 'calendar' : 'health'}
            onHomeClick={() => setActiveMobileView('dashboard')}
            onCalendarClick={() => setActiveMobileView('bookings')}
            onDoctorClick={() => setActiveMobileView('appointments')}
            isMobileOnly={true}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
