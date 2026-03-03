import heroImage from "@/assets/hero-new.jpg";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import CallbackDialog from "./CallbackDialog";
import MobileDashboard from "./MobileDashboard";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center pt-0  bg-white md:bg-transparent">
      {/* Background image (Hidden on Mobile) */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <img src={heroImage} alt="Compassionate caregiver with elderly person" className="w-full h-full object-cover" />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 md:via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/50 to-transparent z-0 hidden md:block" />
      </div>

      <div className="container mx-auto px-6 relative z-10 h-full flex items-center ">
        {/* Mobile Dashboard */}
        <div className="block md:hidden w-full pt-10">
          <MobileDashboard />
        </div>

        {/* Desktop Hero Content */}
        <div className="hidden md:block max-w-2xl space-y-6 animate-fade-in-up mt-24">
          <p className="text-primary-foreground/80 font-medium text-lg tracking-wide uppercase">
            Compassionate Senior Care
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground leading-tight">
            <span className="text-accent">Expert Care</span> for Them.{" "}
            Peace of Mind for You
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed max-w-xl">
            From critical care to everyday needs, we provide personalized,
            dignified support for your loved ones — right at home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="#services">Our Services</a>
            </Button>
            <CallbackDialog>
              <Button size="lg" className="text-lg px-8 py-6 border border-white/40 bg-transparent text-white hover:bg-white/10 transition-all shadow-none hover:shadow-lg">
                <Phone className="mr-2 h-5 w-5" /> Request a callback
              </Button>
            </CallbackDialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
