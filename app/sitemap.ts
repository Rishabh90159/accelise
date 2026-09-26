import type { MetadataRoute } from 'next';
import { industries, projects, services, slugUrl } from '@/lib/content';

export const dynamic = 'force-static';

type Entry = MetadataRoute.Sitemap[number];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const page = (path: string, priority: number, changeFrequency: Entry['changeFrequency'] = 'monthly'): Entry => ({ url: slugUrl(path), lastModified, changeFrequency, priority });

  // Built from the same data as the routes, so every listed URL exists.
  return [
    page('/', 1, 'weekly'),
    page('/services', 0.9),
    page('/industries', 0.8),
    page('/portfolio', 0.8),
    page('/packages', 0.8),
    page('/about', 0.6),
    page('/process', 0.6),
    page('/team', 0.6),
    page('/contact', 0.7),
    page('/web-development-company-gurgaon', 0.9),
    ...services.map((service) => page(`/services/${service.slug}`, 0.9)),
    ...industries.map((industry) => page(`/industries/${industry.slug}`, 0.8)),
    ...projects.map((project) => page(`/case-studies/${project.slug}`, 0.6)),
  ];
}
