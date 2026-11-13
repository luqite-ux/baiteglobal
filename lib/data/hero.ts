export type HeroSlide = {
  id: string
  eyebrow: string
  headline: string
  body: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  image: { src: string; alt: string }
  /** Which side of the banner carries the copy on wide screens. The subject sits on the opposite side. */
  copySide: 'left' | 'right'
  /** object-position values that keep the machinery inside the crop. */
  focalPoint: { desktop: string; mobile: string }
  /**
   * Below the xl breakpoint the copy never overlays the image: the banner shows
   * on top with a focal crop and the copy sits in its own panel underneath.
   */
  mobileStrategy: 'stacked-panel'
}

export const heroSlides: HeroSlide[] = [
  {
    id: 'optical-sorting-systems',
    eyebrow: 'WCBEST optical sorting',
    headline: 'Optical Sorting Systems for Mineral Processing',
    body: 'Four independent sorting models for powder, AI-assisted, dry belt and wet-and-dry material workflows, built by Hefei Baite Optoelectronics.',
    primaryCta: { label: 'Explore Sorters', href: '/products' },
    secondaryCta: { label: 'Request a Quote', href: '/contact' },
    image: {
      src: '/images/hero/banner-1.jpg',
      alt: 'Illustration of an optical sorting machine with an orange sensing beam in front of a modern industrial building',
    },
    copySide: 'left',
    focalPoint: { desktop: '72% 50%', mobile: '80% 50%' },
    mobileStrategy: 'stacked-panel',
  },
  {
    id: 'sorting-path',
    eyebrow: 'Application-led selection',
    headline: 'Choose the Sorting Path Around Your Material',
    body: 'Start from your feed condition — powder, variable ore, dry or wet — and see which WCBEST model path fits your material.',
    primaryCta: { label: 'Find Your Sorting Path', href: '/applications' },
    secondaryCta: { label: 'Request a Quote', href: '/contact' },
    image: {
      src: '/images/hero/banner-2.jpg',
      alt: 'Illustration of a sorting line with a conveyor, robotic arm and inspection screen inside a glass-walled hall',
    },
    copySide: 'right',
    focalPoint: { desktop: '30% 50%', mobile: '14% 50%' },
    mobileStrategy: 'stacked-panel',
  },
  {
    id: 'manufacturing-evidence',
    eyebrow: 'Manufacturing in Hefei',
    headline: 'Manufacturing Evidence You Can Review',
    body: 'A 5,000 m² facility, four standard workshops, a monthly capacity of 20–30 units and ISO-certified management systems.',
    primaryCta: { label: 'See Manufacturing', href: '/manufacturing' },
    secondaryCta: { label: 'Request a Quote', href: '/contact' },
    image: {
      src: '/images/hero/banner-3.jpg',
      alt: 'Illustration of three optical sorting machines on a polished floor in front of a glass wall with orange sensing beams',
    },
    copySide: 'left',
    focalPoint: { desktop: '70% 50%', mobile: '78% 50%' },
    mobileStrategy: 'stacked-panel',
  },
]
