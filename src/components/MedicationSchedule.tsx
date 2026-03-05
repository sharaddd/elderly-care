import { ArrowLeft, Calendar, CheckCircle2, PlusCircle, Plus, Home, Calendar as CalendarIcon, TestTube2, Phone, Clock, Undo2, Camera, X } from "lucide-react";
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
import { supabase } from "@/lib/supabase";
import { useEffect } from "react";
import { toast } from "sonner";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

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
    const [newImage, setNewImage] = useState<string | null>(null);
    const queryClient = useQueryClient();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

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

    // React Query for Medicines - Caches data so it's instant next time
    const { data: meds = [], isPending } = useQuery({
        queryKey: ['medications'],
        queryFn: async () => {
            const { data, error } = await supabase
                .from('medications')
                .select('*')
                .order('created_at', { ascending: true });
            if (error) throw error;
            return data || [];
        }
    });

    // Mutation for adding meds
    const addMutation = useMutation({
        mutationFn: async (newEntry: any) => {
            const { data, error } = await supabase
                .from('medications')
                .insert([newEntry])
                .select();
            if (error) throw error;
            return data[0];
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['medications'] });
            toast.success('Medicine added');
        },
        onError: () => toast.error('Failed to add medicine')
    });

    // Mutation for status changes
    const toggleMutation = useMutation({
        mutationFn: async ({ id, status, taken }: any) => {
            const { error } = await supabase
                .from('medications')
                .update({ status, taken })
                .eq('id', id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['medications'] });
        },
        onError: () => toast.error('Sync failed')
    });

    // Mutation for deleting
    const deleteMutation = useMutation({
        mutationFn: async (id: any) => {
            const { error } = await supabase
                .from('medications')
                .delete()
                .eq('id', id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['medications'] });
        },
        onError: () => toast.error('Delete failed')
    });

    const formatTime = (timeStr: string) => {
        const [hour, min] = timeStr.split(':');
        const h = parseInt(hour);
        const ampm = h >= 12 ? 'PM' : 'AM';
        const displayH = h % 12 || 12;
        return `${displayH.toString().padStart(2, '0')}:${min} ${ampm}`;
    };

    const handleAddMed = async () => {
        if (!newName) return;

        const newEntry = {
            time: formatTime(newTime),
            name: newName,
            taken: false,
            status: 'pending',
            image: newImage || undefined
        };

        addMutation.mutate(newEntry);

        setNewName("");
        setNewTime("11:00");
        setNewImage(null);
        setIsAddOpen(false);
    };

    const toggleMedStatus = (id: any) => {
        const med = meds.find((m: any) => m.id === id);
        if (!med) return;

        const newStatus = med.status === 'taken' ? 'pending' : 'taken';
        const newTaken = newStatus === 'taken';

        toggleMutation.mutate({ id, status: newStatus, taken: newTaken });
    };

    const removeMed = (id: any) => {
        const toDelete = meds.find((m: any) => m.id === id);
        setLastDeleted(toDelete);
        deleteMutation.mutate(id);
    };

    const undoDelete = async () => {
        if (lastDeleted) {
            const { id, created_at, ...rest } = lastDeleted;
            addMutation.mutate(rest);
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
                        <div key={med.id} className="grid grid-cols-[1fr,100px,40px] items-center animate-in fade-in slide-in-from-left-2 duration-300 gap-4">
                            {/* Medicine Name with Status Background */}
                            <div className={`${med.status === 'taken' ? 'bg-[#b3f3bc]' : 'bg-[#f8e2e2]'} px-3 py-2 rounded-[12px] shadow-sm transition-all duration-500`}>
                                <span className={`text-[14px] font-semibold text-gray-900 tracking-tight block truncate ${isEditMode ? 'opacity-50' : ''}`}>
                                    {med.name}
                                </span>
                            </div>

                            {/* Pill Pack Image - Perfectly Aligned and Zoomed */}
                            <div className="flex items-center justify-center">
                                {med.image && (
                                    <img
                                        src={med.image}
                                        alt={med.name}
                                        className="h-12 w-24 object-contain mix-blend-multiply opacity-100 hover:scale-110 transition-transform duration-300"
                                    />
                                )}
                            </div>

                            {/* Action Button - Aligned to Right */}
                            <div className="flex justify-end">
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
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const uniqueTimeSlots = Array.from(new Set(meds.map(m => m.time))).sort((a, b) => {
        const parseTime = (t: string) => {
            const [time, period] = t.split(' ');
            let [hours, minutes] = time.split(':').map(Number);
            if (period === 'PM' && hours !== 12) hours += 12;
            if (period === 'AM' && hours === 12) hours = 0;
            return hours * 60 + minutes;
        };
        return parseTime(a) - parseTime(b);
    });

    return (
        <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
            <div className="absolute inset-0 bg-white z-[60] flex flex-col animate-in slide-in-from-right duration-300 overflow-hidden">
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

                            {isPending ? (
                                <div className="flex flex-col items-center justify-center py-20 gap-4">
                                    <div className="h-10 w-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
                                    <p className="text-gray-400 font-bold uppercase tracking-widest text-[12px]">Loading your medications</p>
                                </div>
                            ) : (meds as any[]).length > 0 ? (
                                uniqueTimeSlots.map(slot => renderMedBlock(slot))
                            ) : (
                                <div className="flex flex-col items-center justify-center py-20 text-center px-6">
                                    <div className="bg-gray-50 h-20 w-20 rounded-full flex items-center justify-center mb-4">
                                        <PlusCircle className="h-10 w-10 text-gray-200" />
                                    </div>
                                    <h3 className="text-gray-900 font-bold text-[18px]">No medicines yet</h3>
                                    <p className="text-gray-400 text-sm mt-1">Add your first medication below to get started</p>
                                </div>
                            )}
                        </div>

                        {/* Bottom Padding */}
                        <div className="pt-6 relative z-10 pb-20" />
                    </div>
                </div>

                {/* FLOATING ACTION BUTTON */}
                <div className="absolute bottom-[100px] right-6 z-50">
                    <DialogTrigger asChild>
                        <button
                            className="h-[64px] w-[64px] bg-gray-900 rounded-full flex items-center justify-center text-white shadow-2xl shadow-gray-400 active:scale-90 transition-all border-4 border-white"
                        >
                            <Plus className="h-[32px] w-[32px] text-white stroke-[3]" />
                        </button>
                    </DialogTrigger>
                </div>
            </div>

            {/* SHARED DIALOG CONTENT - Outside the main div for better z-index and portal handling */}
            <DialogContent className="fixed left-[50%] translate-x-[-50%] top-[10%] translate-y-0 sm:top-[50%] sm:translate-y-[-50%] sm:max-w-[425px] w-[94%] rounded-[24px] border-none shadow-2xl p-6 duration-300 z-[100]">
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

                    {/* Camera Capture Section */}
                    <div className="grid gap-2">
                        <Label className="text-[14px] font-semibold text-gray-700 ml-1 uppercase tracking-wider">
                            Medicine Packet Photo
                        </Label>
                        <div className="flex flex-col items-center gap-3">
                            {newImage ? (
                                <div className="relative w-full h-[120px] bg-gray-50 rounded-[14px] border border-gray-100 overflow-hidden group transition-all animate-in zoom-in-95">
                                    <img src={newImage} alt="Preview" className="w-full h-full object-contain p-2" />
                                    <button
                                        type="button"
                                        onClick={() => setNewImage(null)}
                                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full shadow-lg hover:bg-red-600 transition-colors"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>
                            ) : (
                                <label className="w-full h-[80px] bg-gray-50 rounded-[14px] border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-gray-100 transition-all text-gray-400 hover:text-gray-600">
                                    <Camera size={24} />
                                    <span className="text-[12px] font-medium text-center px-4">Click a picture of the packet</span>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        capture="environment"
                                        className="hidden"
                                        onChange={handleFileChange}
                                    />
                                </label>
                            )}
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
        </Dialog>
    );
};

export default MedicationSchedule;
