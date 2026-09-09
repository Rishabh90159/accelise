import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import { JsonLd, LayoutShell } from '@/components/site';
import { siteConfig, slugUrl } from '@/lib/content';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });
const manrope = Manrope({ variable: '--font-manrope', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: `${siteConfig.name} | Website Developer in Gurgaon`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: `${siteConfig.name} | Business Website Development in India`,
    description: siteConfig.description,
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: `${siteConfig.name} | Website Developer in Gurgaon`,
    description: siteConfig.description,
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
