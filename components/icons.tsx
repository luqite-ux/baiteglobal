import type { ReactNode, SVGProps } from 'react'
import { cn } from '@/lib/utils'

const paths = {
  powder: (
    <>
      <path d="M3 18h18" />
      <path d="M5 18c1.2-3 2.8-4.5 7-4.5s5.8 1.5 7 4.5" />
      <circle cx="8" cy="8" r="1" />
      <circle cx="12" cy="5.5" r="1" />
      <circle cx="16" cy="8" r="1" />
      <circle cx="10" cy="11" r="0.8" />
      <circle cx="14" cy="11" r="0.8" />
    </>
  ),
  ai: (
    <>
      <rect x="6" y="6" width="12" height="12" />
      <path d="M9 3v3M12 3v3M15 3v3M9 18v3M12 18v3M15 18v3M3 9h3M3 12h3M3 15h3M18 9h3M18 12h3M18 15h3" />
      <path d="M8.5 12s1.4-2.5 3.5-2.5 3.5 2.5 3.5 2.5-1.4 2.5-3.5 2.5S8.5 12 8.5 12z" />
      <circle cx="12" cy="12" r="0.9" />
    </>
  ),
  'dry-belt': (
    <>
      <rect x="3" y="12" width="18" height="6" rx="3" />
      <circle cx="6" cy="15" r="1" />
      <circle cx="18" cy="15" r="1" />
      <path d="M9 12v-1.5M15 12v-1.5" />
      <path d="M7 8.5l1.5-2 2 1.5 1.5-2.5 2 2.5 1.5-1.5 1.5 2" />
    </>
  ),
  'wet-dry': (
    <>
      <path d="M8 3.5c2.4 3 4 5.2 4 7.3a4 4 0 0 1-8 0c0-2.1 1.6-4.3 4-7.3z" />
      <circle cx="17" cy="8" r="2.2" />
      <path d="M17 3.5v1M17 11.5v1M12.5 8h1M20.5 8h1M13.8 4.8l.7.7M19.5 10.5l.7.7M20.2 4.8l-.7.7" />
      <path d="M4 20h16" />
      <path d="M13 16h7" />
    </>
  ),
  feed: (
    <>
      <path d="M4 4h16l-5.5 7v5h-5v-5z" />
      <path d="M8 4l2.5 7M16 4l-2.5 7" />
      <path d="M12 16v4" />
      <path d="M9 20h6" />
    </>
  ),
  sensing: (
    <>
      <path d="M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4" />
      <path d="M3 12h18" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  decision: (
    <>
      <circle cx="12" cy="5" r="1.8" />
      <path d="M12 6.8V11" />
      <path d="M12 11l-6 4v5M12 11l6 4v5" />
      <path d="M4 20h4M16 20h4" />
    </>
  ),
  separation: (
    <>
      <rect x="9" y="3" width="6" height="3" />
      <path d="M12 6v3" />
      <circle cx="12" cy="11" r="0.8" />
      <circle cx="9" cy="13.5" r="0.8" />
      <circle cx="16" cy="12" r="0.8" />
      <path d="M3 20h8v-4M13 20h8v-6" />
      <path d="M17 9l3-3M17 9h3M17 9v-3" />
    </>
  ),
  factory: (
    <>
      <path d="M3 20V9l5 3V9l5 3V6h3v14z" />
      <path d="M3 20h18" />
      <path d="M8 16h2M13 16h2" />
    </>
  ),
  area: (
    <>
      <rect x="4" y="4" width="16" height="16" />
      <path d="M4 9h3M4 15h3M9 4v3M15 4v3" />
      <path d="M10 14l4-4M10 14h2.5M10 14v-2.5M14 10h-2.5M14 10v2.5" />
    </>
  ),
  workshop: (
    <>
      <rect x="3" y="4" width="8" height="7" />
      <rect x="13" y="4" width="8" height="7" />
      <rect x="3" y="13" width="8" height="7" />
      <rect x="13" y="13" width="8" height="7" />
    </>
  ),
  capacity: (
    <>
      <path d="M4 19a8 8 0 1 1 16 0" />
      <path d="M12 19l4-6" />
      <circle cx="12" cy="19" r="1" />
      <path d="M7 12.5l.8.8M12 9.5v1M17 12.5l-.8.8" />
    </>
  ),
  founded: (
    <>
      <rect x="4" y="5" width="16" height="15" />
      <path d="M4 10h16M8 3v4M16 3v4" />
      <path d="M9 15l2 2 4-4" />
    </>
  ),
  design: (
    <>
      <path d="M4 20l1-4L16 5l3 3L8 19z" />
      <path d="M14 7l3 3" />
      <path d="M4 20h4" />
    </>
  ),
  assembly: (
    <>
      <circle cx="9" cy="9" r="3" />
      <path d="M9 3.5v1.5M9 13v1.5M3.5 9H5M13 9h1.5M5.1 5.1l1 1M11.9 11.9l1 1M5.1 12.9l1-1M11.9 6.1l1-1" />
      <circle cx="17" cy="16" r="2.5" />
      <path d="M17 11.8v1.2M17 19v1.2M12.8 16H14M20 16h1.2" />
    </>
  ),
  inspection: (
    <>
      <rect x="4" y="4" width="16" height="16" />
      <path d="M8 12.5l2.7 2.7L16 9.5" />
    </>
  ),
  sales: (
    <>
      <path d="M3 8l9-4 9 4-9 4z" />
      <path d="M3 8v8l9 4 9-4V8" />
      <path d="M12 12v8" />
    </>
  ),
  quality: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  environment: (
    <>
      <path d="M5 19c0-7 4-12 14-14 0 9-4 14-11 14" />
      <path d="M5 19c2-4 5-7 9-9" />
    </>
  ),
  safety: (
    <>
      <path d="M5 14a7 7 0 0 1 14 0" />
      <path d="M3 14h18v3H3z" />
      <path d="M12 7v-2M9 14V9.5M15 14V9.5" />
    </>
  ),
  installed: (
    <>
      <path d="M3 19h18" />
      <rect x="5" y="9" width="11" height="10" />
      <path d="M16 12h3v7M8 9V6h5v3M8 13h5" />
    </>
  ),
  camera: (
    <>
      <path d="M4 8h3l1.5-2h7L17 8h3v11H4z" />
      <circle cx="12" cy="13" r="3.2" />
    </>
  ),
  page: (
    <>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4" />
      <path d="M9 12h6M9 15h6M9 18h4" />
    </>
  ),
  news: (
    <>
      <rect x="4" y="4" width="16" height="16" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </>
  ),
} satisfies Record<string, ReactNode>

export type IconName = keyof typeof paths

type LineIconProps = Omit<SVGProps<SVGSVGElement>, 'name'> & { name: IconName }

export function LineIcon({ name, className, ...props }: LineIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
      className={cn('size-6 shrink-0', className)}
      {...props}
    >
      {paths[name]}
    </svg>
  )
}

export const Icon = LineIcon
