import crypto from 'node:crypto'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'
import { SESSION_COOKIE, TENANT_COOKIE } from '@/lib/admin-session'
import { getAdminSupabase } from '@/lib/supabase/server'

export async function POST(request: Request) {
  const form = await request.formData()
  const email = String(form.get('email') ?? '').trim().toLowerCase()
  const password = String(form.get('password') ?? '')
  const supabase = getAdminSupabase()
  const { data: user } = await supabase.from('admin_users').select('id,password_hash,is_active,tenant_id').eq('email', email).maybeSingle()
  if (!user?.is_active || !(await bcrypt.compare(password, user.password_hash))) {
    return NextResponse.redirect(new URL('/admin/login?error=Invalid%20email%20or%20password', request.url), 303)
  }
  const tenantId = process.env.NEXT_PUBLIC_TENANT_ID?.trim()
  if (!tenantId || user.tenant_id !== tenantId) {
    return NextResponse.redirect(new URL('/admin/login?error=Invalid%20tenant%20account', request.url), 303)
  }
  const token = crypto.randomBytes(32).toString('hex')
  const expires = new Date(Date.now() + 7 * 86_400_000)
  const { error } = await supabase.from('admin_user_sessions').insert({ admin_user_id: user.id, token, expires_at: expires.toISOString() })
  if (error) return NextResponse.redirect(new URL('/admin/login?error=Unable%20to%20start%20session', request.url), 303)
  const response = NextResponse.redirect(new URL('/admin', request.url), 303)
  const cookie = { httpOnly: true, secure: true, sameSite: 'lax' as const, path: '/', expires }
  response.cookies.set(SESSION_COOKIE, token, cookie)
  response.cookies.set(TENANT_COOKIE, tenantId, cookie)
  return response
}
