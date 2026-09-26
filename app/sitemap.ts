import type { MetadataRoute } from 'next';
import { industries, projects, services, slugUrl } from '@/lib/content';

export const dynamic = 'force-static';

// URLs only. <lastmod> is deliberately omitted: pages are generated from shared content data, so there is no
// reliable per-page modification date, and stamping every URL with the build time would be inaccurate.
// <priority> and <changefreq> are ignored by Google, so they are left out as well.
export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string) => ({ url: slugUrl(path) });

  // Built from the same data as the routes, so every listed URL exists.
  return [
    page('/'),
    page('/services'),
    page('/industries'),
    page('/portfolio'),
    page('/packages'),
    page('/about'),
    page('/process'),
    page('/team'),
    page('/contact'),
    page('/web-development-company-gurgaon'),
    ...services.map((service) => page(`/services/${service.slug}`)),
    ...industries.map((industry) => page(`/industries/${industry.slug}`)),
    ...projects.map((project) => page(`/case-studies/${project.slug}`)),
  ];
}
