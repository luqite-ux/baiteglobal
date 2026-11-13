import type { Metadata, Viewport } from 'next'
import { Archivo, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { JsonLd } from '@/components/json-ld'
import { organizationSchema, websiteSchema } from '@/lib/seo'
import { site } from '@/lib/site'
import { cookies } from 'next/headers'
import { PREVIEW_COOKIE } from '@/lib/site-content/site-content'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} Optical Mineral Sorting Machinery | ${site.company}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.company, url: site.url }],
  alternates: { canonical: site.url },
  openGraph: {
    type: 'website',
    siteName: site.name,
    url: site.url,
    title: `${site.name} Optical Mineral Sorting Machinery`,
    description: site.description,
    locale: 'en',
    images: [{ url: site.ogImage, alt: `${site.name} optical sorting machinery` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} Optical Mineral Sorting Machinery`,
    description: site.description,
    images: [site.ogImage],
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f6f8f7',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const preview = (await cookies()).has(PREVIEW_COOKIE)
  return (
    <html lang="en" className={`${archivo.variable} ${plexMono.variable}`}>
      <body className="font-sans antialiased">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {preview && <div className="sticky top-0 z-[100] flex items-center justify-between gap-4 bg-orange px-4 py-3 text-sm font-semibold text-ink"><span>Website content preview — changes are not public yet.</span><form action="/api/site-content/exit-preview" method="post"><button type="submit" className="rounded border border-ink px-3 py-1.5">Exit preview</button></form></div>}
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
      </body>
    </html>
  )
}
