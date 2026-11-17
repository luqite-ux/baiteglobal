export type ProductDetailImage = { src: string; alt: string }

export function getProductDetailImages<T extends ProductDetailImage>(primary: T): T[] {
  return [primary]
}

export function heroOverlayClass(copySide: 'left' | 'right'): string {
  return copySide === 'left'
    ? 'absolute inset-0 bg-gradient-to-r from-[#07171e]/84 via-[#07171e]/42 to-transparent lg:left-0 lg:right-auto lg:w-[65%]'
    : 'absolute inset-0 bg-gradient-to-l from-[#07171e]/84 via-[#07171e]/42 to-transparent lg:right-0 lg:left-auto lg:w-[65%]'
}

export const contactInquiryGuidance = {
  title: 'Help us review your material',
  items: [
    'Material type and representative sample photos',
    'Feed size and moisture condition',
    'Required output and the model, if already known',
  ],
} as const
