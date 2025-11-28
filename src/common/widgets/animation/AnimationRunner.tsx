// src/components/AnimationsRunner.tsx
"use client";

import { useEffect } from "react";
import { initAnimations } from "../../../shared/animation";


export default function AnimationsRunner() {
  useEffect(() => {
    const cleanup = initAnimations();
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return null;
}
