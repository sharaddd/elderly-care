import { ArrowLeft, HelpCircle, Calendar, Clock, MapPin, ChevronRight, Video, Search } from "lucide-react";

interface AppointmentsViewProps {
    onBack: () => void;
}

const AppointmentsView = ({ onBack }: AppointmentsViewProps) => {
    const appointments = [
        {
            id: 1,
            doctor: "Dr. Arvind Agarwal",
            specialty: "Cardiovascular Surgeon",
            hospital: "Medanta Hospital",
            time: "Tomorrow • 10:30 AM",
            type: "In-Person",
            status: "Scheduled",
            color: "indigo"
        },
        {
            id: 2,
            doctor: "Dr. Sarah D'Souza",
            specialty: "Senior Neurologist",
            hospital: "Max Healthcare",
            time: "Thursday • 02:15 PM",
            type: "Video Call",
            status: "Confirmed",
            color: "emerald"
        }
    ];

    return (
        <div className="absolute inset-0 z-[60] bg-slate-50 flex flex-col shadow-2xl overflow-hidden">
            {/* Header - Fixed Height */}
            <div className="bg-white px-6 pt-6 pb-4 flex items-center justify-between border-b border-gray-100 shrink-0 z-20">
                <button
                    onClick={onBack}
                    className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors relative z-10"
                >
                    <ArrowLeft className="h-5 w-5 text-gray-900" />
                </button>
                <h2 className="absolute left-1/2 -translate-x-1/2 text-gray-900 font-black text-[15px] uppercase tracking-[0.15em] whitespace-nowrap">Appointments</h2>
                <button className="px-4 py-1.5 rounded-full bg-[#f8fafc] border border-slate-200 flex items-center gap-1.5 hover:bg-slate-100 transition-colors group relative z-10">
                    <span className="text-[11px] font-black text-slate-500 uppercase tracking-wider">Help</span>
                    <HelpCircle className="h-3.5 w-3.5 text-slate-400 group-hover:rotate-12 transition-transform" />
                </button>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto no-scrollbar scroll-smooth">
                <div className="p-6 flex flex-col gap-6 pb-40">
                    {/* Search / Filter */}
                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                        <input
                            type="text"
                            placeholder="Find a doctor or appointment..."
                            className="w-full bg-white border border-gray-100 rounded-2xl py-3.5 pl-11 pr-4 text-[13px] font-medium focus:outline-none focus:ring-2 focus:ring-emerald-100 transition-all shadow-sm"
                        />
                    </div>

                    {/* Scheduled Appointments Category */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between px-1">
                            <h3 className="text-gray-900 text-[14px] font-black uppercase tracking-[0.1em]">Schedules Appointments</h3>
                            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-0.5 rounded-md">2 UPCOMING</span>
                        </div>

                        <div className="flex flex-col gap-4">
                            {appointments.map((apt) => (
                                <div key={apt.id} className="bg-white rounded-[28px] p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all group relative overflow-hidden active:scale-[0.98]">
                                    <div className="flex flex-col gap-4 relative z-10">
                                        <div className="flex items-start justify-between">
                                            <div className="flex gap-3">
                                                <div className={`h-12 w-12 rounded-2xl flex items-center justify-center shrink-0 ${apt.type === "Video Call" ? "bg-emerald-50" : "bg-indigo-50"
                                                    }`}>
                                                    {apt.type === "Video Call" ? (
                                                        <Video className="h-6 w-6 text-emerald-600" />
                                                    ) : (
                                                        <MapPin className="h-6 w-6 text-indigo-600" />
                                                    )}
                                                </div>
                                                <div className="flex flex-col">
                                                    <h4 className="text-[16px] font-black text-gray-900 tracking-tight leading-tight">
                                                        {apt.doctor}
                                                    </h4>
                                                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-tight">{apt.specialty}</span>
                                                </div>
                                            </div>
                                            <div className={`px-2 py-0.5 rounded-lg border text-[9px] font-black uppercase tracking-widest ${apt.status === "Scheduled" ? "bg-amber-50 border-amber-100 text-amber-600" : "bg-emerald-50 border-emerald-100 text-emerald-600"
                                                }`}>
                                                {apt.status}
                                            </div>
                                        </div>

                                        <div className="h-px bg-gray-50 w-full" />

                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="h-3.5 w-3.5 text-gray-400" />
                                                    <span className="text-[12px] font-black text-gray-700 tracking-tight">{apt.time}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="h-3.5 w-3.5 text-gray-400" />
                                                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-tighter">{apt.hospital}</span>
                                                </div>
                                            </div>
                                            <button className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                                                <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-emerald-400" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Subtle brand glow */}
                                    <div className={`absolute -bottom-6 -right-6 w-16 h-16 rounded-full blur-2xl opacity-40 transition-colors ${apt.type === "Video Call" ? "bg-emerald-100" : "bg-indigo-100"
                                        }`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Past Consultations */}
                    <div className="mt-4 flex flex-col gap-4">
                        <div className="px-1 text-gray-400">
                            <h3 className="text-[11px] font-black uppercase tracking-widest">Past Consultations</h3>
                        </div>

                        <div className="bg-white/50 backdrop-blur-sm rounded-[28px] border border-dashed border-gray-200 p-8 flex flex-col items-center justify-center text-center">
                            <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                                <Clock className="h-6 w-6 text-gray-300" />
                            </div>
                            <span className="text-[13px] font-bold text-gray-400">No past appointments</span>
                            <p className="text-[11px] text-gray-300 uppercase mt-1 tracking-tighter">Your medical history will appear here</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom CTA - Always Visible */}
            <div className="shrink-0 p-6 bg-gradient-to-t from-white via-white to-white/90 border-t border-gray-100 z-30 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-[20px] py-4 font-black text-[14px] uppercase tracking-widest shadow-lg shadow-emerald-100 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                    <Search className="h-4 w-4" />
                    Book New Appointment
                </button>
            </div>
        </div>
    );
};

export default AppointmentsView;
