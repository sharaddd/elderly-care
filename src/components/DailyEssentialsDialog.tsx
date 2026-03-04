import { useState } from "react";
import {
    ArrowLeft,
    HelpCircle,
    ShoppingCart,
    Pill,
    Accessibility,
    HeartHandshake,
    Wrench,
    Laptop,
    Sparkles,
    ChevronRight,
    Search,
    History
} from "lucide-react";
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";

interface EssentialItemProps {
    icon: any;
    title: string;
    description: string;
    color: string;
    partner?: {
        name: string;
        color: string;
    };
}

const EssentialItem = ({ icon: Icon, title, description, color, partner }: EssentialItemProps) => (
    <div className="bg-white rounded-[24px] p-4 shadow-sm border border-gray-50 flex items-center justify-between transition-all hover:shadow-md active:scale-[0.98] group cursor-pointer">
        <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className={`h-12 w-12 rounded-2xl flex-shrink-0 flex items-center justify-center`} style={{ backgroundColor: `${color}15` }}>
                <Icon className="h-6 w-6" style={{ color: color }} />
            </div>
            <div className="flex flex-col flex-1 min-w-0">
                <h4 className="text-[15px] font-black text-gray-900 tracking-tight truncate">{title}</h4>
                <p className="text-[12px] font-bold text-gray-400 truncate">{description}</p>
            </div>
        </div>

        {partner ? (
            <div
                className={`px-2.5 py-1.5 rounded-xl border shadow-sm ml-2 flex items-center justify-center`}
                style={{
                    backgroundColor: partner.name === "wellness" ? "#ffffff" : partner.color,
                    borderColor: partner.name === "blinkit" ? "#fde047" : partner.name === "1mg" ? "#ff5a5a" : partner.name === "uc" ? "#1a1a1a" : "#269499"
                }}
            >
                {partner.name === "blinkit" ? (
                    <div className="flex items-center text-[11px] font-[900] tracking-tighter">
                        <span className="text-black">blink</span>
                        <span className="text-[#10b981]">it</span>
                    </div>
                ) : partner.name === "1mg" ? (
                    <div className="flex flex-col items-center leading-[0.8] tracking-tighter">
                        <span className="text-black text-[7px] font-black uppercase">Tata</span>
                        <span className="text-black text-[12px] font-black underline decoration-2 underline-offset-1">1mg</span>
                    </div>
                ) : partner.name === "wellness" ? (
                    <div className="flex items-center text-[8px] font-black tracking-tighter text-[#269499] uppercase whitespace-nowrap">
                        The Wellness Co.
                    </div>
                ) : (
                    <div className="flex items-center gap-1.5">
                        <div className="bg-white rounded h-3.5 w-3.5 flex items-center justify-center">
                            <span className="text-black text-[7px] font-black uppercase tracking-tighter">UC</span>
                        </div>
                        <span className="text-white text-[9px] font-black tracking-tighter">Urban Company</span>
                    </div>
                )}
            </div>
        ) : (
            <div className="bg-gray-50 h-8 w-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                <ChevronRight className="h-4 w-4 text-gray-400" />
            </div>
        )}
    </div>
);

interface DailyEssentialsDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    isPage?: boolean;
}

const DailyEssentialsDialog = ({ open, onOpenChange, isPage = false }: DailyEssentialsDialogProps) => {
    return (
        <div className={`w-full h-full bg-[#fafafa] flex flex-col absolute inset-0 left-0 top-0 z-[60] duration-300 animate-in slide-in-from-right-full shadow-2xl overflow-hidden`}>

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 bg-white border-b border-gray-100 sticky top-0 z-20">
                <button onClick={() => onOpenChange(false)} className="hover:bg-gray-100 p-2 rounded-full transition-colors active:scale-90">
                    <ArrowLeft className="h-6 w-6 text-gray-800" />
                </button>
                <h2 className="text-[17px] font-black text-gray-900 tracking-tight uppercase">Daily Essentials</h2>
                <button className="bg-gray-100 px-4 py-1.5 rounded-full text-[13px] font-black text-gray-600 hover:bg-gray-200 transition-colors active:scale-95 flex items-center gap-1.5">
                    <HelpCircle className="h-3.5 w-3.5" />
                    HELP
                </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 no-scrollbar space-y-8">

                {/* Search Bar - Premium touch */}
                <div className="relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
                    <input
                        type="text"
                        placeholder="Search for services..."
                        className="w-full bg-white border border-gray-100 py-4 pl-12 pr-4 rounded-[22px] text-[14px] font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all shadow-sm"
                    />
                </div>

                {/* Recent Bookings Section */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between px-1">
                        <div className="flex items-center gap-2">
                            <History className="h-4 w-4 text-indigo-600" />
                            <h3 className="text-[14px] font-black text-gray-900 tracking-tight uppercase">Recent Bookings</h3>
                        </div>
                        <button className="text-[11px] font-black text-indigo-600 uppercase tracking-widest hover:underline">View All</button>
                    </div>

                    <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 -mx-1 px-1">
                        {/* Booking Card 1 */}
                        <div className="flex-shrink-0 w-[180px] bg-white border border-gray-100 rounded-[22px] p-4 shadow-sm hover:shadow-md transition-shadow active:scale-95 cursor-pointer">
                            <div className="flex items-center justify-between mb-3">
                                <div className="bg-emerald-50 h-8 w-8 rounded-lg flex items-center justify-center">
                                    <ShoppingCart className="h-4 w-4 text-emerald-600" />
                                </div>
                                <div className="bg-[#ffde2e] px-2 py-0.5 rounded-md border border-yellow-300">
                                    <div className="flex items-center text-[7px] font-black tracking-tighter">
                                        <span className="text-black">blink</span>
                                        <span className="text-[#10b981]">it</span>
                                    </div>
                                </div>
                            </div>
                            <h4 className="text-[13px] font-black text-gray-900 leading-tight mb-1">Fresh Fruits...</h4>
                            <p className="text-[10px] font-bold text-gray-400">Delivered • Yesterday</p>
                        </div>

                        {/* Booking Card 2 */}
                        <div className="flex-shrink-0 w-[180px] bg-white border border-gray-100 rounded-[22px] p-4 shadow-sm hover:shadow-md transition-shadow active:scale-95 cursor-pointer">
                            <div className="flex items-center justify-between mb-3">
                                <div className="bg-indigo-50 h-8 w-8 rounded-lg flex items-center justify-center">
                                    <Accessibility className="h-4 w-4 text-indigo-600" />
                                </div>
                                <div className="bg-white px-2 py-0.5 rounded-md border border-[#269499]">
                                    <span className="text-[7px] font-black text-[#269499] uppercase tracking-tighter">Wellness</span>
                                </div>
                            </div>
                            <h4 className="text-[13px] font-black text-gray-900 leading-tight mb-1">Physiotherapy</h4>
                            <p className="text-[10px] font-bold text-gray-400">Completed • 2 days ago</p>
                        </div>

                        {/* Booking Card 3 */}
                        <div className="flex-shrink-0 w-[180px] bg-white border border-gray-100 rounded-[22px] p-4 shadow-sm hover:shadow-md transition-shadow active:scale-95 cursor-pointer">
                            <div className="flex items-center justify-between mb-3">
                                <div className="bg-orange-50 h-8 w-8 rounded-lg flex items-center justify-center">
                                    <Sparkles className="h-4 w-4 text-orange-600" />
                                </div>
                                <div className="bg-black px-2 py-0.5 rounded-md border border-gray-800">
                                    <div className="flex items-center gap-1">
                                        <div className="bg-white rounded-[1px] h-2 w-2 flex items-center justify-center">
                                            <span className="text-black text-[4px] font-black">UC</span>
                                        </div>
                                        <span className="text-white text-[6px] font-black tracking-tighter">Urban Co.</span>
                                    </div>
                                </div>
                            </div>
                            <h4 className="text-[13px] font-black text-gray-900 leading-tight mb-1">Deep Cleaning</h4>
                            <p className="text-[10px] font-bold text-gray-400">Scheduled • Monday</p>
                        </div>
                    </div>
                </div>

                {/* Section 1: Essential Deliveries */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 px-1">
                        <h3 className="text-[16px] font-black text-gray-900 tracking-tight uppercase">Essential Deliveries</h3>
                        <div className="h-1 flex-1 bg-gray-100 rounded-full" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <EssentialItem
                            icon={ShoppingCart}
                            title="Groceries & Fresh Produce"
                            description="Daily fresh items delivered"
                            color="#10b981"
                            partner={{ name: "blinkit", color: "#ffde2e" }}
                        />
                        <EssentialItem
                            icon={Pill}
                            title="Medicine Refills"
                            description="Prescription drugs delivery"
                            color="#ef4444"
                            partner={{ name: "1mg", color: "#ff6f61" }}
                        />
                    </div>
                </div>

                {/* Section 2: At-Home Assistance */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 px-1">
                        <h3 className="text-[16px] font-black text-gray-900 tracking-tight uppercase">At-Home Assistance</h3>
                        <div className="h-1 flex-1 bg-gray-100 rounded-full" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <EssentialItem
                            icon={Accessibility}
                            title="Physiotherapy & Wellness"
                            description="Expert sessions at home"
                            color="#6366f1"
                            partner={{ name: "wellness", color: "#269499" }}
                        />
                        <EssentialItem
                            icon={HeartHandshake}
                            title="Caregiving"
                            description="Dedicated home care support"
                            color="#f43f5e"
                            partner={{ name: "uc", color: "#000000" }}
                        />
                    </div>
                </div>

                {/* Section 3: Maintenance & Safety */}
                <div className="space-y-4 pb-8">
                    <div className="flex items-center gap-2 px-1">
                        <h3 className="text-[16px] font-black text-gray-900 tracking-tight uppercase">Maintenance & Safety</h3>
                        <div className="h-1 flex-1 bg-gray-100 rounded-full" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <EssentialItem
                            icon={Wrench}
                            title="Repairs & Utilities"
                            description="Prompt electrical/plumbing fix"
                            color="#f59e0b"
                            partner={{ name: "uc", color: "#000000" }}
                        />
                        <EssentialItem
                            icon={Laptop}
                            title="Digital Help"
                            description="Tech support & device setup"
                            color="#3b82f6"
                            partner={{ name: "uc", color: "#000000" }}
                        />
                        <EssentialItem
                            icon={Sparkles}
                            title="Deep Cleaning"
                            description="Professional home sanitation"
                            color="#8b5cf6"
                            partner={{ name: "uc", color: "#000000" }}
                        />
                    </div>
                </div>

            </div>

            {/* Tracking Footer */}
            <div className="p-6 bg-white border-t border-gray-100">
                <div className="bg-indigo-600 rounded-[24px] p-5 flex items-center justify-between shadow-lg shadow-indigo-100">
                    <div className="flex flex-col">
                        <span className="text-indigo-100 text-[11px] font-bold uppercase tracking-widest">Ongoing Task</span>
                        <span className="text-white text-[15px] font-black tracking-tight">Grocery order arriving...</span>
                    </div>
                    <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-xl text-[12px] font-black transition-all active:scale-95">
                        TRACK
                    </button>
                </div>
            </div>

        </div>
    );
};

export default DailyEssentialsDialog;
