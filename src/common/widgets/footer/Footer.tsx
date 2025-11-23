import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const linkedinUrl = "https://www.linkedin.com/in/moniruzzaman-ripon/";
  const githubUrl = "https://github.com/md-moniruzzaman01";
  const twitterHandle = "dev_moniruzaman";
  const emailAddress = "dev.moniruzzaman@gmail.com";

  return (
    <footer className="bg-charcoal-light border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        
        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* BRAND / LOCAL SEO */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold">
              Md. <span className="text-gradient">Moniruzzaman</span>
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              Freelance NYC Web Developer specializing in high-performance{" "}
              Next.js, React, and full-stack solutions for small businesses
              looking to improve visibility, conversions, and online presence.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">
              Quick Links
            </h4>

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

          {/* SOCIAL LINKS */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">
              Connect
            </h4>

            <div className="flex gap-4">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 bg-secondary hover:bg-primary/10 rounded-full transition-smooth group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 bg-secondary hover:bg-primary/10 rounded-full transition-smooth group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>

              <a
                href={`https://twitter.com/${twitterHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="p-3 bg-secondary hover:bg-primary/10 rounded-full transition-smooth group"
              >
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>

              <a
                href={`mailto:${emailAddress}`}
                aria-label="Email"
                className="p-3 bg-secondary hover:bg-primary/10 rounded-full transition-smooth group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Moniruzzaman — Web Development Solutions
            for NYC Small Businesses. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
