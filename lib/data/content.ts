import { en, type Localized } from '@/lib/i18n'
import type { IconName } from '@/components/icons'
import type { SortingPath } from '@/lib/data/products'

export type Application = {
  id: SortingPath
  anchor: string
  icon: IconName
  title: Localized
  cue: Localized
  chooseWhen: Localized[]
  shareWithUs: Localized[]
  productSlug: string
}

export const applications: Application[] = [
  {
    id: 'powder',
    anchor: 'powder-sorting',
    icon: 'powder',
    title: en('Powder sorting'),
    cue: en('Fine material in the 16–120 mesh range'),
    chooseWhen: [
      en('Your material is fine powder within the 16–120 mesh range.'),
      en('You want a dedicated powder sorter rather than a belt-fed machine.'),
      en('Particle size, not lump size, is the main constraint in your process.'),
    ],
    shareWithUs: [
      en('Mesh distribution of the feed'),
      en('Material type and the visual difference you want to separate'),
      en('Output you need to process'),
    ],
    productSlug: 'btft-s6',
  },
  {
    id: 'ai',
    anchor: 'ai-mineral-sorting',
    icon: 'ai',
    title: en('AI mineral sorting'),
    cue: en('Variable ore that is easier to show than to describe'),
    chooseWhen: [
      en('The appearance of your ore varies from lot to lot.'),
      en('Your accept and reject criteria are easier to define from sample material than from fixed rules.'),
      en('You want AI recognition as part of the sorting decision.'),
    ],
    shareWithUs: [
      en('Sample material or photographs of accepted and rejected pieces'),
      en('Size range of the feed'),
      en('Output you need to process'),
    ],
    productSlug: 'btks-1600dw-ai',
  },
  {
    id: 'dry-belt',
    anchor: 'dry-rapid-belt-sorting',
    icon: 'dry-belt',
    title: en('Dry rapid belt sorting'),
    cue: en('Belt-fed sorting for dry feed'),
    chooseWhen: [
      en('Your feed reaches the sorter dry.'),
      en('You want belt-fed rapid sorting for mineral pieces.'),
      en('You do not need a machine that also handles wet feed.'),
    ],
    shareWithUs: [
      en('Size range and moisture condition of the dry feed'),
      en('Material type and the visual difference you want to separate'),
      en('Output you need to process'),
    ],
    productSlug: 'btks-1600d',
  },
  {
    id: 'wet-dry',
    anchor: 'wet-and-dry-sorting',
    icon: 'wet-dry',
    title: en('Wet & dry sorting'),
    cue: en('One integrated belt sorter for both conditions'),
    chooseWhen: [
      en('Your feed is sometimes dry and sometimes wet.'),
      en('You prefer a single integrated machine over separate wet and dry lines.'),
      en('Moisture changes between circuits or operating conditions.'),
    ],
    shareWithUs: [
      en('How often the feed is wet and how often it is dry'),
      en('Size range of the material'),
      en('Output you need to process'),
    ],
    productSlug: 'btkas-k1600dw',
  },
]

export type TechStage = {
  id: string
  icon: IconName
  title: Localized
  text: Localized
  configure: Localized
}

export const techStages: TechStage[] = [
  {
    id: 'feed',
    icon: 'feed',
    title: en('Neutral feed'),
    text: en(
      'Material is presented to the sorter as a controlled, evenly spread stream so every piece can be inspected on its own.',
    ),
    configure: en('Feed size range, moisture condition and how material arrives at the machine.'),
  },
  {
    id: 'sensing',
    icon: 'sensing',
    title: en('Sensing and recognition'),
    text: en(
      'Optical sensing captures the appearance of each piece as it passes the inspection zone, and recognition software reads what the sensors see.',
    ),
    configure: en('The visual difference between the material you want to keep and the material you want to remove.'),
  },
  {
    id: 'decision',
    icon: 'decision',
    title: en('Decision'),
    text: en(
      'Each piece is compared against your sorting criteria and assigned to the accepted or rejected stream. On the BTKS-1600DW-AI, AI recognition supports this step.',
    ),
    configure: en('Sorting criteria, defined with sample material wherever possible.'),
  },
  {
    id: 'separation',
    icon: 'separation',
    title: en('Separation'),
    text: en(
      'Pieces assigned to the reject stream are diverted away from the main flow, leaving two separate outputs for downstream handling.',
    ),
    configure: en('Output handling and how the two streams leave the machine.'),
  },
]

export type ManufacturingStep = {
  id: string
  icon: IconName
  title: Localized
  text: Localized
}

export const manufacturingSteps: ManufacturingStep[] = [
  {
    id: 'design',
    icon: 'design',
    title: en('Design and development'),
    text: en('Sorting machines are designed and developed in-house at our Hefei facility.'),
  },
  {
    id: 'assembly',
    icon: 'assembly',
    title: en('Assembly'),
    text: en('Machines are assembled across four standard workshops on the same site.'),
  },
  {
    id: 'inspection',
    icon: 'inspection',
    title: en('Quality inspection'),
    text: en('Quality inspection is part of the production process, under certified management systems.'),
  },
  {
    id: 'sales',
    icon: 'sales',
    title: en('Sales and project coordination'),
    text: en('Our team confirms configuration, quotation and scheduling directly with each buyer.'),
  },
]

export type FaqGroup = {
  id: string
  title: Localized
  items: { id: string; question: Localized; answer: Localized }[]
}

export const faqGroups: FaqGroup[] = [
  {
    id: 'ordering',
    title: en('Ordering and pricing'),
    items: [
      {
        id: 'moq',
        question: en('What is the minimum order quantity?'),
        answer: en('The minimum order quantity is one unit.'),
      },
      {
        id: 'pricing',
        question: en('How is pricing determined?'),
        answer: en(
          'Pricing depends on the model and the configuration you need, so we quote each inquiry individually. Send us your material and requirements and we will respond with a quotation.',
        ),
      },
      {
        id: 'lead-time',
        question: en('What should I know about lead time?'),
        answer: en(
          'Lead time depends on the model, the configuration and our current production schedule. Our Hefei facility has a monthly capacity of 20–30 units, and we confirm the schedule with you when we quote.',
        ),
      },
    ],
  },
  {
    id: 'selection-quality',
    title: en('Selection and quality'),
    items: [
      {
        id: 'choose-model',
        question: en('How do I choose between the four models?'),
        answer: en(
          'Start from your material. Fine powder in the 16–120 mesh range points to the BTFT-S6; variable ore points to the AI-assisted BTKS-1600DW-AI; dry belt-fed feed points to the BTKS-1600D; and feed that is both dry and wet points to the BTKAS-K1600DW. Our team can confirm the match from your samples.',
        ),
      },
      {
        id: 'quality',
        question: en('How is quality controlled?'),
        answer: en(
          'Quality inspection is part of our production process. Our management systems are certified to ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018, covering design, development, assembly and sales of ore color sorting machines.',
        ),
      },
      {
        id: 'send',
        question: en('What should I send with my inquiry?'),
        answer: en(
          'The model you are interested in, the type of material, its size range or feed condition, and the capacity you need to process. Photographs or samples of accepted and rejected material help us most.',
        ),
      },
    ],
  },
]

export const company = {
  story: [
    'Hefei Baite Optoelectronics Technology Co., Ltd. designs, develops, assembles and sells ore color sorting machines under the WCBEST brand.',
    'The company was established on 9 November 2015 and builds its machines in Shangpai Town, Feixi County, Hefei, Anhui, China.',
    'Our range is organised around the material you need to sort: powder, variable ore, dry feed, and mixed wet and dry feed.',
  ],
}
