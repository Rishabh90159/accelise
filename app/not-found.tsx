import type { Metadata } from 'next';
import Link from 'next/link';
import { ButtonLink } from '@/components/site';

export const metadata: Metadata = {
  title: { absolute: 'Page Not Found | Accelise' },
  description: 'The page you are looking for does not exist or has moved.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="section">
      <div className="container max-w-2xl text-center">
        <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-[#315eef]">404</p>
        <h1 className="mt-4 text-3xl font-extrabold text-[#0b1b3a] md:text-4xl">This page could not be found</h1>
        <p className="mt-4 leading-7 text-slate-600">The link may be outdated or the page may have moved. These pages are a good place to continue:</p>
        <ul className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-bold text-[#315eef]">
          <li><Link href="/services">Web development services</Link></li>
          <li><Link href="/industries">Industry websites</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/web-development-company-gurgaon">Web development in Gurgaon</Link></li>
        </ul>
        <div className="mt-8"><ButtonLink href="/">Back to the homepage</ButtonLink></div>
      </div>
    </main>
  );
}
