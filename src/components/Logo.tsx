interface LogoProps {
  size?: number;
  className?: string;
  color?: string;
}

export default function Logo({ size = 36, className = "", color = "#166534" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* TV screen body */}
      <rect x="3" y="6" width="34" height="22" rx="4" fill={color} />

      {/* Screen inner area */}
      <rect x="6" y="9" width="28" height="16" rx="2" fill="white" opacity="0.15" />

      {/* Play triangle */}
      <path d="M16 13.5 L26 17 L16 20.5 Z" fill="white" />

      {/* TV stand neck */}
      <rect x="18" y="28" width="4" height="4" rx="1" fill={color} />

      {/* TV base */}
      <rect x="12" y="32" width="16" height="3" rx="1.5" fill={color} />

      {/* Signal dots top-right */}
      <circle cx="34" cy="8" r="1.2" fill="white" opacity="0.7" />
      <circle cx="34" cy="12" r="1.2" fill="white" opacity="0.4" />
    </svg>
  );
}
