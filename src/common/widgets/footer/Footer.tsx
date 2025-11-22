import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  // Use Mohamad Yousuf's name and portfolio URL/LinkedIn URL from metadata
  const portfolioUrl = "https://your-portfolio-url.com";
  const linkedinUrl = "https://linkedin.com/in/your-linkedin";
  const githubUrl = "https://github.com/your-github";
  const twitterHandle = "@your_twitter_handle"; // Use handle from metadata if available
  const emailAddress = "mohamad.yousuf@example.com"; 

  return (
    <footer className="bg-charcoal-light border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Local SEO Message */}
          <div className="space-y-4">
            {/* Replace "VirTuo" with your name, reinforced with the NYC title */}
            <h3 className="text-2xl font-display font-bold">
              Mohamad <span className="text-gradient">Yousuf</span>
            </h3>
            <p className="text-muted-foreground">
              Your **NYC Web Developer** specializing in **Next.js and React solutions** for small businesses seeking measurable growth and enhanced online presence.
            </p>
            {/* Explicit location for local SEO */}
            <p className="text-foreground font-semibold text-sm pt-2">
              Based in New York, NY
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
          
          {/* Social & Contact Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mohamad Yousuf on Github"
                className="p-3 bg-secondary hover:bg-primary/10 rounded-full transition-smooth group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mohamad Yousuf on LinkedIn"
                className="p-3 bg-secondary hover:bg-primary/10 rounded-full transition-smooth group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a
                href={`https://twitter.com/${twitterHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Mohamad Yousuf on X (Twitter)`}
                className="p-3 bg-secondary hover:bg-primary/10 rounded-full transition-smooth group"
              >
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a
                href={`mailto:${emailAddress}`}
                aria-label="Email Mohamad Yousuf"
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
            © {new Date().getFullYear()} **Mohamad Yousuf** | Web Development Solutions for NYC Small Business. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;