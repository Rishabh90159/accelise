import { CheckCircle2 } from 'lucide-react';
import { AgencyVisual, ButtonLink, CTASection, FAQSection, JsonLd, PageHero, ProjectCards, SectionHeading, ServiceCards, TeamPreview } from '@/components/site';
import { categoriesServed, faqs, packages, processSteps, slugUrl } from '@/lib/content';

export default function HomePage() {
  return (
    <main>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: slugUrl('/') }] }} />
      <PageHero eyebrow="Website development team in India" title="Web Development Company in India" text="We build professional business websites, web applications, e-commerce platforms and B2B catalogue websites for businesses across India.">
        <AgencyVisual />
      </PageHero>
      <section className="border-b border-slate-200 bg-white py-8">
        <div className="container grid gap-4 md:grid-cols-3">
          {['Coordinated project communication', 'WhatsApp, call and email lead paths', 'Responsive, SEO-ready website foundations'].map((item) => <div className="flex items-center gap-3 text-sm font-bold text-[#0b1b3a]" key={item}><CheckCircle2 className="h-5 w-5 text-[#315eef]" /> {item}</div>)}
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
          <SectionHeading eyebrow="Why choose us" title="A focused team for complete website delivery" text="Our specialists combine planning, frontend development, backend thinking, quality assurance and launch communication around one clear project scope." />
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ['Clear scope and project communication', 'We define pages, features, responsibilities, timelines and review points before development begins.'],
              ['Responsive and accessible interfaces', 'Layouts are planned for mobile, tablet and desktop with readable text, visible focus states and clear CTAs.'],
              ['SEO-ready website foundations', 'Pages use semantic structure, metadata, sitemap, internal links and content written for real buyer intent.'],
              ['Structured testing before launch', 'Forms, links, WhatsApp actions, responsive views and core content are checked before the site goes live.'],
            ].map(([title, text]) => <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" key={title}><h3 className="font-extrabold text-[#0b1b3a]">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></div>)}
          </div>
        </div>
      </section>
      <section className="section bg-white"><div className="container"><SectionHeading eyebrow="Team" title="Frontend, backend and QA working together" text="Meet the project-delivery team behind planning, implementation, testing and launch support." /><TeamPreview /><div className="mt-8 text-center"><ButtonLink href="/team" variant="secondary">Meet the full team</ButtonLink></div></div></section>
      <section className="section"><div className="container"><SectionHeading eyebrow="Portfolio" title="Selected website projects and concepts" text="Completed work and demo concepts are labelled clearly, with case studies that avoid unverifiable business-result claims." /><ProjectCards limit={4} /></div></section>
      <section className="section bg-white"><div className="container"><SectionHeading eyebrow="Process" title="Our development process from scope to launch" /><div className="grid gap-4 md:grid-cols-4">{processSteps.map((step, index) => <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" key={step.title}><span className="text-sm font-extrabold text-[#315eef]">{String(index + 1).padStart(2, '0')}</span><h3 className="mt-2 font-extrabold text-[#0b1b3a]">{step.title}</h3></div>)}</div></div></section>
      <section className="section"><div className="container"><SectionHeading eyebrow="Packages" title="Starting points for common website needs" /><div className="grid gap-5 lg:grid-cols-3">{packages.map((pkg) => <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" key={pkg.name}><h3 className="text-xl font-extrabold text-[#0b1b3a]">{pkg.name}</h3><p className="mt-2 text-2xl font-extrabold text-[#315eef]">{pkg.price}</p><p className="mt-2 text-sm text-slate-600">{pkg.fit}</p><ul className="mt-5 grid gap-2 text-sm text-slate-700">{pkg.features.slice(0, 5).map((feature) => <li className="flex gap-2" key={feature}><CheckCircle2 className="h-4 w-4 text-[#315eef]" /> {feature}</li>)}</ul></div>)}</div><div className="mt-8 text-center"><ButtonLink href="/packages">Compare packages</ButtonLink></div></div></section>
      <section className="section bg-white"><div className="container"><SectionHeading eyebrow="Expectations" title="What clients can expect" text="A practical delivery experience built around communication, documented scope, responsive design and pre-launch testing." /><div className="grid gap-5 md:grid-cols-4">{['Clear communication during planning and reviews', 'Documented scope with inclusions and exclusions', 'Responsive pages built for real users', 'Pre-launch checks for forms, links and CTAs'].map((item) => <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" key={item}><CheckCircle2 className="h-6 w-6 text-[#315eef]" /><p className="mt-4 font-bold text-[#0b1b3a]">{item}</p></div>)}</div></div></section>
      <FAQSection items={faqs} />
      <CTASection title="Talk to our team about your website" />
    </main>
  );
}
