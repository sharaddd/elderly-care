import { ArrowLeft, Calendar, CheckCircle2, PlusCircle, Plus, Home, Calendar as CalendarIcon, TestTube2, Phone, Clock, Undo2 } from "lucide-react";
import { useState, useMemo } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface MedicationScheduleProps {
    onBack: () => void;
}

const MedicationSchedule = ({ onBack }: MedicationScheduleProps) => {
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [lastDeleted, setLastDeleted] = useState<any>(null);

    // Form State
    const [newName, setNewName] = useState("");
    const [newTime, setNewTime] = useState("11:00");

    // Dynamic Date Generation
    const dateInfo = useMemo(() => {
        const now = new Date();
        const monthShort = now.toLocaleString('en-US', { month: 'short' });
        const dayNum = now.getDate().toString().padStart(2, '0');
        const weekDay = now.toLocaleString('en-US', { weekday: 'long' });
        const year = now.getFullYear();
        const monthFull = now.toLocaleString('en-US', { month: 'long' });

        const getOrdinal = (d: number) => {
            if (d > 3 && d < 21) return 'th';
            switch (d % 10) {
                case 1: return "st";
                case 2: return "nd";
                case 3: return "rd";
                default: return "th";
            }
        };
        const ordinal = getOrdinal(now.getDate());
        const fullDisplay = `${now.getDate()}${ordinal} ${monthFull} ${year}`;

        return { monthShort, dayNum, weekDay, fullDisplay };
    }, []);

    // Initial State for Medicines
    const [meds, setMeds] = useState([
        { id: 1, time: '11:00 AM', name: 'Norvasc 2.5 mg', taken: true, status: 'taken' },
        { id: 2, time: '11:00 AM', name: 'Leverothxyine 5 mg', taken: false, status: 'pending' },
        { id: 3, time: '11:00 AM', name: 'Amoxycylin 200 mg', taken: false, status: 'pending' },
        { id: 4, time: '03:00 PM', name: 'Norvasc 2.5 mg', taken: true, status: 'taken' },
        { id: 5, time: '03:00 PM', name: 'Leverothxyine 5 mg', taken: false, status: 'pending' },
        { id: 6, time: '03:00 PM', name: 'Amoxycylin 200 mg', taken: false, status: 'pending' },
        { id: 7, time: '03:00 PM', name: 'Ofloxacin 500 mg', taken: false, status: 'pending' },
        { id: 8, time: '09:00 PM', name: 'Norvasc 2.5 mg', taken: true, status: 'taken' },
        { id: 9, time: '09:00 PM', name: 'Leverothxyine 5 mg', taken: false, status: 'pending' },
        { id: 10, time: '09:00 PM', name: 'Amoxycylin 200 mg', taken: false, status: 'pending' },
    ]);

    const formatTime = (timeStr: string) => {
        const [hour, min] = timeStr.split(':');
        const h = parseInt(hour);
        const ampm = h >= 12 ? 'PM' : 'AM';
        const displayH = h % 12 || 12;
        return `${displayH.toString().padStart(2, '0')}:${min} ${ampm}`;
    };

    const handleAddMed = () => {
        if (!newName) return;

        const newEntry = {
            id: Date.now(),
            time: formatTime(newTime),
            name: newName,
            taken: false,
            status: 'pending'
        };

        setMeds([...meds, newEntry].sort((a, b) => {
            return a.time.localeCompare(b.time);
        }));

        setNewName("");
        setNewTime("11:00");
        setIsAddOpen(false);
    };

    const toggleMedStatus = (id: number) => {
        setMeds(meds.map(m => {
            if (m.id === id) {
                const newStatus = m.status === 'taken' ? 'pending' : 'taken';
                return { ...m, status: newStatus, taken: newStatus === 'taken' };
            }
            return m;
        }));
    };

    const removeMed = (id: number) => {
        const toDelete = meds.find(m => m.id === id);
        setLastDeleted(toDelete);
        setMeds(meds.filter(m => m.id !== id));
    };

    const undoDelete = () => {
        if (lastDeleted) {
            setMeds([...meds, lastDeleted].sort((a, b) => a.id - b.id));
            setLastDeleted(null);
        }
    };

    const renderMedBlock = (timeSlot: string) => {
        const slotMeds = meds.filter(m => m.time === timeSlot);
        if (slotMeds.length === 0) return null;

        return (
            <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between pr-2">
                    <div className="flex items-center gap-3">
                        <div className="bg-gray-900 h-[36px] px-4 rounded-full flex items-center justify-center shadow-sm border border-black/5">
                            <Clock className="h-[14px] w-[14px] text-white mr-2" />
                            <span className="text-white text-[13px] font-bold tracking-wider uppercase">{timeSlot}</span>
                        </div>
                        <div className="h-px w-8 bg-gray-200" />
                    </div>
                    <span className="text-[12px] font-bold text-gray-400 uppercase tracking-[1px]">{slotMeds.length} MEDICINES</span>
                </div>

                <div className="bg-[#eeeeee]/60 backdrop-blur-sm p-3 space-y-3 rounded-[20px] border border-gray-100 ml-2">
                    {slotMeds.map((med) => (
                        <div key={med.id} className="flex items-center justify-between animate-in fade-in slide-in-from-left-2 duration-300">
                            <div className={`${med.status === 'taken' ? 'bg-[#b3f3bc]' : 'bg-[#f8e2e2]'} px-3 py-2 rounded-[12px] shadow-sm transition-colors duration-500`}>
                                <span className={`text-[14px] font-semibold text-gray-900 tracking-tight ${isEditMode ? 'opacity-50' : ''}`}>
                                    {med.name}
                                </span>
                            </div>

                            {isEditMode ? (
                                <button
                                    onClick={() => removeMed(med.id)}
                                    className="bg-red-50 p-2 rounded-full active:bg-red-100 transition-colors"
                                >
                                    <PlusCircle className="h-[24px] w-[24px] text-red-500 rotate-45 stroke-[2.5]" />
                                </button>
                            ) : (
                                <button
                                    onClick={() => toggleMedStatus(med.id)}
                                    className="p-1 rounded-full active:bg-gray-200/50 transition-colors"
                                >
                                    {med.status === 'taken' ? (
                                        <CheckCircle2 className="h-[24px] w-[24px] text-[#4caf50] fill-[#4caf50]/10 stroke-[2.5]" />
                                    ) : (
                                        <PlusCircle className="h-[24px] w-[24px] text-gray-400 stroke-[2]" />
                                    )}
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const uniqueTimeSlots = Array.from(new Set(meds.map(m => m.time))).sort();

    return (
        <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
            <div className="fixed inset-0 bg-white z-[60] flex flex-col animate-in slide-in-from-right duration-300 overflow-hidden">
                {/* STICKY DASHBOARD HEADER */}
                <div className="sticky top-0 bg-white border-b border-gray-200 z-50 shadow-sm">
                    {/* Navigation Bar */}
                    <div className="p-4 pt-10 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                            <button onClick={onBack} className="flex items-center justify-center -ml-1">
                                <ArrowLeft className="h-[30px] w-[30px] text-gray-900 stroke-[2.5]" />
                            </button>
                            <span className="text-[18px] font-semibold text-gray-900 tracking-tight">Today's schedule</span>
                        </div>

                        <div className="flex items-center gap-2">
                            {isEditMode && lastDeleted && (
                                <button
                                    onClick={undoDelete}
                                    className="h-[34px] w-[34px] bg-gray-100 rounded-full flex items-center justify-center text-gray-600 active:bg-gray-200 transition-all border border-gray-200"
                                >
                                    <Undo2 className="h-[18px] w-[18px] stroke-[2.5]" />
                                </button>
                            )}
                            <button
                                onClick={() => setIsEditMode(!isEditMode)}
                                className={`px-4 py-1.5 rounded-full text-[13px] font-bold tracking-wide uppercase transition-all ${isEditMode ? 'bg-red-500 text-white shadow-lg shadow-red-100' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                            >
                                {isEditMode ? 'Done' : 'Edit'}
                            </button>
                        </div>
                    </div>

                    {/* STICKY DATE CHIP Area */}
                    <div className="px-4 pb-4">
                        <div className="flex items-center justify-between bg-gray-50/80 backdrop-blur-md p-1.5 rounded-[18px] border border-gray-100 shadow-sm pr-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-gray-900 h-[48px] w-[46px] rounded-[14px] flex flex-col items-center justify-center shadow-md">
                                    <span className="text-white text-[10px] font-bold uppercase tracking-[1.5px] leading-none mb-0.5">{dateInfo.monthShort}</span>
                                    <span className="text-white text-[18px] font-bold leading-none">{dateInfo.dayNum}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-gray-900 text-[16px] font-bold leading-tight">{dateInfo.weekDay}</span>
                                    <span className="text-gray-500 text-[13px] font-medium leading-tight">{dateInfo.fullDisplay}</span>
                                </div>
                            </div>

                            <button className="h-[38px] w-[38px] bg-white border border-gray-200 rounded-[12px] flex items-center justify-center text-gray-800 active:bg-gray-50 transition-all">
                                <CalendarIcon className="h-[20px] w-[20px] stroke-[2.2]" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* SCROLLABLE CONTENT AREA */}
                <div className="flex-1 overflow-y-auto relative">
                    <div className="p-4 space-y-6 pb-24 pt-4">
                        {/* Schedule Blocks with Timeline feel */}
                        <div className="space-y-12 relative pl-2">
                            {/* Vertical Timeline Line */}
                            <div className="absolute left-[20px] top-4 bottom-4 w-px bg-gray-200 z-0" />

                            {uniqueTimeSlots.map(slot => renderMedBlock(slot))}
                        </div>

                        {/* Bottom Action Button */}
                        <div className="pt-6 relative z-10 pb-12">
                            <DialogTrigger asChild>
                                <button className="w-full bg-gray-900 h-[100px] rounded-[24px] flex items-center justify-between px-6 text-white active:bg-black transition-all shadow-xl shadow-gray-200 group overflow-hidden relative">
                                    <div className="flex flex-col items-start text-left">
                                        <span className="text-[20px] font-bold tracking-tight">Schedule New Intake</span>
                                        <span className="text-[13px] text-gray-400 font-medium">Update the daily care plan</span>
                                    </div>
                                    <div className="bg-white/10 h-[56px] w-[56px] rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                        <Plus className="h-[32px] w-[32px] text-white stroke-[2.5]" />
                                    </div>
                                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
                                </button>
                            </DialogTrigger>
                        </div>
                    </div>
                </div>

                {/* FLOATING ACTION BUTTON */}
                <div className="fixed bottom-[100px] right-6 z-50">
                    <DialogTrigger asChild>
                        <button
                            className="h-[64px] w-[64px] bg-gray-900 rounded-full flex items-center justify-center text-white shadow-2xl shadow-gray-400 active:scale-90 transition-all border-4 border-white"
                        >
                            <Plus className="h-[32px] w-[32px] text-white stroke-[3]" />
                        </button>
                    </DialogTrigger>
                </div>

                {/* SHARED DIALOG CONTENT */}
                <DialogContent className="fixed left-[50%] translate-x-[-50%] top-[10%] translate-y-0 sm:top-[50%] sm:translate-y-[-50%] sm:max-w-[425px] w-[94%] rounded-[24px] border-none shadow-2xl p-6 duration-300">
                    <DialogHeader>
                        <DialogTitle className="text-[20px] font-bold text-gray-900 text-center mb-2">
                            Add New Medication
                        </DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-6 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="medicine-name" className="text-[14px] font-semibold text-gray-700 ml-1 uppercase tracking-wider">
                                Medicine Name
                            </Label>
                            <Input
                                id="medicine-name"
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                                placeholder="e.g. Norvasc 2.5 mg"
                                className="h-[52px] rounded-[14px] bg-gray-50 border-gray-100 placeholder:text-gray-400 text-gray-900 text-[16px] focus-visible:ring-gray-400 px-4"
                                autoFocus
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="timing" className="text-[14px] font-semibold text-gray-700 ml-1 uppercase tracking-wider">
                                Choose Timing
                            </Label>
                            <div className="relative">
                                <Input
                                    id="timing"
                                    type="time"
                                    value={newTime}
                                    onChange={(e) => setNewTime(e.target.value)}
                                    className="h-[52px] rounded-[14px] bg-gray-50 border-gray-100 text-gray-900 text-[16px] focus-visible:ring-gray-400 pl-[48px] pr-4 w-full"
                                />
                                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-[20px] w-[20px] text-gray-500" />
                            </div>
                        </div>
                    </div>
                    <DialogFooter className="mt-2 sm:justify-start">
                        <Button
                            onClick={handleAddMed}
                            disabled={!newName}
                            className="w-full h-[56px] rounded-[16px] bg-gray-900 hover:bg-black text-[17px] font-bold tracking-wide shadow-lg shadow-gray-200"
                        >
                            Save Schedule
                        </Button>
                    </DialogFooter>
                </DialogContent>

                {/* FOOTER BAR */}
                <div className="bg-[#d9d9d9] border-t border-gray-400 h-[80px] px-10 flex items-center justify-between pb-safe">
                    <button onClick={onBack} className="flex items-center justify-center">
                        <Home className="h-[30px] w-[30px] text-gray-900 stroke-[2.2]" />
                    </button>
                    <CalendarIcon className="h-[30px] w-[30px] text-gray-900 stroke-[2.2]" />
                    <TestTube2 className="h-[30px] w-[30px] text-gray-900 stroke-[2.2]" />
                    <Phone className="h-[30px] w-[30px] text-gray-900 stroke-[2.2]" />
                </div>
            </div>
        </Dialog>
    );
};

export default MedicationSchedule;
