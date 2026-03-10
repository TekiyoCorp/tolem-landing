"use client";

interface LogoProps {
  variant?: "full" | "symbol";
  color?: "black" | "white" | "gray";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizes = {
  sm: { symbol: 24, text: 14 },
  md: { symbol: 32, text: 18 },
  lg: { symbol: 48, text: 28 },
  xl: { symbol: 64, text: 36 },
};

const colors = {
  black: "#020202",
  white: "#FFFFFF",
  gray: "#B2B3B5",
};

export default function Logo({
  variant = "full",
  color = "black",
  size = "md",
  className = "",
}: LogoProps) {
  const { symbol: symbolSize, text: textSize } = sizes[size];
  const fillColor = colors[color];

  // TOLEM Monogram SVG - Based on official charte
  // Combines: T (top bar) + M (chevron pointing down) + watch hand concept
  const Symbol = () => (
    <svg
      width={symbolSize}
      height={symbolSize}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      {/* Top horizontal bar of T */}
      <rect x="8" y="8" width="32" height="4" fill={fillColor} />

      {/* Vertical stem connecting to M */}
      <rect x="22" y="8" width="4" height="12" fill={fillColor} />

      {/* Left diagonal of M */}
      <polygon
        points="22,20 24,20 14,40 10,40"
        fill={fillColor}
      />

      {/* Right diagonal of M */}
      <polygon
        points="26,20 24,20 34,40 38,40"
        fill={fillColor}
      />

      {/* Center V of M (chevron pointing down) */}
      <polygon
        points="24,20 28,20 24,32 20,20"
        fill={fillColor}
      />
    </svg>
  );

  // Text wordmark
  const Wordmark = () => (
    <span
      className="font-display font-medium tracking-[0.15em]"
      style={{ fontSize: textSize, color: fillColor }}
    >
      TOLEM
    </span>
  );

  if (variant === "symbol") {
    return (
      <div className={className}>
        <Symbol />
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <Symbol />
      <Wordmark />
    </div>
  );
}

// Inline logo for navigation (symbol + text horizontal)
export function LogoInline({
  color = "black",
  className = "",
}: {
  color?: "black" | "white" | "gray";
  className?: string;
}) {
  const fillColor = colors[color];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width={28}
        height={28}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <rect x="8" y="8" width="32" height="4" fill={fillColor} />
        <rect x="22" y="8" width="4" height="12" fill={fillColor} />
        <polygon points="22,20 24,20 14,40 10,40" fill={fillColor} />
        <polygon points="26,20 24,20 34,40 38,40" fill={fillColor} />
        <polygon points="24,20 28,20 24,32 20,20" fill={fillColor} />
      </svg>
      <span
        className="font-display font-medium tracking-[0.12em] text-lg"
        style={{ color: fillColor }}
      >
        TOLEM
      </span>
    </div>
  );
}

// Large decorative logo for hero sections
export function LogoHero({ color = "black" }: { color?: "black" | "white" }) {
  const fillColor = colors[color];

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <rect x="8" y="8" width="32" height="4" fill={fillColor} />
      <rect x="22" y="8" width="4" height="12" fill={fillColor} />
      <polygon points="22,20 24,20 14,40 10,40" fill={fillColor} />
      <polygon points="26,20 24,20 34,40 38,40" fill={fillColor} />
      <polygon points="24,20 28,20 24,32 20,20" fill={fillColor} />
    </svg>
  );
}
