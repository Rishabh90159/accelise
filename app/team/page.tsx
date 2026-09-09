import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import { Breadcrumbs, CTASection, JsonLd, PageHero, SectionHeading } from '@/components/site';
import { siteConfig, slugUrl, teamMembers } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Team',
  description:
    'Meet the RG Web Solutions team: full-stack, backend, frontend and QA specialists for business website projects.',
  alternates: { canonical: '/team' },
};

export default function TeamPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: 'Team' }]} />
      <PageHero
        eyebrow="Team"
        title="A focused web-development team led with direct technical ownership"
        text="RG Web Solutions is led by Rishabh Gautam, with backend, frontend and QA specialists involved according to project requirements."
      />

      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="People"
            title="Meet the specialists behind the work"
            text="These profiles are written conservatively from the roles provided and publicly visible LinkedIn details where available."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {teamMembers.map((member) => (
              <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" key={member.linkedin}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-[#315eef]">{member.role}</p>
                    <h2 className="mt-2 text-2xl font-extrabold text-[#0b1b3a]">{member.name}</h2>
                  </div>
                  <a
                    href={member.linkedin}
                    className="grid h-10 w-10 place-items-center rounded-md border border-slate-300 text-[#0b1b3a] hover:border-[#315eef]"
                    aria-label={`${member.name} LinkedIn profile`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                <p className="mt-4 leading-7 text-slate-600">{member.focus}</p>
                <ul className="mt-5 grid gap-3 text-sm text-slate-700">
                  {member.details.map((detail) => (
                    <li className="rounded-md bg-slate-50 p-3" key={detail}>{detail}</li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span className="rounded bg-[#e8eef8] px-3 py-1 text-xs font-bold text-[#0b1b3a]" key={skill}>{skill}</span>
                  ))}
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
          <h2 className="text-2xl font-extrabold text-[#0b1b3a]">How the team is positioned</h2>
          <p className="mt-4 leading-7 text-slate-600">
            {siteConfig.name} does not need to exaggerate team size. Projects are led by Rishabh Gautam, a Full Stack Developer,
            with a network of trusted designers and specialists engaged according to project requirements.
          </p>
        </div>
      </section>

      <CTASection title="Talk to the team about your website" />
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
