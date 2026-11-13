/** Browsers send Origin:null for native POST under no-referrer. Only accept
 * that case with browser-controlled same-origin Fetch Metadata, never cross-site. */
export function allowsPreviewFormOrigin(headers: Headers, customerOrigin: string, adminOrigin?: string): boolean {
  const origin = headers.get('origin')
  return origin === customerOrigin || (Boolean(adminOrigin) && origin === adminOrigin)
    || (origin === 'null' && headers.get('sec-fetch-site') === 'same-origin')
}

export function customerPreviewOrigin(requestUrl: string, formalOrigin: string, productionHost?: string): string {
  const formal = new URL(formalOrigin).origin
  try {
    const request = new URL(requestUrl)
    const expectedProductionHost = productionHost?.trim().toLowerCase()
    if (request.protocol === 'https:' && (request.origin === formal || (expectedProductionHost && request.hostname.toLowerCase() === expectedProductionHost))) return request.origin
  } catch { /* use the verified formal origin */ }
  return formal
}
