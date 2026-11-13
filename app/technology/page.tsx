import { PageHero } from '@/components/content-blocks'
import { Reveal } from '@/components/reveal'
import { Icon } from '@/components/icons'
import { techStages } from '@/lib/data/content'
import { t } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'
export const metadata=buildMetadata({title:'Optical Sorting Technology',description:'Understand the WCBEST four-stage optical sorting process: feed, sensing, decision and separation.',path:'/technology'})
export default function TechnologyPage(){return <><PageHero eyebrow="Sorting process" title="From controlled feed to two separated output streams" body="The technology page explains the decision chain without inventing sensor specifications that were not supplied."/><section className="section-pad"><div className="container-x grid gap-4 lg:grid-cols-4">{techStages.map((s,i)=><Reveal as="article" index={i} key={s.id} className="surface relative p-6"><p className="font-mono text-xs text-teal-deep">0{i+1}</p><div className="mt-4 text-teal-deep"><Icon name={s.icon}/></div><h2 className="mt-5 text-xl font-bold">{t(s.title)}</h2><p className="mt-3 text-sm leading-relaxed text-ink-soft">{t(s.text)}</p><p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-ink-soft"><strong className="text-ink">Configure:</strong> {t(s.configure)}</p></Reveal>)}</div></section></>}
