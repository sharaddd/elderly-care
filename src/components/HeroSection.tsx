import heroImage from "@/assets/hero-elderly.jpg";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-32">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Compassionate caregiver with elderly person" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl space-y-6 animate-fade-in-up">
          <p className="text-primary-foreground/80 font-medium text-lg tracking-wide uppercase">
            Compassionate Senior Care
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground leading-tight">
            Because They Deserve the{" "}
            <span className="text-accent">Best Care</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed max-w-xl">
            From critical care to everyday needs, we provide personalized,
            dignified support for your loved ones — right at home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="#services">Our Services</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="#contact">
                <Phone className="mr-2 h-5 w-5" /> Call Us Today
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
