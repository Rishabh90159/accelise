import type { Metadata } from 'next';
import { Breadcrumbs, CTASection, JsonLd, PageHero, PageVisual, ProjectCards } from '@/components/site';
import { projects, slugUrl } from '@/lib/content';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Web Development Portfolio & Case Studies | Accelise',
  description: 'Website projects by Accelise, including completed client work and demo concepts, with the challenge, work completed, technology used and a full case study.',
  path: '/portfolio',
});

export default function PortfolioPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: 'Portfolio' }]} />
      <PageHero eyebrow="Portfolio" title="Web Development Portfolio: Projects and Demo Concepts" text="Review website work by industry, project type, challenge, solution, technology and case-study detail. Live links are shown only when a valid URL is available.">
        <PageVisual title="Portfolio review" items={['Screenshot', 'Challenge', 'Work done', 'Case study']} />
      </PageHero>
      <section className="section bg-white"><div className="container"><ProjectCards /></div></section>
      <CTASection title="Need a similar website?" />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: projects.map((project, index) => ({ '@type': 'ListItem', position: index + 1, name: `${project.name} case study`, url: slugUrl(`/case-studies/${project.slug}`) })) }} />
    </main>
  );
}
