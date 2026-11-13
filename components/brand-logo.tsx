import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { site } from '@/lib/site'

/**
 * The supplied logo file is a square canvas with generous white margins around the wordmark.
 * The image is shown whole (object-contain) at an enlarged size inside a clipping window,
 * so the wordmark reads at header scale while the white canvas blends into the page.
 */
export function BrandLogo({
  className,
  priority = false,
}: {
  className?: string
  priority?: boolean
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — ${site.company}, Home`}
      className={cn('relative block h-11 w-[158px] shrink-0 overflow-hidden rounded-sm', className)}
    >
      <Image
        src={site.logo}
        alt={`${site.name} logo`}
        width={1254}
        height={1254}
        sizes="200px"
        priority={priority}
        className="pointer-events-none absolute left-1/2 top-1/2 size-[198px] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain mix-blend-multiply"
      />
    </Link>
  )
}
