import { ArrowLeft, HelpCircle, ArrowRight, Clock, MapPin, Search } from "lucide-react";
import { useState } from "react";

interface BookingsViewProps {
    onBack: () => void;
}

const BookingsView = ({ onBack }: BookingsViewProps) => {
    const bookings = [
        {
            id: 1,
            title: "Physiotherapy Session",
            originalTitle: "physiotherapy",
            category: "Daily Essentials",
            status: "ongoing",
            time: "Today • 04:30 PM",
            provider: "wellness",
            color: "emerald",
            brandColor: "#ffffff",
            textColor: "#269499",
            borderColor: "#269499"
        },
        {
            id: 2,
            title: "Groceries and Fresh produce",
            originalTitle: "Groceries and Fresh produce",
            category: "Daily Essentials",
            status: "track",
            time: "Arriving in 12 mins",
            provider: "blinkit",
            color: "emerald",
            brandColor: "#ffde2e",
            textColor: "#000000",
            borderColor: "#fde047"
        }
    ];

    return (
        <div className="fixed inset-0 z-[60] bg-slate-50 flex flex-col items-center overflow-hidden">
            <div className="w-full max-w-[400px] h-full bg-slate-50 flex flex-col shadow-2xl relative">
                {/* Header - Fixed Height */}
                <div className="bg-white px-6 pt-6 pb-4 flex items-center justify-between border-b border-gray-100 shrink-0 z-20">
                    <button
                        onClick={onBack}
                        className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors relative z-10"
                    >
                        <ArrowLeft className="h-5 w-5 text-gray-900" />
                    </button>
                    <h2 className="absolute left-1/2 -translate-x-1/2 text-gray-900 font-black text-[15px] uppercase tracking-[0.15em] whitespace-nowrap">Bookings</h2>
                    <button className="px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 flex items-center gap-1.5 hover:bg-indigo-100 transition-colors group relative z-10">
                        <span className="text-[11px] font-black text-indigo-600 uppercase tracking-wider">Help</span>
                        <HelpCircle className="h-3.5 w-3.5 text-indigo-500 group-hover:rotate-12 transition-transform" />
                    </button>
                </div>

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto no-scrollbar scroll-smooth">
                    <div className="p-6 flex flex-col gap-6 pb-32">
                        {/* Search / Filter */}
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-hover:text-indigo-500 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search your bookings..."
                                className="w-full bg-white border border-gray-100 rounded-2xl py-3.5 pl-11 pr-4 text-[13px] font-medium focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-all shadow-sm"
                            />
                        </div>

                        {/* Active Bookings Category */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between px-1">
                                <h3 className="text-gray-900 text-[14px] font-black uppercase tracking-[0.1em]">Daily Essentials</h3>
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{bookings.length} ACTIVE</span>
                            </div>

                            <div className="flex flex-col gap-3">
                                {bookings.map((booking) => (
                                    <div key={booking.id} className="bg-white rounded-[28px] p-5 border border-gray-100 shadow-sm hover:border-gray-200 transition-all group relative overflow-hidden active:scale-[0.98]">
                                        <div className="flex items-start justify-between relative z-10">
                                            <div className="flex flex-col gap-1 flex-1">
                                                <div className="flex items-center gap-2">
                                                    <h4 className="text-[16px] font-black text-gray-900 tracking-tight leading-tight">
                                                        {booking.title}
                                                    </h4>
                                                    {booking.status === "ongoing" && (
                                                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                                    )}
                                                </div>

                                                <div className="flex items-center gap-3 mt-1.5">
                                                    <div className="flex items-center gap-1.5">
                                                        <Clock className="h-3 w-3 text-gray-400" />
                                                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-tighter">{booking.time}</span>
                                                    </div>
                                                    <div className="h-1 w-1 rounded-full bg-gray-200" />

                                                    {/* Brand "Logo" Badge - Synced with DailyEssentials */}
                                                    <div
                                                        className="flex items-center px-2 py-1 rounded-lg transition-transform group-hover:scale-105 border shadow-sm"
                                                        style={{
                                                            backgroundColor: (booking as any).brandColor,
                                                            borderColor: (booking as any).borderColor
                                                        }}
                                                    >
                                                        {(booking as any).provider === "blinkit" ? (
                                                            <div className="flex items-center text-[10px] font-[900] tracking-tighter">
                                                                <span className="text-black">blink</span>
                                                                <span className="text-[#10b981]">it</span>
                                                            </div>
                                                        ) : (
                                                            <div className="flex items-center text-[8px] font-black tracking-tighter text-[#269499] uppercase whitespace-nowrap">
                                                                The Wellness Co.
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-col items-end gap-2">
                                                <div className={`px-2.5 py-1 rounded-full border ${booking.status === "ongoing"
                                                    ? "bg-emerald-50 border-emerald-100 text-emerald-600"
                                                    : "bg-slate-50 border-slate-200 text-slate-600"
                                                    }`}>
                                                    <span className="text-[9px] font-black uppercase tracking-widest">{booking.status}</span>
                                                </div>
                                                <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-slate-100 transition-colors">
                                                    <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-gray-400" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Decorative background glow based on brand color */}
                                        <div
                                            className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full blur-2xl opacity-15 transition-colors group-hover:opacity-25"
                                            style={{ backgroundColor: (booking as any).provider === "blinkit" ? "#ffde2e" : "#269499" }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Past Bookings (Reference only for completeness) */}
                        <div className="mt-4 flex flex-col gap-4">
                            <div className="px-1 text-gray-400">
                                <h3 className="text-[11px] font-black uppercase tracking-widest">History</h3>
                            </div>

                            <div className="bg-white/50 backdrop-blur-sm rounded-[28px] border border-dashed border-gray-200 p-8 flex flex-col items-center justify-center text-center">
                                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                                    <Clock className="h-6 w-6 text-gray-300" />
                                </div>
                                <span className="text-[13px] font-bold text-gray-400">No past bookings found</span>
                                <p className="text-[11px] text-gray-300 uppercase mt-1 tracking-tighter">Your completed sessions will appear here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingsView;
