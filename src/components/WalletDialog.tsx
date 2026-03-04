import { useState } from "react";
import { ArrowLeft, Settings, Plus, Wallet as WalletIcon, History, Filter, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Transaction {
    id: number;
    amount: number;
    by: string;
    type: "added" | "deduction" | "refund";
    date: string;
}

interface WalletDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const WalletDialog = ({ open, onOpenChange }: WalletDialogProps) => {
    const [activeFilter, setActiveFilter] = useState("All Transactions");

    const filters = ["All Transactions", "Added", "Deductions", "Refund"];

    const transactions: Transaction[] = [
        { id: 1, amount: -200, by: "Own", type: "deduction", date: "Today, 12:30 PM" },
        { id: 2, amount: 300, by: "Rahul", type: "added", date: "Yesterday" },
        { id: 3, amount: 500, by: "Purnima", type: "added", date: "2 March" },
        { id: 4, amount: 600, by: "Rahul", type: "added", date: "1 March" },
        { id: 5, amount: 600, by: "Saksham", type: "added", date: "28 Feb" },
        { id: 6, amount: -150, by: "Nurses", type: "deduction", date: "27 Feb" },
        { id: 7, amount: 1000, by: "Self", type: "added", date: "25 Feb" },
    ];

    const filteredTransactions = transactions.filter(t => {
        if (activeFilter === "All Transactions") return true;
        if (activeFilter === "Added") return t.type === "added";
        if (activeFilter === "Deductions") return t.type === "deduction";
        if (activeFilter === "Refund") return t.type === "refund";
        return true;
    });

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[420px] w-full h-[90vh] sm:h-auto overflow-hidden p-0 rounded-[28px] border-none shadow-2xl bg-[#fafafa]">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 bg-white border-b border-gray-100">
                    <button onClick={() => onOpenChange(false)} className="hover:bg-gray-100 p-2 rounded-full transition-colors">
                        <ArrowLeft className="h-6 w-6 text-gray-800" />
                    </button>
                    <h2 className="text-[17px] font-bold text-gray-900 tracking-tight">ElderlyCare Wallet</h2>
                    <button className="hover:bg-gray-100 p-2 rounded-full transition-colors">
                        <Settings className="h-5 w-5 text-gray-600" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-6 pb-8 space-y-8">
                    {/* Balance Card */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-600 to-blue-500 rounded-[30px] p-7 shadow-xl shadow-blue-200/50">
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl mb-4">
                                <WalletIcon className="h-7 w-7 text-white" />
                            </div>
                            <span className="text-blue-50 text-[13px] font-bold tracking-[0.1em] uppercase opacity-90 mb-1">Your Balance</span>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-white text-[18px] font-medium">Rs.</span>
                                <span className="text-white text-[38px] font-black tracking-tight leading-none">1,200</span>
                            </div>
                            <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 rounded-2xl h-12 font-bold text-[15px] shadow-sm transition-all active:scale-[0.98]">
                                <Plus className="h-5 w-5 mr-2 stroke-[3]" />
                                Add Money
                            </Button>
                        </div>
                        {/* Abstract background circles */}
                        <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl" />
                    </div>

                    {/* Transaction History Section */}
                    <div className="space-y-5">
                        <div className="flex items-center justify-between">
                            <h3 className="text-[14px] font-black text-gray-400 uppercase tracking-widest pl-1">Transaction History</h3>
                            <History className="h-4 w-4 text-gray-400" />
                        </div>

                        {/* Horizontal scrollable filters */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar -mx-1 px-1">
                            {filters.map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`whitespace-nowrap px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all ${activeFilter === filter
                                            ? "bg-indigo-600 text-white shadow-md shadow-indigo-100"
                                            : "bg-white text-gray-500 border border-gray-100 hover:bg-gray-50"
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>

                        {/* Transaction List */}
                        <div className="space-y-3">
                            {filteredTransactions.map((tx) => (
                                <div
                                    key={tx.id}
                                    className="bg-white p-4 rounded-2xl border border-gray-50 flex items-center justify-between transition-all hover:border-gray-200 group shadow-sm hover:shadow-md"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`h-11 w-11 rounded-xl flex items-center justify-center ${tx.amount > 0 ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
                                            }`}>
                                            {tx.amount > 0 ? <ArrowUpRight className="h-5 w-5" /> : <ArrowDownLeft className="h-5 w-5" />}
                                        </div>
                                        <div>
                                            <p className="text-[14px] font-bold text-gray-900 leading-tight">
                                                {tx.amount > 0 ? `+ Rs. ${tx.amount}` : `- Rs. ${Math.abs(tx.amount)}`}
                                            </p>
                                            <p className="text-[12px] font-medium text-gray-400">
                                                By {tx.by} • {tx.date}
                                            </p>
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-300 hover:text-gray-600 hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowUpRight className="h-4 w-4" />
                                    </Button>
                                </div>
                            ))}

                            {filteredTransactions.length === 0 && (
                                <div className="py-12 flex flex-col items-center text-center">
                                    <div className="h-16 w-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                                        <Filter className="h-6 w-6 text-gray-300" />
                                    </div>
                                    <p className="text-gray-400 text-[14px] font-medium">No {activeFilter} found</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default WalletDialog;
