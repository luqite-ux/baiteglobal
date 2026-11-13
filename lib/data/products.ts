import { en, t, type Localized } from '@/lib/i18n'

export type SortingPath = 'powder' | 'ai' | 'dry-belt' | 'wet-dry'

export type SpecRow = {
  label: string
  value: string
  note?: string
}

export type Product = {
  slug: string
  model: string
  name: Localized
  pathId: SortingPath
  pathLabel: Localized
  summary: Localized
  description: Localized
  highlights: Localized[]
  specs: {
    dimensions: string
    power?: string
    meshRange?: string
    listedValue?: string
  }
  image: {
    src: string
    alt: string
  }
  inquiryNote: Localized
}

export const sortingPaths: { id: SortingPath; label: string }[] = [
  { id: 'powder', label: 'Powder' },
  { id: 'ai', label: 'AI mineral' },
  { id: 'dry-belt', label: 'Dry rapid belt' },
  { id: 'wet-dry', label: 'Wet & dry' },
]

export const products: Product[] = [
  {
    slug: 'btft-s6',
    model: 'BTFT-S6',
    name: en('BTFT-S6 Powder Sorter'),
    pathId: 'powder',
    pathLabel: en('Powder sorting'),
    summary: en(
      'A dedicated optical sorter for fine powder material in the 16–120 mesh range.',
    ),
    description: en(
      'The BTFT-S6 is the WCBEST sorter for fine material. It is built around powder-size feed, with a stated working range of 16–120 mesh, and is the model to start with when your material is finer than a conventional belt-fed sorter is designed to handle.',
    ),
    highlights: [
      en('Designed for powder-size feed in the 16–120 mesh range'),
      en('Compact footprint of 3275 × 2058 × 2510 mm'),
      en('7 kW power rating'),
    ],
    specs: {
      dimensions: '3275 × 2058 × 2510 mm',
      power: '7 kW',
      meshRange: '16–120 mesh',
    },
    image: {
      src: '/images/products/btft-s6.png',
      alt: 'WCBEST BTFT-S6 Powder Sorter, a white and teal optical sorting machine with a front control screen',
    },
    inquiryNote: en(
      'Tell us the mesh distribution of your material and the output you need to separate.',
    ),
  },
  {
    slug: 'btks-1600dw-ai',
    model: 'BTKS-1600DW-AI',
    name: en('BTKS-1600DW-AI AI Mineral Sorter'),
    pathId: 'ai',
    pathLabel: en('AI mineral sorting'),
    summary: en(
      'An AI-assisted mineral sorter for material that is easier to recognise from samples than to describe with fixed rules.',
    ),
    description: en(
      'The BTKS-1600DW-AI adds AI recognition to the WCBEST sorting line-up. It is the model to consider when your ore varies in appearance and your sorting criteria are best defined by showing the machine representative material.',
    ),
    highlights: [
      en('AI recognition model for variable mineral feed'),
      en('Overall size of 3890 × 2610 × 2540 mm'),
      en('8 kW power rating'),
    ],
    specs: {
      dimensions: '3890 × 2610 × 2540 mm',
      power: '8 kW',
    },
    image: {
      src: '/images/products/btks-1600dw-ai.png',
      alt: 'WCBEST BTKS-1600DW-AI AI Mineral Sorter, a black and teal sorting machine with an overhead sensing frame',
    },
    inquiryNote: en(
      'Send sample material or photographs and describe which pieces you want kept and which you want removed.',
    ),
  },
  {
    slug: 'btks-1600d',
    model: 'BTKS-1600D',
    name: en('BTKS-1600D Dry Rapid Belt Sorter'),
    pathId: 'dry-belt',
    pathLabel: en('Dry rapid belt sorting'),
    summary: en(
      'A belt-fed rapid sorter for dry mineral feed.',
    ),
    description: en(
      'The BTKS-1600D is the WCBEST dry rapid belt sorter. It is the straightforward choice when your feed arrives dry and you want belt-fed sorting without wet-processing features.',
    ),
    highlights: [
      en('Belt-fed rapid sorting for dry feed'),
      en('Overall size of 3840 × 2350 × 2530 mm'),
      en('7 kW power rating'),
    ],
    specs: {
      dimensions: '3840 × 2350 × 2530 mm',
      power: '7 kW',
    },
    image: {
      src: '/images/products/btks-1600d.png',
      alt: 'WCBEST BTKS-1600D Dry Rapid Belt Sorter, an orange and black belt sorting machine with a side discharge hopper',
    },
    inquiryNote: en(
      'Tell us the size range and moisture condition of your dry feed and the volume you plan to process.',
    ),
  },
  {
    slug: 'btkas-k1600dw',
    model: 'BTKAS-K1600DW',
    name: en('BTKAS-K1600DW Wet & Dry Integrated Rapid Belt Sorter'),
    pathId: 'wet-dry',
    pathLabel: en('Wet & dry integrated sorting'),
    summary: en(
      'An integrated rapid belt sorter for operations that handle both dry and wet feed.',
    ),
    description: en(
      'The BTKAS-K1600DW combines dry and wet handling in one integrated belt sorter. Choose it when feed moisture changes between dry and wet conditions and you would rather run one machine than two.',
    ),
    highlights: [
      en('One integrated machine for dry and wet feed'),
      en('Overall size of 3840 × 2350 × 2530 mm'),
      en('Listed machine figure of 3.5T'),
    ],
    specs: {
      dimensions: '3840 × 2350 × 2530 mm',
      listedValue: '3.5T',
    },
    image: {
      src: '/images/products/btkas-k1600dw.png',
      alt: 'WCBEST BTKAS-K1600DW Wet and Dry Integrated Rapid Belt Sorter, an orange and black belt sorter with a control screen and overhead sensing frame',
    },
    inquiryNote: en(
      'Describe how often your feed is wet and how often it is dry, and the size range of the material.',
    ),
  },
]

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug)
}

export function getOtherProducts(slug: string) {
  return products.filter((product) => product.slug !== slug)
}

export function buildSpecRows(product: Product): SpecRow[] {
  const rows: SpecRow[] = [
    { label: 'Model', value: product.model },
    { label: 'Product type', value: t(product.pathLabel) },
    { label: 'Dimensions', value: product.specs.dimensions },
  ]
  if (product.specs.power) rows.push({ label: 'Power', value: product.specs.power })
  if (product.specs.meshRange) {
    rows.push({ label: 'Mesh range', value: product.specs.meshRange })
  }
  if (product.specs.listedValue) {
    rows.push({
      label: 'Listed figure',
      value: product.specs.listedValue,
      note: 'Please confirm the measurement basis with our team when requesting a quotation.',
    })
  }
  return rows
}

export const comparisonRows: { label: string; read: (product: Product) => string | undefined }[] = [
  { label: 'Product type', read: (product) => t(product.pathLabel) },
  { label: 'Dimensions', read: (product) => product.specs.dimensions },
  { label: 'Power', read: (product) => product.specs.power },
  { label: 'Mesh range', read: (product) => product.specs.meshRange },
  { label: 'Listed figure', read: (product) => product.specs.listedValue },
]
