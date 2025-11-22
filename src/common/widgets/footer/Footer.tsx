import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal-light border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-gradient">VirTuo</h3>
            <p className="text-muted-foreground">
              Creating exceptional digital experiences through innovative design and development.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">
                About
              </a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-smooth">
                Services
              </a>
              <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-smooth">
                Portfolio
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">
                Contact
              </a>
            </div>
          </div>
          
          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-secondary hover:bg-primary/10 rounded-full transition-smooth group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a
                href="#"
                className="p-3 bg-secondary hover:bg-primary/10 rounded-full transition-smooth group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a
                href="#"
                className="p-3 bg-secondary hover:bg-primary/10 rounded-full transition-smooth group"
              >
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a
                href="#"
                className="p-3 bg-secondary hover:bg-primary/10 rounded-full transition-smooth group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} VirTuo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
