import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import { Breadcrumbs, CTASection, JsonLd, PageHero, PageVisual, SectionHeading, TeamPortrait } from '@/components/site';
import { siteConfig, slugUrl, teamMembers } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Team',
  description:
    'Meet the Accelise team: full-stack project leadership, backend development, frontend development and quality assurance.',
  alternates: { canonical: '/team' },
};

export default function TeamPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: 'Team' }]} />
      <PageHero
        eyebrow="Team"
        title="A coordinated team for planning, building, testing and launching websites"
        text="Our team combines full-stack project leadership, backend engineering, frontend development and quality assurance for reliable website delivery."
      >
        <PageVisual title="Team responsibilities" items={['Planning', 'Frontend', 'Backend', 'QA']} />
      </PageHero>
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="People"
            title="Meet the specialists behind the work"
            text="Each role supports a specific part of delivery, from project planning and interface development to backend support and launch testing."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {teamMembers.map((member) => (
              <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" key={member.linkedin}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <TeamPortrait initials={member.initials} />
                    <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.12em] text-[#315eef]">{member.role}</p>
                    <h2 className="mt-2 text-2xl font-extrabold text-[#0b1b3a]">{member.name}</h2>
                  </div>
                  <a href={member.linkedin} className="grid h-10 w-10 place-items-center rounded-md border border-slate-300 text-[#0b1b3a] hover:border-[#315eef]" aria-label={`${member.name} LinkedIn profile`}>
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                <p className="mt-4 leading-7 text-slate-600">{member.focus}</p>
                <ul className="mt-5 grid gap-3 text-sm text-slate-700">
                  {member.details.map((detail) => <li className="rounded-md bg-slate-50 p-3" key={detail}>{detail}</li>)}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {member.skills.map((skill) => <span className="rounded bg-[#e8eef8] px-3 py-1 text-xs font-bold text-[#0b1b3a]" key={skill}>{skill}</span>)}
                </div>
                <a className="mt-5 inline-flex items-center text-sm font-extrabold text-[#315eef]" href={member.linkedin}>
                  View LinkedIn <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#0b1b3a]">How we work together</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-5">
            {['Project discovery and planning', 'UI and frontend implementation', 'Backend and integration support', 'Quality assurance and responsive testing', 'Client review and launch'].map((item, index) => (
              <div className="rounded-md bg-slate-50 p-4" key={item}>
                <span className="text-sm font-extrabold text-[#315eef]">{String(index + 1).padStart(2, '0')}</span>
                <p className="mt-2 text-sm font-bold text-[#0b1b3a]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Talk to our team about your website" />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: `${siteConfig.name} team`,
          url: slugUrl('/team'),
          mainEntity: {
            '@type': 'Organization',
            name: siteConfig.name,
            employee: teamMembers.map((member) => ({
              '@type': 'Person',
              name: member.name,
              jobTitle: member.role,
              sameAs: member.linkedin,
            })),
          },
        }}
      />
    </main>
  );
}
