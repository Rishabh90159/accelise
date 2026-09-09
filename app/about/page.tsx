import type { Metadata } from 'next';
import { Breadcrumbs, CTASection, ListBlock, PageHero, PageVisual, SectionHeading } from '@/components/site';
import { technologies, values } from '@/lib/content';

export const metadata: Metadata = { title: 'About RG Web Solutions', description: 'Learn about the RG Web Solutions team, services, approach, technology stack and service coverage.', alternates: { canonical: '/about' } };

export default function AboutPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: 'About' }]} />
      <PageHero eyebrow="About" title="A focused web-development team for business websites" text="RG Web Solutions combines project communication, frontend development, backend engineering and quality assurance to deliver reliable business websites, product catalogues and web applications.">
        <PageVisual title="Agency capability" items={['Strategy', 'Frontend', 'Backend', 'QA']} />
      </PageHero>
      <section className="section bg-white">
        <div className="container grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-6 shadow-sm"><h2 className="text-2xl font-extrabold text-[#0b1b3a]">Who we work with</h2><p className="mt-4 leading-7 text-slate-600">Our team works with small businesses, manufacturers, exporters, service companies, creative professionals and local brands that need a credible website and practical enquiry flow.</p></div>
          <div className="rounded-lg border border-slate-200 p-6 shadow-sm"><h2 className="text-2xl font-extrabold text-[#0b1b3a]">Our approach</h2><p className="mt-4 leading-7 text-slate-600">We start with business goals, buyer questions, content readiness and required CTAs. The build stays lean unless a feature directly improves credibility, enquiries or maintainability.</p></div>
          <ListBlock title="Technologies used" items={technologies} />
          <ListBlock title="Team capabilities" items={['Project planning and communication', 'Frontend interface development', 'Backend and integration support', 'Quality assurance and launch checks']} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Values" title="Practical, transparent and conversion-aware" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => { const Icon = value.icon; return <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" key={value.title}><Icon className="h-7 w-7 text-[#315eef]" /><h3 className="mt-4 font-extrabold text-[#0b1b3a]">{value.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{value.text}</p></div>; })}
          </div>
        </div>
      </section>
      <section className="section bg-white"><div className="container grid gap-6 lg:grid-cols-2"><ListBlock title="Quality and communication principles" items={['Document scope before development', 'Keep review points clear', 'Test forms, CTAs and responsive layouts before launch', 'Quote backend, payment and third-party systems separately']} /><ListBlock title="Service locations" items={['Gurgaon and Delhi NCR businesses', 'Remote projects across India', 'International clients where communication and requirements are clear']} /></div></section>
      <CTASection title="Talk to our team about your website" />
    </main>
  );
}
