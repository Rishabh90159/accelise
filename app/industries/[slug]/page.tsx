import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumbs, CTASection, JsonLd, ListBlock, PageHero } from '@/components/site';
import { industries, industryBySlug, slugUrl } from '@/lib/content';

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const industry = industryBySlug(params.slug);
  if (!industry) return {};
  return { title: industry.title, description: industry.summary, alternates: { canonical: `/industries/${industry.slug}` } };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = industryBySlug(params.slug);
  if (!industry) notFound();
  return (
    <main>
      <Breadcrumbs items={[{ label: 'Industries' }, { label: industry.title }]} />
      <PageHero eyebrow="Industry website development" title={industry.title} text={industry.summary} />
      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-2">
          <ListBlock title="Industry-specific challenges" items={industry.challenges} />
          <ListBlock title="Recommended website sections" items={industry.sections} />
          <ListBlock title="Lead-generation opportunities" items={industry.leadOpportunities} />
          <ListBlock title="Relevant features" items={industry.features} />
        </div>
        <div className="container mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-extrabold text-[#0b1b3a]">Example enquiry flow</h2>
          <p className="mt-3 leading-7 text-slate-600">{industry.enquiryFlow}</p>
        </div>
      </section>
      <CTASection title="Plan an industry-specific website" />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Service', name: industry.title, description: industry.summary, provider: { '@type': 'ProfessionalService', name: 'RG Web Solutions' }, url: slugUrl(`/industries/${industry.slug}`) }} />
    </main>
  );
}
