import { useState } from "react";
import {
    ArrowLeft,
    MapPin,
    Search,
    ChevronRight,
    ChevronDown,
    Check,
    Stethoscope,
    Ear,
    Activity,
    Eye,
    Heart,
    Wind,
    Scissors,
    Shield
} from "lucide-react";
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";

interface SpecialityItemProps {
    icon: any;
    title: string;
    description: string;
    color: string;
}

const SpecialityItem = ({ icon: Icon, title, description, color }: SpecialityItemProps) => (
    <div className="bg-white rounded-[24px] p-4 shadow-sm border border-gray-50 flex items-center justify-between transition-all hover:shadow-md active:scale-[0.98] group cursor-pointer">
        <div className="flex items-center gap-4">
            <div className={`h-12 w-12 rounded-2xl flex items-center justify-center`} style={{ backgroundColor: `${color}15` }}>
                <Icon className="h-6 w-6" style={{ color: color }} />
            </div>
            <div className="flex flex-col">
                <h4 className="text-[15px] font-black text-gray-900 tracking-tight">{title}</h4>
                <p className="text-[12px] font-bold text-gray-400">{description}</p>
            </div>
        </div>
        <div className="bg-gray-50 h-8 w-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronRight className="h-4 w-4 text-gray-400" />
        </div>
    </div>
);

interface FindDoctorDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    isPage?: boolean;
}

const FindDoctorDialog = ({ open, onOpenChange, isPage = false }: FindDoctorDialogProps) => {
    const [isLocationOpen, setIsLocationOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState("Dwarka Sec 14");

    const locations = [
        "Dwarka Sec 14",
        "Janakpuri",
        "Vasant Kunj",
        "South Ext",
        "Gurgaon Sec 45"
    ];

    const specialities = [
        { icon: Stethoscope, title: "Dental Pain", description: "Toothache & oral health", color: "#0ea5e9" },
        { icon: Ear, title: "Ear, Nose, Throat", description: "ENT specialist care", color: "#6366f1" },
        { icon: Activity, title: "General Pain", description: "Body ache & discomfort", color: "#f43f5e" },
        { icon: Eye, title: "Eye", description: "Vision & ophthalmic care", color: "#10b981" },
        { icon: Heart, title: "Heart", description: "Cardiovascular health", color: "#ef4444" },
        { icon: Wind, title: "Breathing Issue", description: "Respiratory & chest care", color: "#8b5cf6" },
        { icon: Scissors, title: "General Surgery", description: "Surgical consultations", color: "#f59e0b" },
    ];

    return (
        <div className={`w-full h-full bg-[#fafafa] flex flex-col absolute inset-0 left-0 top-0 z-[60] duration-300 animate-in slide-in-from-right-full shadow-2xl overflow-hidden`}>

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 bg-white border-b border-gray-100 sticky top-0 z-20">
                <button onClick={() => onOpenChange(false)} className="hover:bg-gray-100 p-2 rounded-full transition-colors active:scale-90">
                    <ArrowLeft className="h-6 w-6 text-gray-800" />
                </button>
                <h2 className="text-[17px] font-black text-gray-900 tracking-tight">Find your Doctor</h2>

                {/* Interactive Location Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setIsLocationOpen(!isLocationOpen)}
                        className="bg-blue-50 px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-blue-100 shadow-sm active:scale-95 transition-all hover:bg-blue-100"
                    >
                        <MapPin className="h-3.5 w-3.5 text-blue-600" />
                        <span className="text-[11px] font-black text-blue-700 uppercase tracking-tighter">{selectedLocation}</span>
                        <ChevronDown className={`h-3 w-3 text-blue-400 transition-transform duration-300 ${isLocationOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isLocationOpen && (
                        <>
                            <div
                                className="fixed inset-0 z-10"
                                onClick={() => setIsLocationOpen(false)}
                            />
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl z-20 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                <div className="p-2 space-y-1">
                                    {locations.map((loc) => (
                                        <button
                                            key={loc}
                                            onClick={() => {
                                                setSelectedLocation(loc);
                                                setIsLocationOpen(false);
                                            }}
                                            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-[12px] font-bold transition-colors ${selectedLocation === loc
                                                ? 'bg-blue-50 text-blue-700'
                                                : 'text-gray-600 hover:bg-gray-50'
                                                }`}
                                        >
                                            {loc}
                                            {selectedLocation === loc && <Check className="h-3.5 w-3.5 text-blue-600" />}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8 no-scrollbar">

                {/* Search Section */}
                <div className="space-y-4">
                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                        <input
                            type="text"
                            placeholder="Search doctor, speciality..."
                            className="w-full bg-white border border-gray-100 py-4 pl-12 pr-4 rounded-[22px] text-[14px] font-bold text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500/50 transition-all shadow-sm"
                        />
                    </div>
                </div>

                {/* Specialities Grid */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between px-1">
                        <h3 className="text-[16px] font-black text-gray-900 tracking-tight uppercase">Choose from top specialities</h3>
                    </div>

                    <div className="flex flex-col gap-3 pb-8">
                        {specialities.map((item, index) => (
                            <SpecialityItem key={index} {...item} />
                        ))}

                        {/* Placeholder items for wireframe fidelity */}
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-[72px] bg-gray-50 border border-gray-100 rounded-[24px] animate-pulse" />
                        ))}
                    </div>
                </div>
            </div>

            {/* Secure Badge Footer */}
            <div className="p-6 bg-white border-t border-gray-50 flex justify-center">
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-2xl border border-blue-100/50">
                    <Shield className="h-4 w-4 text-blue-500" />
                    <span className="text-[11px] font-black text-blue-600 uppercase tracking-widest">Verified Multi-Speciality Network</span>
                </div>
            </div>

        </div>
    );
};

export default FindDoctorDialog;
