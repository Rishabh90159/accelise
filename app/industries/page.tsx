import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Breadcrumbs, CTASection, JsonLd, PageHero, PageVisual } from '@/components/site';
import { industries, slugUrl } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Industry Website Development',
  description: 'Website development for interior designers, manufacturers and exporters, event planners, photographers, diagnostic centres, modular kitchen businesses, schools and coaching institutes.',
  alternates: { canonical: '/industries' },
};

export default function IndustriesPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: 'Industries' }]} />
      <PageHero eyebrow="Industries" title="Website development for your industry" text="Each industry has different buyer questions, trust signals and enquiry paths. Pick yours to see the sections, features and lead flows we recommend.">
        <PageVisual title="Industry planning" items={['Buyer questions', 'Trust signals', 'Sections', 'Enquiry flow']} />
      </PageHero>
      <section className="section bg-white">
        <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <Link href={`/industries/${industry.slug}`} key={industry.slug} className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#8fb0ff] hover:shadow-lg">
                <Icon className="h-8 w-8 text-[#315eef]" />
                <h2 className="mt-4 text-lg font-extrabold text-[#0b1b3a]">{industry.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{industry.summary}</p>
                <span className="mt-4 inline-flex items-center text-sm font-bold text-[#315eef]">Learn more <ArrowRight className="ml-1 h-4 w-4" /></span>
              </Link>
            );
          })}
        </div>
      </section>
      <CTASection title="Plan an industry-specific website" />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: industries.map((industry, index) => ({ '@type': 'ListItem', position: index + 1, name: industry.title, url: slugUrl(`/industries/${industry.slug}`) })) }} />
    </main>
  );
}
