import type { Metadata } from 'next';
import { Breadcrumbs, ButtonLink, CTASection, JsonLd, ListBlock, PageHero, SectionHeading, ServiceCards } from '@/components/site';
import { services, slugUrl } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Web Development Services',
  description: 'Business websites, B2B catalogue websites, portfolio websites, ecommerce planning, redesign, landing pages, maintenance and custom web applications.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: 'Services' }]} />
      <PageHero eyebrow="Services" title="Website development services for business enquiries" text="Choose a focused website type, or use the consultation to clarify what your buyers need before deciding the final scope." />
      <section className="section bg-white"><div className="container"><ServiceCards /></div></section>
      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" key={service.slug}>
              <h2 className="text-2xl font-extrabold text-[#0b1b3a]">{service.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{service.problem}</p>
              <p className="mt-3 text-sm font-bold text-slate-700">Suitable for: {service.suitableFor}</p>
              <div className="mt-5"><ListBlock title="Important features" items={service.features} /></div>
              <div className="mt-5"><ButtonLink href={`/services/${service.slug}`} cta={`service-${service.slug}`}>View details</ButtonLink></div>
            </article>
          ))}
        </div>
      </section>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: services.map((service, index) => ({ '@type': 'ListItem', position: index + 1, name: service.title, url: slugUrl(`/services/${service.slug}`) })) }} />
      <SectionHeading eyebrow="Next step" title="Request a consultation for the right website scope" />
      <CTASection />
    </main>
  );
}
