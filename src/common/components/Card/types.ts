export interface GlassCardProps {
  children: React.ReactNode;
  className?: string; // For Tailwind classes
  style?: React.CSSProperties; // <-- ADDED THIS FOR ANIMATION DELAY
}