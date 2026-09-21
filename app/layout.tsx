import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import { JsonLd, LayoutShell } from '@/components/site';
import { siteConfig, slugUrl } from '@/lib/content';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });
const manrope = Manrope({ variable: '--font-manrope', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://accelise.in'),

  title: {
    default: 'Web Development Company in India | Accelise',
    template: '%s | Accelise',
  },

  description:
    'Accelise is a web development company in India building professional websites, web applications, e-commerce platforms and custom digital solutions for businesses across India.',

  keywords: [
    'web development company in India',
    'website development company in India',
    'web development services India',
    'website development services India',
    'custom web development company',
    'business website development',
    'web application development company',
    'ecommerce website development India',
  ],

  alternates: {
    canonical: 'https://accelise.in/',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    title: 'Web Development Company in India | Accelise',
    description:
      'Accelise builds professional websites, web applications, e-commerce platforms and custom digital solutions for businesses across India.',
    url: 'https://accelise.in/',
    siteName: 'Accelise',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    name: siteConfig.name,
    founder: siteConfig.founder,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: { '@type': 'PostalAddress', addressLocality: 'Gurgaon', addressCountry: 'IN' },
    areaServed: ['India', 'International'],
    url: slugUrl('/'),
    sameAs: [siteConfig.portfolioUrl],
  };

  return (
    <html lang="en-IN">
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        <JsonLd data={schema} />
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
