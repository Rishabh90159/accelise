'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/lib/content';

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  // Close whenever the route changes, e.g. after tapping a menu link.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div className="relative xl:hidden" ref={ref}>
      <button type="button" className="rounded-md border border-slate-300 p-2" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}>
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      {open ? (
        <div id="mobile-menu" className="absolute right-0 top-12 grid w-60 gap-1 rounded-lg border border-slate-200 bg-white p-3 text-sm font-bold text-slate-700 shadow-xl">
          {navItems.map((item) => (
            <Link className={`rounded-md px-3 py-2 hover:bg-slate-100 ${pathname === item.href || pathname === `${item.href}/` ? 'bg-slate-100 text-[#315eef]' : ''}`} href={item.href} key={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
