import { useState, useEffect } from "react";
import { Menu, X, MapPin, ChevronDown, Phone, User, Search, Target, AudioLines, Sparkles, WalletMinimal } from "lucide-react";
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

  const detectLocation = () => {
    setLocation(prev => ({ ...prev, address: "Detecting..." }));

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
          const data = await res.json();
          const address = data.display_name.split(',').slice(0, 2).join(', ');
          handleSelect({ title: "Current Location", address: address || "Location detected" });
        } catch (error) {
          console.error("Error detecting location:", error);
          handleSelect({ title: "Home", address: "Dwarka Sec-14, Delhi." });
        }
      }, (error) => {
        console.error("Geolocation error:", error);
        handleSelect({ title: "Home", address: "Dwarka Sec-14, Delhi." });
      });
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <div className={`cursor-pointer group flex items-center gap-3 p-1.5 px-3 rounded-[14px] bg-white border border-gray-100 shadow-sm active:scale-95 transition-all outline-none ${className}`}>
          <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
            <MapPin className="h-4 w-4" />
          </div>
          <div className="flex flex-col items-start leading-tight">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Delivery to</span>
            <div className="flex items-center gap-1">
              <span className="text-[14px] font-black text-gray-900 tracking-tight truncate max-w-[120px]">
                {location.address.split(',')[0]}
              </span>
              <ChevronDown className={`h-3 w-3 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </div>
          </div>
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
            onClick={detectLocation}
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
  onProfileClick?: () => void;
  onWalletClick?: () => void;
  isMobileOnly?: boolean;
}

const Navbar = ({ isVisible = true, onProfileClick, onWalletClick, isMobileOnly = false }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const [isVoiceAssistantOpen, setIsVoiceAssistantOpen] = useState(false);
  const [weatherData, setWeatherData] = useState({
    temp: 22,
    condition: "Sunny",
    aqi: 42,
    date: ""
  });

  useEffect(() => {
    // Set dynamic date
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' };
    let formattedDate = now.toLocaleDateString('en-US', options);

    // Add ordinal suffix (st, nd, rd, th)
    const day = now.getDate();
    let suffix = "th";
    if (day === 1 || day === 21 || day === 31) suffix = "st";
    else if (day === 2 || day === 22) suffix = "nd";
    else if (day === 3 || day === 23) suffix = "rd";

    formattedDate = formattedDate.replace(day.toString(), `${day}${suffix}`);
    setWeatherData(prev => ({ ...prev, date: formattedDate }));

    // Fetch Weather & AQI
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          // Fetch Weather
          const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`);
          const weatherJson = await weatherRes.json();

          // Simple weather code mapping
          const code = weatherJson.current.weather_code;
          let condition = "Clear";
          if (code >= 1 && code <= 3) condition = "Cloudy";
          else if (code >= 45 && code <= 48) condition = "Foggy";
          else if (code >= 51 && code <= 67) condition = "Raining";
          else if (code >= 71 && code <= 77) condition = "Snowing";
          else if (code >= 80 && code <= 82) condition = "Showers";
          else if (code >= 95) condition = "Stormy";

          // Fetch AQI
          const aqiRes = await fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=us_aqi`);
          const aqiJson = await aqiRes.json();

          setWeatherData(prev => ({
            ...prev,
            temp: Math.round(weatherJson.current.temperature_2m),
            condition: condition,
            aqi: aqiJson.current.us_aqi
          }));
        } catch (error) {
          console.error("Error fetching weather:", error);
        }
      });
    }
  }, []);

  const links = [
    { label: "find nurses", href: "#nurses" },
    { label: "video consult", href: "#consult" },
  ];

  return (
    <nav className={`${isMobileOnly ? "relative shrink-0" : "fixed"} ${isMobileOnly ? "" : "top-0 left-0 right-0"} z-[50] bg-white/90 backdrop-blur-md border-b border-gray-100 ${isMobileOnly ? "" : "lg:border-none lg:bg-gradient-to-b lg:from-black/50 lg:to-transparent pt-2 pb-2 lg:pt-4 lg:pb-12"} pt-2 pb-2 transition-all duration-300 ${!isVisible ? (isMobileOnly ? "hidden" : "hidden lg:block") : "block"}`}>
      <div className="container mx-auto px-4 flex items-start justify-between">
        {/* Left Side: Brand and Links/Location */}
        <div className="flex gap-12 w-full lg:w-auto">
          {/* --- DESKTOP LOGO AND LINKS --- */}
          <div className={`${isMobileOnly ? "hidden" : "hidden lg:flex"} items-center gap-12`}>
            <a href="#home" className="flex items-center gap-3">
              <LogoIcon className="h-10 w-10" />
              <span className="font-sans text-[22px] font-bold text-white tracking-tight leading-none">
                Elderly Care
              </span>
            </a>
          </div>

          <div className={`${isMobileOnly ? "hidden" : "hidden lg:flex"} items-center gap-10`}>
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
          <div className={`${isMobileOnly ? "flex" : "lg:hidden flex"} flex-col w-full`}>
            <div className="flex items-center justify-between w-full pt-1 -ml-4">
              <LocationPicker className="border-none shadow-none bg-transparent p-0" />

              <div className="flex items-center gap-2 -mr-4">
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

                <button
                  onClick={onProfileClick}
                  className="h-[42px] w-[42px] bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center transition-all hover:bg-gray-100 active:scale-95 ml-1"
                >
                  <User className="h-[22px] w-[22px] text-gray-600 stroke-[1.5]" />
                </button>
              </div>
            </div>

            {/* Static Weather & Date Bar */}
            <div className="flex items-center gap-2 text-[11px] font-[900] text-gray-400 uppercase tracking-widest whitespace-nowrap px-2 pb-1 mt-1 border-t border-gray-100 pt-2 animate-in fade-in slide-in-from-top-1 duration-500">
              <span>{weatherData.date || "Detecting Date..."}</span>
              <div className="h-1 w-1 rounded-full bg-gray-300" />

              <button
                onClick={() => window.open('https://weather.com', '_blank')}
                className="flex items-center gap-1 hover:text-orange-600 transition-colors active:scale-95 transition-transform"
              >
                <span className="text-orange-500/80">{weatherData.temp}°C {weatherData.condition}</span>
              </button>

              <div className="h-1 w-1 rounded-full bg-gray-300" />

              <button
                onClick={() => window.open('https://weather.com', '_blank')}
                className="flex items-center gap-1 hover:text-emerald-600 transition-colors active:scale-95 transition-transform"
              >
                <span className="text-emerald-500/80">AQI {weatherData.aqi}</span>
              </button>
            </div>

            {/* Static Search Bar & Wallet Row */}
            <div className="flex items-center gap-3 px-1 pb-2 mt-2">
              <div className="relative flex-1 group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Search medicines, doctors or care..."
                  className="w-full bg-gray-50/80 border border-gray-100 rounded-[14px] h-[48px] pl-[42px] pr-4 text-gray-900 placeholder:text-gray-400 outline-none focus:ring-4 focus:ring-indigo-50/50 focus:border-indigo-200 transition-all text-[13px] font-semibold"
                />
              </div>
              <button
                onClick={onWalletClick}
                className="h-[48px] w-[48px] bg-white border border-gray-100 rounded-[14px] flex items-center justify-center text-indigo-600 active:scale-95 transition-all shadow-sm"
              >
                <WalletMinimal className="h-5 w-5 stroke-[2]" />
              </button>
            </div>
          </div>
        </div>

        <div className={`${isMobileOnly ? "hidden" : "hidden lg:flex"} items-center gap-10`}>
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
      <div className={`${isMobileOnly ? "hidden" : "hidden lg:flex"} items-center gap-10 mt-1`}>
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

          <button
            onClick={onProfileClick}
            className="p-1 hover:bg-white/10 rounded-full transition-colors"
          >
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
