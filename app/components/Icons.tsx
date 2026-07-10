// Line-icon set, 1.5px stroke, 20×20 viewBox. Consistent geometry across all
// icons so nothing looks imported from a random pack.

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 18, children, ...rest }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const Icon = {
  Compass: (p: IconProps) => (
    <Base {...p}>
      <circle cx="10" cy="10" r="7.25" />
      <path d="M13.4 6.6l-1.8 4.8-4.8 1.8 1.8-4.8z" fill="currentColor" fillOpacity="0.14" />
    </Base>
  ),
  Briefcase: (p: IconProps) => (
    <Base {...p}>
      <rect x="2.75" y="6.25" width="14.5" height="10" rx="1.75" />
      <path d="M7.25 6.25V4.75a1.5 1.5 0 011.5-1.5h2.5a1.5 1.5 0 011.5 1.5v1.5" />
      <path d="M2.75 10.5c2.4 1.1 4.8 1.6 7.25 1.6 2.45 0 4.85-.5 7.25-1.6" />
    </Base>
  ),
  Users: (p: IconProps) => (
    <Base {...p}>
      <circle cx="8" cy="7.5" r="2.75" />
      <path d="M2.75 16.25c.4-2.5 2.4-4 5.25-4s4.85 1.5 5.25 4" />
      <circle cx="14" cy="6.5" r="2" />
      <path d="M13 12.4c2 .3 3.7 1.6 4.25 3.85" />
    </Base>
  ),
  Calendar: (p: IconProps) => (
    <Base {...p}>
      <rect x="2.75" y="4.5" width="14.5" height="12" rx="1.75" />
      <path d="M2.75 8.25h14.5" />
      <path d="M6.5 3v3M13.5 3v3" />
    </Base>
  ),
  Doc: (p: IconProps) => (
    <Base {...p}>
      <path d="M4.75 2.75h6.5l4 4v10.5a1 1 0 01-1 1h-9.5a1 1 0 01-1-1v-13a1 1 0 011-1z" />
      <path d="M11 2.75V6.5a.75.75 0 00.75.75h3.5" />
      <path d="M6.75 11.5h6.5M6.75 14h4.5" />
    </Base>
  ),
  Chart: (p: IconProps) => (
    <Base {...p}>
      <path d="M2.75 16.5h14.5" />
      <path d="M5.5 13.5v-3M9 13.5V7.5M12.5 13.5v-4.5M16 13.5v-6" />
    </Base>
  ),
  Search: (p: IconProps) => (
    <Base {...p}>
      <circle cx="8.75" cy="8.75" r="5" />
      <path d="M17 17l-4.7-4.7" />
    </Base>
  ),
  Sparkle: (p: IconProps) => (
    <Base {...p}>
      <path d="M10 2.75l1.6 4.6 4.65 1.6-4.65 1.6L10 15.25l-1.6-4.7L3.75 9l4.65-1.6z" />
      <path d="M15.5 14.5l.7 1.85L18 17l-1.8.7-.7 1.8-.7-1.8L13 17l1.8-.65z" />
    </Base>
  ),
  Bell: (p: IconProps) => (
    <Base {...p}>
      <path d="M5 8.5a5 5 0 0110 0v3l1.25 2.25H3.75L5 11.5z" />
      <path d="M8 15.5a2 2 0 004 0" />
    </Base>
  ),
  ArrowRight: (p: IconProps) => (
    <Base {...p}>
      <path d="M4.5 10h11" />
      <path d="M11.5 6.5l3.5 3.5-3.5 3.5" />
    </Base>
  ),
  ArrowUp: (p: IconProps) => (
    <Base {...p}>
      <path d="M10 15.25V4.75" />
      <path d="M6 8.5L10 4.5 14 8.5" />
    </Base>
  ),
  ArrowDown: (p: IconProps) => (
    <Base {...p}>
      <path d="M10 4.75v10.5" />
      <path d="M6 11.5L10 15.5 14 11.5" />
    </Base>
  ),
  Plus: (p: IconProps) => (
    <Base {...p}>
      <path d="M10 4.5v11M4.5 10h11" />
    </Base>
  ),
  Filter: (p: IconProps) => (
    <Base {...p}>
      <path d="M3 4.75h14L11.5 11v5.25L8.5 15V11z" />
    </Base>
  ),
  Dot: (p: IconProps) => (
    <Base {...p}>
      <circle cx="10" cy="10" r="2.25" fill="currentColor" />
    </Base>
  ),
  Chevron: (p: IconProps) => (
    <Base {...p}>
      <path d="M7.5 5l5 5-5 5" />
    </Base>
  ),
  Check: (p: IconProps) => (
    <Base {...p}>
      <path d="M4.5 10.5l3.5 3.5 7.5-8" />
    </Base>
  ),
  Logout: (p: IconProps) => (
    <Base {...p}>
      <path d="M11 4.75H5.5a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5H11" />
      <path d="M13 7l3 3-3 3M16 10H8" />
    </Base>
  ),
  Command: (p: IconProps) => (
    <Base {...p}>
      <rect x="4.5" y="4.5" width="4" height="4" rx="1.5" />
      <rect x="11.5" y="4.5" width="4" height="4" rx="1.5" />
      <rect x="4.5" y="11.5" width="4" height="4" rx="1.5" />
      <rect x="11.5" y="11.5" width="4" height="4" rx="1.5" />
    </Base>
  ),
};
