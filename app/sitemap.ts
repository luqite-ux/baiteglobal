import type { MetadataRoute } from 'next'
import { products } from '@/lib/data/products'
import { getPublishedArticles as getNewsPosts } from '@/lib/articles-db'
import { absoluteUrl } from '@/lib/site'
export default async function sitemap():Promise<MetadataRoute.Sitemap>{const now=new Date();const staticPaths=['/','/products','/applications','/technology','/manufacturing','/cases','/certifications','/about','/news','/contact'];const posts=await getNewsPosts();return[...staticPaths.map(url=>({url:absoluteUrl(url),lastModified:now})),...products.map(p=>({url:absoluteUrl(`/products/${p.slug}`),lastModified:now})),...posts.map(p=>({url:absoluteUrl(`/news/${p.slug}`),lastModified:new Date(p.updatedAt??p.publishedAt)}))]}
