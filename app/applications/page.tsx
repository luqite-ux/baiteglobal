import Link from 'next/link'
import { PageHero } from '@/components/content-blocks'
import { Reveal } from '@/components/reveal'
import { Icon } from '@/components/icons'
import { applications } from '@/lib/data/content'
import { t } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'
export const metadata=buildMetadata({title:'Mineral Sorting Applications',description:'Choose a WCBEST sorting path for powder, variable ore, dry belt feed or wet and dry material.',path:'/applications'})
export default function ApplicationsPage(){return <><PageHero eyebrow="Application-led selection" title="Choose by material condition, not by a generic machine list" body="Use the four paths below to narrow the model, then verify the choice with feed samples and operating requirements."/><section className="section-pad"><div className="container-x space-y-6">{applications.map((a,i)=><Reveal as="article" id={a.anchor} index={i} key={a.id} className="surface grid gap-7 p-6 md:grid-cols-[auto_1fr_1fr] md:p-8"><div className="flex size-14 items-center justify-center rounded-md bg-teal-tint text-teal-deep"><Icon name={a.icon}/></div><div><h2 className="text-2xl font-bold">{t(a.title)}</h2><p className="mt-2 text-ink-soft">{t(a.cue)}</p><h3 className="mt-6 font-semibold">Choose this path when</h3><ul className="mt-3 space-y-2 text-sm text-ink-soft">{a.chooseWhen.map(x=><li key={x.en}>• {t(x)}</li>)}</ul></div><div className="border-t border-line pt-6 md:border-l md:border-t-0 md:pl-7 md:pt-0"><h3 className="font-semibold">Share with us</h3><ul className="mt-3 space-y-2 text-sm text-ink-soft">{a.shareWithUs.map(x=><li key={x.en}>• {t(x)}</li>)}</ul><Link className="btn btn-outline mt-6" href={`/products/${a.productSlug}`}>View matched model</Link></div></Reveal>)}</div></section></>}
