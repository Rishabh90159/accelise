import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs, CTASection, FAQSection, JsonLd, ListBlock, PageHero, PageVisual, ProjectCards, RelatedLinks } from '@/components/site';
import { industryBySlug, serviceBySlug, services } from '@/lib/content';
import { faqSchema, pageMetadata, serviceSchema, webPageSchema } from '@/lib/seo';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return pageMetadata({ title: service.seoTitle, description: service.metaDescription, path: `/services/${service.slug}` });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  const path = `/services/${service.slug}`;
  const relatedIndustries = service.relatedIndustries.map(industryBySlug).filter((industry) => industry !== undefined);
  const otherServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  return (
    <main>
      <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: service.title }]} />
      <PageHero eyebrow="Service" title={service.h1} text={service.heroNote}>
        <PageVisual title={service.shortTitle} items={['Fit', 'Problems', 'Deliverables', 'QA']} />
      </PageHero>
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-extrabold text-[#0b1b3a]">{service.overviewHeading}</h2>
          {service.overview.map((paragraph) => <p className="mt-4 text-base leading-7 text-slate-600" key={paragraph.slice(0, 32)}>{paragraph}</p>)}
          <p className="mt-4 text-base leading-7 text-slate-600">
            Working from Gurugram and Hyderabad, we take on projects across India. If you are nearby, read about our <Link href="/web-development-company-gurgaon" className="font-bold text-[#315eef] hover:underline">web development services in Gurgaon</Link>, or compare starting prices on the <Link href="/packages" className="font-bold text-[#315eef] hover:underline">website packages</Link> page.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-2">
          <ListBlock title="Suitable business types" items={[service.suitableFor]} />
          <ListBlock title="Problems solved" items={service.problems} />
          <ListBlock title="Deliverables" items={service.deliverables} />
          <ListBlock title="Important features" items={service.features} />
          <ListBlock title="Project workflow" items={service.workflow} />
          <ListBlock title="Expected business value" items={service.benefits} />
        </div>
      </section>
      {relatedIndustries.length > 0 ? (
        <RelatedLinks
          eyebrow="Industries"
          title="Industries we often build this for"
          links={relatedIndustries.map((industry) => ({ href: `/industries/${industry.slug}`, label: industry.title, text: industry.summary }))}
        />
      ) : null}
      <section className="section"><div className="container"><h2 className="mb-8 text-center text-3xl font-extrabold text-[#0b1b3a]">Related projects</h2><ProjectCards limit={2} /></div></section>
      <FAQSection items={service.faqs} title={`${service.title}: common questions`} />
      <RelatedLinks
        eyebrow="More services"
        title="Other web development services"
        className=""
        links={otherServices.map((item) => ({ href: `/services/${item.slug}`, label: item.title, text: item.summary }))}
      />
      <CTASection title={`Talk to Accelise about ${service.title.toLowerCase().replace('b2b', 'B2B')}`} text="Share your business type, pages, features and timeline to receive a practical consultation before the final quote." />
      <JsonLd data={webPageSchema({ name: service.seoTitle, description: service.metaDescription, path })} />
      <JsonLd data={serviceSchema({ name: service.title, description: service.metaDescription, path, serviceType: service.title })} />
      <JsonLd data={faqSchema(service.faqs)} />
    </main>
  );
}
