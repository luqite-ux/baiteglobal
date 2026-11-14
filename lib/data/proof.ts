import { en, type Localized } from '@/lib/i18n'
import type { IconName } from '@/components/icons'

export type CertificatePage = {
  page: 1 | 2
  /** Set to the scanned page image path once available, e.g. /images/certifications/iso-9001-page-1.jpg */
  src?: string
  alt: string
}

export type Certificate = {
  id: string
  anchor: string
  standard: string
  title: Localized
  icon: IconName
  certificateNumber: string
  issued: { iso: string; label: string }
  validThrough: { iso: string; label: string }
  scope: Localized
  pages: [CertificatePage, CertificatePage]
}

const certificateScope = en('Design, development, assembly and sales of ore color sorting machines')

export const certificates: Certificate[] = [
  {
    id: 'iso-9001',
    anchor: 'iso-9001',
    standard: 'ISO 9001:2015',
    title: en('Quality management system'),
    icon: 'quality',
    certificateNumber: '18926Q01590R001',
    issued: { iso: '2026-07-22', label: '22 July 2026' },
    validThrough: { iso: '2029-07-21', label: '21 July 2029' },
    scope: certificateScope,
    pages: [
      { page: 1, src: '/images/certifications/certificate-1.png', alt: 'ISO 9001:2015 certificate 18926Q01590R001, page 1 of 2' },
      { page: 2, src: '/images/certifications/certificate-2.png', alt: 'ISO 9001:2015 certificate 18926Q01590R001, page 2 of 2' },
    ],
  },
  {
    id: 'iso-14001',
    anchor: 'iso-14001',
    standard: 'ISO 14001:2015',
    title: en('Environmental management system'),
    icon: 'environment',
    certificateNumber: '18926E01106R001',
    issued: { iso: '2026-07-22', label: '22 July 2026' },
    validThrough: { iso: '2029-07-21', label: '21 July 2029' },
    scope: certificateScope,
    pages: [
      { page: 1, src: '/images/certifications/certificate-3.png', alt: 'ISO 14001:2015 certificate 18926E01106R001, page 1 of 2' },
      { page: 2, src: '/images/certifications/certificate-4.png', alt: 'ISO 14001:2015 certificate 18926E01106R001, page 2 of 2' },
    ],
  },
  {
    id: 'iso-45001',
    anchor: 'iso-45001',
    standard: 'ISO 45001:2018',
    title: en('Occupational health and safety management system'),
    icon: 'safety',
    certificateNumber: '18926S01025R001',
    issued: { iso: '2026-07-22', label: '22 July 2026' },
    validThrough: { iso: '2029-07-21', label: '21 July 2029' },
    scope: certificateScope,
    pages: [
      { page: 1, src: '/images/certifications/certificate-5.png', alt: 'ISO 45001:2018 certificate 18926S01025R001, page 1 of 2' },
      { page: 2, src: '/images/certifications/certificate-6.png', alt: 'ISO 45001:2018 certificate 18926S01025R001, page 2 of 2' },
    ],
  },
]

export type InstalledCase = {
  id: string
  number: string
  /** Set to the installed-equipment photo path once available, e.g. /images/cases/case-01.jpg */
  image?: { src: string; alt: string }
}

export const installedCases: InstalledCase[] = Array.from({ length: 11 }, (_, index) => {
  const number = String(index + 1).padStart(2, '0')
  const sourceNumber = String(index + 2).padStart(2, '0')
  return { id: `installed-${number}`, number, image: { src: `/images/cases/case-${sourceNumber}.jpg`, alt: `WCBEST optical sorting equipment in an installed customer application, case ${number}` } }
})

export type FactoryPhoto = {
  id: string
  label: string
  /** Set to the workshop photo path once available, e.g. /images/factory/workshop-1.jpg */
  image?: { src: string; alt: string }
}

export const factoryPhotos: FactoryPhoto[] = [1, 2, 3, 4, 5, 6].map((n) => ({
  id: `workshop-${n}`,
  label: `Workshop ${n}`,
  image: { src: `/images/factory/workshop-${n}.jpg`, alt: `Hefei Baite manufacturing facility and workshop view ${n}` },
}))
