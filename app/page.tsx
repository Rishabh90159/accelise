import { CheckCircle2 } from 'lucide-react';
import { AgencyVisual, ButtonLink, CTASection, FAQSection, JsonLd, PageHero, ProjectCards, SectionHeading, ServiceCards } from '@/components/site';
import { categoriesServed, faqs, packages, processSteps, slugUrl } from '@/lib/content';

export default function HomePage() {
  return (
    <main>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: slugUrl('/') }] }} />
      <PageHero eyebrow="Website developer in Gurgaon" title="Professional Websites That Turn Visitors Into Customers" text="Frontend-only business websites, catalogue websites and landing pages built for credibility, clear communication and qualified enquiries.">
        <AgencyVisual />
      </PageHero>
      <section className="border-b border-slate-200 bg-white py-8">
        <div className="container grid gap-4 md:grid-cols-3">
          {['No fake claims or inflated numbers', 'WhatsApp, call and email lead paths', 'Static, fast and ready to extend'].map((item) => <div className="flex items-center gap-3 text-sm font-bold text-[#0b1b3a]" key={item}><CheckCircle2 className="h-5 w-5 text-[#315eef]" /> {item}</div>)}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Who we serve" title="Built for Indian businesses that need trust before leads" text="Small businesses, manufacturers, exporters and service companies need clear websites that answer buyer questions quickly." />
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {categoriesServed.map((category) => { const Icon = category.icon; return <div className="rounded-lg border border-slate-200 bg-white p-5 text-center shadow-sm" key={category.label}><Icon className="mx-auto h-7 w-7 text-[#315eef]" /><p className="mt-3 text-sm font-bold text-[#0b1b3a]">{category.label}</p></div>; })}
          </div>
        </div>
      </section>
      <section className="section bg-white"><div className="container"><SectionHeading eyebrow="Services" title="Web development services with practical business value" /><ServiceCards limit={4} /><div className="mt-8 text-center"><ButtonLink href="/services" variant="secondary">Explore all services</ButtonLink></div></div></section>
      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading eyebrow="Why choose us" title="Direct founder involvement, clean code and honest positioning" text="Projects are led by Rishabh Gautam, a Full Stack Developer, with trusted designers and specialists engaged according to requirements." />
          <div className="grid gap-4 md:grid-cols-2">
            {['Clear scope before development', 'SEO and accessibility foundations', 'Mobile-first conversion paths', 'Future-ready frontend architecture'].map((item) => <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" key={item}><h3 className="font-extrabold text-[#0b1b3a]">{item}</h3><p className="mt-2 text-sm leading-6 text-slate-600">Planned around real buyer questions, page speed and simple maintenance instead of unnecessary complexity.</p></div>)}
          </div>
        </div>
      </section>
      <section className="section bg-white"><div className="container"><SectionHeading eyebrow="Portfolio" title="Selected website projects and concepts" text="Project details use placeholders where information is not yet available and avoid invented business outcomes." /><ProjectCards limit={4} /></div></section>
      <section className="section"><div className="container"><SectionHeading eyebrow="Process" title="A simple workflow from scope to launch" /><div className="grid gap-4 md:grid-cols-4">{processSteps.map((step, index) => <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" key={step}><span className="text-sm font-extrabold text-[#315eef]">{String(index + 1).padStart(2, '0')}</span><h3 className="mt-2 font-extrabold text-[#0b1b3a]">{step}</h3></div>)}</div></div></section>
      <section className="section bg-white"><div className="container"><SectionHeading eyebrow="Packages" title="Starting points for common website needs" /><div className="grid gap-5 lg:grid-cols-3">{packages.map((pkg) => <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" key={pkg.name}><h3 className="text-xl font-extrabold text-[#0b1b3a]">{pkg.name}</h3><p className="mt-2 text-2xl font-extrabold text-[#315eef]">{pkg.price}</p><p className="mt-2 text-sm text-slate-600">{pkg.fit}</p><ul className="mt-5 grid gap-2 text-sm text-slate-700">{pkg.features.slice(0, 5).map((feature) => <li className="flex gap-2" key={feature}><CheckCircle2 className="h-4 w-4 text-[#315eef]" /> {feature}</li>)}</ul></div>)}</div><div className="mt-8 text-center"><ButtonLink href="/packages">Compare packages</ButtonLink></div></div></section>
      <section className="section"><div className="container"><SectionHeading eyebrow="Testimonials" title="Placeholder testimonials for layout only" text="These are clearly labelled placeholders and should be replaced with real client feedback only after permission." /><div className="grid gap-5 md:grid-cols-3">{['Placeholder: clear communication and structured process.', 'Placeholder: responsive design and practical SEO setup.', 'Placeholder: helpful enquiry flow planning.'].map((quote) => <blockquote className="rounded-lg border border-dashed border-slate-300 bg-white p-5 text-slate-700" key={quote}>{quote}<footer className="mt-4 text-sm font-bold text-[#0b1b3a]">Placeholder client</footer></blockquote>)}</div></div></section>
      <FAQSection items={faqs} />
      <CTASection />
    </main>
  );
}
