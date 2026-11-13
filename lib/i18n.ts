export type Locale = 'en' | 'es' | 'ru' | 'fr' | 'ar'

/** Only locales listed here are published. Add a code once its content is translated and reviewed. */
export const enabledLocales: readonly Locale[] = ['en']
export const defaultLocale: Locale = 'en'

export type Localized<T = string> = { en: T } & Partial<Record<Exclude<Locale, 'en'>, T>>

export function isEnabledLocale(value: string): value is Locale {
  return (enabledLocales as readonly string[]).includes(value)
}

export function t<T = string>(value: Localized<T>, locale: Locale = defaultLocale): T {
  return value[locale] ?? value.en
}

export function en<T = string>(value: T): Localized<T> {
  return { en: value }
}

/** English is served from the root; other enabled locales get a prefix. */
export function localePath(path: string, locale: Locale = defaultLocale): string {
  if (locale === defaultLocale) return path
  return `/${locale}${path === '/' ? '' : path}`
}
