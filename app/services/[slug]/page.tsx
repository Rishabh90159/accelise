import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumbs, CTASection, FAQSection, JsonLd, ListBlock, PageHero, ProjectCards } from '@/components/site';
import { processSteps, serviceBySlug, services, slugUrl } from '@/lib/content';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = serviceBySlug(params.slug);
  if (!service) return {};
  return { title: service.title, description: service.summary, alternates: { canonical: `/services/${service.slug}` }, keywords: service.keywords };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = serviceBySlug(params.slug);
  if (!service) notFound();
  return (
    <main>
      <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: service.title }]} />
      <PageHero eyebrow="Service" title={`${service.title} in India`} text={service.summary} />
      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-2">
          <ListBlock title="Common business problems" items={[service.problem, 'Visitors cannot quickly understand services, trust signals or next steps.', 'Enquiries arrive without enough context to estimate the project.']} />
          <ListBlock title="Features included" items={service.features} />
          <ListBlock title="Expected business value" items={service.benefits} />
          <ListBlock title="Development process" items={processSteps.slice(0, 6)} />
        </div>
      </section>
      <section className="section bg-white"><div className="container"><h2 className="mb-8 text-center text-3xl font-extrabold text-[#0b1b3a]">Related projects</h2><ProjectCards limit={2} /></div></section>
      <FAQSection items={service.faqs} />
      <CTASection title={`Discuss ${service.shortTitle}`} text="Share your business type, pages, features and timeline to receive a practical consultation before the final quote." />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Service', name: service.title, description: service.summary, provider: { '@type': 'ProfessionalService', name: 'RG Web Solutions' }, areaServed: 'India', url: slugUrl(`/services/${service.slug}`) }} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: service.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }} />
    </main>
  );
}
