import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowLeft, HelpCircle, FileText, BadgeCheck, History, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { useState } from "react";

interface InsuranceClaimsDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    isPage?: boolean;
}

const InsuranceClaimsDialog = ({ open, onOpenChange, isPage }: InsuranceClaimsDialogProps) => {
    const content = (
        <div className={`flex flex-col ${isPage ? 'h-full min-h-screen' : 'h-[85vh]'} relative`}>
            {/* Header */}
            <div className={`bg-white px-6 pt-6 pb-4 flex items-center justify-between border-b border-gray-100 ${isPage ? 'sticky top-0 z-20' : ''}`}>
                <button
                    onClick={() => onOpenChange(false)}
                    className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                    <ArrowLeft className="h-5 w-5 text-gray-900" />
                </button>
                <h2 className="text-gray-900 font-black text-[15px] uppercase tracking-[0.15em] flex-1 text-center pr-2">insurance claims</h2>
                <button className="px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 flex items-center gap-1.5 hover:bg-indigo-100 transition-colors group">
                    <span className="text-[11px] font-black text-indigo-600 uppercase tracking-wider">Help</span>
                    <HelpCircle className="h-3.5 w-3.5 text-indigo-500 group-hover:rotate-12 transition-transform" />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto pb-32">
                {/* Hero Section: Start Your Claim */}
                <div className="px-6 py-6">
                    <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[28px] p-6 shadow-xl shadow-indigo-100 relative overflow-hidden group">
                        <div className="relative z-10">
                            <div className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20">
                                <Zap className="h-6 w-6 text-white fill-white" />
                            </div>
                            <h3 className="text-white text-[22px] font-black tracking-tight leading-tight">Start Your Claim</h3>
                            <p className="text-white/80 text-[13px] font-medium mt-1 leading-relaxed max-w-[200px]">
                                Go for a direct reimbursement or opt for a cashless treatment.
                            </p>

                            <div className="mt-6 flex flex-col gap-2.5">
                                <button className="w-full bg-white text-indigo-700 py-3 rounded-2xl font-black text-[13px] uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 hover:bg-slate-50 active:scale-95 transition-all">
                                    New Reimbursement
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                                <button className="w-full bg-white/10 backdrop-blur-md text-white border border-white/20 py-3 rounded-2xl font-black text-[13px] uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/20 active:scale-95 transition-all">
                                    Cashless Treatment
                                </button>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 h-32 w-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                        <ShieldCheck className="absolute bottom-4 right-4 h-24 w-24 text-white/5 -rotate-12" />
                    </div>
                </div>

                {/* Middle Section: Manage Insurance */}
                <div className="px-6 flex flex-col gap-4">
                    <div className="flex items-center justify-between px-1">
                        <h4 className="text-gray-900 text-[14px] font-black uppercase tracking-[0.1em]">Manage Insurance</h4>
                        <span className="text-indigo-600 text-[11px] font-bold">View Policy</span>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                        <div className="bg-white rounded-[22px] p-4 border border-gray-100 shadow-sm flex items-center justify-between group hover:border-indigo-100 transition-all cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
                                    <FileText className="h-6 w-6 text-gray-400 group-hover:text-indigo-500" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[14px] font-black text-gray-900">Upload Documents</span>
                                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-tighter">Reports, Bills & Form 15A</span>
                                </div>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-indigo-400" />
                        </div>

                        <div className="bg-white rounded-[22px] p-4 border border-gray-100 shadow-sm flex items-center justify-between group hover:border-emerald-100 transition-all cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                                    <BadgeCheck className="h-6 w-6 text-gray-400 group-hover:text-emerald-500" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[14px] font-black text-gray-900">Policy Coverage</span>
                                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-tighter">Check your benefits</span>
                                </div>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-emerald-400" />
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Past Claims */}
                <div className="mt-8 px-6 flex flex-col gap-4">
                    <div className="flex items-center gap-2 px-1 text-gray-400">
                        <History className="h-4 w-4" />
                        <h4 className="text-[11px] font-black uppercase tracking-widest">Past Claims Settlement</h4>
                    </div>

                    {/* Claims List Shadow Box */}
                    <div className="bg-white rounded-[28px] border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-5 flex flex-col gap-4">
                            {/* Claim 1 */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center">
                                        <FileText className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-gray-900 text-[13px] font-black tracking-tight">Apollo Hospital</span>
                                        <span className="text-gray-400 text-[10px] font-bold uppercase tracking-tighter">12 Feb • Ref #8273</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-gray-900 text-[13px] font-black tracking-tight">₹14,500</span>
                                    <span className="text-emerald-600 text-[10px] font-bold uppercase tracking-tighter bg-emerald-50 px-1.5 py-0.5 rounded-full">Settled</span>
                                </div>
                            </div>

                            <div className="h-px w-full bg-slate-50" />

                            {/* Claim 2 */}
                            <div className="flex items-center justify-between opacity-80">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center">
                                        <FileText className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-gray-900 text-[13px] font-black tracking-tight">Health Diagnostics</span>
                                        <span className="text-gray-400 text-[10px] font-bold uppercase tracking-tighter">04 Jan • Ref #4102</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-gray-900 text-[13px] font-black tracking-tight">₹2,800</span>
                                    <span className="text-indigo-600 text-[10px] font-bold uppercase tracking-tighter bg-indigo-50 px-1.5 py-0.5 rounded-full">In Review</span>
                                </div>
                            </div>
                        </div>

                        <button className="w-full py-4 bg-slate-50 border-t border-gray-100 text-gray-500 text-[11px] font-black uppercase tracking-widest hover:bg-slate-100 transition-colors">
                            View All History
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    if (isPage) {
        return (
            <div className="fixed inset-0 z-[60] bg-slate-50 w-full overflow-y-auto overflow-x-hidden md:max-w-none">
                <div className="max-w-[400px] mx-auto min-h-screen bg-slate-50">
                    {content}
                </div>
            </div>
        );
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[400px] w-[92%] rounded-[32px] p-0 overflow-hidden border-none bg-slate-50 shadow-2xl [&>button:last-child]:hidden">
                {content}
            </DialogContent>
        </Dialog>
    );
};

export default InsuranceClaimsDialog;
