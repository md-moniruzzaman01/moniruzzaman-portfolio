import Button from "@components/Button";
import GlassCard from "@components/Card";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  const emailAddress = "dev.moniruzzaman@gmail.com";
  const phone = "+88 01618396301";
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <p className="text-primary text-sm font-display tracking-wider uppercase">
            Let’s Start Your Project
          </p>

          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Grow Your Business in New York City
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Partner with an experienced full-stack developer specializing in
            SEO-optimized Next.js and React solutions for NYC small businesses.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT — CONTACT INFO */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-primary text-sm font-display tracking-wider uppercase">
                Let’s Talk Growth
              </p>

              <h3 className="text-3xl font-display font-bold">
                Schedule a Free Consultation
              </h3>

              <p className="text-muted-foreground text-lg leading-relaxed">
                I help NYC business owners improve online visibility, modernize
                outdated websites, and build fast, high-conversion platforms
                using Next.js and React. Tell me what you need — I’ll guide you
                with a clear strategy.
              </p>
            </div>

            <div className="space-y-4">
              {/* EMAIL */}
              <GlassCard className="bg-card border-border p-6 flex items-center gap-4 hover:border-primary/50 transition-smooth">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Mail className="w-6 h-6 text-primary" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:mohamad.yousuf@example.com"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    {emailAddress}
                  </a>
                </div>
              </GlassCard>

              {/* PHONE */}
              <GlassCard className="bg-card border-border p-6 flex items-center gap-4 hover:border-primary/50 transition-smooth">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Phone className="w-6 h-6 text-primary" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a
                    href="tel:+8801618396301"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              </GlassCard>

              {/* LOCATION — LOCAL SEO BOOSTER */}
              <GlassCard className="bg-card border-border p-6 flex items-center gap-4 hover:border-primary/50 transition-smooth">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-lg">
                    Dhaka, Bangladesh — Serving All Boroughs
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* RIGHT — CTA BOX */}
          <div
            className="flex items-center justify-center animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-12 text-center space-y-6 w-full shadow-lg">
              <div className="space-y-4">
                <h3 className="text-3xl font-display font-bold">
                  What Do You Want to Build?
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  Whether it’s a redesign, a new website, or a custom web app,
                  I’ll help you build a fast, modern, results-driven solution.
                </p>
              </div>

              <Button
                primary
                className="group button-gradient hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full transition-smooth mt-6"
              >
                Book a Free Strategy Meeting
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
