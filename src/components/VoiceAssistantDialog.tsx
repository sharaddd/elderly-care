import { useState, useEffect } from "react";
import { X, Mic } from "lucide-react";
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";

interface VoiceAssistantDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const VoiceAssistantDialog = ({ open, onOpenChange }: VoiceAssistantDialogProps) => {
    const [bars, setBars] = useState<number[]>(new Array(12).fill(10));

    // Animate the bars when open
    useEffect(() => {
        if (!open) return;

        const interval = setInterval(() => {
            setBars(prev => prev.map(() => Math.floor(Math.random() * 40) + 10));
        }, 100);

        return () => clearInterval(interval);
    }, [open]);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="fixed bottom-6 left-[50%] translate-x-[-50%] top-auto translate-y-0 sm:bottom-auto sm:top-[50%] sm:translate-y-[-50%] sm:max-w-[400px] w-[94%] rounded-[32px] bg-white/95 backdrop-blur-xl p-0 overflow-hidden shadow-2xl border-none z-[100] outline-none animate-in slide-in-from-bottom-5 duration-300">
                <div className="relative p-8 pt-12 flex flex-col items-center justify-center min-h-[340px]">
                    {/* Close button is handled by DialogContent but we can hide it and use our own or keep it */}

                    {/* Assistant Info */}
                    <div className="flex flex-col items-center gap-2 mb-10">
                        <div className="bg-blue-50 h-14 w-14 rounded-full flex items-center justify-center mb-2 shadow-sm border border-blue-100/50 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-indigo-600/10 animate-pulse" />
                            <Mic className="h-6 w-6 text-blue-600 relative z-10" />
                        </div>
                        <h2 className="text-[20px] font-black text-gray-900 tracking-tight leading-tight">How can I help you?</h2>
                        <p className="text-gray-400 text-[14px] font-semibold uppercase tracking-widest">Listening...</p>
                    </div>

                    {/* Fluid Wave Animation Container */}
                    <div className="flex items-center justify-center gap-[6px] h-24 w-full mb-10">
                        {bars.map((height, i) => (
                            <div
                                key={i}
                                className="w-[6px] rounded-full transition-all duration-150 ease-in-out shadow-sm"
                                style={{
                                    height: `${height}px`,
                                    background: `linear-gradient(to bottom, #2563eb, #4f46e5)`,
                                    opacity: 0.4 + (i % 6) * 0.1,
                                    transform: `translateY(${(40 - height) / 2}px)`
                                }}
                            />
                        ))}
                    </div>

                    {/* Transcription Placeholder */}
                    <div className="text-center px-4 w-full">
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-100 to-transparent mb-6" />
                        <p className="text-[15px] text-gray-400 font-bold tracking-[0.2em] animate-pulse">
                            ••••••••••••
                        </p>
                    </div>

                    {/* Decorative Background Elements */}
                    <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-blue-100/30 rounded-full blur-[64px] -z-10" />
                    <div className="absolute -top-16 -right-16 w-40 h-40 bg-indigo-100/20 rounded-full blur-[64px] -z-10" />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default VoiceAssistantDialog;
