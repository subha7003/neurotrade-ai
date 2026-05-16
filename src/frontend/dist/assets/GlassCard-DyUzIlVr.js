import { r as reactExports, j as jsxRuntimeExports } from "./index-DZ-iRrHU.js";
const glowMap = {
  blue: "border-neon-blue glow-blue",
  purple: "border-neon-purple glow-purple",
  cyan: "border-neon-cyan glow-cyan",
  none: "border-white/8"
};
const GlassCard = reactExports.forwardRef(
  ({
    children,
    glowColor = "none",
    hover = false,
    padding = "p-6",
    className = "",
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        className: `${hover ? "glass-card-hover" : "glass-card"} ${glowMap[glowColor]} ${padding} ${className}`,
        ...props,
        children
      }
    );
  }
);
GlassCard.displayName = "GlassCard";
export {
  GlassCard as G
};
