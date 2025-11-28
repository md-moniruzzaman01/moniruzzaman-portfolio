import { ArrowRight, Download, Zap } from "lucide-react";
// *** IMPORTANT CHANGE: Update this import path to your transparent image file! ***
import heroImage from "../../../assets/web developer2.png";

import Image from "next/image";

import Button from "@components/Button";

import Link from "next/link";

const HeroSection = () => {
  const yourName = "Moniruzzaman"; // Your name to be absolutely positioned

  return (

    <section id="hero-container" className="relative min-h-[90vh] py-24 md:py-36 overflow-hidden  text-white">
      {/* 1. Massive Background Text Overlay (Low Opacity) */}

      <div className="absolute top-1/2  -translate-y-1/2 whitespace-nowrap opacity-[0.03] pointer-events-none z-0">
        <p className="text-[5rem] sm:text-[5rem] md:text-[25rem] font-black uppercase tracking-tighter leading-none shadowText">
          Web DEVELOPER
        </p>
      </div>

      {/* 2. Main Content Grid Container */}

      <div className=" container mx-auto max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center w-full">
        {/* Left Column: Text and CTAs */}

        <div className="flex flex-col space-y-6 order-2 lg:order-1 text-center lg:text-left py-20 md:py-0 hero-part1">
          {/* Main Headline - Bold and Specific */}

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tighter  ">
            Full-Stack <span className="text-indigo-400">Web Developer</span>
          </h1>

          {/* Sub-description - Clear Value Proposition */}

          <p className="text-xl md:text-2xl text-gray-400 max-w-xl mx-auto lg:mx-0 pt-2 textZoom">
            Building High-Performance Full-Stack Solutions: Next.js, React,
            Node.js, and Enterprise Systems.
          </p>

          {/* Dual Action Buttons (The core requirement) */}

          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start hero-btn">
            {/* Button 1: See Services (What I provide) */}

            <Link href="#services" passHref>
              <Button className="group px-8 py-3 text-lg font-bold uppercase shadow-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-300 ">
                What I Provide
                <Zap className="ml-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Button>
            </Link>

            {/* Button 2: Download Resume */}

            <Link href="https://drive.google.com/uc?export=download&id=1RWL_AmCdcqngK7aSsrDt1bYnBGDgdrCv" download="Moniruzzaman_Resume.pdf">
              <Button className="group px-8 py-3 text-lg font-bold uppercase border-2 border-gray-600 hover:border-white text-gray-300 hover:text-white bg-transparent transition-all duration-300">
                Download Resume
                <Download className="ml-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column: Image and Absolute Name */}

        <div className="relative flex justify-center items-center order-1 lg:order-2 p-4 w-full hero-part2">
          {/* Image */}

          <Image
            src={heroImage}
            alt="Moniruzzaman, a visionary full-stack developer"
            className="w-full h-auto max-w-md lg:max-w-none object-contain drop-shadow-[0_12px_32px_rgba(115,147,179,0.45)] z-20 hero-img"
            width={600}
            height={600}
            priority
          />

          {/* 3. Name Positioned Absolutely (Sticking to the image) */}

          {/* Positioning the name to overlay the image area for a bold, artistic touch */}

          <p className="absolute bottom-[-1rem] right-8 md:right-10 text-4xl md:text-7xl font-black uppercase tracking-tighter text-yellow-400  bg-gray-900 px-4 py-2 opacity-95 z-30 transform -rotate-2 shadow-2xl textZoom hero-name">
            {yourName}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
