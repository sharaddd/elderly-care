import { useState } from "react";
import { Menu, X, Heart, MapPin, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationPicker = () => (
  <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-lg px-3 py-1.5 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors w-full md:w-auto">
    <MapPin className="h-4 w-4 text-[#FF7000] fill-[#FF7000]/10" />
    <span className="text-sm font-semibold text-gray-800">Delhi</span>
    <div className="w-px h-4 bg-gray-200 mx-1" />
    <Target className="h-4 w-4 text-[#FF7000]" />
  </div>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar for Location */}
      <div className="bg-[#002B49] py-2 px-6">
        <div className="container mx-auto flex justify-start">
          <LocationPicker />
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <a href="#home" className="flex items-center gap-2">
            <Heart className="h-7 w-7 text-primary fill-primary" />
            <span className="font-serif text-xl font-bold text-foreground tracking-tight">Elderly Care</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm">
                {l.label}
              </a>
            ))}
            <Button asChild size="sm">
              <a href="#contact">Get Started</a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-foreground p-2" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-background border-t border-border px-6 py-6 space-y-4 animate-in slide-in-from-top-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-muted-foreground hover:text-foreground transition-colors font-medium">
                {l.label}
              </a>
            ))}
            <Button asChild className="w-full">
              <a href="#contact" onClick={() => setOpen(false)}>Get Started</a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
