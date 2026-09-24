import type { Metadata } from 'next';
import { Breadcrumbs, CTASection, PageHero, PageVisual, ProjectCards } from '@/components/site';

export const metadata: Metadata = { title: 'Portfolio', description: 'Selected completed projects and demo concepts by Accelise, with the challenge, work completed and key features of each website.', alternates: { canonical: '/portfolio' } };

export default function PortfolioPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: 'Portfolio' }]} />
      <PageHero eyebrow="Portfolio" title="Completed projects and demo website concepts" text="Review website work by industry, project type, challenge, solution, technology and case-study detail. Live links are shown only when a valid URL is available.">
        <PageVisual title="Portfolio review" items={['Screenshot', 'Challenge', 'Work done', 'Case study']} />
      </PageHero>
      <section className="section bg-white"><div className="container"><ProjectCards /></div></section>
      <CTASection title="Need a similar website?" />
    </main>
  );
}
