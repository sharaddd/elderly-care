import React, { useState, useEffect } from "react";
import {
    X,
    Zap,
    Image as ImageIcon,
    Circle,
    RefreshCcw,
    Scan,
    FileText,
    ShieldCheck
} from "lucide-react";
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";

interface PrescriptionScannerProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    isPage?: boolean;
}

const PrescriptionScanner = ({ open, onOpenChange, isPage = false }: PrescriptionScannerProps) => {
    const [scanProgress, setScanProgress] = useState(0);
    const [isCapturing, setIsCapturing] = useState(false);

    // Simulate scanning line animation
    useEffect(() => {
        if (open) {
            const interval = setInterval(() => {
                setScanProgress((prev) => (prev >= 100 ? 0 : prev + 2));
            }, 30);
            return () => clearInterval(interval);
        }
    }, [open]);

    const handleCapture = () => {
        setIsCapturing(true);
        setTimeout(() => {
            setIsCapturing(false);
            // Simulate processing
            alert("Prescription captured! Processing with AI...");
            onOpenChange(false);
        }, 800);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className={`w-full h-full max-w-none p-0 m-0 rounded-none border-none shadow-none bg-black flex flex-col ${isPage ? 'absolute' : 'fixed'} inset-0 left-0 top-0 translate-x-0 translate-y-0 z-[101] duration-300 data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom-full data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom-full`}>

                {/* Camera Viewfinder Container */}
                <div className="relative flex-1 flex flex-col items-center justify-center overflow-hidden">

                    {/* Simulated Camera Feed (Dark Gradient with Noise/Pattern) */}
                    <div className="absolute inset-0 bg-[#050505] opacity-90 overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(#111_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
                        {/* Simulated Medical Image Background (Blurred) */}
                        <div className="absolute inset-4 rounded-[32px] border-2 border-white/10 overflow-hidden">
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />
                        </div>
                    </div>

                    {/* Scanning Frame */}
                    <div className="relative w-[85%] aspect-[3/4] rounded-[24px] border-2 border-white/30 flex items-center justify-center overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]">
                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-blue-500 rounded-tl-xl" />
                        <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-blue-500 rounded-tr-xl" />
                        <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-blue-500 rounded-bl-xl" />
                        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-blue-500 rounded-br-xl" />

                        {/* Animated Scanning Line */}
                        <div
                            className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.8)] z-10"
                            style={{ top: `${scanProgress}%` }}
                        />

                        {/* Feedback Text */}
                        <div className="flex flex-col items-center gap-3 animate-pulse">
                            <FileText className="h-12 w-12 text-white/20" />
                            <p className="text-white/40 font-black text-[10px] uppercase tracking-[0.2em]">Align prescription in frame</p>
                        </div>
                    </div>

                    {/* Top Controls */}
                    <div className="absolute top-12 left-0 right-0 px-6 flex items-center justify-between">
                        <button onClick={() => onOpenChange(false)} className="bg-white/10 backdrop-blur-md p-3 rounded-full text-white active:scale-90 transition-transform">
                            <X className="h-6 w-6" />
                        </button>
                        <div className="flex items-center gap-2 bg-blue-600/20 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/20 text-blue-400">
                            <Scan className="h-4 w-4 animate-spin-slow" />
                            <span className="text-[11px] font-[900] uppercase tracking-wider">AI Vision Active</span>
                        </div>
                        <button className="bg-white/10 backdrop-blur-md p-3 rounded-full text-white active:scale-90 transition-transform">
                            <Zap className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Flash Effect on Capture */}
                    {isCapturing && (
                        <div className="absolute inset-0 bg-white z-50 animate-out fade-out duration-700" />
                    )}
                </div>

                {/* Bottom Controls Bar */}
                <div className="bg-black/90 backdrop-blur-xl px-10 pb-16 pt-8 flex items-center justify-between border-t border-white/5">
                    <button className="flex flex-col items-center gap-2 group">
                        <div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center group-active:scale-90 transition-all border border-white/10">
                            <ImageIcon className="h-6 w-6 text-white/70" />
                        </div>
                        <span className="text-[10px] font-bold text-white/50 uppercase tracking-tighter">Gallery</span>
                    </button>

                    <button
                        onClick={handleCapture}
                        className="relative group p-1"
                    >
                        <div className="h-20 w-20 rounded-full border-4 border-white/20 flex items-center justify-center group-active:scale-95 transition-all">
                            <div className="h-16 w-16 rounded-full bg-white group-hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]" />
                        </div>
                        <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>

                    <button className="flex flex-col items-center gap-2 group">
                        <div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center group-active:scale-90 transition-all border border-white/10">
                            <RefreshCcw className="h-6 w-6 text-white/70" />
                        </div>
                        <span className="text-[10px] font-bold text-white/50 uppercase tracking-tighter">Rotate</span>
                    </button>
                </div>

                {/* Secure Badge */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/5">
                        <ShieldCheck className="h-3 w-3 text-blue-500" />
                        <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.1em]">HIPAA Secure Encryption</span>
                    </div>
                </div>

            </DialogContent>
        </Dialog>
    );
};

export default PrescriptionScanner;
