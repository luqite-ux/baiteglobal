import Image from 'next/image'
import Link from 'next/link'
import { HeroCarousel } from '@/components/hero-carousel'
import { ApplicationGrid, ProductGrid, SectionHead } from '@/components/content-blocks'
import { Reveal } from '@/components/reveal'
import { certificates, factoryPhotos, installedCases } from '@/lib/data/proof'
import { site } from '@/lib/site'
import { heroSlides } from '@/lib/data/hero'
import { getSiteContent, siteContentMetadata } from '@/lib/site-content/site-content'
import { siteTypographyStyle } from '@/lib/site-content/typography'
import { fetchProductsData } from '@/lib/products-db'

export async function generateMetadata() {
  try { return await siteContentMetadata('/', 'en') } catch { return {} }
}

function text(value: unknown, fallback: string) {
  if (typeof value === 'string' && value.trim()) return value
  if (value && typeof value === 'object' && 'en' in value && typeof (value as { en?: unknown }).en === 'string') return (value as { en: string }).en
  return fallback
}

function CertificateMarquee() {
  const pages = certificates.flatMap((certificate) =>
    certificate.pages.map((page) => ({ certificate, page })),
  )

  return <div className="certificate-marquee mt-10" aria-label="WCBEST management system certificates">
    <div className="certificate-marquee-track">
      {[false, true].map((duplicate) => <div
        key={duplicate ? 'duplicate' : 'primary'}
        className="certificate-marquee-set"
        aria-hidden={duplicate || undefined}
      >
        {pages.map(({ certificate, page }) => page.src ? <Link
          key={`${duplicate ? 'duplicate' : 'primary'}-${certificate.id}-${page.page}`}
          href={`/certifications#${certificate.anchor}`}
          className="certificate-marquee-card"
        >
          <div className="relative aspect-[.707] overflow-hidden bg-white">
            <Image
              src={page.src}
              alt={duplicate ? '' : page.alt}
              fill
              loading="eager"
              sizes="(max-width: 640px) 68vw, 20rem"
              className="object-contain"
            />
          </div>
          <div className="border-t border-line p-4">
            <p className="font-mono text-xs text-teal-deep">
              {certificate.standard} · {page.page === 1 ? 'Chinese' : 'English'}
            </p>
            <p className="mt-1 font-semibold text-ink">{certificate.title.en}</p>
          </div>
        </Link> : null)}
      </div>)}
    </div>
  </div>
}

export default async function HomePage(){
  const products = await fetchProductsData()
  const snapshot = await getSiteContent('en').catch(() => null)
  const home = snapshot?.pages.find((page) => page.path === '/')
  const hero = home?.modules.find((module) => module.key === 'hero')
  const faq = home?.modules.find((module) => module.key === 'faq')
  const values = hero?.values ?? {}
  const slides = hero ? [{
    ...heroSlides[0],
    eyebrow: text(values.eyebrow, heroSlides[0].eyebrow),
    headline: text(values.title, heroSlides[0].headline),
    body: text(values.body, heroSlides[0].body),
    primaryCta: { ...heroSlides[0].primaryCta, label: text(values.primary_label, heroSlides[0].primaryCta.label) },
    secondaryCta: { ...heroSlides[0].secondaryCta, label: text(values.secondary_label, heroSlides[0].secondaryCta.label) },
  }, ...heroSlides.slice(1)] : heroSlides
  const titleStyle = siteTypographyStyle(hero?.styles, 'title', { 'site-sans': 'var(--font-archivo)' })
  const faqItems = Array.isArray(faq?.values?.items) ? faq.values.items.filter((item): item is Record<string, unknown> => Boolean(item && typeof item === 'object')) : []
  return <div {...(snapshot ? { 'data-hq-content-version': snapshot.version } : {})}>
  <div data-section-id="hero"><HeroCarousel slides={slides} titleStyle={titleStyle} /></div>
  <section data-section-id="application-matrix" className="section-pad"><div className="container-x"><SectionHead eyebrow="Four sorting paths" title="Start with the material you need to separate" body="Each WCBEST machine serves a different feed condition. Compare the four paths before you compare specifications."/><ApplicationGrid /></div></section>
  <section data-section-id="product-portfolio" className="section-pad bg-mist"><div className="container-x"><SectionHead eyebrow="Product range" title="Four independent optical sorting models" body="Model-level parameters below come from the supplied product workbook; quotation configuration is confirmed against your material."/><ProductGrid items={products} /></div></section>
  <section data-section-id="sorting-technology" className="section-pad bg-ink text-white"><div className="container-x grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><Reveal><p className="font-mono text-xs uppercase tracking-[.16em] text-[#73d1df]">How sorting works</p><h2 className="mt-3 text-4xl font-bold tracking-tight text-white">Feed. Sense. Decide. Separate.</h2><p className="mt-5 leading-relaxed text-white/75">A clear four-stage explanation helps engineering and purchasing teams align on the material sample, recognition target and output streams.</p><Link href="/technology" className="btn btn-primary mt-7">Review the process</Link></Reveal><div className="grid grid-cols-2 gap-px bg-white/15">{['01 / Neutral feed','02 / Sensing','03 / Decision','04 / Separation'].map((x,i)=><Reveal index={i} key={x} className="bg-ink p-6 sm:p-8"><p className="font-mono text-sm text-[#73d1df]">{x}</p></Reveal>)}</div></div></section>
  <section data-section-id="manufacturing-proof" data-section-alias="company-story" className="section-pad"><div className="container-x"><SectionHead eyebrow="Manufacturing evidence" title="Built in Hefei, shown with real workshop photography" body={`${site.facility.areaM2} m² facility · ${site.facility.workshops} standard workshops · ${site.facility.monthlyCapacity} units monthly capacity`}/><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{factoryPhotos.map((p,i)=><Reveal as="figure" index={i} key={p.id} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-mist">{p.image&&<Image src={p.image.src} alt={p.image.alt} fill sizes="33vw" className="object-cover"/>}</Reveal>)}</div></div></section>
  <section data-section-id="installed-cases" className="section-pad bg-mist"><div className="container-x"><SectionHead eyebrow="Installed applications" title="Equipment in real operating environments" body="Review field installation photography from WCBEST projects. Customer identities and performance figures are included only when supported by verified information."/><div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">{installedCases.slice(0,8).map((c,i)=><Reveal as="figure" index={i} key={c.id} className="relative aspect-square overflow-hidden rounded-lg bg-white">{c.image&&<Image src={c.image.src} alt={c.image.alt} fill sizes="25vw" className="object-cover"/>}<figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-4 pt-12 font-mono text-xs text-white">CASE {c.number}</figcaption></Reveal>)}</div><Link href="/cases" className="btn btn-outline mt-8">View all 11 cases</Link></div></section>
  <section data-section-id="quality-certifications" className="section-pad overflow-hidden"><div className="container-x"><SectionHead eyebrow="Certified systems" title="Three certifications, each presented as a complete two-page record" body="The original Chinese and English certificate pages are shown without altering their text, numbers, seals or QR codes."/></div><CertificateMarquee/><div className="container-x mt-8"><Link href="/certifications" className="btn btn-outline">Review certificate details</Link></div></section>
  {faqItems.length > 0 && <section data-section-id="faq-cooperation" className="section-pad bg-mist"><div className="container-x"><SectionHead eyebrow="Buyer questions" title="Commercial and delivery questions, answered clearly" body="Review practical answers about model selection, quotation and project coordination."/><div className="mt-8 grid gap-3 lg:mt-10 lg:grid-cols-2 lg:gap-4">{faqItems.map((item,index)=><Reveal index={index} key={String(item.id ?? index)}><details className="surface group p-5 sm:p-6"><summary className="cursor-pointer list-none pr-8 text-base font-bold marker:hidden sm:text-lg">{text(item.question,'Buyer question')}</summary><p className="mt-4 leading-relaxed text-ink-soft">{text(item.answer,'Please contact us for details.')}</p></details></Reveal>)}</div></div></section>}
  <section data-section-id="contact-rfq" className="bg-teal-deep text-white"><div className="container-x flex flex-col gap-7 py-14 lg:flex-row lg:items-center lg:justify-between"><div><p className="font-mono text-xs uppercase tracking-[.16em] text-white/70">Start with your material</p><h2 className="mt-2 text-3xl font-bold text-white">Send feed size, moisture condition and sample photos.</h2></div><Link className="btn btn-primary" href="/contact">Request a configuration quote</Link></div></section>
</div>}
