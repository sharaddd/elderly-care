import { useState } from "react";
import {
    ArrowLeft,
    HelpCircle,
    Video,
    History,
    ChevronRight,
    Clock,
    User,
    PhoneForwarded,
    ShieldCheck
} from "lucide-react";
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";

interface PastCallCardProps {
    doctorName: string;
    duration: string;
    date: string;
    type: string;
}

const PastCallCard = ({ doctorName, duration, date, type }: PastCallCardProps) => (
    <div className="bg-white rounded-[24px] p-4 shadow-sm border border-gray-50 flex items-center justify-between transition-all hover:shadow-md active:scale-[0.98] group">
        <div className="flex items-center gap-4">
            <div className="bg-emerald-50 h-12 w-12 rounded-2xl flex items-center justify-center">
                <Video className="h-6 w-6 text-emerald-600" />
            </div>
            <div className="flex flex-col">
                <h4 className="text-[14px] font-black text-gray-900 tracking-tight">{doctorName}</h4>
                <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{type}</span>
                    <div className="h-1 w-1 rounded-full bg-gray-300" />
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{duration}</span>
                </div>
            </div>
        </div>
        <div className="flex flex-col items-end gap-1">
            <span className="text-[11px] font-bold text-gray-400">{date}</span>
            <button className="text-[11px] font-black text-emerald-600 flex items-center gap-0.5 uppercase tracking-wider hover:opacity-80">
                Record
                <ChevronRight className="h-3.5 w-3.5" />
            </button>
        </div>
    </div>
);

interface VideoConsultDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const VideoConsultDialog = ({ open, onOpenChange }: VideoConsultDialogProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="w-full h-full max-w-none p-0 m-0 rounded-none border-none shadow-none bg-[#fafafa] flex flex-col inset-0 left-0 top-0 translate-x-0 translate-y-0 z-[100] duration-300 data-[state=open]:animate-in data-[state=open]:slide-in-from-right-full data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right-full shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 bg-white border-b border-gray-100 sticky top-0 z-20">
                    <button onClick={() => onOpenChange(false)} className="hover:bg-gray-100 p-2 rounded-full transition-colors active:scale-90">
                        <ArrowLeft className="h-6 w-6 text-gray-800" />
                    </button>
                    <h2 className="text-[17px] font-black text-gray-900 tracking-tight uppercase">Video Consult</h2>
                    <button className="bg-gray-100 px-4 py-1.5 rounded-full text-[13px] font-black text-gray-600 hover:bg-gray-200 transition-colors active:scale-95 flex items-center gap-1.5">
                        <HelpCircle className="h-3.5 w-3.5" />
                        HELP
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-8 no-scrollbar space-y-8">

                    {/* Availability Hero */}
                    <div className="relative overflow-hidden bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm flex flex-col items-center text-center gap-6">
                        <div className="relative">
                            <div className="bg-emerald-50 h-20 w-20 rounded-[28px] flex items-center justify-center animate-pulse">
                                <Video className="h-10 w-10 text-emerald-600" />
                            </div>
                            <div className="absolute -bottom-1 -right-1 bg-green-500 h-5 w-5 rounded-full border-4 border-white animate-pulse" />
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-[22px] font-black text-gray-900 tracking-tighter leading-tight">
                                3 specialists are<br />available now
                            </h3>
                            <p className="text-[13px] font-bold text-gray-400 max-w-[200px] mx-auto">
                                Skip the wait and connect with a doctor instantly.
                            </p>
                        </div>

                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-5 rounded-[24px] shadow-xl shadow-indigo-100 transition-all active:scale-[0.97] flex items-center justify-center gap-3 group">
                            <PhoneForwarded className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            CALL NOW
                        </button>

                        <div className="flex items-center gap-4 pt-2">
                            <div className="flex items-center gap-1.5 grayscale opacity-60">
                                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                                <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">End-to-End Encrypted</span>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50/40 rounded-full -mr-12 -mt-12 blur-3xl saturate-150" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-50/40 rounded-full -ml-12 -mb-12 blur-3xl saturate-150" />
                    </div>

                    {/* Past Calls Section */}
                    <div className="space-y-5">
                        <div className="flex items-center justify-between px-1">
                            <div className="flex items-center gap-2">
                                <History className="h-5 w-5 text-gray-900" />
                                <h3 className="text-[17px] font-black text-gray-900 tracking-tight uppercase">Past Calls</h3>
                            </div>
                            <button className="text-[12px] font-black text-indigo-600 uppercase tracking-widest hover:opacity-80">
                                View All
                            </button>
                        </div>

                        <div className="flex flex-col gap-3">
                            <PastCallCard
                                doctorName="Dr. Richa Sharma"
                                type="General Physician"
                                duration="22 mins"
                                date="Today, 11:45 AM"
                            />
                            <PastCallCard
                                doctorName="Dr. Aniket Verma"
                                type="Neurologist"
                                duration="15 mins"
                                date="Yesterday"
                            />
                            <PastCallCard
                                doctorName="Dr. Sarah Jones"
                                type="Cardiologist"
                                duration="45 mins"
                                date="2 days ago"
                            />
                        </div>

                        {/* Show More Placeholder Style */}
                        <button className="w-full py-4 border-2 border-dashed border-gray-100 rounded-[24px] text-[13px] font-black text-gray-300 uppercase tracking-widest hover:border-emerald-100 hover:text-emerald-300 transition-all active:scale-[0.99]">
                            Show more previous logs
                        </button>
                    </div>

                </div>



            </DialogContent>
        </Dialog>
    );
};

export default VideoConsultDialog;
