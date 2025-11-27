import { ArrowRight, Download, Zap } from "lucide-react";
// *** IMPORTANT CHANGE: Update this import path to your transparent image file! ***
import heroImage from "../../../assets/web developer2.png";

import Image from "next/image";

import Button from "@components/Button";

import Link from "next/link";

const HeroSection = () => {
  const yourName = "Moniruzzaman"; // Your name to be absolutely positioned

  return (
    // Base container: deep dark background for contrast, min-height for impact

    <section className="relative min-h-[90vh] py-24 md:py-36 overflow-hidden   text-white">
      {/* 1. Massive Background Text Overlay (Low Opacity) */}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center whitespace-nowrap opacity-[0.03] pointer-events-none z-0">
        <p className="text-[5rem] sm:text-[5rem] md:text-[24rem] font-black text-white uppercase tracking-tighter leading-none ">
          Web DEV
        </p>
      </div>

      {/* 2. Main Content Grid Container */}

      <div className=" container mx-auto max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center w-full">
        {/* Left Column: Text and CTAs */}

        <div className="flex flex-col space-y-6 order-2 lg:order-1 text-center lg:text-left py-20 md:py-0">
          {/* Main Headline - Bold and Specific */}

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tighter">
            Full-Stack <span className="text-indigo-400">Web Developer</span>
          </h1>

          {/* Sub-description - Clear Value Proposition */}

          <p className="text-xl md:text-2xl text-gray-400 max-w-xl mx-auto lg:mx-0 pt-2">
            Building High-Performance Full-Stack Solutions: Next.js, React,
            Node.js, and Enterprise Systems.
          </p>

          {/* Dual Action Buttons (The core requirement) */}

          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* Button 1: See Services (What I provide) */}

            <Link href="#services" passHref>
              <Button className="group px-8 py-3 text-lg font-bold uppercase shadow-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-300">
                What I Provide
                <Zap className="ml-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Button>
            </Link>

            {/* Button 2: Download Resume */}

            <a href="/Mohammad_Resume.pdf" download="Mohammad_Resume.pdf">
              <Button className="group px-8 py-3 text-lg font-bold uppercase border-2 border-gray-600 hover:border-white text-gray-300 hover:text-white bg-transparent transition-all duration-300">
                Download Resume
                <Download className="ml-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </a>
          </div>
        </div>

        {/* Right Column: Image and Absolute Name */}

        <div className="relative flex justify-center items-center order-1 lg:order-2 p-4 w-full ">
          {/* Image */}

          <Image
            src={heroImage}
            alt="Mohammad, a visionary full-stack developer"
            className="w-full h-auto max-w-md lg:max-w-none object-contain drop-shadow-[0_12px_32px_rgba(115,147,179,0.45)] z-20"
            width={600}
            height={600}
            priority
          />

          {/* 3. Name Positioned Absolutely (Sticking to the image) */}

          {/* Positioning the name to overlay the image area for a bold, artistic touch */}

          <p className="absolute bottom-[-1rem] right-8 md:right-10 text-4xl md:text-7xl font-black uppercase tracking-tighter text-yellow-400  bg-gray-900 px-4 py-2 opacity-95 z-30 transform -rotate-2 shadow-2xl">
            {yourName}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// <section className="relative min-h-[95vh] py-24 md:py-36 overflow-hidden  text-white">

//   {/* 1. Massive Background Text Overlay (Low Opacity) - Better visual tie-in */}
//   <div
//     className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
//                text-center whitespace-nowrap opacity-[0.03] pointer-events-none z-0"
//   >
//     <p className="text-[5rem] sm:text-[8rem] md:text-[24rem] font-black text-white uppercase tracking-tighter leading-none ">
//       Web Dev
//     </p>
//   </div>

//   {/* 2. Main Content Grid Container */}
//   <div className=" container mx-auto max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center w-full">

//     {/* Left Column: Text and CTAs */}
//     <div className="flex flex-col space-y-6 order-2 lg:order-1 text-center lg:text-left py-10 md:py-0">

//       {/* Main Headline - Bold and Specific, Using Yellow Accent */}
//       <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tighter">
//         Full Stack <span className="text-yellow-400">Developer</span>
//       </h1>

//       {/* Sub-description - Clear Value Proposition */}
//       <p className="text-xl md:text-2xl text-indigo-200 max-w-xl mx-auto lg:mx-0 pt-2">
//         I craft performance-first web solutions using Next.js, React, and
//         Node.js, specializing in **enterprise-level scalability**.
//       </p>

//       {/* Dual Action Buttons (The core requirement) */}
//       <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

//         {/* Button 1: See Services (Primary CTA - Solid Yellow with Shadow) */}
//         <Link href="#services" passHref>
//           <Button
//             className="group px-8 py-3 text-lg font-bold uppercase
//                        bg-yellow-400 hover:bg-yellow-300 text-indigo-950 transition-all duration-300
//                        drop-shadow-[0_0_10px_rgba(250,204,21,0.6)] hover:drop-shadow-[0_0_20px_rgba(250,204,21,0.9)]"
//           >
//             What I Provide
//             <Zap className="ml-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
//           </Button>
//         </Link>

//         {/* Button 2: Download Resume (Secondary CTA - Outline with Indigo focus) */}
//         <a href="/Mohammad_Resume.pdf" download="Mohammad_Resume.pdf">
//           <Button
//             className="group px-8 py-3 text-lg font-bold uppercase
//                        border-2 border-indigo-600 hover:border-yellow-400 text-white hover:text-yellow-400
//                        bg-transparent transition-all duration-300"
//           >
//             Download Resume
//             <Download className="ml-3 h-5 w-5 group-hover:scale-110 transition-transform" />
//           </Button>
//         </a>
//       </div>
//     </div>

//     {/* Right Column: Image and Absolute Name */}
//     <div className="relative flex justify-center items-center order-1 lg:order-2 p-4 w-full ">

//       {/* Image with the Custom Shadow for a premium glow */}
//       <Image
//         src={heroImage}
//         alt="Mohammad, a visionary full-stack developer"
//         className="w-full h-auto max-w-md lg:max-w-none object-contain
//                    drop-shadow-[0_10px_30px_rgba(55,48,163,0.7)] hover:drop-shadow-[0_10px_40px_rgba(250,204,21,0.4)] transition-all duration-500 z-20"
//         width={600}
//         height={600}
//         priority
//       />

//       {/* 3. Name Positioned Absolutely */}
//       <p
//         className="absolute bottom-2 right-4 md:right-10
//                    text-4xl md:text-7xl font-black uppercase tracking-tighter text-yellow-400
//                    bg-indigo-950 px-4 py-2 opacity-95 z-30 transform -rotate-3 shadow-2xl
//                    border-b-4 border-yellow-400"
//       >
//         {yourName}
//       </p>
//     </div>
//   </div>
// </section>
