import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs, CTASection, FAQSection, JsonLd, ListBlock, PageHero, PageVisual, RelatedLinks } from '@/components/site';
import { industries, industryBySlug, projectBySlug, serviceBySlug } from '@/lib/content';
import { faqSchema, pageMetadata, serviceSchema } from '@/lib/seo';

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = industryBySlug(slug);
  if (!industry) return {};
  return pageMetadata({ title: industry.seoTitle, description: industry.metaDescription, path: `/industries/${industry.slug}` });
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industryBySlug(slug);
  if (!industry) notFound();
  const relatedServices = industry.relatedServices.map(serviceBySlug).filter((service) => service !== undefined);
  const project = industry.relatedProject ? projectBySlug(industry.relatedProject) : undefined;
  return (
    <main>
      <Breadcrumbs items={[{ label: 'Industries', href: '/industries' }, { label: industry.shortTitle }]} />
      <PageHero eyebrow="Industry website development" title={industry.title} text={industry.summary}>
        <PageVisual title="Industry flow" items={['Challenges', 'Sections', 'Leads', 'CTA']} />
      </PageHero>
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-extrabold text-[#0b1b3a]">Planning a website for {industry.shortTitle.toLowerCase()}</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">{industry.intro}</p>
          <p className="mt-4 text-base leading-7 text-slate-600">
            {project ? (
              <>You can see this approach in our <Link href={`/case-studies/${project.slug}`} className="font-bold text-[#315eef] hover:underline">{project.name.toLowerCase()} {project.projectType.toLowerCase()}</Link>, and more examples in our <Link href="/portfolio" className="font-bold text-[#315eef] hover:underline">web development portfolio</Link>.</>
            ) : (
              <>Browse our <Link href="/portfolio" className="font-bold text-[#315eef] hover:underline">web development portfolio</Link> for completed projects and demo concepts, or read how our <Link href="/process" className="font-bold text-[#315eef] hover:underline">website development process</Link> works.</>
            )}
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-2">
          <ListBlock title="Industry-specific challenges" items={industry.challenges} />
          <ListBlock title="Recommended website sections" items={industry.sections} />
          <ListBlock title="Lead-generation opportunities" items={industry.leadOpportunities} />
          <ListBlock title="Relevant features" items={industry.features} />
        </div>
        <div className="container mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#8fb0ff] hover:shadow-md">
          <h2 className="text-xl font-extrabold text-[#0b1b3a]">Example enquiry flow</h2>
          <p className="mt-3 leading-7 text-slate-600">{industry.enquiryFlow}</p>
        </div>
      </section>
      <RelatedLinks
        eyebrow="Related services"
        title="Services that fit this industry"
        links={relatedServices.map((service) => ({ href: `/services/${service.slug}`, label: service.title, text: service.summary }))}
      />
      <FAQSection items={industry.faqs} title={`${industry.shortTitle} websites: common questions`} />
      <CTASection title="Plan your industry website with Accelise" text="Tell us about your business, the enquiries you want and any pages you already have. We will suggest a practical structure and send a clear quote." />
      <JsonLd data={serviceSchema({ name: industry.title, description: industry.metaDescription, path: `/industries/${industry.slug}`, serviceType: 'Website development' })} />
      <JsonLd data={faqSchema(industry.faqs)} />
    </main>
  );
}
