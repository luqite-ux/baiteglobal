'use client'

import { createElement, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

type RevealPhase = 'visible' | 'armed' | 'shown'

type RevealProps = {
  children: ReactNode
  as?: 'div' | 'li' | 'article' | 'section' | 'header' | 'figure' | 'span'
  variant?: 'rise' | 'node' | 'line' | 'line-y'
  /** Position inside a repeated group; drives the stagger so every card gets its own reveal. */
  index?: number
  className?: string
  id?: string
}

/**
 * Content is visible by default (server render, no JavaScript, reduced motion).
 * After hydration each element arms itself and is shown the first time it enters the viewport.
 */
export function Reveal({
  children,
  as = 'div',
  variant = 'rise',
  index = 0,
  className,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const hasAnimated = useRef(false)
  const [phase, setPhase] = useState<RevealPhase>('visible')

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || typeof IntersectionObserver === 'undefined') return

    setPhase('armed')

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            setPhase('shown')
            observer.disconnect()
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const style = { '--reveal-delay': `${Math.min(index, 5) * 70}ms` } as CSSProperties

  return createElement(
    as,
    {
      ref,
      id,
      className,
      style,
      'data-reveal': phase === 'visible' ? undefined : phase,
      'data-reveal-variant': variant,
    },
    children,
  )
}
