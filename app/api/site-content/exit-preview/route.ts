// Copy to the customer's app/api/site-content/exit-preview/route.ts; adjust imports.
import { NextResponse } from 'next/server'
import { adapterConfig, PREVIEW_COOKIE } from '@/lib/site-content/site-content'
import { allowsPreviewFormOrigin, customerPreviewOrigin } from '@/lib/site-content/form-origin'
export async function POST(request: Request) {
  const config = adapterConfig()
  const previewOrigin = customerPreviewOrigin(request.url, `https://${config.domain}`, process.env.VERCEL_PROJECT_PRODUCTION_URL)
  if (!allowsPreviewFormOrigin(request.headers, previewOrigin)) return new Response('Forbidden', { status: 403 })
  const response = NextResponse.redirect(`${previewOrigin}/`, 303)
  response.cookies.set(PREVIEW_COOKIE, '', { httpOnly: true, secure: true, sameSite: 'lax', path: '/', maxAge: 0 })
  response.headers.set('Cache-Control', 'no-store')
  return response
}
