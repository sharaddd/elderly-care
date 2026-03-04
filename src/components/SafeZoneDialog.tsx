import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MapPin, ShieldCheck, Settings, ArrowLeft, Users, Bell, Navigation } from "lucide-react";
import { useEffect, useState } from "react";

interface SafeZoneDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const SafeZoneDialog = ({ open, onOpenChange }: SafeZoneDialogProps) => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }, 60000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[400px] w-[92%] rounded-[32px] p-0 overflow-hidden border-none bg-slate-50 shadow-2xl [&>button:last-child]:hidden">
                <div className="flex flex-col h-[85vh] relative">
                    {/* Header */}
                    <div className="bg-white px-6 pt-6 pb-4 flex items-center justify-between border-b border-gray-100">
                        <button
                            onClick={() => onOpenChange(false)}
                            className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                            <ArrowLeft className="h-5 w-5 text-gray-900" />
                        </button>
                        <h2 className="text-gray-900 font-black text-[15px] uppercase tracking-[0.2em] flex-1 text-center pr-2">safe zone</h2>
                        <button className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors mr-1">
                            <Settings className="h-5 w-5 text-gray-500" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto pb-8">
                        {/* Current Location Info */}
                        <div className="px-6 py-5 flex items-start gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-indigo-50 flex items-center justify-center shrink-0">
                                <MapPin className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest leading-none">current location</span>
                                <h3 className="text-gray-900 text-[18px] font-black tracking-tight">Dwarka sector 14, Delhi</h3>
                                <div className="flex items-center gap-1.5 mt-1">
                                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-gray-500 text-[11px] font-bold tracking-tight">Active tracking enabled • {currentTime}</span>
                                </div>
                            </div>
                        </div>

                        {/* Map Visualization */}
                        <div className="px-6 pb-6">
                            <div className="relative aspect-square w-full rounded-[28px] overflow-hidden border-[6px] border-white shadow-xl shadow-indigo-100/50 group">
                                {/* Simulated Hi-Tech Map Background */}
                                <div className="absolute inset-0 bg-[#eef2ff]">
                                    <div className="absolute inset-0 opacity-20" style={{
                                        backgroundImage: `radial-gradient(#4f46e5 0.5px, transparent 0.5px)`,
                                        backgroundSize: '24px 24px'
                                    }} />

                                    {/* Safe Zone Boundary (Circle) */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-indigo-100/40 border-[3px] border-dashed border-indigo-400/50 animate-[spin_20s_linear_infinite]" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-indigo-200/20 border-2 border-indigo-500/30" />

                                    {/* Map Grid Lines */}
                                    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-indigo-200/30" />
                                    <div className="absolute left-0 right-0 top-1/2 h-px bg-indigo-200/30" />

                                    {/* Current Position Marker */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                        <div className="relative">
                                            <div className="h-6 w-6 bg-indigo-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                                                <Navigation className="h-3 w-3 text-white fill-white rotate-45" />
                                            </div>
                                            <div className="absolute inset-0 bg-indigo-400 rounded-full animate-ping opacity-50 scale-150" />
                                        </div>
                                    </div>

                                    {/* Boundary Shield Label */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-indigo-100 shadow-sm flex items-center gap-2">
                                        <ShieldCheck className="h-4 w-4 text-green-500" />
                                        <span className="text-[11px] font-black text-gray-900 uppercase tracking-tighter">500m Safety Perimeter</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Status Message */}
                        <div className="px-6">
                            <div className="bg-white rounded-[24px] p-5 border border-indigo-50 shadow-sm flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-2xl bg-green-50 flex items-center justify-center shrink-0">
                                        <ShieldCheck className="h-7 w-7 text-green-600" />
                                    </div>
                                    <div className="flex flex-col gap-0.5">
                                        <h4 className="text-gray-900 text-[15px] font-black leading-tight uppercase tracking-tight">All Secure</h4>
                                        <p className="text-gray-500 text-[12.5px] font-medium leading-tight">
                                            You are currently within the safe zone specified by your family.
                                        </p>
                                    </div>
                                </div>
                                <div className="h-px w-full bg-slate-50" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Bell className="h-4 w-4 text-indigo-500 animate-bounce" />
                                        <span className="text-[11px] font-black text-indigo-600 uppercase tracking-widest">Global Alerts ON</span>
                                    </div>
                                    <span className="text-[11px] font-bold text-gray-400">Updates every 2m</span>
                                </div>
                            </div>
                        </div>

                        {/* Management Info */}
                        <div className="mt-8 px-6">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-2 px-1">
                                    <Users className="h-4 w-4 text-gray-400" />
                                    <span className="text-gray-400 text-[11px] font-black uppercase tracking-widest">Family Admins</span>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <div className="bg-white border border-gray-100 rounded-[20px] p-4 flex items-center justify-between hover:bg-white transition-all shadow-sm group">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
                                                <span className="text-gray-900 font-black text-[13px]">SS</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-gray-900 text-[14px] font-black tracking-tight">Mr. Saksham</span>
                                                <span className="text-indigo-500 text-[10px] font-black uppercase tracking-widest">Primary Manager</span>
                                            </div>
                                        </div>
                                        <div className="h-2 w-2 rounded-full bg-green-500" />
                                    </div>

                                    <div className="bg-white border border-gray-100 rounded-[20px] p-4 flex items-center justify-between hover:bg-white transition-all shadow-sm group">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
                                                <span className="text-gray-900 font-black text-[13px]">PN</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-gray-900 text-[14px] font-black tracking-tight">Mrs. Purnima</span>
                                                <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Co-Manager</span>
                                            </div>
                                        </div>
                                        <div className="h-2 w-2 rounded-full bg-green-500" />
                                    </div>
                                </div>

                                <p className="px-1 text-gray-400 text-[11px] font-medium leading-relaxed italic">
                                    "Safe zone monitored by your family admins for your security. Moving beyond this area will notify your designated protectors."
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </DialogContent>
        </Dialog>
    );
};

export default SafeZoneDialog;
