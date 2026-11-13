import { PageHero, ProductGrid } from '@/components/content-blocks'
import { buildMetadata } from '@/lib/seo'
import { fetchProductsData } from '@/lib/products-db'
export const revalidate=60
export const metadata=buildMetadata({title:'Optical Sorting Machines',description:'Compare four WCBEST optical mineral sorting machines for powder, AI-assisted, dry belt and wet-and-dry feed.',path:'/products'})
export default async function ProductsPage(){const items=await fetchProductsData();return <><PageHero eyebrow="Product range" title="Optical sorting machines organised by feed condition" body="Compare the supplied model parameters, then send representative material so the configuration can be confirmed."/><section className="section-pad"><div className="container-x"><ProductGrid items={items}/></div></section></>}
