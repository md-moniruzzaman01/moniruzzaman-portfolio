// src/components/Card/GlassCard.tsx
import React from "react";
import { GlassCardProps } from "./types";

export default function GlassCard({ children, className = "", style }: GlassCardProps) {
  return (
    <div
      className={`group relative p-6 rounded-2xl overflow-hidden hover:scale-105 ${className}`}
      style={style}
    >
      {/* Glass Backing Layer */}
      <div
        className="absolute inset-0 rounded-2xl border border-white/20 bg-white/10 transition-all duration-300 ease-out group-hover:bg-white/20"
        style={{
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
        }}
        aria-hidden
      />

      {/* Top-Left Light Highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0) 100%)",
          mixBlendMode: "overlay",
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Soft Shadow for Depth */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ boxShadow: "0 15px 35px rgba(0,0,0,0.4)" }}
        aria-hidden
      />
    </div>
  );
}
