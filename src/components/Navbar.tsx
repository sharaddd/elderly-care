import { useState } from "react";
import { Menu, X, MapPin, ChevronDown, Phone, User, Search, Target, AudioLines, Sparkles } from "lucide-react";
import LogoIcon from "./LogoIcon";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CallbackDialog from "./CallbackDialog";

import VoiceAssistantDialog from "./VoiceAssistantDialog";

const LocationPicker = ({ className = "" }: { className?: string }) => {
  const [location, setLocation] = useState({ title: "Home", address: "Dwarka Sec-14, Delhi." });
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const suggestedLocations = [
    { title: "Home", address: "Dwarka Sec-14, Delhi." },
    { title: "Work", address: "Indirapuram, Ghaziabad" },
    { title: "Other", address: "Gurgaon Sector 45" },
    { title: "Other", address: "Vasant Kunj, South Delhi" },
    { title: "Other", address: "Noida Sector 62" },
  ];

  const handleSelect = (loc: { title: string, address: string }) => {
    setLocation(loc);
    setSearchValue("");
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <div className={`cursor-pointer group flex flex-col items-start ${className}`}>
          <div className="flex items-center gap-1.5 md:gap-1.5">
            <MapPin className="h-[18px] w-[18px] text-gray-800 md:text-white" />
            <span className="text-[14px] md:text-[15px] font-medium text-gray-900 md:text-white tracking-wide truncate max-w-[150px]">
              <span className="md:hidden">{location.address.replace(',', '').replace('.', '')}</span>
              <span className="hidden md:inline">{location.title}</span>
            </span>
            <ChevronDown className={`h-4 w-4 text-gray-800 md:text-white transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </div>
          <span className="hidden md:block text-[12px] md:text-white/85 font-medium truncate lg:max-w-[200px]">
            {location.address}
          </span>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[320px] p-0 overflow-hidden rounded-2xl border-gray-100 shadow-2xl" align="start">
        <div className="p-4 bg-gray-50/50 border-b border-gray-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search your location..."
              className="pl-9 h-10 bg-white border-gray-200 rounded-xl focus-visible:ring-primary focus-visible:ring-1"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && searchValue) {
                  handleSelect({ title: "Other", address: searchValue });
                }
              }}
            />
          </div>
          <button
            className="flex items-center gap-2 mt-3 text-primary text-sm font-medium hover:opacity-80 transition-opacity"
            onClick={() => handleSelect({ title: "Current Location", address: "Detecting..." })}
          >
            <Target className="h-4 w-4" />
            Detect my current location
          </button>
        </div>
        <div className="max-h-[240px] overflow-y-auto p-2">
          <p className="px-3 py-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Suggested Locations</p>
          {suggestedLocations.map((loc, i) => (
            <button
              key={i}
              onClick={() => handleSelect(loc)}
              className="w-full text-left px-3 py-2.5 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors flex items-start gap-3 group"
            >
              <MapPin className="h-4 w-4 mt-0.5 text-gray-300 group-hover:text-primary/50" />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-700">{loc.title}</span>
                <span className="text-xs text-gray-500">{loc.address}</span>
              </div>
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

interface NavbarProps {
  isVisible?: boolean;
}

const Navbar = ({ isVisible = true }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const [isVoiceAssistantOpen, setIsVoiceAssistantOpen] = useState(false);

  const links = [
    { label: "find nurses", href: "#nurses" },
    { label: "video consult", href: "#consult" },
  ];

  return (
    <nav className={`absolute top-0 left-0 right-0 z-50 lg:bg-gradient-to-b lg:from-black/50 lg:to-transparent pt-4 pb-12 transition-opacity duration-300 ${!isVisible ? "hidden lg:block" : "block"}`}>
      <div className="container mx-auto px-6 flex items-start justify-between">
        {/* Left Side: Brand and Links/Location */}
        <div className="flex gap-12 w-full lg:w-auto">
          {/* --- DESKTOP LOGO AND LINKS --- */}
          <div className="hidden lg:flex items-center gap-12">
            <a href="#home" className="flex items-center gap-3">
              <LogoIcon className="h-10 w-10" />
              <span className="font-sans text-[22px] font-bold text-white tracking-tight leading-none">
                Elderly Care
              </span>
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[15px] font-medium text-white/90 hover:text-white transition-colors lowercase"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* --- MOBILE WIREFRAME HEADER --- */}
          <div className="lg:hidden flex items-center justify-between w-full pt-1">
            <LocationPicker className="bg-white px-2 py-2 shadow-sm w-auto" />

            <div className="flex items-center gap-2 pr-1">
              <button
                onClick={() => setIsVoiceAssistantOpen(true)}
                className="h-[42px] w-[42px] bg-gradient-to-tr from-blue-600 to-indigo-600 text-white rounded-full shadow-md shadow-blue-200/50 flex items-center justify-center transition-all hover:opacity-95 active:scale-90 relative group"
              >
                <AudioLines className="h-[22px] w-[22px] stroke-[2.5]" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500 border-2 border-white"></span>
                </span>
              </button>

              <button className="h-[42px] w-[42px] bg-gray-50 border border-gray-100 text-gray-900 rounded-full shadow-sm flex items-center justify-center transition-all hover:bg-gray-100 overflow-hidden group ml-1">
                <User className="h-[24px] w-[24px] stroke-[1.8]" />
              </button>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-white/90 hover:text-white transition-colors lowercase"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      {/* Right Side: Location (Desktop) and Actions */}
      <div className="hidden lg:flex items-center gap-10 mt-1">
        <LocationPicker />

        <div className="flex items-center gap-8">
          <CallbackDialog>
            <div
              className="flex items-center gap-2 text-[14px] font-medium text-white/90 hover:text-white transition-colors cursor-pointer"
            >
              <Phone className="h-5 w-5 stroke-[1.5]" />
              <span>Request a callback</span>
            </div>
          </CallbackDialog>

          <button className="p-1 hover:bg-white/10 rounded-full transition-colors">
            <User className="h-6 w-6 text-white stroke-[1.5]" />
          </button>
        </div>
      </div>

      {/* Shared Components */}
      <VoiceAssistantDialog
        open={isVoiceAssistantOpen}
        onOpenChange={setIsVoiceAssistantOpen}
      />
    </nav>
  );
};

export default Navbar;
