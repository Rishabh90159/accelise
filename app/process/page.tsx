import type { Metadata } from 'next';
import { Breadcrumbs, CTASection, ListBlock, PageHero } from '@/components/site';
import { processSteps } from '@/lib/content';

export const metadata: Metadata = { title: 'Website Development Process', description: 'A clear workflow from requirement discussion to launch and post-launch support.', alternates: { canonical: '/process' } };

export default function ProcessPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: 'Process' }]} />
      <PageHero eyebrow="Process" title="A clear website workflow from idea to launch" text="The process keeps scope, content, design, reviews and launch responsibilities visible from the beginning." />
      <section className="section">
        <div className="container grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" key={step}><span className="text-sm font-extrabold text-[#315eef]">{String(index + 1).padStart(2, '0')}</span><h2 className="mt-2 text-lg font-extrabold text-[#0b1b3a]">{step}</h2><p className="mt-2 text-sm leading-6 text-slate-600">A focused step that keeps the website aligned with goals, timeline and required inputs.</p></article>)}
        </div>
        <div className="container mt-8"><ListBlock title="What the client should provide" items={['Business overview and service details', 'Logo, brand colors or visual references if available', 'Page content, product details and real project images', 'Domain, hosting and third-party access when needed', 'Timely review feedback during revision rounds']} /></div>
      </section>
      <CTASection title="Start with a requirement discussion" />
    </main>
  );
}
