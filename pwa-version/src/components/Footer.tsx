import LogoIcon from "./LogoIcon";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <LogoIcon className="h-8 w-8" />
            <span className="font-serif text-lg font-bold text-white">Elderly Care</span>
          </div>
          <div className="flex gap-6">
            {["Home", "Services", "Why Us", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="text-white/70 hover:text-white transition-colors text-sm">
                {l}
              </a>
            ))}
          </div>
          <p className="text-white/50 text-sm">
            © 2026 Elderly Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
