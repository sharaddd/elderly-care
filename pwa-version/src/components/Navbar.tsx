import { useState } from "react";
import { Menu, X, MapPin, ChevronDown, Phone, User, Search, Target } from "lucide-react";
import LogoIcon from "./LogoIcon";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CallbackDialog from "./CallbackDialog";

const LocationPicker = () => {
  const [location, setLocation] = useState("Dwarka Sec-14, Delhi.");
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const suggestedLocations = [
    "Dwarka Sec-14, Delhi.",
    "Indirapuram, Ghaziabad",
    "Gurgaon Sector 45",
    "Vasant Kunj, South Delhi",
    "Noida Sector 62",
  ];

  const handleSelect = (loc: string) => {
    setLocation(loc);
    setSearchValue("");
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 shadow-sm cursor-pointer hover:bg-white/20 transition-all">
          <MapPin className="h-4 w-4 text-white/70" />
          <span className="text-[14px] font-medium text-white whitespace-nowrap">
            {location}
          </span>
          <ChevronDown className={`h-4 w-4 text-white/70 transition-transform ${isOpen ? "rotate-180" : ""}`} />
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
                  handleSelect(searchValue);
                }
              }}
            />
          </div>
          <button
            className="flex items-center gap-2 mt-3 text-primary text-sm font-medium hover:opacity-80 transition-opacity"
            onClick={() => handleSelect("Current Location")}
          >
            <Target className="h-4 w-4" />
            Detect my current location
          </button>
        </div>
        <div className="max-h-[240px] overflow-y-auto p-2">
          <p className="px-3 py-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Suggested Locations</p>
          {suggestedLocations.map((loc) => (
            <button
              key={loc}
              onClick={() => handleSelect(loc)}
              className="w-full text-left px-3 py-2.5 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors flex items-center gap-3 group"
            >
              <MapPin className="h-4 w-4 text-gray-300 group-hover:text-primary/50" />
              {loc}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "find nurses", href: "#nurses" },
    { label: "video consult", href: "#consult" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/50 to-transparent pt-4 pb-12">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Left Side: Brand and Primary Links */}
        <div className="flex items-center gap-12">
          <a href="#home" className="flex items-center gap-3">
            <LogoIcon className="h-10 w-10" />
            <span className="font-sans text-[22px] font-bold text-white tracking-tight">
              Elderly Care
            </span>
          </a>

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

        {/* Right Side: Location and Actions */}
        <div className="hidden lg:flex items-center gap-10">
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

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md px-6 py-8 space-y-6 lg:hidden animate-in fade-in zoom-in-95">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-xl font-medium text-white lowercase"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-8">
            <LocationPicker />
            <CallbackDialog>
              <div
                className="flex items-center gap-3 text-lg font-medium text-white text-left cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <Phone className="h-6 w-6" />
                <span>Request a callback</span>
              </div>
            </CallbackDialog>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
