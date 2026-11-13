export const SERVICE_GUARD_VERSION = '1'
type PublicServiceStatus = { version?: number; available?: boolean; status?: string }
export function isServiceGuardExcludedPath(pathname: string): boolean {
  return pathname === '/service-expired' || pathname.startsWith('/admin') || pathname.startsWith('/api') || pathname.startsWith('/_next') || pathname === '/favicon.ico' || pathname === '/robots.txt' || pathname === '/sitemap.xml' || /\.[a-z0-9]+$/i.test(pathname)
}
export async function isWebsiteServiceAvailable(): Promise<boolean> {
  const tenantId=process.env.NEXT_PUBLIC_TENANT_ID?.trim(),adminUrl=process.env.NEXT_PUBLIC_ADMIN_URL?.trim().replace(/\/$/,'')
  if(!tenantId||!adminUrl)return true
  try{const statusUrl=`${adminUrl}/api/public/service-status/${encodeURIComponent(tenantId)}?guard_version=${encodeURIComponent(SERVICE_GUARD_VERSION)}&ts=${Date.now()}`;const response=await fetch(statusUrl,{headers:{accept:'application/json'},signal:AbortSignal.timeout(8000),cache:'no-store'});if(!response.ok)return true;const payload=await response.json() as PublicServiceStatus;return payload.version===1?!(payload.available===false&&payload.status==='expired'):true}catch{return true}
}
