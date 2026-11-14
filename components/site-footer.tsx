import Link from 'next/link'
import { BrandLogo } from '@/components/brand-logo'
import { products } from '@/lib/data/products'
import { contactNav, primaryNav, site } from '@/lib/site'
import { t } from '@/lib/i18n'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-line bg-mist">
      <div className="container-x grid gap-12 py-14 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:gap-10">
        <div>
          <BrandLogo />
          <p className="mt-5 max-w-xs text-sm font-semibold text-ink">{site.company}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
            Optical mineral sorting machinery designed, assembled and sold from Hefei, Anhui, China.
          </p>
        </div>

        <nav aria-label="Footer pages">
          <h2 className="eyebrow">Explore</h2>
          <ul className="mt-4 space-y-1">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-9 items-center text-sm text-ink hover:text-teal-deep hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={contactNav.href}
                className="inline-flex min-h-9 items-center text-sm text-ink hover:text-teal-deep hover:underline"
              >
                {contactNav.label}
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Footer products">
          <h2 className="eyebrow">Sorters</h2>
          <ul className="mt-4 space-y-1">
            {products.map((product) => (
              <li key={product.slug}>
                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex min-h-9 items-center text-sm text-ink hover:text-teal-deep hover:underline"
                >
                  {product.model}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-ink-soft">
            {t(products[0].pathLabel)}, AI, dry belt and wet &amp; dry workflows.
          </p>
        </nav>

        <div>
          <h2 className="eyebrow">Contact</h2>
          <address className="mt-4 space-y-3 text-sm not-italic leading-relaxed text-ink">
            <p>{site.address.full}</p>
            <p>
              <a href={`mailto:${site.email}`} className="font-medium text-teal-deep hover:underline">
                {site.email}
              </a>
            </p>
            <p>
              <a href={site.phoneHref} className="font-medium text-teal-deep hover:underline">
                {site.phone}
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-2 py-5 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.company} All rights reserved.
          </p>
          <p>{site.domain}</p>
        </div>
      </div>
    </footer>
  )
}
