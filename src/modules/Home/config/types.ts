export type PositionStyle ={
    top: string;
    left: string;
    [key: string]: any; 
}

export type AbsolutePosition ={
  absX: number;
  absY: number;
  relX: number;
  relY: number;
}

export type SkillIconProps ={
    name: string;
    size?: string;
    style: PositionStyle & { relX?: number | undefined | null };
}

export type OrbitingGlyphProps ={
    name: string;
    style: PositionStyle;
}

export type SkillOrbitProps ={
    isBackground?: boolean; // New prop for conditional rendering
}

