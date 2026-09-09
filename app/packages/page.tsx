import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';
import { Breadcrumbs, ButtonLink, CTASection, PageHero, PageVisual } from '@/components/site';
import { packages } from '@/lib/content';

export const metadata: Metadata = { title: 'Website Packages and Pricing', description: 'Starter, Business and Premium Catalogue website packages with clear inclusions and quotation notes.', alternates: { canonical: '/packages' } };

export default function PackagesPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: 'Packages' }]} />
      <PageHero eyebrow="Packages" title="Website packages with clear starting points" text="Choose a practical package to begin the discussion. Final quotation depends on content, page count, integrations and project requirements.">
        <PageVisual title="Package clarity" items={['Pages', 'Design', 'SEO', 'Support']} />
      </PageHero>
      <section className="section bg-white">
        <div className="container grid gap-5 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" key={pkg.name}>
              <h2 className="text-2xl font-extrabold text-[#0b1b3a]">{pkg.name}</h2>
              <p className="mt-3 text-2xl font-extrabold text-[#315eef]">{pkg.price}</p>
              <p className="mt-2 text-slate-600">{pkg.fit}</p>
              <div className="mt-6 grid gap-3 text-sm leading-6 text-slate-700">
                {[
                  ['Suitable client', pkg.fit],
                  ['Pages', pkg.pages],
                  ['Design scope', pkg.design],
                  ['Enquiry features', pkg.enquiry],
                  ['SEO setup', pkg.seo],
                  ['Revision limit', pkg.revisions],
                  ['Estimated timeline', pkg.timeline],
                  ['Post-launch support', pkg.support],
                  ['Not included', pkg.notIncluded],
                ].map(([label, value]) => <p key={label}><strong className="text-[#0b1b3a]">{label}:</strong> {value}</p>)}
              </div>
              <ul className="mt-6 grid gap-3">{pkg.features.map((feature) => <li className="flex gap-3 text-sm text-slate-700" key={feature}><CheckCircle2 className="h-5 w-5 shrink-0 text-[#315eef]" /> {feature}</li>)}</ul>
              <div className="mt-6"><ButtonLink href={`/contact?package=${encodeURIComponent(pkg.name)}`} cta={`package-${pkg.name}`}>Request Exact Quote</ButtonLink></div>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead className="bg-[#0b1b3a] text-white"><tr><th className="p-4">Feature</th>{packages.map((pkg) => <th className="p-4" key={pkg.name}>{pkg.name}</th>)}</tr></thead>
            <tbody>
              {['Suitable client', 'Pages', 'Design scope', 'Enquiry features', 'SEO setup', 'Revision limit', 'Timeline', 'Support', 'Not included'].map((row, index) => (
                <tr className="border-t border-slate-200" key={row}>
                  <th className="p-4 text-[#0b1b3a]">{row}</th>
                  {packages.map((pkg) => <td className="p-4 text-slate-600" key={pkg.name}>{[pkg.fit, pkg.pages, pkg.design, pkg.enquiry, pkg.seo, pkg.revisions, pkg.timeline, pkg.support, pkg.notIncluded][index]}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="container mt-6 rounded-lg border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700 shadow-sm">
          <p>Final pricing depends on requirements. Domain, hosting, premium services, backend systems, payment gateways, third-party tools, content and images are quoted or clarified separately before project commencement.</p>
        </div>
      </section>
      <CTASection title="Request an exact website quote" />
    </main>
  );
}
