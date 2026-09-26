import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs, ButtonLink, ContactStrip, FAQSection, JsonLd, PageHero, PageVisual, ProjectCards, RelatedLinks, SectionHeading } from '@/components/site';
import { industries, processSteps, type FAQ } from '@/lib/content';
import { faqSchema, pageMetadata, serviceSchema, webPageSchema } from '@/lib/seo';

const path = '/web-development-company-gurgaon';
const title = 'Web Development Company in Gurgaon | Accelise';
const description = 'Accelise is a web development company in Gurgaon building business websites, e-commerce stores, B2B websites and custom web applications.';

export const metadata: Metadata = pageMetadata({ title, description, path });

const gurgaonServices = [
  { href: '/services/business-website-development', label: 'Business website development', text: 'For service companies, consultants, clinics and local businesses in Gurugram that need a credible site with clear services, service areas and enquiry paths. Usually five to ten mobile-first pages with WhatsApp and call buttons.' },
  { href: '/services/ecommerce-website-development', label: 'E-commerce website development', text: 'For brands selling online from Gurgaon or anywhere in India: product and collection pages, cart and checkout planning, and payment and shipping integrations scoped before development starts.' },
  { href: '/services/b2b-website-development', label: 'B2B catalogue websites', text: 'For manufacturers, exporters and suppliers in Udyog Vihar, IMT Manesar and beyond: product catalogues, specification tables and RFQ forms that capture quantity and destination.' },
  { href: '/services/web-application-development', label: 'Custom web applications', text: 'For teams that have outgrown spreadsheets: customer portals, booking and quotation tools, dashboards and internal workflow apps built with React, Next.js and Node.js.' },
  { href: '/services/website-redesign', label: 'Website redesign', text: 'For businesses whose current website is slow, dated or hard to update. We rebuild it with 301 redirects and content carried over, so existing search visibility is protected.' },
  { href: '/services/website-maintenance', label: 'Website maintenance', text: 'For sites that need regular content updates, fixes and performance checks after launch, estimated in batches so you approve the cost first.' },
];

const reasons = [
  ['You work directly with the people building your site', 'The developers and project lead building your website are the people you talk to. Rishabh Gautam, our full stack developer and project lead, is the primary contact for scope, reviews and launch.'],
  ['Written scope before development starts', 'Pages, features, inclusions, exclusions, timeline and revision rounds are documented and approved first, so the quote does not change halfway through the project.'],
  ['Frontend, backend and QA in one team', 'Interface development, backend and integrations, and testing sit with the same team, which matters when a website later grows into a catalogue or web application.'],
  ['Domain and hosting included', 'Website packages include domain registration and hosting, set up and connected before launch. If you already own a domain, we use it.'],
  ['Working in your hours', 'Working from Gurugram, we keep to NCR business hours. Reviews happen over calls, WhatsApp and shared preview links, so you can check progress without blocking time for meetings.'],
  ['Technical SEO from the first build', 'Every site ships with unique page titles and descriptions, a sitemap, structured headings and fast mobile pages. We do not promise rankings; we build the foundation search engines need to understand your business.'],
];

const faqs: FAQ[] = [
  { question: 'What does a web development company in Gurgaon provide?', answer: 'Typically the planning, design, development and launch of websites and web applications. At Accelise that covers business websites, e-commerce stores, B2B catalogue websites, portfolio websites, landing pages, custom web applications, website redesigns and ongoing maintenance, along with domain and hosting setup and technical SEO basics.' },
  { question: 'How much does website development cost in Gurgaon?', answer: 'It depends on the number of pages, features and integrations. Our packages start from ₹10,000 for a starter website of up to 5 pages, ₹20,000 for a business website of up to 10 pages and ₹30,000 for a product catalogue website, with domain and hosting included. E-commerce stores and web applications are quoted after a requirement discussion.' },
  { question: 'How long does it take to build a website?', answer: 'A starter website usually takes 7 to 12 working days after content approval, a business website 2 to 4 weeks and a catalogue website 4 to 6 weeks. Timelines depend mostly on how quickly content, images and feedback are ready.' },
  { question: 'Can you build an e-commerce website for my business?', answer: 'Yes. We plan product and collection pages, the cart and checkout journey, and payment and shipping integrations, and recommend Shopify, WooCommerce or a custom build depending on your catalogue and order volume. Integrations are scoped and quoted separately so costs are clear before development begins.' },
  { question: 'Can you build custom web applications?', answer: 'Yes. We build customer portals, booking and quotation tools, dashboards and internal workflow applications using React, Next.js, TypeScript and Node.js, usually starting with a first version that covers the most important workflow.' },
  { question: 'Do you provide website maintenance?', answer: 'Yes. Every new website includes a launch support window for minor fixes, from 7 to 21 days depending on the package. After that, content updates, fixes and performance checks are available as maintenance work, estimated in batches.' },
  { question: 'Do you work with businesses outside Gurgaon?', answer: 'Yes. Our team works from Gurugram and Hyderabad and takes on projects across Delhi NCR, the rest of India and internationally. Most of the process runs over calls, WhatsApp and shared preview links, so location rarely affects the project.' },
];

export default function GurgaonPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: 'Web Development in Gurgaon' }]} />
      <PageHero
        eyebrow="Gurgaon · Gurugram · Delhi NCR"
        title="Web Development Company in Gurgaon"
        text="Accelise is a web development team working from Gurugram. We build business websites, e-commerce stores, B2B catalogue websites and custom web applications for companies in Gurgaon, across Delhi NCR and throughout India."
        actions={
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact" cta="gurgaon-hero-contact">Discuss Your Website</ButtonLink>
            <ButtonLink href="/portfolio" variant="secondary" cta="gurgaon-hero-work">View Our Work</ButtonLink>
          </div>
        }
      >
        <PageVisual title="How a Gurugram project runs" items={['Requirement call', 'Written scope', 'Build and review', 'Launch']} />
      </PageHero>

      <RelatedLinks
        eyebrow="Services"
        title="Web development services in Gurgaon"
        text="Gurgaon's businesses range from corporate offices and consultancies to manufacturers, clinics, schools, interior studios and retail brands. The right website differs for each, so we start with what your customers need to see and then choose the type of site."
        links={gurgaonServices}
      />

      <RelatedLinks
        eyebrow="Industries"
        title="Industries we build websites for in Gurugram"
        text="Each industry has its own buyer questions and enquiry details. These pages show the sections, features and lead flows we recommend."
        className=""
        links={industries.map((industry) => ({ href: `/industries/${industry.slug}`, label: industry.title, text: industry.summary }))}
      />

      <section className="section bg-white">
        <div className="container">
          <SectionHeading eyebrow="Process" title="How a website project works with us" text="The same eight steps apply whether you are in Sector 44, Sohna Road or another city. Each one has a clear deliverable and an approval point." />
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <li className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#8fb0ff] hover:shadow-md" key={step.title}>
                <span className="text-sm font-extrabold text-[#315eef]">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 font-extrabold text-[#0b1b3a]">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.team}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-center text-sm text-slate-600">Read the full <Link href="/process" className="font-bold text-[#315eef] hover:underline">website development process</Link>, including what we need from you at each step.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Why Accelise" title="Why Gurgaon businesses work with Accelise" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map(([heading, text]) => (
              <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#8fb0ff] hover:shadow-md" key={heading}>
                <h3 className="font-extrabold text-[#0b1b3a]">{heading}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-600">Meet the <Link href="/team" className="font-bold text-[#315eef] hover:underline">Accelise team</Link> or compare <Link href="/packages" className="font-bold text-[#315eef] hover:underline">website packages and pricing</Link>.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeading eyebrow="Portfolio" title="Recent website work" text="A completed client project and a demo concept, each with a case study covering the challenge, solution and technology used." />
          <ProjectCards limit={2} />
          <div className="mt-8 text-center"><ButtonLink href="/portfolio" variant="secondary">See the full portfolio</ButtonLink></div>
        </div>
      </section>

      <FAQSection items={faqs} title="Web development in Gurgaon: common questions" />

      <section className="section bg-[#0b1b3a] text-white">
        <div className="container grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold">Start your website project in Gurugram</h2>
            <p className="mt-3 max-w-2xl text-slate-300">Tell us about your business, the pages you need and your timeline. We reply within one business day when project details are clear, and send a written scope before any work begins.</p>
            <div className="mt-6"><ButtonLink href="/contact" cta="gurgaon-final-contact">Request a Quote</ButtonLink></div>
          </div>
          <div className="text-[#0b1b3a]"><ContactStrip /></div>
        </div>
      </section>

      <JsonLd data={webPageSchema({ name: title, description, path })} />
      <JsonLd
        data={serviceSchema({
          name: 'Web development in Gurgaon',
          description,
          path,
          serviceType: 'Web development',
          areaServed: [
            { '@type': 'City', name: 'Gurugram', alternateName: 'Gurgaon' },
            { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
          ],
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
    </main>
  );
}
