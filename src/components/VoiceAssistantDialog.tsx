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

    if (!open) return null;

    return (
        <div className="absolute inset-0 z-[100] flex flex-col items-center justify-end p-4 bg-black/40 animate-in fade-in duration-200">
            {/* Click away layer to close */}
            <div className="absolute inset-0" onClick={() => onOpenChange(false)} />

            <div className="w-full max-w-[400px] mb-4 rounded-[32px] bg-white/90 backdrop-blur-xl p-0 overflow-hidden shadow-2xl relative animate-in slide-in-from-bottom-5 duration-300">
                <button
                    onClick={() => onOpenChange(false)}
                    className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-20 cursor-pointer"
                >
                    <X className="h-5 w-5 text-gray-500" />
                </button>
                <div className="relative p-8 flex flex-col items-center justify-center min-h-[320px] pointer-events-auto">
                    {/* Close Button */}


                    {/* Assistant Info */}
                    <div className="flex flex-col items-center gap-2 mb-10">
                        <div className="bg-blue-50 p-3 rounded-2xl mb-2">
                            <Mic className="h-6 w-6 text-blue-600" />
                        </div>
                        <h2 className="text-[20px] font-bold text-gray-900">How can I help you?</h2>
                        <p className="text-gray-500 text-[14px] font-medium">I'm listening...</p>
                    </div>

                    {/* Wave Animation Container */}
                    <div className="flex items-center justify-center gap-[6px] h-20 w-full mb-8">
                        {bars.map((height, i) => (
                            <div
                                key={i}
                                className="w-[6px] bg-blue-600 rounded-full transition-all duration-150 ease-in-out"
                                style={{
                                    height: `${height}px`,
                                    opacity: 0.3 + (i % 5) * 0.15
                                }}
                            />
                        ))}
                    </div>

                    {/* Transcription Placeholder */}
                    <div className="text-center px-4">
                        <p className="text-[15px] text-gray-400 font-medium tracking-wide">
                            ..........
                        </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl -z-10" />
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl -z-10" />
                </div>
            </div>
        </div>
    );
};

export default VoiceAssistantDialog;
