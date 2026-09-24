import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumbs, CTASection, FAQSection, JsonLd, ListBlock, PageHero, PageVisual, ProjectCards } from '@/components/site';
import { serviceBySlug, services, slugUrl } from '@/lib/content';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return { title: `${service.title} Services in India`, description: service.summary, alternates: { canonical: `/services/${service.slug}` }, keywords: service.keywords };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  return (
    <main>
      <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: service.title }]} />
      <PageHero eyebrow="Service" title={`${service.title} in India`} text={service.heroNote}>
        <PageVisual title={service.shortTitle} items={['Fit', 'Problems', 'Deliverables', 'QA']} />
      </PageHero>
      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-2">
          <ListBlock title="Suitable business types" items={[service.suitableFor]} />
          <ListBlock title="Problems solved" items={[service.problem, 'Visitors cannot quickly understand trust signals or next steps.', 'Enquiries arrive without enough context to estimate the project.']} />
          <ListBlock title="Deliverables" items={service.deliverables} />
          <ListBlock title="Important features" items={service.features} />
          <ListBlock title="Project workflow" items={service.workflow} />
          <ListBlock title="Expected business value" items={service.benefits} />
        </div>
      </section>
      <section className="section bg-white"><div className="container"><h2 className="mb-8 text-center text-3xl font-extrabold text-[#0b1b3a]">Related projects</h2><ProjectCards limit={2} /></div></section>
      <FAQSection items={service.faqs} />
      <CTASection title={`Discuss ${service.shortTitle}`} text="Share your business type, pages, features and timeline to receive a practical consultation before the final quote." />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Service', name: service.title, description: service.summary, provider: { '@type': 'ProfessionalService', name: 'Accelise' }, areaServed: 'India', url: slugUrl(`/services/${service.slug}`) }} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: service.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }} />
    </main>
  );
}
