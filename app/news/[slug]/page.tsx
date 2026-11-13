import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/json-ld'
import { getPublishedArticle as getNewsPost } from '@/lib/articles-db'
import { articleSchema, breadcrumbSchema, buildMetadata } from '@/lib/seo'
export const dynamicParams=true
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const{slug}=await params;const p=await getNewsPost(slug);if(!p)return{};return buildMetadata({title:p.title,description:p.excerpt,path:`/news/${p.slug}`,type:'article',publishedTime:p.publishedAt,modifiedTime:p.updatedAt,image:p.coverImage})}
export default async function ArticlePage({params}:{params:Promise<{slug:string}>}){const{slug}=await params;const p=await getNewsPost(slug);if(!p)notFound();return <><article className="section-pad"><div className="container-x max-w-3xl"><p className="eyebrow">Published {p.publishedAt}</p><h1 className="display mt-3 text-4xl sm:text-5xl">{p.title}</h1><p className="lede mt-6">{p.excerpt}</p><div className="article-prose mt-10">{p.body.map(x=><p key={x}>{x}</p>)}</div></div></article><JsonLd data={[articleSchema(p),breadcrumbSchema([{name:'Home',href:'/'},{name:'News',href:'/news'},{name:p.title,href:`/news/${p.slug}`}]) ]}/></>}
