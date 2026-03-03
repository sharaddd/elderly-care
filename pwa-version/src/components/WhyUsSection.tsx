import { Shield, Clock, Users, Award } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Trusted & Safe", desc: "Fully licensed, insured, and background-checked caregivers you can trust." },
  { icon: Clock, title: "24/7 Availability", desc: "Our team is available around the clock for emergencies and routine needs." },
  { icon: Users, title: "Family-First Approach", desc: "We keep families involved with regular updates and transparent care plans." },
  { icon: Award, title: "Experienced Team", desc: "Our certified professionals bring years of geriatric care expertise." },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold uppercase tracking-wider mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
            Care You Can Count On
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We go beyond basic care to create a warm, safe environment for your loved ones.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <div key={i} className="text-center space-y-4 p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <r.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">{r.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
