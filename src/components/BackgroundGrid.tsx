import React from "react";

interface BackgroundGridProps {
  color?: string;
  size?: string;
  className?: string;
}

export const BackgroundGrid = ({ 
  color = "rgba(0,0,0,1)", 
  size = "48px",
  className = "absolute inset-0 pointer-events-none opacity-[0.03]" 
}: BackgroundGridProps) => {
  return (
    <div
      className={className}
      style={{
        backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
        backgroundSize: `${size} ${size}`,
      }}
    />
  );
};

export default BackgroundGrid;
