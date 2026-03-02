import { useState } from "react";
import { Menu, X, MapPin, ChevronDown, Phone, User } from "lucide-react";
import LogoIcon from "./LogoIcon";

const LocationPicker = () => (
  <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm cursor-pointer hover:bg-gray-50 transition-all min-w-[280px]">
    <MapPin className="h-5 w-5 text-gray-400" />
    <span className="text-[15px] font-medium text-gray-600 truncate flex-1">
      Dwarka Sec-14, Delhi..
    </span>
    <ChevronDown className="h-5 w-5 text-gray-400" />
  </div>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "find nurses", href: "#nurses" },
    { label: "video consult", href: "#consult" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 h-[88px] flex items-center">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Left Side: Brand and Primary Links */}
        <div className="flex items-center gap-10">
          <a href="#home" className="flex items-center gap-3">
            <LogoIcon className="h-10 w-10" />
            <span className="font-sans text-[19px] font-bold text-[#1A1C1E] tracking-tight">
              Elderly Care
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[16px] font-bold text-[#1A1C1E] hover:text-primary transition-colors lowercase"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Location and Actions */}
        <div className="hidden lg:flex items-center gap-8">
          <LocationPicker />

          <div className="flex items-center gap-8">
            <a
              href="#callback"
              className="flex items-center gap-2 text-[15px] font-medium text-[#1A1C1E] hover:text-primary transition-colors"
            >
              <Phone className="h-6 w-6 stroke-[1.5]" />
              <span>Request a callback</span>
            </a>

            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <User className="h-7 w-7 text-[#1A1C1E] stroke-[1.5]" />
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-[#1A1C1E] p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-[88px] left-0 right-0 bg-white border-b border-gray-100 px-6 py-6 space-y-6 lg:hidden animate-in slide-in-from-top-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-lg font-bold text-[#1A1C1E] lowercase"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-50 flex flex-col gap-6">
            <LocationPicker />
            <a
              href="#callback"
              className="flex items-center gap-3 text-lg font-medium text-[#1A1C1E]"
            >
              <Phone className="h-6 w-6" />
              <span>Request a callback</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
