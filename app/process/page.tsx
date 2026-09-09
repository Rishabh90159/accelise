import type { Metadata } from 'next';
import { Breadcrumbs, CTASection, ListBlock, PageHero, PageVisual } from '@/components/site';
import { processSteps } from '@/lib/content';

export const metadata: Metadata = { title: 'Website Development Process', description: 'A clear workflow from requirement discussion to launch and post-launch support.', alternates: { canonical: '/process' } };

export default function ProcessPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: 'Process' }]} />
      <PageHero eyebrow="Process" title="A clear website workflow from idea to launch" text="The process keeps scope, content, design, reviews and launch responsibilities visible from the beginning.">
        <PageVisual title="Workflow checkpoints" items={['Scope', 'Content', 'Review', 'Launch']} />
      </PageHero>
      <section className="section">
        <div className="container grid gap-5 md:grid-cols-2">
          {processSteps.map((step, index) => <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" key={step.title}><span className="text-sm font-extrabold text-[#315eef]">{String(index + 1).padStart(2, '0')}</span><h2 className="mt-2 text-xl font-extrabold text-[#0b1b3a]">{step.title}</h2><div className="mt-4 grid gap-3 text-sm leading-6 text-slate-700"><p><strong>Our team:</strong> {step.team}</p><p><strong>Client provides:</strong> {step.client}</p><p><strong>Deliverable:</strong> {step.deliverable}</p><p><strong>Approval point:</strong> {step.approval}</p></div></article>)}
        </div>
        <div className="container mt-8 grid gap-6 lg:grid-cols-2">
          <ListBlock title="Communication process" items={['One primary project thread for decisions and feedback', 'Milestone updates around scope, design, development and launch', 'Consolidated feedback preferred during revision rounds']} />
          <ListBlock title="Revisions" items={['Revision limits follow the selected package', 'Changes are tracked against approved scope', 'New pages or major feature changes are estimated separately']} />
          <ListBlock title="Testing checklist" items={['Mobile, tablet and desktop layout review', 'Navigation, internal links and CTA checks', 'Form validation, WhatsApp and email link checks', 'Basic metadata and sitemap checks']} />
          <ListBlock title="Launch requirements" items={['Final content approval', 'Domain or hosting access where required', 'Confirmed phone, WhatsApp, email and map details', 'Approved package and payment milestones']} />
          <ListBlock title="Post-launch support" items={['Minor launch fixes during the package support window', 'Guidance for future content updates', 'Separate estimates for new features or integrations']} />
          <ListBlock title="What the client should provide" items={['Business overview and service details', 'Logo, brand colors or visual references if available', 'Page content, product details and real images', 'Domain, hosting and third-party access when needed', 'Timely review feedback during revision rounds']} />
        </div>
      </section>
      <CTASection title="Start with a requirement discussion" />
    </main>
  );
}
