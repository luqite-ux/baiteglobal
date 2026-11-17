import test from 'node:test'
import assert from 'node:assert/strict'
import { renderToStaticMarkup } from 'react-dom/server'

import ProductPage from '../app/products/[slug]/page'
import ContactPage from '../app/contact/page'
import { HeroCarousel } from '../components/hero-carousel'
import { heroSlides } from '../lib/data/hero'

const productSlugs = ['btft-s6', 'btks-1600dw-ai', 'btks-1600d', 'btkas-k1600dw']

for (const slug of productSlugs) {
  test(`${slug} detail renders one product image without a repeated scene`, async () => {
    const page = await ProductPage({ params: Promise.resolve({ slug }) })
    const html = renderToStaticMarkup(page)

    assert.equal((html.match(/<img\b/g) ?? []).length, 1)
    assert.doesNotMatch(html, /product-scenes/)
  })
}

test('all three hero slides use a localized overlay on the copy side', () => {
  const html = renderToStaticMarkup(<HeroCarousel slides={heroSlides} />)

  assert.equal((html.match(/lg:w-\[65%\]/g) ?? []).length, 3)
  assert.equal((html.match(/lg:left-0/g) ?? []).length, 2)
  assert.equal((html.match(/lg:right-0/g) ?? []).length, 1)
  assert.match(html, /bg-gradient-to-r/)
  assert.match(html, /bg-gradient-to-l/)
})

test('contact page renders verified guidance and an email route for sample photos', () => {
  const html = renderToStaticMarkup(<ContactPage />)

  assert.match(html, /Help us review your material/)
  assert.match(html, /Material type and representative sample photos/)
  assert.match(html, /Send sample photos to/)
  assert.match(html, /mailto:info@baiteglobal\.com/)
})
