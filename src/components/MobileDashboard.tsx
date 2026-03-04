import { useState, useRef } from "react";
import { Search, Pill, Activity, Video, CalendarHeart, PhoneCall, Wallet, WalletMinimal, Heart, Droplets, ShoppingCart, Wrench, Stethoscope, ArrowUpRight, MapPin, Scan, ShieldCheck, FileCheck } from "lucide-react";
import WalletDialog from "./WalletDialog";
import VitalsDashboard from "./VitalsDashboard";
import VideoConsultDialog from "./VideoConsultDialog";
import DailyEssentialsDialog from "./DailyEssentialsDialog";
import FindDoctorDialog from "./FindDoctorDialog";
import PrescriptionScanner from "./PrescriptionScanner";
import SOSDialog from "./SOSDialog";
import SafeZoneDialog from "./SafeZoneDialog";
import InsuranceClaimsDialog from "./InsuranceClaimsDialog";

declare global {
    interface Window {
        ReactNativeWebView?: {
            postMessage: (message: string) => void;
        };
    }
}

interface MobileDashboardProps {
    onNavigateToMedication?: () => void;
    onNavigateToInsurance?: () => void;
    onNavigateToVitals?: () => void;
    onNavigateToEssentials?: () => void;
    onNavigateToConsult?: () => void;
    onNavigateToDoctor?: () => void;
    onNavigateToScanner?: () => void;
    onNavigateToSOS?: () => void;
    onNavigateToSafeZone?: () => void;
}

const MobileDashboard = ({
    onNavigateToMedication,
    onNavigateToInsurance,
    onNavigateToVitals,
    onNavigateToEssentials,
    onNavigateToConsult,
    onNavigateToDoctor,
    onNavigateToScanner,
    onNavigateToSOS,
    onNavigateToSafeZone
}: MobileDashboardProps) => {
    const [isWalletOpen, setIsWalletOpen] = useState(false);
    const [isVitalsOpen, setIsVitalsOpen] = useState(false);
    const [isVideoConsultOpen, setIsVideoConsultOpen] = useState(false);
    const [isDailyEssentialsOpen, setIsDailyEssentialsOpen] = useState(false);
    const [isFindDoctorOpen, setIsFindDoctorOpen] = useState(false);
    const [isScannerOpen, setIsScannerOpen] = useState(false);
    const [isSOSOpen, setIsSOSOpen] = useState(false);
    const [isSafeZoneOpen, setIsSafeZoneOpen] = useState(false);

    const [currentBookingIndex, setCurrentBookingIndex] = useState(0);

    const bookings = [
        {
            id: 1,
            title: "Mr. Rahul Sharma is at your home..",
            subtitle: "Physiotherapy session",
            partner: "Wellness Co",
            color: "#0ea5e9",
            badge: "everyday needs"
        },
        {
            id: 2,
            title: "Order arriving in 8 mins",
            subtitle: "Daily essentials & groceries",
            partner: "Blinkit",
            color: "#facc15",
            badge: "delivery"
        }
    ];

    const nextBooking = () => setCurrentBookingIndex((prev) => (prev + 1) % bookings.length);
    const prevBooking = () => setCurrentBookingIndex((prev) => (prev - 1 + bookings.length) % bookings.length);

    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        const distance = touchStartX.current - touchEndX.current;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) nextBooking();
        if (isRightSwipe) prevBooking();

        // Reset
        touchStartX.current = 0;
        touchEndX.current = 0;
    };

    const triggerMedicationNotification = () => {
        // Navigate to the schedule view
        if (onNavigateToMedication) {
            onNavigateToMedication();
        }
    };

    const triggerAppointmentNotification = () => {
        if (window.ReactNativeWebView) {
            window.ReactNativeWebView.postMessage('TRIGGER_APPOINTMENT_NOTIFICATION');
        } else {
            alert('Simulation: Doctor Appointment notification sent to device');
        }
    };

    return (
        <div className="w-full h-full flex flex-col mx-auto px-4 gap-4 pt-[128px] pb-32">

            {/* Personalized Greeting - Scrolls up */}
            <div className="flex flex-col gap-1.5 px-1 mb-2 animate-in fade-in slide-in-from-top-4 duration-700">
                <div className="flex items-center gap-2">
                    <h1 className="text-[26px] font-black text-gray-900 tracking-tight leading-tight">
                        Good Evening, <br />
                        <span className="text-gray-900/40">Mr. Sharma</span>
                    </h1>
                </div>
            </div>

            {/* Dialog Integrations */}
            <VitalsDashboard open={isVitalsOpen} onOpenChange={setIsVitalsOpen} />
            <VideoConsultDialog open={isVideoConsultOpen} onOpenChange={setIsVideoConsultOpen} />
            <DailyEssentialsDialog open={isDailyEssentialsOpen} onOpenChange={setIsDailyEssentialsOpen} />
            <FindDoctorDialog open={isFindDoctorOpen} onOpenChange={setIsFindDoctorOpen} />
            <PrescriptionScanner open={isScannerOpen} onOpenChange={setIsScannerOpen} />
            <SOSDialog open={isSOSOpen} onOpenChange={setIsSOSOpen} />
            <SafeZoneDialog open={isSafeZoneOpen} onOpenChange={setIsSafeZoneOpen} />

            {/* Ongoing Bookings Stack */}
            <div className="flex flex-col gap-2 relative">
                <div className="flex items-center justify-between px-1">
                    <span className="text-gray-700 text-[13px] font-bold uppercase tracking-wider">ongoing bookings</span>
                    <div className="flex gap-1">
                        {bookings.map((_, i) => (
                            <div key={i} className={`h-1 w-3 rounded-full transition-all ${i === currentBookingIndex ? "bg-indigo-600 w-6" : "bg-gray-200"}`} />
                        ))}
                    </div>
                </div>

                <div
                    className="relative h-[120px]"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {bookings.map((booking, index) => {
                        const isCurrent = index === currentBookingIndex;
                        const isNext = index === (currentBookingIndex + 1) % bookings.length;
                        const isPrev = index === (currentBookingIndex - 1 + bookings.length) % bookings.length;

                        return (
                            <div
                                key={booking.id}
                                onClick={nextBooking}
                                className={`absolute inset-0 bg-white border border-gray-100 rounded-[24px] p-5 flex justify-between items-center shadow-sm transition-all duration-500 cursor-pointer ${isCurrent ? "translate-x-0 translate-y-0 opacity-100 z-20 scale-100" :
                                    isNext ? "translate-x-3 translate-y-3 opacity-40 z-10 scale-[0.95] rotate-1" :
                                        isPrev ? "-translate-x-3 -translate-y-3 opacity-0 z-0 scale-[0.95] -rotate-1" :
                                            "opacity-0 pointer-events-none"
                                    }`}
                            >
                                <div className="flex flex-col gap-2 flex-1">
                                    <h3 className="text-gray-900 text-[16px] font-black tracking-tight leading-tight max-w-[180px]">
                                        {booking.title}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <div className="px-2 py-0.5 rounded-md border border-gray-100 bg-gray-50/50">
                                            <span className="text-[10px] font-black text-gray-400 tracking-tighter uppercase">{booking.subtitle}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: booking.color }} />
                                            <span className="text-[11px] font-black uppercase tracking-tighter" style={{ color: booking.color }}>{booking.partner}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="h-12 w-12 rounded-full border border-gray-100 bg-gray-50 flex items-center justify-center shrink-0">
                                    <ArrowUpRight className="h-5 w-5 text-gray-400" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* 3 Columns Grid */}
            <div className="grid grid-cols-3 gap-[10px]">
                {/* Card 1: Today's Medication */}
                <div
                    onClick={triggerMedicationNotification}
                    className="relative bg-white border border-gray-100 rounded-[22px] aspect-[4/5] p-4 flex flex-col justify-between hover:bg-gray-50 transition-all cursor-pointer group overflow-hidden shadow-sm"
                >
                    {/* Pending Indicator Badge - Fixed position and alert color */}
                    <div className="absolute top-0 right-0 z-20">
                        <div className="bg-[#ff5a5a] text-white text-[9.5px] font-black px-2.5 py-1.5 rounded-bl-[14px] shadow-sm flex items-center gap-1.5">
                            <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
                            2 PENDING
                        </div>
                    </div>

                    {/* Icon Container with top margin to avoid badge overlap */}
                    <div className="mt-5 bg-indigo-50 h-11 w-11 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Pill className="h-[24px] w-[24px] text-indigo-600 drop-shadow-sm" />
                    </div>

                    <div className="flex flex-col gap-0.5 mt-2">
                        <span className="text-gray-900 text-[12.5px] font-black leading-tight tracking-tighter uppercase">
                            TODAY'S<br />MEDICATION
                        </span>
                    </div>

                    {/* Subtle micro-glow in blue */}
                    <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-blue-100/30 rounded-full blur-2xl group-hover:bg-blue-200/40 transition-colors" />
                </div>

                <div
                    onClick={onNavigateToVitals}
                    className="bg-white border border-gray-100 rounded-[22px] aspect-[4/5] p-4 flex flex-col justify-between hover:shadow-lg transition-all cursor-pointer group shadow-sm relative overflow-hidden active:scale-95"
                >
                    <div className="flex justify-between items-start">
                        <div className="bg-indigo-50 h-11 w-11 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm border border-indigo-100/30">
                            <Activity className="h-[24px] w-[24px] text-indigo-600 stroke-[2.5]" />
                        </div>
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse mt-2" />
                    </div>

                    <div className="flex flex-col gap-2.5">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-1.5">
                                <Heart className="h-3 w-3 text-red-500 fill-red-500" />
                                <span className="text-[14px] font-black text-gray-900 tracking-tight">87<span className="text-[10px] font-bold text-gray-400 ml-0.5">BPM</span></span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Droplets className="h-3 w-3 text-blue-500 fill-blue-500" />
                                <span className="text-[14px] font-black text-gray-900 tracking-tight">98<span className="text-[10px] font-bold text-gray-400 ml-0.5">%</span></span>
                            </div>
                        </div>

                        <span className="text-gray-900 text-[12px] font-black leading-tight tracking-tighter uppercase">VITALS<br />DASHBOARD</span>
                    </div>

                    {/* Gradient overlay for premium feel */}
                    <div className="absolute top-0 right-0 w-12 h-12 bg-indigo-50/30 rounded-full -mr-4 -mt-4 blur-xl" />
                </div>

                <div
                    onClick={onNavigateToConsult}
                    className="bg-white border border-gray-100 rounded-[22px] aspect-[4/5] p-4 flex flex-col justify-between hover:shadow-lg transition-all cursor-pointer group shadow-sm relative overflow-hidden active:scale-95"
                >
                    <div className="bg-emerald-50 h-11 w-11 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm border border-emerald-100/30">
                        <Video className="h-[24px] w-[24px] text-emerald-600 stroke-[2.5]" />
                    </div>

                    <span className="text-gray-900 text-[12px] font-black text-left leading-tight tracking-tighter uppercase">VIDEO<br />CONSULTATION</span>

                    {/* Gradient overlay for premium feel */}
                    <div className="absolute top-0 right-0 w-12 h-12 bg-emerald-50/30 rounded-full -mr-4 -mt-4 blur-xl" />
                </div>
            </div>

            <div className="h-px w-full bg-gray-200 my-1" />

            {/* 2 Columns Grid */}
            <div className="grid grid-cols-2 gap-[10px]">
                <div
                    onClick={onNavigateToEssentials}
                    className="bg-white border border-gray-100 rounded-[22px] aspect-[4/3] p-4 flex flex-col justify-between hover:shadow-lg transition-all cursor-pointer group shadow-sm relative overflow-hidden active:scale-95"
                >
                    <div className="flex justify-between items-start">
                        <div className="bg-orange-50 h-10 w-10 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-sm border border-orange-100/30">
                            <CalendarHeart className="h-[22px] w-[22px] text-orange-600 stroke-[2.5]" />
                        </div>
                        <div className="px-2.5 py-1 bg-orange-100/50 rounded-full border border-orange-100/50">
                            <span className="text-[9px] font-black text-orange-600 uppercase tracking-tighter">7 SERVICES</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2.5 px-0.5">
                            <ShoppingCart className="h-3.5 w-3.5 text-gray-300 group-hover:text-orange-400 transition-colors" />
                            <Pill className="h-3.5 w-3.5 text-gray-300 group-hover:text-orange-400 transition-colors" />
                            <Wrench className="h-3.5 w-3.5 text-gray-300 group-hover:text-orange-400 transition-colors" />
                        </div>
                        <span className="text-gray-900 text-[13.5px] font-bold leading-none tracking-tight uppercase">Daily<br />essentials</span>
                    </div>

                    {/* Decorative glow */}
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-orange-50/40 rounded-full blur-xl" />
                </div>

                <div
                    onClick={onNavigateToDoctor}
                    className="bg-white border border-gray-100 rounded-[22px] aspect-[4/3] p-4 flex flex-col justify-between hover:shadow-lg transition-all cursor-pointer group shadow-sm relative overflow-hidden active:scale-95"
                >
                    <div className="flex justify-between items-start">
                        <div className="bg-blue-50 h-10 w-10 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-sm border border-blue-100/30">
                            <Stethoscope className="h-[22px] w-[22px] text-blue-600 stroke-[2.5]" />
                        </div>
                        <div className="px-2.5 py-1 bg-blue-100/50 rounded-full border border-blue-100/50 flex items-center gap-1">
                            <span className="text-[9px] font-black text-blue-600 uppercase tracking-tighter">BOOK NOW</span>
                            <ArrowUpRight className="h-2 w-2 text-blue-600" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2.5 px-0.5">
                            <MapPin className="h-3.5 w-3.5 text-gray-300 group-hover:text-blue-400 transition-colors" />
                            <PhoneCall className="h-3.5 w-3.5 text-gray-300 group-hover:text-blue-400 transition-colors" />
                        </div>
                        <span className="text-gray-900 text-[13.5px] font-bold leading-none tracking-tight uppercase">Critical Care<br />appointment</span>
                    </div>

                    {/* Decorative glow */}
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-50/40 rounded-full blur-xl" />
                </div>
            </div>

            {/* 6 Grid Pills */}
            <div className="grid grid-cols-2 gap-[10px]">
                <button
                    onClick={onNavigateToScanner}
                    className="relative bg-white border border-indigo-100 rounded-[18px] h-[64px] flex items-center px-4 gap-3 shadow-sm hover:shadow-md transition-all active:scale-95 group overflow-hidden"
                >
                    <div className="bg-indigo-50 h-10 w-10 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
                        <Scan className="h-5 w-5 text-indigo-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex flex-col items-start overflow-hidden">
                        <div className="flex items-center gap-1.5">
                            <span className="text-gray-900 text-[12px] font-black tracking-tighter uppercase whitespace-nowrap">Prescription</span>
                            <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
                        </div>
                        <span className="text-indigo-600 text-[10px] font-black uppercase tracking-widest leading-none">SCANNER</span>
                    </div>

                    {/* Decorative Background Layer */}
                    <div className="absolute -right-4 -top-8 w-16 h-16 bg-indigo-50/40 rounded-full blur-2xl group-hover:bg-indigo-100 transition-colors" />
                </button>
                <button
                    onClick={onNavigateToSafeZone}
                    className="relative bg-white border border-emerald-100 rounded-[18px] h-[64px] flex items-center px-4 gap-3 shadow-sm hover:shadow-md transition-all active:scale-95 group overflow-hidden"
                >
                    <div className="bg-emerald-50 h-10 w-10 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300">
                        <ShieldCheck className="h-5 w-5 text-emerald-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex flex-col items-start overflow-hidden">
                        <div className="flex items-center gap-1.5">
                            <span className="text-gray-900 text-[12px] font-black tracking-tighter uppercase whitespace-nowrap">Safe Zone</span>
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        </div>
                        <span className="text-emerald-600 text-[10px] font-black uppercase tracking-widest leading-none">FAMILY GUARD</span>
                    </div>

                    {/* Decorative Background Layer */}
                    <div className="absolute -right-4 -top-8 w-16 h-16 bg-emerald-50/40 rounded-full blur-2xl group-hover:bg-emerald-100 transition-colors" />
                </button>
                <button
                    onClick={onNavigateToInsurance}
                    className="relative bg-white border border-slate-100 rounded-[18px] h-[64px] flex items-center px-4 gap-3 shadow-sm hover:shadow-md transition-all active:scale-95 group overflow-hidden"
                >
                    <div className="bg-slate-50 h-10 w-10 rounded-xl flex items-center justify-center group-hover:bg-slate-600 transition-colors duration-300">
                        <FileCheck className="h-5 w-5 text-slate-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex flex-col items-start overflow-hidden">
                        <div className="flex items-center gap-1.5">
                            <span className="text-gray-900 text-[12px] font-black tracking-tighter uppercase whitespace-nowrap">Claims</span>
                            <div className="h-1.5 w-1.5 rounded-full bg-slate-500 animate-pulse" />
                        </div>
                        <span className="text-slate-600 text-[10px] font-black uppercase tracking-widest leading-none">INSURANCE</span>
                    </div>

                    {/* Decorative Background Layer */}
                    <div className="absolute -right-4 -top-8 w-16 h-16 bg-slate-50/40 rounded-full blur-2xl group-hover:bg-slate-100 transition-colors" />
                </button>
            </div>
        </div>
    );
};

export default MobileDashboard;
