import type { MetadataRoute } from 'next';
import { blogPosts, industries, projects, services, slugUrl } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['/', '/services', '/packages', '/portfolio', '/team', '/about', '/process', '/blog', '/contact'];
  const routes = [
    ...staticRoutes,
    ...services.map((item) => `/services/${item.slug}`),
    ...industries.map((item) => `/industries/${item.slug}`),
    ...projects.map((item) => `/case-studies/${item.slug}`),
    ...blogPosts.map((item) => `/blog/${item.slug}`),
  ];
  return routes.map((route) => ({ url: slugUrl(route), lastModified: new Date('2026-09-09') }));
}
