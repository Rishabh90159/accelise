import type { Metadata } from 'next';
import { siteConfig } from './site-config';
import type { FAQ } from './content';

// Matches `trailingSlash: true` in next.config.ts so canonical, sitemap and schema URLs agree.
export function slugUrl(path: string) {
  if (path === '/' || /\.[a-z0-9]+$/i.test(path)) return `${siteConfig.baseUrl}${path}`;
  return `${siteConfig.baseUrl}${path.replace(/\/?$/, '/')}`;
}

export const organizationId = `${siteConfig.baseUrl}/#organization`;
export const websiteId = `${siteConfig.baseUrl}/#website`;

// Every indexable page builds its metadata here so title, description, canonical and Open Graph always describe the same URL.
// Titles are passed in full (no layout template) so each one can be tuned to its own length.
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const url = slugUrl(path);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
    openGraph: { title, description, url, siteName: siteConfig.name, type: 'website', locale: 'en_IN' },
    twitter: { card: 'summary', title, description },
  };
}

export function faqSchema(items: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
  };
}

export function webPageSchema({ name, description, path, type = 'WebPage' }: { name: string; description: string; path: string; type?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${slugUrl(path)}#webpage`,
    name,
    description,
    url: slugUrl(path),
    inLanguage: 'en-IN',
    isPartOf: { '@id': websiteId },
    about: { '@id': organizationId },
  };
}

export function serviceSchema({ name, description, path, serviceType, areaServed = [{ '@type': 'Country', name: 'India' }] }: { name: string; description: string; path: string; serviceType: string; areaServed?: Record<string, unknown>[] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    serviceType,
    description,
    url: slugUrl(path),
    provider: { '@id': organizationId },
    areaServed,
  };
}
