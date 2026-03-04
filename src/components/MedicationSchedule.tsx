import { ArrowLeft, Calendar, CheckCircle2, PlusCircle, Plus, Home, Calendar as CalendarIcon, TestTube2, Phone } from "lucide-react";

interface MedicationScheduleProps {
    onBack: () => void;
}

const MedicationSchedule = ({ onBack }: MedicationScheduleProps) => {
    return (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col animate-in slide-in-from-right duration-300 overflow-hidden">
            {/* FIXED TOP NAV BAR */}
            <div className="sticky top-0 bg-white border-b border-gray-400 z-50 p-4 pt-10 flex items-center gap-3">
                <button onClick={onBack} className="flex items-center justify-center -ml-1">
                    <ArrowLeft className="h-[36px] w-[36px] text-gray-900 stroke-[2.5]" />
                </button>
                <span className="text-[22px] font-medium text-gray-900 tracking-tight">Today's medication schedule</span>
            </div>

            {/* SCROLLABLE CONTENT AREA */}
            <div className="flex-1 overflow-y-auto">
                <div className="p-5 space-y-8 pb-32">

                    {/* Date Picker Row */}
                    <div className="inline-flex items-center gap-2 bg-[#d9d9d9] px-4 py-2 rounded-[2px] cursor-pointer">
                        <span className="text-[18px] font-normal text-gray-900">4th March 2026</span>
                        <Calendar className="h-[22px] w-[22px] text-gray-800" />
                    </div>

                    {/* Schedule Blocks */}
                    <div className="space-y-10">

                        {/* 11:00 AM block */}
                        <div className="space-y-3">
                            <span className="text-[18px] font-normal text-gray-900 block pl-1">11:00 AM</span>
                            <div className="bg-[#eeeeee] p-3 space-y-3 rounded-[2px] min-h-[120px]">
                                <div className="flex items-center justify-between">
                                    <div className="bg-[#b3f3bc] px-3 py-2 rounded-[2px]">
                                        <span className="text-[17px] font-normal text-gray-900">Norvasc 2.5 mg</span>
                                    </div>
                                    <CheckCircle2 className="h-[30px] w-[30px] text-[#4caf50] fill-[#4caf50]/10 stroke-[2]" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="bg-[#f8e2e2] px-3 py-2 rounded-[2px]">
                                        <span className="text-[17px] font-normal text-gray-900">Leverothxyine 5 mg</span>
                                    </div>
                                    <PlusCircle className="h-[30px] w-[30px] text-gray-900 stroke-[2]" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="bg-[#f8e2e2] px-3 py-2 rounded-[2px]">
                                        <span className="text-[17px] font-normal text-gray-900">Amoxycylin 200 mg</span>
                                    </div>
                                    <PlusCircle className="h-[30px] w-[30px] text-gray-900 stroke-[2]" />
                                </div>
                            </div>
                        </div>

                        {/* 03:00 PM block */}
                        <div className="space-y-3">
                            <span className="text-[18px] font-normal text-gray-900 block pl-1">03:00 PM</span>
                            <div className="bg-[#eeeeee] p-3 space-y-3 rounded-[2px]">
                                <div className="flex items-center justify-between">
                                    <div className="bg-[#b3f3bc] px-3 py-2 rounded-[2px]">
                                        <span className="text-[17px] font-normal text-gray-900">Norvasc 2.5 mg</span>
                                    </div>
                                    <CheckCircle2 className="h-[30px] w-[30px] text-[#4caf50] fill-[#4caf50]/10 stroke-[2]" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="bg-[#f8e2e2] px-3 py-2 rounded-[2px]">
                                        <span className="text-[17px] font-normal text-gray-900">Leverothxyine 5 mg</span>
                                    </div>
                                    <PlusCircle className="h-[30px] w-[30px] text-gray-900 stroke-[2]" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="bg-[#f8e2e2] px-3 py-2 rounded-[2px]">
                                        <span className="text-[17px] font-normal text-gray-900">Amoxycylin 200 mg</span>
                                    </div>
                                    <PlusCircle className="h-[30px] w-[30px] text-gray-900 stroke-[2]" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="bg-[#f8e2e2] px-3 py-2 rounded-[2px]">
                                        <span className="text-[17px] font-normal text-gray-900">Ofloxacin 500 mg</span>
                                    </div>
                                    <PlusCircle className="h-[30px] w-[30px] text-gray-900 stroke-[2]" />
                                </div>
                            </div>
                        </div>

                        {/* Another 03:00 PM block */}
                        <div className="space-y-3">
                            <span className="text-[18px] font-normal text-gray-900 block pl-1">03:00 PM</span>
                            <div className="bg-[#eeeeee] p-3 space-y-3 rounded-[2px]">
                                <div className="flex items-center justify-between">
                                    <div className="bg-[#b3f3bc] px-3 py-2 rounded-[2px]">
                                        <span className="text-[17px] font-normal text-gray-900">Norvasc 2.5 mg</span>
                                    </div>
                                    <CheckCircle2 className="h-[30px] w-[30px] text-[#4caf50] fill-[#4caf50]/10 stroke-[2]" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="bg-[#f8e2e2] px-3 py-2 rounded-[2px]">
                                        <span className="text-[17px] font-normal text-gray-900">Leverothxyine 5 mg</span>
                                    </div>
                                    <PlusCircle className="h-[30px] w-[30px] text-gray-900 stroke-[2]" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="bg-[#f8e2e2] px-3 py-2 rounded-[2px]">
                                        <span className="text-[17px] font-normal text-gray-900">Amoxycylin 200 mg</span>
                                    </div>
                                    <PlusCircle className="h-[30px] w-[30px] text-gray-900 stroke-[2]" />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Add new or Edit button */}
                    <div className="pt-4">
                        <button className="w-full bg-[#d9d9d9] h-[90px] rounded-[2px] flex items-center justify-center gap-4 text-gray-900 active:bg-gray-400 transition-colors">
                            <span className="text-[24px] font-normal">Add new or Edit</span>
                            <Plus className="h-[44px] w-[44px] stroke-[2]" />
                        </button>
                    </div>
                </div>
            </div>

            {/* FOOTER BAR */}
            <div className="bg-[#d9d9d9] border-t border-gray-400 h-[90px] px-10 flex items-center justify-between pb-safe">
                <button onClick={onBack} className="flex items-center justify-center">
                    <Home className="h-[38px] w-[38px] text-gray-900 stroke-[2]" />
                </button>
                <CalendarIcon className="h-[38px] w-[38px] text-gray-900 stroke-[2]" />
                <TestTube2 className="h-[38px] w-[38px] text-gray-900 stroke-[2]" />
                <Phone className="h-[38px] w-[38px] text-gray-900 stroke-[2]" />
            </div>

        </div>
    );
};

export default MedicationSchedule;
