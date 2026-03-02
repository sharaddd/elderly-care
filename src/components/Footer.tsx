import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary fill-primary" />
            <span className="font-serif text-lg font-bold text-background">Elderly Care</span>
          </div>
          <div className="flex gap-6">
            {["Home", "Services", "Why Us", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="text-background/60 hover:text-background transition-colors text-sm">
                {l}
              </a>
            ))}
          </div>
          <p className="text-background/40 text-sm">
            © 2026 Elderly Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
