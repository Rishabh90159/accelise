import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';
import { Breadcrumbs, ButtonLink, CTASection, PageHero } from '@/components/site';
import { packages } from '@/lib/content';

export const metadata: Metadata = { title: 'Website Packages and Pricing', description: 'Starter, Business and Premium Catalogue website packages with clear inclusions and quotation notes.', alternates: { canonical: '/packages' } };

export default function PackagesPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: 'Packages' }]} />
      <PageHero eyebrow="Packages" title="Website packages with clear starting points" text="Choose a practical package to begin the discussion. Final quotation depends on content, page count, integrations and project requirements." />
      <section className="section bg-white">
        <div className="container grid gap-5 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" key={pkg.name}>
              <h2 className="text-2xl font-extrabold text-[#0b1b3a]">{pkg.name}</h2>
              <p className="mt-3 text-2xl font-extrabold text-[#315eef]">{pkg.price}</p>
              <p className="mt-2 text-slate-600">{pkg.fit}</p>
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
              {['Pages', 'Enquiry flow', 'SEO setup', 'Best fit', 'Revision rounds'].map((row, index) => (
                <tr className="border-t border-slate-200" key={row}>
                  <th className="p-4 text-[#0b1b3a]">{row}</th>
                  {packages.map((pkg) => <td className="p-4 text-slate-600" key={pkg.name}>{index === 0 ? pkg.features[0] : index === 1 ? 'WhatsApp, call and email' : index === 2 ? pkg.features.find((f) => f.includes('SEO')) ?? 'Basic SEO setup' : index === 3 ? pkg.fit : pkg.features[pkg.features.length - 1]}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="container mt-6 rounded-lg border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700 shadow-sm">
          <p>Final quotation depends on requirements. Domain and hosting charges are separate. E-commerce, backend, payment gateway and admin panel are quoted separately. Content, images and third-party charges should be clarified before project commencement.</p>
        </div>
      </section>
      <CTASection title="Request an exact website quote" />
    </main>
  );
}
