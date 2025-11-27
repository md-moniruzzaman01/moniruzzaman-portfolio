import { ArrowRight } from "lucide-react";
// *** IMPORTANT CHANGE: Update this import path to your transparent image file! ***
import heroImage from "../../../assets/web developer.jpg";
import Image from "next/image";
import Button from "@components/Button";
import Link from "next/link";

const Hero = () => {
  return (
    // Increase vertical padding for more space around content
    <section className="min-h-[90vh] flex items-center justify-center px-4 md:px-6 py-16 md:py-20 relative overflow-hidden">
      {/* Background Gradient - Deeper and more subtle for a premium feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 via-background to-charcoal-light/90 opacity-90" />

      {/* Animated Light Accent - Larger and more dramatic effect */}
      <div className="absolute top-1/4 left-0 w-[30rem] h-[30rem] bg-primary/10 rounded-full mix-blend-multiply filter blur-[180px] opacity-70 animate-slow-pulse" />
      <div className="absolute bottom-0 right-0 w-[25rem] h-[25rem] bg-accent/10 rounded-full mix-blend-multiply filter blur-[150px] opacity-60 animate-slow-pulse animation-delay-2000" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Content: Text and CTA */}
          {/* Increased space-y to 8 for more vertical breathing room */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in order-2 lg:order-1">
            <div className="space-y-4">
              {/* Pre-title: Maintained size but ensure good tracking and display font */}
              <p className="text-primary text-xl font-display tracking-widest uppercase">
                Hello, I'm Moniruzzaman —
              </p>

              {/* H1: Significantly increased size for maximum impact */}
              <h1 className="text-3xl md:text-6xl  font-display font-extrabold leading-tight tracking-tighter">
                <span className="text-gradient">Full-Stack</span> Web Developer
              </h1>

              {/* H2: Increased size and more prominent pt-3 for separation */}
              <h2 className="text-xl md:text-2xl font-display text-muted-foreground pt-3 font-medium leading-snug">
                Building High-Performance Full-Stack Solutions: Next.js, React,
                Node.js, and Enterprise Systems.
              </h2>
            </div>

            {/* CTA Button: Added margin-top for separation from the text */}
            <div className="pt-2">
              <Button
                primary
                className="group button-gradient shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 text-primary-foreground font-bold px-12 py-5 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 text-lg"
              >
                <Link href="https://drive.google.com/uc?export=download&id=1RWL_AmCdcqngK7aSsrDt1bYnBGDgdrCv">
                  Download Resume
                </Link>
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Specialty Text: Increased pt-6 and added tracking-wider for a final detail */}
            <p className="pt-6 text-base text-primary/80 border-t border-primary/20 max-w-xl mt-8 tracking-wider">
              <span className="font-bold">Specializing in:</span> Portfolios,
              E-commerce, SaaS/ERPs, and Data-Driven Dashboards.
            </p>
          </div>

          {/* Right Image: Image layout maintained, using lg:col-span-5 and added 'xl:block' for a better visual break at large screens */}
          <div
            className="lg:col-span-5 relative block animate-fade-in order-1 lg:order-2"
            style={{ animationDelay: "0.4s" }}
          >
            {/* The main container for the image with the neon border */}
            <div className="relative p-2.5 transition-all duration-500 ">
              {/* Inner container to hold the image and its internal tech background */}
              <div className="relative rounded-[1.7rem] overflow-hidden ">
                {/* 🚀 Tech background behind the person (This is what shows through the transparent areas) */}
                <div className="absolute inset-0 bg-charcoal-light flex items-center justify-center p-4">
                  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-lg p-4 grid grid-cols-2 gap-2 text-blue-300 text-xs font-mono opacity-80">
                    <pre className="self-start leading-snug">
                      {`
// Server Logic
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

function startServer() {
  console.log("Initializing API endpoints...");
  app.listen(PORT, () => {
    console.log("Server running on port: " + PORT);
  });
}

// Data Handling
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("MongoDB Connected!");
  } catch (err) {
    console.error("DB Connection Failed: " + err.message);
    process.exit(1);
  }
};

startServer();
connectDB();
                      `}
                    </pre>
                    <pre className="self-end text-right">
                      {`
<Route path="/" />
<Component />
class App { /* ... */ }
return <Dashboard />
</div>`}
                    </pre>
                  </div>
                </div>

                <Image
                  // 🔥 This image must be a PNG with a transparent background!
                  src={heroImage}
                  alt="Mohamad Yousuf, a visionary full-stack developer, expertly crafting innovative web solutions and digital strategies that drive business growth, understand client needs, and leverage cutting-edge technology for enterprise-level success."
                  // The combination of opacity, z-index, and the tech background makes it work
                  className="w-full h-full object-cover relative z-10 mb-4"
                  width={550} // Slightly increased size for better presence
                  height={700} // Slightly increased size for better presence
                  priority
                />

                {/* Subtle overlay on the image itself for blending with the tech theme */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
