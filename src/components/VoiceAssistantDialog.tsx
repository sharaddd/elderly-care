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
            <DialogContent className="sm:max-w-[400px] w-[90%] rounded-[32px] border-none bg-white/90 backdrop-blur-xl p-0 overflow-hidden shadow-2xl">
                <div className="relative p-8 flex flex-col items-center justify-center min-h-[320px]">
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
            </DialogContent>
        </Dialog>
    );
};

export default VoiceAssistantDialog;
