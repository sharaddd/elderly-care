import { useState } from "react";
import { Search, Pill, Activity, Video, CalendarHeart, PhoneCall, Wallet, WalletMinimal } from "lucide-react";
import WalletDialog from "./WalletDialog";

declare global {
    interface Window {
        ReactNativeWebView?: {
            postMessage: (message: string) => void;
        };
    }
}

interface MobileDashboardProps {
    onNavigateToMedication?: () => void;
}

const MobileDashboard = ({ onNavigateToMedication }: MobileDashboardProps) => {
    const [isWalletOpen, setIsWalletOpen] = useState(false);

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
        <div className="w-full h-full flex flex-col mx-auto px-4 gap-[22px] pt-24 pb-32">
            {/* Search Bar */}
            <div className="flex items-center gap-3">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search your needs.."
                        className="w-full bg-[#f4f4f4] border border-gray-200 rounded-[14px] h-[52px] pl-[46px] pr-4 text-gray-900 placeholder:text-gray-500 outline-none focus:bg-[#ebebeb] transition-all text-[15px] font-medium shadow-sm"
                    />
                </div>
                <button
                    onClick={() => setIsWalletOpen(true)}
                    className="h-[52px] w-[52px] bg-gradient-to-tr from-indigo-50 to-white border border-indigo-100 rounded-[14px] flex items-center justify-center text-indigo-600 hover:bg-white transition-all shadow-md shadow-indigo-100/50 active:scale-95 group ml-1"
                >
                    <WalletMinimal className="h-7 w-7 group-hover:scale-110 transition-transform stroke-[2]" />
                </button>
            </div>

            {/* Wallet Dialog Integration */}
            <WalletDialog open={isWalletOpen} onOpenChange={setIsWalletOpen} />

            {/* Ongoing Appointment */}
            <div className="flex flex-col gap-2">
                <span className="text-gray-700 text-[13px] font-medium pl-1 tracking-wide">ongoing appointment</span>
                <div className="bg-[#f2f2f2] border border-gray-200 rounded-[20px] p-[18px] flex justify-between items-center shadow-sm">
                    <div className="flex flex-col gap-3">
                        <p className="text-gray-900 text-[15px] font-semibold tracking-wide leading-snug max-w-[200px]">
                            Mr Rahul Deshpande is at your home..
                        </p>
                        <div>
                            <span className="bg-white border border-gray-200 text-gray-900 text-[11px] font-bold px-[10px] py-[6px] rounded-[8px] shadow-sm tracking-wide">
                                everyday needs
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-[6px] cursor-pointer hover:opacity-80 transition-opacity">
                        <div className="h-[52px] w-[52px] rounded-full border-[2.5px] border-gray-900 flex items-center justify-center">
                            <span className="text-gray-900 font-bold text-[18px]">SOS</span>
                        </div>
                        <span className="text-gray-800 text-[10px] font-medium tracking-wide">need help?</span>
                    </div>
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
                        <span className="text-gray-900 text-[13.5px] font-bold leading-tight tracking-tight">
                            Today's
                        </span>
                        <span className="text-gray-900 text-[13.5px] font-bold leading-tight tracking-tight">
                            Medication
                        </span>
                    </div>

                    {/* Subtle micro-glow in blue */}
                    <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-blue-100/30 rounded-full blur-2xl group-hover:bg-blue-200/40 transition-colors" />
                </div>

                {/* Card 2 */}
                <div className="bg-[#e9e9e9] border border-transparent rounded-[18px] aspect-[4/5] p-3.5 flex flex-col justify-end hover:bg-[#dfdfdf] transition-all cursor-pointer group">
                    <Activity className="h-[22px] w-[22px] text-gray-700 mb-auto group-hover:scale-110 transition-transform" />
                    <span className="text-gray-900 text-[13px] font-medium leading-snug tracking-wide">vitals<br />dashboard</span>
                </div>

                {/* Card 3 */}
                <div className="bg-[#e9e9e9] border border-transparent rounded-[18px] aspect-[4/5] p-3.5 flex flex-col justify-end hover:bg-[#dfdfdf] transition-all cursor-pointer group">
                    <Video className="h-[22px] w-[22px] text-gray-700 mb-auto group-hover:scale-110 transition-transform" />
                    <span className="text-gray-900 text-[13px] font-medium leading-snug tracking-wide">video<br />consultation</span>
                </div>
            </div>

            <div className="h-px w-full bg-gray-200 my-1" />

            {/* 2 Columns Grid */}
            <div className="grid grid-cols-2 gap-[10px]">
                {/* Card 1 */}
                <div className="bg-[#e9e9e9] border border-transparent rounded-[18px] aspect-[4/3] p-[18px] flex flex-col justify-end hover:bg-[#dfdfdf] transition-all cursor-pointer group">
                    <CalendarHeart className="h-[24px] w-[24px] text-gray-700 mb-auto group-hover:scale-110 transition-transform" />
                    <span className="text-gray-900 text-[14px] font-medium leading-snug tracking-wide">everyday needs</span>
                </div>

                {/* Card 2 */}
                <div className="bg-[#e9e9e9] border border-transparent rounded-[18px] aspect-[4/3] p-[18px] flex flex-col justify-end hover:bg-[#dfdfdf] transition-all cursor-pointer group">
                    <PhoneCall className="h-[24px] w-[24px] text-gray-700 mb-auto group-hover:scale-110 transition-transform" />
                    <span className="text-gray-900 text-[14px] font-medium leading-snug tracking-wide">critical care<br />appointment</span>
                </div>
            </div>

            {/* 6 Grid Pills */}
            <div className="grid grid-cols-2 gap-[10px]">
                <button className="bg-[#e9e9e9] border border-transparent rounded-[14px] h-[52px] flex items-center justify-center hover:bg-[#dfdfdf] transition-all group">
                    <span className="text-gray-800 text-[14px] font-medium tracking-wide">prescription scan</span>
                </button>
                <button className="bg-[#e9e9e9] border border-transparent rounded-[14px] h-[52px] flex items-center justify-center hover:bg-[#dfdfdf] transition-all group">
                    <span className="text-gray-800 text-[14px] font-medium tracking-wide">community</span>
                </button>
                <button
                    onClick={triggerAppointmentNotification}
                    className="bg-[#e9e9e9] border border-transparent rounded-[14px] h-[52px] flex items-center justify-center hover:bg-[#dfdfdf] transition-all group"
                >
                    <span className="text-gray-800 text-[14px] font-medium tracking-wide">insurance claims</span>
                </button>
                <button className="bg-[#e9e9e9] border border-transparent rounded-[14px] h-[52px] flex items-center justify-center hover:bg-[#dfdfdf] transition-all group">
                    <span className="text-gray-800 text-[14px] font-medium tracking-wide">timeline</span>
                </button>
                <button className="bg-[#e9e9e9] border border-transparent rounded-[14px] h-[52px] flex items-center justify-center hover:bg-[#dfdfdf] transition-all group">
                    <span className="text-gray-800 text-[14px] font-medium tracking-wide">meal planning</span>
                </button>
                <button className="bg-[#e9e9e9] border border-transparent rounded-[14px] h-[52px] flex items-center justify-center hover:bg-[#dfdfdf] transition-all group">
                    <span className="text-gray-800 text-[14px] font-medium tracking-wide">safe zone</span>
                </button>
            </div>
        </div>
    );
};

export default MobileDashboard;
