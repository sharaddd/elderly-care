import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <p className="text-accent font-semibold uppercase tracking-wider mb-2">Get In Touch</p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
                Let's Talk About Care
              </h2>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                Have questions about our services? We're here to help you find the right care plan for your family.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Phone, label: "Call Us", value: "+1 (800) 123-4567" },
                { icon: Mail, label: "Email Us", value: "care@elderlycare.com" },
                { icon: MapPin, label: "Visit Us", value: "123 Care Street, Suite 100" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.label}</p>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-background rounded-lg border border-border p-8 space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Full Name</label>
                <Input placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Phone</label>
                <Input placeholder="+1 (555) 000-0000" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email</label>
              <Input placeholder="you@example.com" type="email" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">How can we help?</label>
              <Textarea placeholder="Tell us about the care you're looking for..." rows={5} />
            </div>
            <Button size="lg" className="w-full text-lg py-6">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
