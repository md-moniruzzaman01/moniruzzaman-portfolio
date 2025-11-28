"use client";

import {
  CORE_X,
  CORE_Y,
  ICON_COLOR_MAP,
  ICON_MAP,
  topSkills,
  VIEWBOX_H,
  VIEWBOX_W,
} from "../config/constaints";
import {
  OrbitingGlyphProps,
  PositionStyle,
  SkillIconProps,
  SkillOrbitProps,
} from "../config/types";
import { getAbsPosition } from "../helpers/OrbitLogic";

const SkillIcon: React.FC<SkillIconProps> = ({
  name,
  size = "w-10 h-10",
  style,
}) => {
  const IconComponent = ICON_MAP[name];
  const iconColor = ICON_COLOR_MAP[name] || "#fff";
  return (
    <div
      className={`absolute ${size} flex items-center justify-center rounded-full text-white shadow-lg
                  transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300`}
      style={style}
    >
      {IconComponent ? (
        <IconComponent
          className="w-full h-full scale-100 hover:scale-125"
          style={{ color: iconColor }}
        />
      ) : (
        <span>{name}</span>
      )}
    </div>
  );
};

export const SkillOrbit: React.FC<SkillOrbitProps> = () => {
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
      name: "Git",
      size: "w-7 h-7",
      style: { top: "40%", left: "10%" },
    },
    {
      component: SkillIcon,
      name: "Tailwind",
      size: "w-7 h-7",
      style: { top: "65%", left: "5%" },
    },
    {
      component: SkillIcon,
      name: "JavaScript",
      size: "w-7 h-7",
      style: { top: "80%", left: "25%" },
    },
    {
      component: SkillIcon,
      name: "CSS",
      size: "w-7 h-7",
      style: { top: "78%", left: "79%" },
    },
    {
      component: SkillIcon,
      name: "HTML",
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
      component: SkillIcon,
      name: "Redux",
      style: { top: "45%", left: "80%" },
    },
    {
      component: SkillIcon,
      name: "Kafka",
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

  const baseClasses = `absolute w-5 h-5 flex items-center justify-center transform -translate-x-1/2-translate-y-1/2 z-20 text-purple-400 hover:text-indigo-400 transition-colors duration-300`;

  return (
    <div className={baseClasses} style={style}>
      {glyphs[name] || <span className="font-bold text-xs">{name}</span>}
    </div>
  );
};
