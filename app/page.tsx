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

export async function generateMetadata() {
  try { return await siteContentMetadata('/', 'en') } catch { return {} }
}

function text(value: unknown, fallback: string) {
  if (typeof value === 'string' && value.trim()) return value
  if (value && typeof value === 'object' && 'en' in value && typeof (value as { en?: unknown }).en === 'string') return (value as { en: string }).en
  return fallback
}

export default async function HomePage(){
  const snapshot = await getSiteContent('en').catch(() => null)
  const home = snapshot?.pages.find((page) => page.path === '/')
  const hero = home?.modules.find((module) => module.key === 'hero')
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
  return <div {...(snapshot ? { 'data-hq-content-version': snapshot.version } : {})}>
  <HeroCarousel slides={slides} titleStyle={titleStyle} />
  <section className="section-pad"><div className="container-x"><SectionHead eyebrow="Four sorting paths" title="Start with the material you need to separate" body="Each WCBEST machine serves a different feed condition. Compare the four paths before you compare specifications."/><ApplicationGrid /></div></section>
  <section className="section-pad bg-mist"><div className="container-x"><SectionHead eyebrow="Product range" title="Four independent optical sorting models" body="Model-level parameters below come from the supplied product workbook; quotation configuration is confirmed against your material."/><ProductGrid /></div></section>
  <section className="section-pad bg-ink text-white"><div className="container-x grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><Reveal><p className="font-mono text-xs uppercase tracking-[.16em] text-[#73d1df]">How sorting works</p><h2 className="mt-3 text-4xl font-bold tracking-tight text-white">Feed. Sense. Decide. Separate.</h2><p className="mt-5 leading-relaxed text-white/75">A clear four-stage explanation helps engineering and purchasing teams align on the material sample, recognition target and output streams.</p><Link href="/technology" className="btn btn-primary mt-7">Review the process</Link></Reveal><div className="grid grid-cols-2 gap-px bg-white/15">{['01 / Neutral feed','02 / Sensing','03 / Decision','04 / Separation'].map((x,i)=><Reveal index={i} key={x} className="bg-ink p-6 sm:p-8"><p className="font-mono text-sm text-[#73d1df]">{x}</p></Reveal>)}</div></div></section>
  <section className="section-pad"><div className="container-x"><SectionHead eyebrow="Manufacturing evidence" title="Built in Hefei, shown with real workshop photography" body={`${site.facility.areaM2} m² facility · ${site.facility.workshops} standard workshops · ${site.facility.monthlyCapacity} units monthly capacity`}/><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{factoryPhotos.map((p,i)=><Reveal as="figure" index={i} key={p.id} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-mist">{p.image&&<Image src={p.image.src} alt={p.image.alt} fill sizes="33vw" className="object-cover"/>}</Reveal>)}</div></div></section>
  <section className="section-pad bg-mist"><div className="container-x"><SectionHead eyebrow="Installed applications" title="Equipment in real customer operating environments" body="The supplied legacy case archive documents installed equipment. Customer identities and performance results are intentionally not inferred."/><div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">{installedCases.slice(0,8).map((c,i)=><Reveal as="figure" index={i} key={c.id} className="relative aspect-square overflow-hidden rounded-lg bg-white">{c.image&&<Image src={c.image.src} alt={c.image.alt} fill sizes="25vw" className="object-cover"/>}<figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-4 pt-12 font-mono text-xs text-white">CASE {c.number}</figcaption></Reveal>)}</div><Link href="/cases" className="btn btn-outline mt-8">View all 12 cases</Link></div></section>
  <section className="section-pad"><div className="container-x"><SectionHead eyebrow="Certified systems" title="Three certifications, each presented as a complete two-page record"/><div className="mt-10 grid gap-5 lg:grid-cols-3">{certificates.map((c,i)=><Reveal as="article" index={i} key={c.id} className="surface p-6"><p className="font-mono text-sm text-teal-deep">{c.standard}</p><h3 className="mt-3 text-xl font-bold">{c.title.en}</h3><p className="mt-4 text-sm text-ink-soft">Certificate {c.certificateNumber}</p><p className="mt-1 text-sm text-ink-soft">Valid through {c.validThrough.label}</p><Link href={`/certifications#${c.anchor}`} className="mt-5 inline-flex min-h-10 items-center font-semibold text-teal-deep">Review both pages</Link></Reveal>)}</div></div></section>
  <section className="bg-teal-deep text-white"><div className="container-x flex flex-col gap-7 py-14 lg:flex-row lg:items-center lg:justify-between"><div><p className="font-mono text-xs uppercase tracking-[.16em] text-white/70">Start with your material</p><h2 className="mt-2 text-3xl font-bold text-white">Send feed size, moisture condition and sample photos.</h2></div><Link className="btn btn-primary" href="/contact">Request a configuration quote</Link></div></section>
</div>}
