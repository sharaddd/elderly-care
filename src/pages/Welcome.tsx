import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LogoIcon from "@/components/LogoIcon";

const Welcome = () => {
    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleProceed = () => {
        // For now, any click on the arrow proceeds to the home page (Index)
        navigate("/dashboard");
    };

    return (
        <div className="min-h-screen bg-[#222222] flex items-center justify-center p-0 md:p-4 overflow-hidden font-sans">
            <div className="w-full max-w-[400px] h-[100dvh] md:h-[852px] bg-white relative shadow-2xl md:rounded-[40px] overflow-hidden flex flex-col animate-in fade-in duration-700">

                {/* Logo Branding Section */}
                <div className="flex-[0.5] flex flex-col items-center justify-center px-8 bg-gradient-to-b from-slate-50 to-white">
                    <div className="w-48 h-48 bg-white rounded-3xl shadow-sm flex items-center justify-center mb-6 overflow-hidden group hover:scale-105 transition-transform duration-500 border border-slate-100 p-8">
                        <LogoIcon className="w-full h-full" />
                    </div>
                    <h1 className="text-3xl font-semibold text-slate-800 tracking-tight animate-in slide-in-from-bottom-4 duration-700 delay-200">
                        ElderlyCare
                    </h1>
                    <p className="text-slate-500 mt-2 text-center animate-in slide-in-from-bottom-4 duration-700 delay-300">
                        Compassionate care for your loved ones
                    </p>
                </div>

                {/* Input Section */}
                <div className="flex-1 p-8 space-y-4 animate-in slide-in-from-bottom-10 duration-1000 delay-500 flex flex-col pt-12 justify-start">
                    <div className="space-y-2">
                        <p className="text-lg font-medium text-slate-700">Sign In using your phone number</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex flex-1 items-center bg-slate-50 border border-slate-200 rounded-2xl px-3 py-1 transition-all focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary">
                            <div className="flex items-center gap-1.5 border-r border-slate-300 pr-2 mr-0.5 text-slate-600 font-medium">
                                <span className="text-xl">🇮🇳</span>
                                <span className="text-lg">+91</span>
                                <ChevronDown size={14} className="text-slate-400" />
                            </div>
                            <Input
                                type="tel"
                                placeholder="Mobile number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-lg py-6 placeholder:text-slate-300"
                            />
                        </div>

                        <Button
                            onClick={handleProceed}
                            size="icon"
                            className="h-[60px] w-[60px] rounded-2xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-105 active:scale-95 bg-primary text-primary-foreground"
                        >
                            <ArrowRight size={24} />
                        </Button>
                    </div>

                    <div className="flex-1" />

                    <div className="pb-10 flex justify-center animate-in fade-in duration-500 delay-1000">
                        <p className="text-xs text-slate-400 text-center max-w-[200px]">
                            By continuing, you agree to our <span className="text-primary underline cursor-pointer">Terms</span> & <span className="text-primary underline cursor-pointer">Privacy Policy</span>
                        </p>
                    </div>
                </div>

                {/* Home Indicator (iPhone style) */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-slate-200 rounded-full" />
            </div>
        </div>
    );
};

export default Welcome;
