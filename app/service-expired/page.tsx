import Link from 'next/link'
export const metadata={title:'Website service temporarily unavailable',robots:{index:false,follow:false}}
export default function ServiceExpiredPage(){return <main className="flex min-h-screen items-center justify-center bg-mist px-6 text-ink"><div className="max-w-lg text-center"><h1 className="text-3xl font-semibold">Website service is temporarily unavailable</h1><p className="mt-4 text-ink-soft">For assistance, email info@baiteglobal.com.</p><Link className="mt-6 inline-block text-teal-deep underline" href="/admin/login">Administrator login</Link></div></main>}
