export const site = {
  name: 'WCBEST',
  company: 'Hefei Baite Optoelectronics Technology Co., Ltd.',
  domain: 'baiteglobal.com',
  url: 'https://baiteglobal.com',
  email: 'info@baiteglobal.com',
  phone: '+86 137 0560 8666',
  phoneHref: 'tel:+8613705608666',
  tagline: 'Optical mineral sorting machinery',
  description:
    'WCBEST optical mineral sorting machinery from Hefei Baite Optoelectronics: powder sorter, AI mineral sorter, dry rapid belt sorter and wet & dry integrated belt sorter.',
  address: {
    full: '200 m north of the intersection of Chuangxin Avenue and Juxing Road, Shangpai Town, Feixi County, Hefei, Anhui, China',
    street: '200 m north of the intersection of Chuangxin Avenue and Juxing Road',
    locality: 'Shangpai Town, Feixi County, Hefei',
    region: 'Anhui',
    country: 'China',
    countryCode: 'CN',
  },
  established: {
    iso: '2015-11-09',
    label: '9 November 2015',
    year: '2015',
  },
  facility: {
    areaM2: '5,000',
    workshops: '4',
    monthlyCapacity: '20–30',
  },
  scope: 'Design, development, assembly and sales of ore color sorting machines',
  logo: '/brand/wcbest-logo.png',
  ogImage: '/images/hero/banner-3.jpg',
} as const

export type NavItem = { label: string; href: string }

export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Applications', href: '/applications' },
  { label: 'Technology', href: '/technology' },
  { label: 'Manufacturing', href: '/manufacturing' },
  { label: 'Cases', href: '/cases' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'About', href: '/about' },
  { label: 'News', href: '/news' },
]

export const contactNav: NavItem = { label: 'Contact', href: '/contact' }

export function absoluteUrl(path = '/') {
  if (/^https?:\/\//i.test(path)) return path
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${site.url}${normalizedPath === '/' ? '' : normalizedPath}`
}
