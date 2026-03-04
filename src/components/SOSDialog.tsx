import {
    Phone,
    Ambulance,
    Heart,
    Users,
    Bell,
    ShieldAlert,
    X,
    MapPin
} from "lucide-react";
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";

interface SOSOptionProps {
    icon: any;
    title: string;
    description: string;
    color: string;
    phoneNumber: string;
    onClick?: () => void;
}

const SOSOption = ({ icon: Icon, title, description, color, phoneNumber, onClick }: SOSOptionProps) => {
    const handleCall = (e: React.MouseEvent) => {
        e.stopPropagation();
        window.location.href = `tel:${phoneNumber}`;
    };

    return (
        <div
            onClick={onClick}
            className="w-full bg-white rounded-[24px] p-4 shadow-sm border border-gray-100 flex items-center justify-between transition-all hover:shadow-md active:scale-[0.98] group cursor-pointer"
        >
            <div className="flex items-center gap-4">
                <div className={`h-14 w-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm`} style={{ backgroundColor: `${color}15` }}>
                    <Icon className="h-7 w-7" style={{ color: color }} />
                </div>
                <div className="flex flex-col items-start text-left">
                    <h4 className="text-[16px] font-black text-gray-900 tracking-tight uppercase leading-none mb-1">{title}</h4>
                    <p className="text-[11px] font-bold text-gray-400 max-w-[120px] leading-tight">{description}</p>
                </div>
            </div>

            <button
                onClick={handleCall}
                className="h-12 w-12 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all active:scale-90 shadow-sm border"
                style={{
                    backgroundColor: `${color}10`,
                    borderColor: `${color}20`,
                    color: color
                }}
            >
                <Phone className="h-4 w-4" strokeWidth={2.5} />
                <span className="text-[7px] font-black uppercase tracking-tighter">CALL</span>
            </button>
        </div>
    );
};

interface SOSDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    isPage?: boolean;
}

const SOSDialog = ({ open, onOpenChange, isPage = false }: SOSDialogProps) => {
    const content = (
        <div className={`flex flex-col ${isPage ? 'h-full' : ''} relative`}>
            {/* Header with close button for page mode */}
            {isPage && (
                <button
                    onClick={() => onOpenChange(false)}
                    className="absolute top-6 left-6 z-20 h-10 w-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                    <X className="h-5 w-5 text-white" />
                </button>
            )}
            <div className="bg-red-600 p-8 text-white relative overflow-hidden">
                <div className="relative z-10 flex flex-col items-center">
                    <div className="bg-white/20 p-4 rounded-full mb-4 backdrop-blur-md animate-pulse">
                        <ShieldAlert className="h-10 w-10 text-white" />
                    </div>
                    <h2 className="text-[24px] font-black tracking-tighter uppercase mb-1">Emergency Help</h2>
                    <p className="text-red-100 text-[13px] font-bold uppercase tracking-widest opacity-80">Help is just a tap away</p>
                </div>

                {/* Decorative Background Patterns */}
                <div className="absolute top-0 right-0 h-32 w-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                <div className="absolute bottom-0 left-0 h-24 w-24 bg-red-900/40 rounded-full -ml-12 -mb-12 blur-xl" />
            </div>

            {/* Options Section */}
            <div className="p-6 space-y-4 bg-gray-50/30 flex-1 overflow-y-auto">
                <div className="flex items-center gap-2 px-1 mb-2">
                    <MapPin className="h-3.5 w-3.5 text-gray-400" />
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Your Location: Dwarka Sec 14</span>
                </div>

                <SOSOption
                    icon={Ambulance}
                    title="Ambulance"
                    description="Direct line to nearest emergency responders"
                    color="#ef4444"
                    phoneNumber="102"
                />

                <SOSOption
                    icon={Heart}
                    title="Your Doctor"
                    description="Alert Dr. Deshpande immediately"
                    color="#0ea5e9"
                    phoneNumber="+919876543210"
                />

                <SOSOption
                    icon={Users}
                    title="Family Alert"
                    description="Notify your emergency contacts"
                    color="#10b981"
                    phoneNumber="+919999888777"
                />

                <div className="pt-2">
                    <button className="w-full bg-red-600 text-white font-black py-4 rounded-[22px] shadow-lg shadow-red-100 uppercase tracking-widest flex items-center justify-center gap-3 active:scale-95 transition-all">
                        <Bell className="h-5 w-5 animate-bounce" />
                        Trigger Panic Alarm
                    </button>
                </div>
            </div>

            <div className="p-4 bg-white border-t border-gray-50 text-center">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">System automatically recording audio for safety</p>
            </div>
        </div>
    );

    if (isPage) {
        return (
            <div className="absolute inset-0 z-[60] bg-white flex flex-col animate-in slide-in-from-right duration-300 overflow-hidden">
                {content}
            </div>
        );
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="w-[92%] max-w-[400px] rounded-[32px] fixed p-0 overflow-hidden border-none bg-white shadow-2xl z-[100] [&>button:last-child]:hidden">
                {content}
            </DialogContent>
        </Dialog>
    );
};

export default SOSDialog;
