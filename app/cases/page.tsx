import Image from 'next/image'
import { PageHero } from '@/components/content-blocks'
import { Reveal } from '@/components/reveal'
import { installedCases } from '@/lib/data/proof'
import { buildMetadata } from '@/lib/seo'
export const metadata=buildMetadata({title:'Installed Optical Sorting Cases',description:'Browse 12 supplied WCBEST installed-equipment photographs from real customer application environments.',path:'/cases'})
export default function CasesPage(){return <><PageHero eyebrow="Installed applications" title="Twelve equipment installation records" body="Explore WCBEST optical sorting equipment in operating environments. Project identities and performance figures are shown only when verified information is available."/><section className="section-pad"><div className="container-x grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">{installedCases.map((c,i)=><Reveal as="figure" index={i} key={c.id} className="overflow-hidden rounded-lg border border-line bg-white"><div className="relative aspect-[4/3]">{c.image&&<Image src={c.image.src} alt={c.image.alt} fill sizes="33vw" className="object-cover"/>}</div><figcaption className="flex items-center justify-between p-4"><span className="font-semibold">Field installation</span><span className="font-mono text-xs text-teal-deep">CASE {c.number}</span></figcaption></Reveal>)}</div></section></>}
