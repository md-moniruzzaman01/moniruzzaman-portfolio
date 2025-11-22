import React from "react";
import { GlassCardProps } from "./types";




export default function GlassCard({ children, className = "" }: GlassCardProps) {
return (
<div className={`group relative p-6 rounded-2xl overflow-hidden ${className}`}>
{/* backing layer: translucent + border */}
<div
className={
"absolute inset-0 rounded-2xl border border-white/20 bg-white/5 transition-colors duration-300 ease-out " +
"group-hover:bg-white/8"
}
// inline style for better cross-browser backdrop-filter support
style={{
backdropFilter: "blur(8px)",
WebkitBackdropFilter: "blur(8px)",
}}
aria-hidden
/>


{/* subtle lighting highlight */}
<div
className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
style={{
background:
"linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 40%, rgba(255,255,255,0) 100%)",
mixBlendMode: "overlay",
}}
/>


{/* content layer (on top) */}
<div className="relative z-10 text-white">
{children ?? (
<div>
<h3 className="text-lg font-semibold">Glass card</h3>
<p className="mt-2 text-sm opacity-80">Hover to see the glass effect.</p>
</div>
)}
</div>


{/* subtle drop shadow for depth */}
<div
className="absolute inset-0 rounded-2xl pointer-events-none"
aria-hidden
style={{ boxShadow: "0 10px 30px rgba(2,6,23,0.6)" }}
/>
</div>
);
}