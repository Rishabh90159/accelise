import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumbs, CTASection, JsonLd, ListBlock, PageHero } from '@/components/site';
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
      <PageHero eyebrow={project.industry} title={`${project.name} case study`} text={project.problem} />
      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Image src={project.image} alt={`${project.name} screenshot placeholder`} width={900} height={540} className="rounded-lg border border-slate-200 bg-white shadow-sm" />
          <div className="grid gap-5">
            <ListBlock title="Project overview" items={[project.problem, project.solution]} />
            <ListBlock title="Important pages" items={['Homepage', 'About or trust page', 'Service or project sections', 'Contact and enquiry page']} />
          </div>
        </div>
        <div className="container mt-6 grid gap-6 lg:grid-cols-3">
          <ListBlock title="Features delivered" items={project.features} />
          <ListBlock title="Technology used" items={project.technology} />
          <ListBlock title="Final outcome" items={['A polished static website structure ready for content refinement.', 'No invented revenue, traffic or conversion claims are used.', 'CTA paths can be connected to WhatsApp, email or a form provider.']} />
        </div>
      </section>
      <CTASection title="Create a similar website" />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'CreativeWork', name: project.name, description: project.solution, url: slugUrl(`/case-studies/${project.slug}`) }} />
    </main>
  );
}
