import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Icon } from '@/components/icons'
import { products, type Product } from '@/lib/data/products'
import { applications } from '@/lib/data/content'
import { t } from '@/lib/i18n'

export function SectionHead({eyebrow,title,body}:{eyebrow:string;title:string;body?:string}){return <Reveal as="header" className="max-w-3xl"><p className="eyebrow">{eyebrow}</p><h2 className="display mt-3 text-3xl sm:text-4xl lg:text-5xl">{title}</h2>{body&&<p className="lede mt-5">{body}</p>}</Reveal>}
export function ProductGrid({items=products}:{items?:Product[]}){return <div className="mt-10 grid gap-5 md:grid-cols-2">{items.map((p,i)=><Reveal as="article" index={i} key={p.slug} className="surface card-lift overflow-hidden"><div className="product-stage relative aspect-[16/10] bg-white"><Image src={p.image.src} alt={p.image.alt} fill sizes="(min-width:768px) 50vw, 100vw" className="lift-media object-contain p-7"/></div><div className="border-t border-line p-6"><p className="font-mono text-xs text-teal-deep">{p.model}</p><h3 className="mt-2 text-xl font-bold">{t(p.name)}</h3><p className="mt-3 text-sm leading-relaxed text-ink-soft">{t(p.summary)}</p><Link href={`/products/${p.slug}`} className="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-teal-deep">View specifications <ArrowRight className="size-4"/></Link></div></Reveal>)}</div>}
export function ApplicationGrid(){return <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{applications.map((a,i)=><Reveal as="article" index={i} key={a.id} className="surface card-lift p-6"><div className="flex size-12 items-center justify-center rounded-md bg-teal-tint text-teal-deep"><Icon name={a.icon}/></div><h3 className="mt-5 text-lg font-bold">{t(a.title)}</h3><p className="mt-2 text-sm leading-relaxed text-ink-soft">{t(a.cue)}</p><Link href={`/applications#${a.anchor}`} className="mt-4 inline-flex min-h-10 items-center text-sm font-semibold text-teal-deep">Selection guide <ArrowRight className="ml-2 size-4"/></Link></Reveal>)}</div>}
export function PageHero({eyebrow,title,body}:{eyebrow:string;title:string;body:string}){return <section className="tech-grid border-b border-line bg-mist"><div className="container-x py-16 sm:py-20"><p className="eyebrow">{eyebrow}</p><h1 className="display mt-3 max-w-4xl text-4xl sm:text-5xl lg:text-6xl">{title}</h1><p className="lede mt-6 max-w-3xl">{body}</p></div></section>}
