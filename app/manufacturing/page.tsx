import Image from 'next/image'
import { PageHero } from '@/components/content-blocks'
import { Reveal } from '@/components/reveal'
import { manufacturingSteps } from '@/lib/data/content'
import { factoryPhotos } from '@/lib/data/proof'
import { site } from '@/lib/site'
import { t } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'
export const metadata=buildMetadata({title:'Manufacturing in Hefei',description:'Review WCBEST manufacturing evidence: a 5,000 m² Hefei facility, four standard workshops and real factory photography.',path:'/manufacturing'})
export default function ManufacturingPage(){return <><PageHero eyebrow="Manufacturing evidence" title="A real Hefei facility, documented from floor to assembly" body={`${site.facility.areaM2} m² · ${site.facility.workshops} standard workshops · monthly capacity of ${site.facility.monthlyCapacity} units`}/><section className="section-pad"><div className="container-x"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{factoryPhotos.map((p,i)=><Reveal as="figure" index={i} key={p.id} className="overflow-hidden rounded-lg border border-line bg-white"><div className="relative aspect-[4/3]">{p.image&&<Image src={p.image.src} alt={p.image.alt} fill className="object-cover"/>}</div><figcaption className="p-4 text-sm font-medium">{p.label}</figcaption></Reveal>)}</div><div className="mt-16 grid gap-4 lg:grid-cols-4">{manufacturingSteps.map((s,i)=><Reveal as="article" index={i} key={s.id} className="border-l-2 border-orange bg-mist p-6"><p className="font-mono text-xs text-teal-deep">0{i+1}</p><h2 className="mt-3 text-lg font-bold">{t(s.title)}</h2><p className="mt-2 text-sm leading-relaxed text-ink-soft">{t(s.text)}</p></Reveal>)}</div></div></section></>}
