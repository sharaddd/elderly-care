import { Home, Calendar, Stethoscope, ShieldAlert } from "lucide-react";
import { useState } from "react";
import SOSDialog from "./SOSDialog";

interface MobileBottomNavProps {
    activeTab?: string;
    onHomeClick?: () => void;
    onCalendarClick?: () => void;
    onDoctorClick?: () => void;
    isMobileOnly?: boolean;
}

const MobileBottomNav = ({ activeTab: propActiveTab, onHomeClick, onCalendarClick, onDoctorClick, isMobileOnly = false }: MobileBottomNavProps) => {
    const [localActiveTab, setLocalActiveTab] = useState("home");
    const [isSOSOpen, setIsSOSOpen] = useState(false);
    const activeTab = propActiveTab || localActiveTab;

    const setActiveTab = (tab: string) => {
        if (tab === 'home' && onHomeClick) {
            onHomeClick();
        } else if (tab === 'calendar' && onCalendarClick) {
            onCalendarClick();
        } else if (tab === 'health' && onDoctorClick) {
            onDoctorClick();
        }
        setLocalActiveTab(tab);
    };

    return (
        <div className={`${isMobileOnly ? "" : "md:hidden"} ${isMobileOnly ? "absolute" : "fixed"} bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md pb-safe pt-2 px-6 h-[80px]`}>
            <div className="flex justify-between items-center h-full pb-4">
                {/* Home */}
                <button
                    onClick={() => setActiveTab("home")}
                    className={`flex flex-col items-center justify-center transition-colors ${activeTab === "home" ? "text-primary font-black" : "text-gray-500 font-bold"}`}
                >
                    <Home className={`h-[24px] w-[24px] ${activeTab === "home" ? "stroke-[2.5]" : "stroke-[2]"}`} />
                    <span className="text-[10px] mt-1 tracking-tight">Home</span>
                </button>

                {/* Calendar */}
                <button
                    onClick={() => setActiveTab("calendar")}
                    className={`flex flex-col items-center justify-center transition-colors ${activeTab === "calendar" ? "text-primary font-black" : "text-gray-500 font-bold"}`}
                >
                    <Calendar className={`h-[24px] w-[24px] ${activeTab === "calendar" ? "stroke-[2.5]" : "stroke-[2]"}`} />
                    <span className="text-[10px] mt-1 tracking-tight">Bookings</span>
                </button>

                {/* Vitals/Health */}
                <button
                    onClick={() => setActiveTab("health")}
                    className={`flex flex-col items-center justify-center transition-colors ${activeTab === "health" ? "text-primary font-black" : "text-gray-500 font-bold"}`}
                >
                    <Stethoscope className={`h-[24px] w-[24px] ${activeTab === "health" ? "stroke-[2.5]" : "stroke-[2]"}`} />
                    <span className="text-[10px] mt-1 tracking-tight">Appointments</span>
                </button>

                {/* SOS */}
                <button
                    onClick={() => setIsSOSOpen(true)}
                    className="flex flex-col items-center justify-center transition-all active:scale-90"
                >
                    <div className="h-[28px] w-[28px] rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-100 ring-2 ring-red-50">
                        <ShieldAlert className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-[10px] mt-1 font-black text-red-600 tracking-tight">SOS</span>
                </button>
            </div>

            <SOSDialog open={isSOSOpen} onOpenChange={setIsSOSOpen} />
        </div>
    );
};

export default MobileBottomNav;
