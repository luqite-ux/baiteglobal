import { PageHero } from '@/components/content-blocks'
import { site } from '@/lib/site'
import { buildMetadata } from '@/lib/seo'
import { ContactForm } from '@/components/contact-form'
export const metadata=buildMetadata({title:'Contact WCBEST',description:'Contact Hefei Baite Optoelectronics for a WCBEST optical sorting machine configuration and quotation.',path:'/contact'})
export default function ContactPage(){return <><PageHero eyebrow="Contact" title="Start with your material and required output" body="Send the model if known, material type, feed size, moisture condition, required output and representative sample photographs."/><section className="section-pad"><div className="container-x grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><h2 className="text-2xl font-bold">Hefei Baite Optoelectronics</h2><address className="mt-6 space-y-4 not-italic text-ink-soft"><p>{site.address.full}</p><p><a className="font-semibold text-teal-deep" href={`mailto:${site.email}`}>{site.email}</a></p><p><a className="font-semibold text-teal-deep" href={site.phoneHref}>{site.phone}</a></p></address></div><ContactForm/></div></section></>}
