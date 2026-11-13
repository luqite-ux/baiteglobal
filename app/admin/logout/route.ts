import { NextResponse } from 'next/server'
import { SESSION_COOKIE, TENANT_COOKIE } from '@/lib/admin-session'

export async function GET(request: Request) {
  const response = NextResponse.redirect(new URL('/admin/login', request.url), 303)
  response.cookies.set(SESSION_COOKIE, '', { path: '/', expires: new Date(0) })
  response.cookies.set(TENANT_COOKIE, '', { path: '/', expires: new Date(0) })
  return response
}
