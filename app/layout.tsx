import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import { JsonLd, LayoutShell } from '@/components/site';
import { siteConfig, slugUrl, teamMembers } from '@/lib/content';
import { ogImage, organizationId, websiteId } from '@/lib/seo';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });
const manrope = Manrope({ variable: '--font-manrope', subsets: ['latin'] });

// Only site-wide defaults live here. Canonical, robots and Open Graph URL/title are set per page via pageMetadata(),
// otherwise every page (including the 404) would inherit the homepage's values.
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: { default: 'Web Development Company in India | Accelise', template: '%s | Accelise' },
  description: 'Accelise is a web development company in India building business websites, e-commerce platforms, B2B catalogue websites and custom web applications.',
  applicationName: siteConfig.name,
  openGraph: { siteName: siteConfig.name, type: 'website', locale: 'en_IN', images: [ogImage] },
  formatDetection: { telephone: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': organizationId,
    name: siteConfig.name,
    url: slugUrl('/'),
    description: 'Accelise is a web development company serving businesses in Gurgaon (Gurugram), Delhi NCR and across India, building business websites, e-commerce websites, B2B catalogue websites and custom web applications.',
    logo: slugUrl('/icon.svg'),
    image: slugUrl('/icon.svg'),
    priceRange: '₹10,000 - ₹30,000+',
    founder: { '@type': 'Person', name: siteConfig.founder },
    email: siteConfig.email,
    telephone: siteConfig.phone,
    contactPoint: [{ '@type': 'ContactPoint', contactType: 'sales', telephone: siteConfig.phone, email: siteConfig.email, areaServed: 'IN' }],
    address: [
      { '@type': 'PostalAddress', addressLocality: 'Gurugram', addressRegion: 'Haryana', addressCountry: 'IN' },
      { '@type': 'PostalAddress', addressLocality: 'Hyderabad', addressRegion: 'Telangana', addressCountry: 'IN' },
    ],
    areaServed: [
      { '@type': 'City', name: 'Gurugram', alternateName: 'Gurgaon' },
      { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
      { '@type': 'Country', name: 'India' },
    ],
    knowsAbout: ['Web development', 'Business website development', 'E-commerce website development', 'B2B catalogue websites', 'Web application development', 'Website redesign'],
    employee: teamMembers.map((member) => ({ '@type': 'Person', name: member.name, jobTitle: member.role, sameAs: member.linkedin })),
  };
  const website = { '@context': 'https://schema.org', '@type': 'WebSite', '@id': websiteId, name: siteConfig.name, url: slugUrl('/'), inLanguage: 'en-IN', publisher: { '@id': organizationId } };

  return (
    <html lang="en-IN">
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        <JsonLd data={organization} />
        <JsonLd data={website} />
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
