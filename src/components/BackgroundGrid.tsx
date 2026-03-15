import React from "react";
import { cn } from "@/lib/utils";

interface BackgroundGridProps {
  color?: string;
  size?: string;
  className?: string;
  variant?: "grid" | "dots";
  fade?: boolean;
}

export const BackgroundGrid = ({
  color = "rgba(16, 185, 129, 0.08)",
  size = "48px",
  className,
  variant = "grid",
  fade = true,
}: BackgroundGridProps) => {
  const gridStyle = variant === "grid" 
    ? `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`
    : `radial-gradient(${color} 1px, transparent 1px)`;

  return (
    <div 
      className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}
      style={{
        backgroundImage: gridStyle,
        backgroundSize: `${size} ${size}`,
        maskImage: fade ? "radial-gradient(circle at center, black 0%, transparent 85%)" : undefined,
        WebkitMaskImage: fade ? "radial-gradient(circle at center, black 0%, transparent 85%)" : undefined,
      }}
    />
  );
};

export default BackgroundGrid;
