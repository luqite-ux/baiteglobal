import Link from 'next/link'
import { Play } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import type { VideoCase } from '@/lib/data/proof'

type VideoCaseShowcaseProps = {
  video: VideoCase
  compact?: boolean
}

export function VideoCaseShowcase({ video, compact = false }: VideoCaseShowcaseProps) {
  return (
    <Reveal
      className={
        compact
          ? 'mt-10 overflow-hidden rounded-xl border border-line bg-white shadow-sm'
          : 'overflow-hidden rounded-xl border border-line bg-white shadow-sm'
      }
    >
      <div className="grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-12 lg:p-10">
        <div className="mx-auto w-full max-w-[20rem] sm:max-w-[21rem]">
          <div className="relative aspect-[9/16] overflow-hidden rounded-lg border border-line bg-ink shadow-md">
            <video
              controls
              playsInline
              preload="metadata"
              poster={video.poster}
              aria-label={video.title}
              className="h-full w-full object-cover"
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support HTML5 video playback.
            </video>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-teal/25 bg-teal-tint px-3.5 py-1 font-mono text-xs font-medium uppercase tracking-[0.14em] text-teal-deep">
            <Play className="size-3.5 fill-current" aria-hidden="true" />
            <span>{video.eyebrow}</span>
          </div>

          <h3 className="display mt-4 text-2xl sm:text-3xl">{video.title}</h3>
          <p className="lede mt-4">{video.description}</p>

          <ul className="mt-6 space-y-2.5 border-t border-line pt-6 text-sm text-ink">
            {video.highlights.map((item) => (
              <li key={item} className="border-l-2 border-orange pl-3.5 leading-relaxed">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              Request a configuration quote
            </Link>
            {compact ? (
              <Link href="/cases" className="btn btn-outline">
                View all cases
              </Link>
            ) : (
              <Link href="/products" className="btn btn-outline">
                Compare sorting models
              </Link>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  )
}
