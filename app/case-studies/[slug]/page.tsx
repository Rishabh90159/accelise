import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumbs, CTASection, JsonLd, ListBlock, PageHero, PageVisual } from '@/components/site';
import { projectBySlug, projects, slugUrl } from '@/lib/content';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projectBySlug(params.slug);
  if (!project) return {};
  return { title: `${project.name} Case Study`, description: project.solution, alternates: { canonical: `/case-studies/${project.slug}` } };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projectBySlug(params.slug);
  if (!project) notFound();
  return (
    <main>
      <Breadcrumbs items={[{ label: 'Portfolio', href: '/portfolio' }, { label: project.name }]} />
      <PageHero eyebrow={`${project.industry} | ${project.projectType}`} title={`${project.name} case study`} text={project.solution}>
        <PageVisual title="Case study map" items={['Context', 'Challenge', 'Solution', 'Outcome']} />
      </PageHero>
      {project.liveUrl ? (
        <div className="container mt-6">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#315eef] px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:bg-[#244bd4]"
          >
            View Website
          </a>
        </div>
      ) : null}
      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Image src={project.image} alt={`${project.name} main website screenshot`} width={900} height={540} className="rounded-lg border border-slate-200 bg-white shadow-sm" />
          <div className="grid gap-5">
            <ListBlock title="Project summary" items={[project.projectType, project.solution]} />
            <ListBlock title="Business context" items={[project.context]} />
            <ListBlock title="Challenge" items={[project.problem]} />
          </div>
        </div>
        <div className="container mt-6 grid gap-6 lg:grid-cols-2">
          <ListBlock title="Proposed solution" items={[project.solution]} />
          <ListBlock title="Information architecture" items={project.architecture} />
          <ListBlock title="Important pages" items={project.architecture} />
          <ListBlock title="Features implemented" items={project.features} />
          <ListBlock title="Development approach" items={['Define the audience and primary enquiry action.', 'Create reusable page sections from structured content.', 'Keep the build responsive, fast and easy to update.', 'Prepare CTA paths for WhatsApp, email or future form tools.']} />
          <ListBlock title="Responsive considerations" items={['Mobile CTAs remain visible and easy to tap.', 'Cards and galleries stack cleanly on small screens.', 'Text stays readable without oversized headings.', 'Images keep consistent aspect ratios across breakpoints.']} />
          <ListBlock title="Technologies used" items={project.technology} />
          <ListBlock title="Honest final outcome" items={['A polished website structure for the stated business context.', 'No revenue, traffic or conversion improvement is claimed without verified data.', 'Further integrations can be scoped separately when business requirements are confirmed.']} />
        </div>
        <div className="container mt-8">
          <h2 className="mb-5 text-2xl font-extrabold text-[#0b1b3a]">Screenshot gallery</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {project.screenshots.map((screenshot, index) => (
              <Image src={screenshot} alt={`${project.name} screenshot ${index + 1}`} width={720} height={420} className="rounded-lg border border-slate-200 bg-white shadow-sm" key={screenshot} />
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Create a similar website" />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'CreativeWork', name: project.name, description: project.solution, url: slugUrl(`/case-studies/${project.slug}`) }} />
    </main>
  );
}
