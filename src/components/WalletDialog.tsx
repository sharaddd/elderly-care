import { useState } from "react";
import { ArrowLeft, Settings, Plus, Wallet as WalletIcon, History, Filter, ArrowUpRight, ArrowDownLeft, X } from "lucide-react";
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
    const [isAddMoneyOpen, setIsAddMoneyOpen] = useState(false);
    const [amount, setAmount] = useState("");

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
            <DialogContent className="w-full h-full max-w-none p-0 m-0 rounded-none border-none shadow-none bg-[#fafafa] flex flex-col inset-0 left-0 top-0 translate-x-0 translate-y-0 z-[100] duration-300 data-[state=open]:animate-in data-[state=open]:slide-in-from-right-full data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right-full">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 bg-white border-b border-gray-100 sticky top-0 z-20">
                    <button onClick={() => onOpenChange(false)} className="hover:bg-gray-100 p-2 rounded-full transition-colors active:scale-90">
                        <ArrowLeft className="h-6 w-6 text-gray-800" />
                    </button>
                    <h2 className="text-[17px] font-bold text-gray-900 tracking-tight">ElderlyCare Wallet</h2>
                    <button className="hover:bg-gray-100 p-2 rounded-full transition-colors active:scale-90">
                        <Settings className="h-5 w-5 text-gray-600" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-6 pb-8 space-y-8 no-scrollbar">
                    {/* Balance Card */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-600 to-blue-500 rounded-[30px] p-7 shadow-xl shadow-blue-200/50">
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl mb-4">
                                <WalletIcon className="h-7 w-7 text-white" />
                            </div>
                            <span className="text-blue-50 text-[13px] font-bold tracking-[0.1em] uppercase opacity-90 mb-1">Your Balance</span>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-white text-[24px] font-bold">₹</span>
                                <span className="text-white text-[38px] font-black tracking-tight leading-none">1,200</span>
                            </div>
                            <Button
                                onClick={() => setIsAddMoneyOpen(true)}
                                className="w-full bg-white text-blue-600 hover:bg-blue-50 rounded-2xl h-12 font-bold text-[15px] shadow-sm transition-all active:scale-[0.98]"
                            >
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
                                                {tx.amount > 0 ? `+ ₹${tx.amount}` : `- ₹${Math.abs(tx.amount)}`}
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

            {/* Add Money Sub-Dialog */}
            <Dialog open={isAddMoneyOpen} onOpenChange={setIsAddMoneyOpen}>
                <DialogContent className="sm:max-w-[380px] w-[90%] rounded-[32px] p-0 border-none bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 z-[110]">
                    <div className="p-7 space-y-7">
                        <div className="flex items-center justify-between">
                            <h2 className="text-[20px] font-black text-gray-900 tracking-tight">Add Money</h2>
                        </div>

                        <div className="space-y-5">
                            <div className="space-y-2.5">
                                <Label htmlFor="amount" className="text-[12px] font-black text-gray-400 uppercase tracking-[0.1em] ml-1">Enter Amount (Rs.)</Label>
                                <div className="relative group">
                                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-[20px] transition-colors group-focus-within:text-indigo-600">₹</span>
                                    <Input
                                        id="amount"
                                        type="number"
                                        placeholder="0.00"
                                        className="bg-gray-50 border-gray-100 h-16 pl-12 text-[24px] font-black text-gray-900 placeholder:text-gray-200 rounded-2xl focus-visible:ring-indigo-600/10 focus-visible:ring-8 focus-visible:border-indigo-600 focus-visible:bg-white transition-all shadow-sm"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2.5">
                                {["+100", "+500", "+1000"].map((add) => (
                                    <button
                                        key={add}
                                        onClick={() => setAmount(prev => String((Number(prev) || 0) + Number(add.replace('+', ''))))}
                                        className="flex-1 py-3 rounded-xl bg-gray-50 hover:bg-indigo-600 text-gray-600 hover:text-white text-[14px] font-bold border border-gray-100 hover:border-indigo-600 transition-all active:scale-95 shadow-sm"
                                    >
                                        {add}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <Button
                            onClick={() => {
                                setIsAddMoneyOpen(false);
                                setAmount("");
                            }}
                            disabled={!amount || Number(amount) <= 0}
                            className="w-full h-15 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-[17px] shadow-xl shadow-indigo-200 transition-all active:scale-[0.98] disabled:opacity-40 disabled:grayscale"
                        >
                            Proceed to Pay
                        </Button>

                        <p className="text-center text-[12px] font-medium text-gray-400 px-4">
                            Secure payment powered by ElderlyCare Bank. No hidden charges apply.
                        </p>
                    </div>
                </DialogContent>
            </Dialog>
        </Dialog>
    );
};

export default WalletDialog;
