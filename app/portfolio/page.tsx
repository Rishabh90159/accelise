import type { Metadata } from 'next';
import { Breadcrumbs, CTASection, PageHero, ProjectCards } from '@/components/site';

export const metadata: Metadata = { title: 'Portfolio', description: 'Selected website projects and concepts by RG Web Solutions with honest placeholder details where real information is unavailable.', alternates: { canonical: '/portfolio' } };

export default function PortfolioPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: 'Portfolio' }]} />
      <PageHero eyebrow="Portfolio" title="Website projects and concept work" text="A practical portfolio view with project images, business problems, solutions, features, technology and case-study links." />
      <section className="section bg-white"><div className="container"><ProjectCards /></div></section>
      <CTASection title="Need a similar website?" />
    </main>
  );
}
