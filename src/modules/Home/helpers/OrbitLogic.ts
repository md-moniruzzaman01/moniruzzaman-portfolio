import { AbsolutePosition, PositionStyle } from "../config/types";

const VIEWBOX_W = 1000;
const VIEWBOX_H = 750;
const CORE_X = VIEWBOX_W / 2; // 450
const CORE_Y = VIEWBOX_H * 0.62; // 465



export const getAbsPosition = (style: PositionStyle): AbsolutePosition=> {
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

    // export const fanningPaths = topSkills.map((skill, index) => {
    //     const { absX, absY } = getAbsPosition(skill.style);
        
    //     let cX: number, cY: number;
        
    //     if (absX < CORE_X) { // Left side
    //         cX = CORE_X - (CORE_X - absX) * 0.5;
    //         cY = CORE_Y - (CORE_Y - absY) * 0.5;
    //     } else { // Right side
    //         cX = CORE_X + (absX - CORE_X) * 0.5;
    //         cY = CORE_Y - (CORE_Y - absY) * 0.5;
    //     }

    //     cY = 300; // Adjust control point vertically for the fan-out appearance

    //     return (
    //         <path 
    //             key={index} 
    //             className="fanning-path" 
    //             d={`M ${CORE_X} ${CORE_Y} Q ${cX} ${cY}, ${absX} ${absY}`} 
    //         />
    //     );
    // });
