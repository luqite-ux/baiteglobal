'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import { BrandLogo } from '@/components/brand-logo'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { contactNav, primaryNav, site } from '@/lib/site'
import { cn } from '@/lib/utils'

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function SiteHeader() {
  const pathname = usePathname()
  const [openPath, setOpenPath] = useState<string | null>(null)
  const open = openPath === pathname

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="container-x flex h-[4.25rem] items-center justify-between gap-4">
        <BrandLogo priority />

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center">
            {primaryNav.map((item) => {
              const active = isActive(pathname, item.href)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'nav-link inline-flex min-h-11 items-center rounded-sm px-3 text-sm font-medium transition-colors',
                      active ? 'text-teal-deep' : 'text-ink hover:text-teal-deep',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link href={contactNav.href} className="btn btn-primary hidden sm:inline-flex">
            Request a Quote
          </Link>

          <Sheet open={open} onOpenChange={(next) => setOpenPath(next ? pathname : null)}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="inline-flex size-11 items-center justify-center rounded-md border border-line-strong text-ink transition-colors hover:border-teal hover:text-teal-deep xl:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(88vw,22rem)] gap-0 bg-paper p-0">
              <div className="border-b border-line px-5 py-4">
                <SheetTitle className="text-base font-bold text-ink">{site.name} menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Site navigation for {site.company}
                </SheetDescription>
              </div>
              <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-3">
                <ul className="flex flex-col">
                  {primaryNav.map((item) => {
                    const active = isActive(pathname, item.href)
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          aria-current={active ? 'page' : undefined}
                          onClick={() => setOpenPath(null)}
                          className={cn(
                            'flex min-h-12 items-center justify-between rounded-md border-l-2 px-3 text-base font-medium transition-colors',
                            active
                              ? 'border-orange bg-teal-tint text-teal-deep'
                              : 'border-transparent text-ink hover:bg-mist',
                          )}
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>
              <div className="border-t border-line p-4">
                <Link
                  href={contactNav.href}
                  onClick={() => setOpenPath(null)}
                  className="btn btn-primary w-full"
                >
                  Request a Quote
                </Link>
                <p className="mt-3 text-center text-sm text-ink-soft">{site.email}</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
