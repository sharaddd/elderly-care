import { Home, Calendar, Stethoscope, ShieldAlert } from "lucide-react";
import { useState } from "react";
import SOSDialog from "./SOSDialog";

interface MobileBottomNavProps {
    activeTab?: string;
    onHomeClick?: () => void;
    onCalendarClick?: () => void;
    onDoctorClick?: () => void;
}

const MobileBottomNav = ({ activeTab: propActiveTab, onHomeClick, onCalendarClick, onDoctorClick }: MobileBottomNavProps) => {
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
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md pb-safe pt-2 px-6 h-[80px]">
            <div className="flex justify-between items-center h-full pb-4">
                {/* Home */}
                <button
                    onClick={() => setActiveTab("home")}
                    className={`flex flex-col items-center justify-center w-12 transition-colors ${activeTab === "home" ? "text-primary" : "text-gray-600 hover:text-gray-900"}`}
                >
                    <Home className="h-[28px] w-[28px] stroke-[2]" />
                </button>

                {/* Calendar */}
                <button
                    onClick={() => setActiveTab("calendar")}
                    className={`flex flex-col items-center justify-center w-12 transition-colors ${activeTab === "calendar" ? "text-primary" : "text-gray-600 hover:text-gray-900"}`}
                >
                    <Calendar className="h-[28px] w-[28px] stroke-[2]" />
                </button>

                {/* Vitals/Health */}
                <button
                    onClick={() => setActiveTab("health")}
                    className={`flex flex-col items-center justify-center w-12 transition-colors ${activeTab === "health" ? "text-primary" : "text-gray-600 hover:text-gray-900"}`}
                >
                    <div className="relative">
                        <Stethoscope className="h-[28px] w-[28px] stroke-[2]" />
                    </div>
                </button>

                {/* SOS */}
                <button
                    onClick={() => setIsSOSOpen(true)}
                    className="flex flex-col items-center justify-center w-12 transition-all active:scale-90"
                >
                    <div className="h-[34px] w-[34px] rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-100 ring-4 ring-red-50">
                        <span className="text-white font-[900] text-[11px] tracking-tighter uppercase leading-none">SOS</span>
                    </div>
                </button>
            </div>

            <SOSDialog open={isSOSOpen} onOpenChange={setIsSOSOpen} />
        </div>
    );
};

export default MobileBottomNav;
