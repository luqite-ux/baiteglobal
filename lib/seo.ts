import type { Metadata } from 'next'
import { absoluteUrl, site } from '@/lib/site'
import type { Product } from '@/lib/data/products'
import type { NewsPost } from '@/lib/data/news'
import { t } from '@/lib/i18n'

type PageMetaInput = {
  title: string
  description: string
  path: string
  image?: { src: string; alt: string }
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
}

export function buildMetadata({
  title,
  description,
  path,
  image,
  type = 'website',
  publishedTime,
  modifiedTime,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path)
  const ogImage = image ?? { src: site.ogImage, alt: `${site.name} optical sorting machinery` }
  const imageUrl = absoluteUrl(ogImage.src)

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: site.name,
      locale: 'en',
      images: [{ url: imageUrl, alt: ogImage.alt }],
      ...(type === 'article' ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    name: site.company,
    legalName: site.company,
    alternateName: [site.name, site.companyZh],
    url: site.url,
    logo: absoluteUrl(site.logo),
    email: site.email,
    telephone: site.phone,
    foundingDate: site.established.iso,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.countryCode,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: site.email,
        telephone: site.phone,
        availableLanguage: ['English'],
      },
    ],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    name: site.name,
    url: site.url,
    inLanguage: 'en',
    publisher: { '@id': `${site.url}/#organization` },
  }
}

export function productSchema(product: Product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: t(product.name),
    description: t(product.summary),
    sku: product.model,
    model: product.model,
    image: absoluteUrl(product.image.src),
    url: absoluteUrl(`/products/${product.slug}`),
    brand: { '@type': 'Brand', name: site.name },
    manufacturer: { '@id': `${site.url}/#organization` },
  }
}

export function articleSchema(post: NewsPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    mainEntityOfPage: absoluteUrl(`/news/${post.slug}`),
    image: post.coverImage ? absoluteUrl(post.coverImage.src) : undefined,
    author: { '@id': `${site.url}/#organization` },
    publisher: { '@id': `${site.url}/#organization` },
  }
}

export type Crumb = { name: string; href: string }

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.href),
    })),
  }
}
