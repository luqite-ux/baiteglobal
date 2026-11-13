import { NextResponse, type NextRequest } from 'next/server'
import { SESSION_COOKIE } from '@/lib/admin-session'
import { protectPreviewResponse } from '@/lib/site-content/preview-protection'
import { isServiceGuardExcludedPath, isWebsiteServiceAvailable } from '@/lib/service-status'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isPublicAdmin = pathname.startsWith('/admin/login') || pathname.startsWith('/admin/logout')
  let response: NextResponse
  if (!isPublicAdmin && pathname.startsWith('/admin') && !request.cookies.get(SESSION_COOKIE)?.value) {
    const url = request.nextUrl.clone()
    url.pathname = '/admin/login'
    url.searchParams.set('reason', 'unauthorized')
    response = NextResponse.redirect(url)
  } else {
    const expired = !isServiceGuardExcludedPath(pathname) && !await isWebsiteServiceAvailable()
    response = expired ? NextResponse.rewrite(new URL('/service-expired', request.url)) : NextResponse.next()
  }
  protectPreviewResponse(response.headers, request.cookies.has('__Host-hq-site-preview'))
  return response
}

export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] }
