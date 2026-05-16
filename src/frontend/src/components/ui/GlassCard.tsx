import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

type GlowColor = "blue" | "purple" | "cyan" | "none";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  glowColor?: GlowColor;
  hover?: boolean;
  padding?: string;
}

const glowMap: Record<GlowColor, string> = {
  blue: "border-neon-blue glow-blue",
  purple: "border-neon-purple glow-purple",
  cyan: "border-neon-cyan glow-cyan",
  none: "border-white/8",
};

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  (
    {
      children,
      glowColor = "none",
      hover = false,
      padding = "p-6",
      className = "",
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={`${
          hover ? "glass-card-hover" : "glass-card"
        } ${glowMap[glowColor]} ${padding} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  },
);

GlassCard.displayName = "GlassCard";

export default GlassCard;
