import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/json-ld'
import { PageHero } from '@/components/content-blocks'
import { buildSpecRows, products } from '@/lib/data/products'
import { fetchProductData } from '@/lib/products-db'
import { t } from '@/lib/i18n'
import { breadcrumbSchema, buildMetadata, productSchema } from '@/lib/seo'
export const dynamicParams=true
export const revalidate=60
export function generateStaticParams(){return products.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=await fetchProductData(slug);if(!p)return {};return buildMetadata({title:t(p.name),description:t(p.summary),path:`/products/${p.slug}`,image:p.image})}
export default async function ProductPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=await fetchProductData(slug);if(!p)notFound();return <><PageHero eyebrow={p.model} title={t(p.name)} body={t(p.summary)}/><section className="section-pad"><div className="container-x grid gap-12 lg:grid-cols-2"><div><div className="relative aspect-square rounded-lg border border-line bg-white"><Image src={p.image.src} alt={p.image.alt} fill priority className="object-contain p-8"/></div><div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-lg bg-mist"><Image src={`/images/product-scenes/product-${products.findIndex(x=>x.slug===p.slug)+1}.jpg`} alt={`${p.model} product presentation view`} fill className="object-cover"/></div></div><div><h2 className="display text-3xl">Product overview</h2><p className="lede mt-5">{t(p.description)}</p><ul className="mt-7 space-y-3">{p.highlights.map(x=><li key={x.en} className="border-l-2 border-orange pl-4 text-ink">{t(x)}</li>)}</ul><h2 className="mt-12 text-2xl font-bold">Supplied parameters</h2><dl className="mt-5 divide-y divide-line border-y border-line">{buildSpecRows(p).map(row=><div key={row.label} className="grid grid-cols-[.9fr_1.1fr] gap-4 py-4"><dt className="text-sm text-ink-soft">{row.label}</dt><dd className="font-mono text-sm font-medium">{row.value}{row.note&&<span className="mt-1 block font-sans text-xs font-normal text-ink-soft">{row.note}</span>}</dd></div>)}</dl><div className="mt-9 rounded-lg bg-teal-tint p-6"><h2 className="font-bold">What to include in your inquiry</h2><p className="mt-2 text-sm leading-relaxed text-ink-soft">{t(p.inquiryNote)}</p><Link className="btn btn-primary mt-5" href={`/contact?model=${encodeURIComponent(p.model)}`}>Request a quote</Link></div></div></div></section><JsonLd data={[productSchema(p),breadcrumbSchema([{name:'Home',href:'/'},{name:'Products',href:'/products'},{name:p.model,href:`/products/${p.slug}`}]) ]}/></>}
