import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type NeonVariant = "primary" | "secondary" | "outline" | "ghost";
type NeonSize = "sm" | "md" | "lg";

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: NeonVariant;
  size?: NeonSize;
  children: ReactNode;
  loading?: boolean;
}

const variantStyles: Record<NeonVariant, string> = {
  primary:
    "bg-primary/20 border border-primary/50 text-primary hover:bg-primary/30 hover:border-primary/70 glow-blue",
  secondary:
    "bg-secondary/20 border border-secondary/50 text-secondary hover:bg-secondary/30 hover:border-secondary/70 glow-purple",
  outline:
    "bg-transparent border border-accent/50 text-accent hover:bg-accent/10 hover:border-accent/70 glow-cyan",
  ghost:
    "bg-transparent border border-white/10 text-foreground hover:bg-white/5 hover:border-white/20",
};

const sizeStyles: Record<NeonSize, string> = {
  sm: "px-3 py-1.5 text-xs gap-1.5",
  md: "px-5 py-2.5 text-sm gap-2",
  lg: "px-7 py-3.5 text-base gap-2.5",
};

const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      children,
      loading = false,
      className = "",
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled || loading}
        className={`
        inline-flex items-center justify-center
        font-semibold rounded-lg
        transition-smooth
        cursor-pointer
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
        {...props}
      >
        {loading ? (
          <span className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
        ) : null}
        {children}
      </button>
    );
  },
);

NeonButton.displayName = "NeonButton";

export default NeonButton;
