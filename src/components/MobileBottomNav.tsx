import { Home, Calendar, Stethoscope, Phone } from "lucide-react";
import { useState } from "react";

const MobileBottomNav = () => {
    const [activeTab, setActiveTab] = useState("home");

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

                {/* Call */}
                <button
                    onClick={() => setActiveTab("call")}
                    className={`flex flex-col items-center justify-center w-12 transition-colors ${activeTab === "call" ? "text-primary" : "text-gray-600 hover:text-gray-900"}`}
                >
                    <Phone className="h-[28px] w-[28px] stroke-[2]" />
                </button>
            </div>
        </div>
    );
};

export default MobileBottomNav;
