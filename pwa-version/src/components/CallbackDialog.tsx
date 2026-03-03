import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Phone, Headphones, UserCheck, X } from "lucide-react";

interface CallbackDialogProps {
    children: React.ReactNode;
}

const CallbackDialog = ({ children }: CallbackDialogProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="max-w-4xl p-0 overflow-hidden border-none gap-0">
                {/* Header Bar */}
                <div className="bg-[#438163] py-4 px-6 relative flex justify-center items-center">
                    <DialogTitle className="text-white text-xl md:text-2xl font-medium">
                        Talk to an Expert for <span className="font-bold">Free</span>
                    </DialogTitle>
                </div>

                <div className="grid md:grid-cols-2 bg-white">
                    {/* Left Column - Info */}
                    <div className="p-8 border-r border-gray-100 hidden md:block">
                        <h3 className="text-2xl font-bold text-gray-800 leading-tight mb-2">
                            Simplifying Senior Care
                        </h3>
                        <p className="text-gray-500 text-sm mb-12">
                            Consult with our care experts for specialized home nursing & support.
                        </p>

                        <div className="space-y-10 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-[19px] top-6 bottom-6 w-[1px] bg-gray-100 -z-10" />

                            <div className="flex gap-6 items-start">
                                <div className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0">
                                    <Phone className="h-5 w-5 text-[#438163]" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm text-gray-800 mb-1">Next Steps</h4>
                                    <p className="text-gray-500 text-xs leading-relaxed">
                                        Once you share your details, our care coordinator will get in touch with you.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0">
                                    <Headphones className="h-5 w-5 text-[#438163]" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs leading-relaxed">
                                        The coordinator will understand your requirements and health condition in detail.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0">
                                    <UserCheck className="h-5 w-5 text-[#438163]" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs leading-relaxed">
                                        Your care plan will be finalized and service scheduled at the earliest.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="p-8 space-y-6">
                        <div className="space-y-4">
                            <Input
                                placeholder="Patient Name"
                                className="h-12 border-gray-200 focus:ring-[#438163] rounded-md"
                            />
                            <Input
                                placeholder="Enter 10 Digit mobile number"
                                className="h-12 border-gray-200 focus:ring-[#438163] rounded-md"
                            />
                            <Select>
                                <SelectTrigger className="h-12 border-gray-200 focus:ring-[#438163] rounded-md text-gray-500">
                                    <SelectValue placeholder="Select City" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="delhi">Delhi</SelectItem>
                                    <SelectItem value="gurgaon">Gurgaon</SelectItem>
                                    <SelectItem value="noida">Noida</SelectItem>
                                    <SelectItem value="mumbai">Mumbai</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="h-12 border-gray-200 focus:ring-[#438163] rounded-md text-gray-500">
                                    <SelectValue placeholder="Service Needed" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="chronic">Chronic Care</SelectItem>
                                    <SelectItem value="regular">Regular needs</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="relative pt-4">
                            {/* Badge */}
                            <div className="absolute right-0 top-0 bg-[#438163] text-white text-[10px] font-bold px-3 py-1 rounded-sm transform translate-y-[-50%]">
                                No Booking Fee
                            </div>
                            <Button className="w-full h-14 bg-[#438163] hover:bg-[#438163]/90 text-white font-bold text-lg rounded-md transition-all shadow-lg hover:shadow-xl">
                                Book Appointment
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CallbackDialog;
