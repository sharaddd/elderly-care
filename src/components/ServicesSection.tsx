import { HeartPulse, Stethoscope, HandHeart } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: HeartPulse,
    title: "Critical Care",
    description: "24/7 emergency and intensive care for seniors facing acute health challenges.",
    details: [
      "Round-the-clock monitoring",
      "Emergency response team",
      "Post-hospitalization recovery",
      "Specialized medical equipment",
    ],
  },
  {
    icon: Stethoscope,
    title: "Senior Chronic Care",
    description: "Long-term management plans for chronic conditions like diabetes, heart disease, and arthritis.",
    details: [
      "Personalized treatment plans",
      "Medication management",
      "Regular health assessments",
      "Specialist coordination",
    ],
  },
  {
    icon: HandHeart,
    title: "Regular Daily Needs",
    description: "Everyday assistance to help seniors live comfortably and independently at home.",
    details: [
      "Meal preparation & nutrition",
      "Personal hygiene assistance",
      "Mobility & exercise support",
      "Companionship & social care",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold uppercase tracking-wider mb-2">What We Offer</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
            Our Care Services
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Comprehensive care tailored to every stage of your loved one's needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Card
              key={i}
              className="bg-background border-border hover:shadow-lg transition-shadow duration-300 group"
            >
              <CardHeader className="pb-2">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl">{s.title}</CardTitle>
                <CardDescription className="text-base">{s.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {s.details.map((d, j) => (
                    <li key={j} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
