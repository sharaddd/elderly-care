import { ArrowLeft, User, Mail, Edit2, Wallet, Moon, MapPin, Calendar, Users, MessageSquare, Info, LogOut, ChevronRight, Star } from "lucide-react";

interface ProfileViewProps {
    onBack: () => void;
}

const ProfileView = ({ onBack }: ProfileViewProps) => {
    const settingsItems = [
        { icon: Moon, title: "Appearance", value: "Light", color: "text-blue-500", bg: "bg-blue-50" },
        { icon: MapPin, title: "Your Addresses", color: "text-rose-500", bg: "bg-rose-50" },
        { icon: Calendar, title: "Your Bookings and Appointments", color: "text-amber-500", bg: "bg-amber-50" },
        { icon: Users, title: "Family Admins", color: "text-indigo-500", bg: "bg-indigo-50" },
    ];

    const supportItems = [
        { icon: MessageSquare, title: "Feedback", color: "text-emerald-500", bg: "bg-emerald-50" },
        { icon: Info, title: "About Us", color: "text-gray-500", bg: "bg-gray-50" },
    ];

    return (
        <div className="absolute inset-0 z-[60] bg-slate-50 flex flex-col shadow-2xl overflow-hidden">
            {/* Header - Fixed */}
            <div className="bg-white px-6 pt-4 pb-3 flex items-center border-b border-gray-100 shrink-0 z-20">
                <button
                    onClick={onBack}
                    className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors relative z-10"
                >
                    <ArrowLeft className="h-5 w-5 text-gray-900" />
                </button>
                <h2 className="absolute left-1/2 -translate-x-1/2 text-gray-900 font-black text-[15px] uppercase tracking-[0.15em] whitespace-nowrap">My Account</h2>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto no-scrollbar scroll-smooth">
                <div className="px-6 pt-2 space-y-4 pb-40">
                    {/* Profile Card */}
                    <div className="bg-white rounded-[32px] p-6 border border-gray-100 shadow-sm relative overflow-hidden group">
                        <div className="flex items-center gap-5 relative z-10">
                            <div className="h-20 w-20 rounded-full bg-slate-100 border-4 border-white shadow-md flex items-center justify-center relative overflow-hidden shrink-0">
                                <User className="h-10 w-10 text-gray-300" />
                                <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                    <Edit2 className="h-5 w-5 text-white" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-[18px] font-black text-gray-900 tracking-tight leading-none mb-1">Arvind Sharma</h3>
                                <p className="text-[12px] font-bold text-gray-400 mb-2">arvind1980@gmail.com</p>
                                <button className="text-[11px] font-black text-indigo-600 uppercase tracking-widest flex items-center gap-1.5 hover:underline">
                                    Edit Profile
                                    <ChevronRight className="h-3 w-3" />
                                </button>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center">
                                    <Star className="h-3.5 w-3.5 text-amber-600 fill-amber-600" />
                                </div>
                                <span className="text-[13px] font-black text-gray-800 tracking-tight">ElderlyCare plus+</span>
                            </div>
                            <span className="text-[10px] font-black text-amber-600 bg-amber-50 px-2 py-1 rounded-full uppercase tracking-widest">Active Member</span>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-50 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Wallet Card */}
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[28px] p-6 shadow-xl relative overflow-hidden active:scale-[0.98] transition-all cursor-pointer">
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
                                        <Wallet className="h-5 w-5 text-white" />
                                    </div>
                                    <span className="text-white/60 text-[11px] font-black uppercase tracking-[0.2em]">ElderlyCare Wallet</span>
                                </div>
                                <button className="text-emerald-400 text-[11px] font-black uppercase tracking-widest hover:text-emerald-300 transition-colors">
                                    Add Money
                                </button>
                            </div>
                            <div className="flex items-end gap-1">
                                <span className="text-white text-[28px] font-black tracking-tighter leading-none">₹1,200</span>
                                <span className="text-white/40 text-[12px] font-bold mb-1 ml-1 lowercase">available balance</span>
                            </div>
                        </div>
                        {/* Abstract wave pattern */}
                        <div className="absolute bottom-0 right-0 left-0 h-1/2 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
                    </div>

                    {/* Settings List */}
                    <div className="space-y-3">
                        {settingsItems.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-[22px] p-4 border border-gray-100 shadow-sm flex items-center justify-between group hover:border-indigo-100 transition-all cursor-pointer active:scale-[0.98]"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`h-11 w-11 rounded-xl ${item.bg} flex items-center justify-center transition-colors group-hover:scale-110 duration-300`}>
                                        <item.icon className={`h-5 w-5 ${item.color}`} />
                                    </div>
                                    <span className="text-[14px] font-black text-gray-800 tracking-tight">{item.title}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {item.value && (
                                        <span className="text-[12px] font-bold text-gray-400 capitalize">{item.value}</span>
                                    )}
                                    <ChevronRight className="h-4 w-4 text-gray-300 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Secondary List */}
                    <div className="space-y-3">
                        {supportItems.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-[22px] p-4 border border-gray-100 shadow-sm flex items-center justify-between group hover:bg-gray-50 transition-all cursor-pointer active:scale-[0.98]"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`h-11 w-11 rounded-xl ${item.bg} flex items-center justify-center`}>
                                        <item.icon className={`h-5 w-5 ${item.color}`} />
                                    </div>
                                    <span className="text-[14px] font-black text-gray-800 tracking-tight">{item.title}</span>
                                </div>
                                <ChevronRight className="h-4 w-4 text-gray-300" />
                            </div>
                        ))}

                        {/* Log Out */}
                        <div className="bg-rose-50 rounded-[22px] p-4 border border-rose-100/50 flex items-center justify-between group hover:bg-rose-100 transition-all cursor-pointer active:scale-[0.98] mt-4">
                            <div className="flex items-center gap-4">
                                <div className="h-11 w-11 rounded-xl bg-white flex items-center justify-center shadow-sm">
                                    <LogOut className="h-5 w-5 text-rose-500" />
                                </div>
                                <span className="text-[14px] font-black text-rose-600 tracking-tight">Log Out</span>
                            </div>
                            <ChevronRight className="h-4 w-4 text-rose-300" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileView;
