import Link from 'next/link'
export default function NotFound(){return <section className="section-pad"><div className="container-x max-w-2xl text-center"><p className="eyebrow">404</p><h1 className="display mt-3 text-5xl">Page not found</h1><p className="lede mt-5">The requested page is not available.</p><Link className="btn btn-primary mt-8" href="/">Return home</Link></div></section>}
