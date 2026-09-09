import type { Metadata } from 'next';
import { Breadcrumbs, CTASection, ListBlock, PageHero, SectionHeading } from '@/components/site';
import { siteConfig, technologies, values } from '@/lib/content';

export const metadata: Metadata = { title: 'About Rishabh Gautam', description: 'Learn about RG Web Solutions, led by Rishabh Gautam, Full Stack Developer in Gurgaon.', alternates: { canonical: '/about' } };

export default function AboutPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: 'About' }]} />
      <PageHero eyebrow="About" title={`${siteConfig.name} is led by ${siteConfig.founder}`} text="Rishabh Gautam is a Full Stack Developer based in Gurgaon, working with small businesses, manufacturers, exporters and service companies that need clear websites and practical enquiry flows." />
      <section className="section bg-white">
        <div className="container grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-6 shadow-sm"><h2 className="text-2xl font-extrabold text-[#0b1b3a]">Development approach</h2><p className="mt-4 leading-7 text-slate-600">Every project starts with business goals, buyer questions, content readiness and required CTAs. The build stays lean unless a feature directly improves credibility, enquiries or maintainability.</p></div>
          <ListBlock title="Technologies used" items={technologies} />
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
      <section className="section bg-white"><div className="container rounded-lg border border-slate-200 p-6 shadow-sm"><h2 className="text-2xl font-extrabold text-[#0b1b3a]">Team and network</h2><p className="mt-4 leading-7 text-slate-600">RG Web Solutions is positioned honestly: led by Rishabh Gautam, a Full Stack Developer, with a network of trusted designers and specialists engaged according to project requirements.</p></div></section>
      <CTASection title="Discuss your project with Rishabh" />
    </main>
  );
}
