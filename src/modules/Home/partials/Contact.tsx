import Button from "@components/Button";
import GlassCard from "@components/Card";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"; // Imported ArrowRight for the button

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header (Visibility for Search Engines) */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <p className="text-primary text-sm font-display tracking-wider uppercase">
            Let's Start Your Project
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            **Grow Your Small Business** in **NYC**
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-primary text-sm font-display tracking-wider uppercase">
                Ready to talk ROI?
              </p>
              {/* This H2 is now optional, as the main H2 is above, but kept for visual hierarchy */}
              <h3 className="text-3xl font-display font-bold">
                Schedule a Free Consultation
              </h3> 
              <p className="text-muted-foreground text-lg">
                I help small business owners in **New York City** stop worrying about slow, outdated websites. Let's discuss a high-performance **Next.js solution** that drives real customer growth.
              </p>
            </div>
            
            <div className="space-y-4">
              {/* Email Card (Updated with placeholder name) */}
              <GlassCard className="bg-card border-border p-6 flex items-center gap-4 hover:border-primary/50 transition-smooth">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:mohamad.yousuf@example.com" className="font-medium hover:text-primary transition-colors">
                    mohamad.yousuf@example.com
                  </a>
                </div>
              </GlassCard>
              
              {/* Phone Card */}
              <GlassCard className="bg-card border-border p-6 flex items-center gap-4 hover:border-primary/50 transition-smooth">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+15551234567" className="font-medium hover:text-primary transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </GlassCard>
              
              {/* LOCATION CARD (CRITICAL LOCAL SEO UPDATE) */}
              <GlassCard className="bg-card border-border p-6 flex items-center gap-4 hover:border-primary/50 transition-smooth">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-lg">**New York, NY (Serving all boroughs)**</p>
                </div>
              </GlassCard>
            </div>
          </div>
          
          {/* Right - CTA Form Placeholder */}
          <div className="flex items-center  justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 p-12 text-center space-y-6 w-full">
              <div className="space-y-4">
                <h3 className="text-3xl font-display font-bold">
                  What's Your Next Project?
                </h3>
                <p className="text-muted-foreground">
                  I specialize in fast, custom web solutions. Let's start the conversation about performance and results.
                </p>
              </div>
              
              {/* Placeholder for an actual form or primary CTA button */}
              <Button
                primary
                // Consider changing this to a link to a contact form page for better tracking
                className="group button-gradient hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full transition-smooth mt-6"
              >
                Request Your Project Estimate
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;