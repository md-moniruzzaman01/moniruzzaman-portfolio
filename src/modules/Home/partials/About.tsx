"use client";

import { ArrowRight, Shield, GitBranch, Code } from "lucide-react";
import React from "react";
import { professionalCommitments } from "../config/constaints";

// ====================================================================
// --- 1. CONFIGURATION & HELPERS ---
// ====================================================================

// --- Type Definitions ---
interface AbsolutePosition {
  absX: number;
  absY: number;
  relX: number;
  relY: number;
}
interface PositionStyle {
  top: string;
  left: string;
  [key: string]: any;
}
interface SkillIconProps {
  name: string;
  size?: string;
  style: PositionStyle & { relX?: number | undefined | null };
}
interface OrbitingGlyphProps {
  name: string;
  style: PositionStyle;
}
interface SkillOrbitV2Props {
  isBackground?: boolean;
}

// ViewBox and Core Position
const VIEWBOX_W = 900;
const VIEWBOX_H = 750;
const CORE_X = VIEWBOX_W / 2; // 450
const CORE_Y = VIEWBOX_H * 0.62; // 465

// Placeholder URLs for the logos
const LOGO_MAP: { [key: string]: string } = {
  Figma: "https://placehold.co/100x100/f24e1e/ffffff?text=Fg",
  React: "https://placehold.co/100x100/61DAFB/000000?text=R",
  CSharp: "https://placehold.co/100x100/9B418E/ffffff?text=C#",
  Node: "https://placehold.co/100x100/339933/ffffff?text=N",
  JS: "https://placehold.co/100x100/F7DF1E/000000?text=JS",
  TS: "https://placehold.co/100x100/3178C6/ffffff?text=TS",
  Xd: "https://placehold.co/100x100/FF61F6/000000?text=Xd",
  Next: "https://placehold.co/100x100/000000/ffffff?text=NX",
  AI: "https://placehold.co/100x100/FF9A00/000000?text=AI",
  Express: "https://placehold.co/100x100/000000/ffffff?text=EX",
  MongoDB: "https://placehold.co/100x100/47A248/ffffff?text=MG",
  LinkedIn: "https://placehold.co/100x100/0A66C2/ffffff?text=in",
  Google: "https://placehold.co/100x100/4285F4/ffffff?text=G",
  Behance: "https://placehold.co/100x100/053EFF/ffffff?text=B",
};

/**
 * Converts percentage-based CSS positioning to absolute pixel coordinates
 * based on the VIEWBOX dimensions.
 */
const getAbsPosition = (style: PositionStyle): AbsolutePosition => {
  const topPct = parseFloat(style.top);
  const leftPct = parseFloat(style.left);
  const absX = (leftPct / 100) * VIEWBOX_W;
  const absY = (topPct / 100) * VIEWBOX_H;

  return {
    absX,
    absY,
    relX: absX - CORE_X,
    relY: absY - CORE_Y,
  };
};

// ====================================================================
// --- 2. PRESENTATIONAL COMPONENTS ---
// ====================================================================

export const OrbitingGlyph: React.FC<OrbitingGlyphProps> = ({
  name,
  style,
}) => {
  const glyphs: { [key: string]: any } = {
    AI: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M16 16l-4-4-4 4"></path>
      </svg>
    ),
    Code: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    Gear: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
    ),
    JS: <span className="font-bold text-xs">JS</span>,
    Box: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"></path>
        <path d="M12 6V3"></path>
        <path d="M12 18V21"></path>
      </svg>
    ),
  };

  const baseClasses = `absolute w-5 h-5 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-20 
                         text-purple-400 hover:text-indigo-400 transition-colors duration-300`;

  return (
    <div className={baseClasses} style={style}>
      {glyphs[name] || <span className="font-bold text-xs">{name}</span>}
    </div>
  );
};

const SkillIcon: React.FC<SkillIconProps> = ({
  name,
  size = "w-10 h-10",
  style,
}) => {
  const baseClasses = `absolute ${size} rounded-full flex items-center justify-center transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 z-20`;
  const imageSrc = LOGO_MAP[name] || LOGO_MAP.Figma;

  // Outer glow logic
  const glowClasses =
    style.relX !== undefined
      ? "shadow-sm shadow-purple-500/80"
      : "shadow-lg shadow-black/30";

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    target.onerror = null;
    target.style.backgroundColor = "#6d28d9";
    target.alt = name;
    target.src = LOGO_MAP[name];
  };

  return (
    <div className={`${baseClasses} ${glowClasses}`} style={style}>
      <img
        src={imageSrc}
        alt={name}
        className="w-full h-full object-cover rounded-full opacity-40"
        onError={handleError}
      />
    </div>
  );
};

// ====================================================================
// --- 3. SKILLORBITV2 MAIN COMPONENT (With Structural Fix) ---
// ====================================================================

const SkillOrbitV2: React.FC<SkillOrbitV2Props> = () => {
  // 1. TOP FANNING SKILLS (Start of the path)
  const topSkills: { name: string; style: PositionStyle }[] = [
    { name: "Figma", style: { top: "15%", left: "20%" } },
    { name: "React", style: { top: "15%", left: "30%" } },
    { name: "CSharp", style: { top: "15%", left: "40%" } },
    { name: "Node", style: { top: "15%", left: "60%" } },
    { name: "JS", style: { top: "15%", left: "70%" } },
    { name: "TS", style: { top: "15%", left: "80%" } },

    { name: "Xd", style: { top: "25%", left: "25%" } },
    { name: "Next", style: { top: "25%", left: "35%" } },
    { name: "AI", style: { top: "25%", left: "65%" } },
    { name: "Express", style: { top: "25%", left: "75%" } },
    { name: "MongoDB", style: { top: "25%", left: "85%" } },
  ];

  // 2. ORBITING ICONS (Icons that need to move)
  const orbitingIcons: {
    component: React.FC<SkillIconProps | OrbitingGlyphProps>;
    name: string;
    size?: string;
    style: PositionStyle;
  }[] = [
    // Large Logos
    {
      component: SkillIcon,
      name: "LinkedIn",
      size: "w-7 h-7",
      style: { top: "40%", left: "10%" },
    },
    {
      component: SkillIcon,
      name: "Google",
      size: "w-7 h-7",
      style: { top: "65%", left: "5%" },
    },
    {
      component: SkillIcon,
      name: "Behance",
      size: "w-7 h-7",
      style: { top: "80%", left: "25%" },
    },
    {
      component: SkillIcon,
      name: "Xd",
      size: "w-7 h-7",
      style: { top: "78%", left: "79%" },
    },
    {
      component: SkillIcon,
      name: "JS",
      size: "w-7 h-7",
      style: { top: "65%", left: "85%" },
    },

    // Small Glyphs
    {
      component: OrbitingGlyph,
      name: "AI",
      style: { top: "45%", left: "20%" },
    },
    {
      component: OrbitingGlyph,
      name: "Code",
      style: { top: "45%", left: "80%" },
    },
    {
      component: OrbitingGlyph,
      name: "Gear",
      style: { top: "55%", left: "90%" },
    },
    {
      component: OrbitingGlyph,
      name: "Box",
      style: { top: "85%", left: "60%" },
    },
  ];

  // --- Generate Fanning Paths ---
  const fanningPaths = topSkills.map((skill, index) => {
    const { absX, absY } = getAbsPosition(skill.style);

    let cX: number, cY: number;

    // Control point logic
    if (absX < CORE_X) {
      // Left side
      cX = absX + (CORE_X - absX) * 0.15;
    } else {
      // Right side
      cX = absX - (absX - CORE_X) * 0.15;
    }
    cY = 300;

    // The path ends at (absX, absY)
    return (
      <path
        key={index}
        className="fanning-path"
        d={`M ${CORE_X} ${CORE_Y} Q ${cX} ${cY}, ${absX} ${absY}`}
      />
    );
  });

  return (
    <section
      className={`relative w-full h-full 
                       text-gray-200 overflow-hidden min-h-screen`}
    >
      {/* --- Main Visualization Area Container (For Centering) --- */}
      <div
        className={`absolute inset-0 mx-auto 
                           flex items-center justify-center`}
        style={{
          // Use max-dimensions to ensure the inner coordinate system
          // matches the aspect ratio of the viewBox (900x750)
          maxWidth: `${VIEWBOX_W}px`,
          maxHeight: `${VIEWBOX_H}px`,
          width: "100%",
          height: "100%",
        }}
      >
        {/* 🎯 FIX: Fixed-size Reference Layer (900x750) 
                    This guarantees that a CSS position of 20% left is exactly 180px, 
                    matching the SVG endpoint position. */}
        <div
          className="relative"
          style={{ width: VIEWBOX_W, height: VIEWBOX_H }}
        >
          {/* SVG Container (Layer 1: Paths & Ellipses) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
          >
            <style>{`
                            .fanning-path {
                                stroke: #a78bfa; 
                                stroke-width: 1.5;
                                opacity: 0.2; 
                                fill: none;
                            }
                            @keyframes orbit-1 {
                                from { transform: rotate(0deg); }
                                to { transform: rotate(360deg); }
                            }
                            @keyframes orbit-2 {
                                from { transform: rotate(0deg); }
                                to { transform: rotate(-360deg); }
                            }
                        `}</style>

            {/* Orbital Paths */}
            <ellipse
              cx={CORE_X}
              cy={CORE_Y}
              rx="380"
              ry="250"
              stroke="#c084fc"
              strokeWidth="1.5"
              fill="none"
              opacity={0.05}
              style={{
                animation: "orbit-1 40s linear infinite",
                transformOrigin: `${CORE_X}px ${CORE_Y}px`,
              }}
            />
            <ellipse
              cx={CORE_X}
              cy={CORE_Y}
              rx="300"
              ry="300"
              stroke="#a78bfa"
              strokeWidth="0.8"
              fill="none"
              opacity={0.075}
              style={{
                animation: "orbit-2 60s linear infinite",
                transformOrigin: `${CORE_X}px ${CORE_Y}px`,
              }}
            />

            {/* Fanning Lines */}
            {fanningPaths}
          </svg>

          {/* Fanning Skills - Logos (Layer 2: Icons) */}
          {topSkills.map((skill, i) => {
            const { absX, absY } = getAbsPosition(skill.style);

            // Recalculate percentage based on VIEWBOX dimensions for ultimate precision
            const finalStyle: PositionStyle = {
              top: `${(absY / VIEWBOX_H) * 100}%`,
              left: `${(absX / VIEWBOX_W) * 100}%`,
            };

            return (
              <SkillIcon
                key={`top-${i}`}
                name={skill.name}
                size="w-8 h-8 md:w-10 md:h-10"
                style={finalStyle}
              />
            );
          })}

          {/* Rotating Container for Orbiting Icons (Layer 3: Orbiters) */}
          <div
            className="absolute inset-0" // Stretches to fill the 900x750 container
            style={{
              animation: "orbit-1 40s linear infinite",
              transformOrigin: "50% 62%",
            }}
          >
            {/* Orbiting Icons */}
            {orbitingIcons.map((item, i) => {
              if (item.component === OrbitingGlyph) {
                return (
                  <OrbitingGlyph
                    key={`orbit-${i}`}
                    name={item.name}
                    style={item.style}
                  />
                );
              }
              return (
                <SkillIcon
                  key={`orbit-${i}`}
                  name={item.name}
                  size={item.size}
                  style={{ ...item.style, relX: 1, relY: 1 }}
                />
              );
            })}
          </div>

          {/* Central Anchor Point (Layer 4: Center Text) */}
          <div
            className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center z-10 
                                     border-4 border-indigo-600/50 
                                     shadow-xl shadow-yellow-400"
            style={{
              top: (CORE_Y / VIEWBOX_H) * 100 + "%",
              left: (CORE_X / VIEWBOX_W) * 100 + "%",
              transform: "translate(-50%, -50%)",
              boxShadow:
                "0 0 10px rgba(109, 40, 217, 0.5), 0 0 25px rgba(129, 140, 248, 0.3), inset 0 0 10px rgba(109, 40, 217, 0.2)",
            }}
          >
            <span
              className="text-2xl md:text-4xl font-light text-white font-serif "
              style={{
                textShadow:
                  "0 0 5px #c084fc, 0 0 15px #a78bfa, 0 0 30px #7c3aed, 0 0 45px #6d28d9",
              }}
            >
              Skills
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

// ====================================================================
// --- 4. ABOUTSECTION COMPONENT (Default Export) ---
// ====================================================================

// Core competencies
// const professionalCommitments = [
//   {
//     icon: Code,
//     title: "LEADERSHIP",
//     detail:
//       "Driving architectural vision and modern performance standards across development teams.",
//     color: "text-indigo-400",
//   },
//   {
//     icon: Shield,
//     title: "RESILIENCE",
//     detail:
//       "Implementing robust error handling and automated testing for guaranteed platform stability.",
//     color: "text-red-400",
//   },
//   {
//     icon: GitBranch,
//     title: "OWNERSHIP",
//     detail:
//       "End-to-end management of the product lifecycle, from concept to production monitoring.",
//     color: "text-yellow-400",
//   },
// ];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-8 md:py-20 mb-32  text-white px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* BACKGROUND: SkillOrbitV2 component */}
      <div className="absolute inset-0 z-0">
        <SkillOrbitV2 isBackground={true} />
      </div>

      {/* FOREGROUND: About Content */}
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-7">
          <h1 className="text-2xl sm:text-7xl md:text-4xl font-black leading-snug tracking-tightertext-white">
            FULL-STACK <br />
            <span className="text-white dark:text-gray-900 bg-indigo-600 dark:bg-indigo-400 px-4 py-1 inline-block transform -rotate-1">
              WEB DEVELOPER
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10 items-start">
          {/* Left Column (Narrative & CTA) */}
          <div className="lg:col-span-7 space-y-8">
            <h2
              className="text-5xl md:text-6xl font-extrabold tracking-tighter leading-tight text-white"
              style={{
                textShadow: "0 0 5px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)",
              }}
            >
              Engineered for <span className="text-indigo-400">Scale.</span>{" "}
              Reliable.
            </h2>

            <p
              className="text-xl text-gray-300 leading-relaxed font-normal max-w-xl"
              style={{ textShadow: "0 0 3px rgba(0,0,0,0.8)" }}
            >
              My name is Mohammad, and my expertise lies in solving complex
              technical challenges.** I architect and build high-availability
              solutions using modern stacks like **Next.js, React, and
              Node.js**. My goal is to ensure your applications deliver
              unparalleled **Performance, Maintainability, and Security
            </p>

            {/* Professional CTA Button */}
            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center text-lg font-bold uppercase 
                                        bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 
                                        rounded-lg shadow-xl shadow-indigo-500/50 transition-all duration-300 transform hover:scale-[1.03] focus:ring-4 focus:ring-indigo-300"
              >
                Initiate Project Inquiry <ArrowRight className="ml-3 h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Column (Manifesto List) */}
          <div className="lg:col-span-5 bg-gray-900/90 backdrop-blur-sm p-8 rounded-xl border border-gray-800 shadow-xl">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-6 border-b border-indigo-700 pb-3">
              Engineering Manifesto
            </h3>

            <div className="space-y-6">
              {professionalCommitments.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 group transition-all duration-200 p-3 -m-3 rounded-lg hover:bg-gray-800/50"
                  >
                    <div className="flex-shrink-0 pt-1">
                      <Icon className={`h-6 w-6 ${item.color}`} />
                    </div>

                    <div>
                      <h4 className="text-lg font-extrabold text-white uppercase tracking-wider group-hover:text-indigo-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed pt-0.5">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
