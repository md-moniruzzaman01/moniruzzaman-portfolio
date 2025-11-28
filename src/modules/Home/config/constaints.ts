import { Sparkles, Zap, Palette } from "lucide-react";
import { PositionStyle } from "./types";

export const VIEWBOX_W = 900;
export const VIEWBOX_H = 750;
export const CORE_X = VIEWBOX_W / 2;
export const CORE_Y = VIEWBOX_H * 0.62;

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiApachekafka ,
  SiDocker,
  SiNextdotjs,
  SiGoland ,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiMysql,
  SiPrisma,
  SiRabbitmq,
  SiRedis,
  SiRedux,
  SiC,
  SiCplusplus,
  SiGit,
  SiGithub,
  SiKubernetes ,
} from "react-icons/si";
import { FaBrain } from "react-icons/fa";

export const ICON_MAP: { [key: string]: React.ElementType } = {
  HTML: SiHtml5,
  CSS: SiCss3,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Tailwind: SiTailwindcss,
  Bootstrap: SiBootstrap,
  React: SiReact,
  Kafka: SiApachekafka,
  Kubarnetes:SiKubernetes,
  Docker:SiDocker,
  Next: SiNextdotjs,
  Node: SiNodedotjs,
  Express: SiExpress,
  NestJS: SiNestjs,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Prisma: SiPrisma,
  RabbitMQ: SiRabbitmq,
  Redis: SiRedis,
  Redux: SiRedux,
  C: SiC,
  "C++": SiCplusplus,
  Git: SiGit,
  GitHub: SiGithub,
  AI: FaBrain,
  Golang:SiGoland 
};

export const ICON_COLOR_MAP: { [key: string]: string } = {
  HTML: "#E34F26",
  CSS: "#1572B6",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  Tailwind: "#06B6D4",
  Bootstrap: "#7952B3",
  React: "#61DAFB",
  Kubarnetes: "#326CE5",
  Next: "#000000",
  Node: "#339933",
  Express: "#000000",
  NestJS: "#E0234E",
  MongoDB: "#47A248",
  MySQL: "#4479A1",
  Prisma: "#0C344B",
  RabbitMQ: "#FF6600",
  Redis: "#DC382D",
  Redux: "#764ABC",
  Zustand: "#6E44FF",
  C: "#A8B9CC",
  "C++": "#00599C",
  Golang: "#1971c2",
  Git: "#F05032",
  GitHub: "#181717",
  AI: "#FF9A00",
  Docker:"#0db7ed"
};

// --- LOGO MAP: Updated with all your skills ---
// export const LOGO_MAP: { [key: string]: string } = {
//   HTML: "https://placehold.co/100x100/E34F26/ffffff?text=HTML",
//   CSS: "https://placehold.co/100x100/1572B6/ffffff?text=CSS",
//   JavaScript: "https://placehold.co/100x100/F7DF1E/000000?text=JS",
//   TypeScript: "https://placehold.co/100x100/3178C6/ffffff?text=TS",
//   Tailwind: "https://placehold.co/100x100/38BDF8/000000?text=TW",
//   Bootstrap: "https://placehold.co/100x100/7952B3/ffffff?text=BS",
//   React: "https://placehold.co/100x100/61DAFB/000000?text=R",
//   "React Native": "https://placehold.co/100x100/61DAFB/000000?text=RN",
//   Next: "https://placehold.co/100x100/000000/ffffff?text=NX",
//   Node: "https://placehold.co/100x100/339933/ffffff?text=N",
//   Express: "https://placehold.co/100x100/000000/ffffff?text=EX",
//   NestJS: "https://placehold.co/100x100/E0234E/ffffff?text=NJ",
//   MongoDB: "https://placehold.co/100x100/47A248/ffffff?text=MG",
//   MySQL: "https://placehold.co/100x100/4479A1/ffffff?text=MY",
//   Prisma: "https://placehold.co/100x100/0C344B/ffffff?text=PR",
//   RabbitMQ: "https://placehold.co/100x100/FF6600/ffffff?text=RMQ",
//   Redis: "https://placehold.co/100x100/DC382D/ffffff?text=RED",
//   Redux: "https://placehold.co/100x100/764ABC/ffffff?text=RX",
//   Zustand: "https://placehold.co/100x100/4F46E5/ffffff?text=ZT",
//   Golang: "https://placehold.co/100x100/00ADD8/ffffff?text=GO",
//   C: "https://placehold.co/100x100/A8B9CC/000000?text=C",
//   "C++": "https://placehold.co/100x100/00599C/ffffff?text=C++",
//   Git: "https://placehold.co/100x100/F05032/ffffff?text=Git",
//   GitHub: "https://placehold.co/100x100/181717/ffffff?text=GH",
//   Figma: "https://placehold.co/100x100/F24E1E/ffffff?text=Fg",
//   AI: "https://placehold.co/100x100/FF9A00/000000?text=AI",
//   Xd: "https://placehold.co/100x100/FF61F6/000000?text=Xd",
//   LinkedIn: "https://placehold.co/100x100/0A66C2/ffffff?text=in",
//   Google: "https://placehold.co/100x100/4285F4/ffffff?text=G",
//   Behance: "https://placehold.co/100x100/053EFF/ffffff?text=B",
// };

// --- TOP SKILLS: Updated for your expertise ---
export const topSkills: { name: string; style: PositionStyle }[] = [
  // Frontend

  { name: "JavaScript", style: { top: "3%", left: "30%" } },
  { name: "TypeScript", style: { top: "3%", left: "35%" } },
  { name: "React", style: { top: "3%", left: "15" } },
    { name: "Tailwind", style: { top: "3%", left: "20%" } },

  { name: "Next", style: { top: "3%", left: "25%" } },

  // Backend
  { name: "Node", style: { top: "3%", left: "45%" } },
  { name: "NestJS", style: { top: "3%", left: "40%" } },
  { name: "Kubarnetes", style: { top: "3%", left: "75%" } },
  { name: "MySQL", style: { top: "3%", left: "55%" } },
  { name: "Docker", style: { top: "3%", left: "70%" } },
  // Languages

  { name: "C++", style: { top: "3%", left: "65%" } },
  { name: "Golang", style: { top: "3%", left: "50%" } },

  // AI / Others
  { name: "AI", style: { top: "3%", left: "60%" } },
];

export const professionalCommitments = [
  {
    icon: Sparkles,
    title: "🔥 Modern",
    detail:
      "Crafting clean, high-performance architecture with the latest frameworks and development standards.",
    color: "text-indigo-400",
  },
  {
    icon: Zap,
    title: "⚡ Futuristic",
    detail:
      "Building forward-thinking solutions with automation, smart workflows, and next-gen engineering practices.",
    color: "text-red-400",
  },
  {
    icon: Palette,
    title: "🎨 Creative",
    detail:
      "Transforming ideas into polished digital experiences through thoughtful design and innovative problem-solving.",
    color: "text-yellow-400",
  },
];


export const myPartners = [
  { name: 'Swift Education', displayText: 'Swift Education' },
  { name: 'faith fultrees.ltd', displayText: 'Faith fultrees' },
  { name: 'Newtech Technology', displayText: 'Newtech technology' },
  { name: 'NEC Group', displayText: 'NEC Group' },
  // Add your own partners here!
];