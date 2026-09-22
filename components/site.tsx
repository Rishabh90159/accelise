import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronRight, Mail, Menu, MessageCircle, Phone } from 'lucide-react';
import { faqs, navItems, projects, services, siteConfig, teamMembers, whatsappUrl, consultationMessage, type FAQ } from '@/lib/content';

export function Header() {
  return (
    <>
      <div className="bg-[#0b1b3a] px-4 py-2 text-center text-sm font-medium text-white">
        Web-development team for business websites, catalogues and web applications.
      </div>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/92 backdrop-blur">
        <nav className="container flex min-h-16 items-center justify-between gap-5">
          <Link href="/" className="flex items-center gap-3 font-heading text-lg font-extrabold text-[#0b1b3a]">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-[#0b1b3a] text-white">AC</span>
            <span>{siteConfig.name}</span>
          </Link>
          <div className="hidden items-center gap-5 text-sm font-semibold text-slate-700 xl:flex">
            {navItems.map((item) => <Link className="link-underline" href={item.href} key={item.href}>{item.label}</Link>)}
          </div>
          <div className="flex items-center gap-2">
            <a className="hidden rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-[#0b1b3a] transition hover:border-[#315eef] md:inline-flex" href={siteConfig.phoneHref} data-cta="header-call">
              <Phone className="mr-2 h-4 w-4" /> Call
            </a>
            <a className="rounded-md bg-[#315eef] px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-[#244bd4]" href={whatsappUrl(consultationMessage('Website project'))} data-cta="header-whatsapp">
              <MessageCircle className="mr-2 inline h-4 w-4" /> WhatsApp
            </a>
            <details className="group relative xl:hidden">
              <summary className="list-none rounded-md border border-slate-300 p-2" aria-label="Open navigation menu">
                <Menu className="h-5 w-5" />
              </summary>
              <div className="absolute right-0 top-12 grid w-60 gap-1 rounded-lg border border-slate-200 bg-white p-3 text-sm font-bold text-slate-700 shadow-xl">
                {navItems.map((item) => <Link className="rounded-md px-3 py-2 hover:bg-slate-100" href={item.href} key={item.href}>{item.label}</Link>)}
              </div>
            </details>
          </div>
        </nav>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#071226] text-white">
      <div className="container grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <p className="font-heading text-2xl font-extrabold">{siteConfig.name}</p>
          <p className="mt-4 max-w-xl text-slate-300">Accelise helps businesses build credible, responsive and enquiry-focused websites.</p>
          <p className="mt-4 text-sm text-slate-400">{siteConfig.location}. Service coverage: {siteConfig.serviceArea}.</p>
        </div>
        <div>
          <p className="font-bold">Services</p>
          <div className="mt-4 grid gap-2 text-sm text-slate-300">
            {services.slice(0, 5).map((service) => <Link href={`/services/${service.slug}`} key={service.slug} className="hover:text-white">{service.shortTitle}</Link>)}
          </div>
        </div>
        <div>
          <p className="font-bold">Company</p>
          <div className="mt-4 grid gap-2 text-sm text-slate-300">
            {[
              ['About', '/about'],
              ['Team', '/team'],
              ['Process', '/process'],
              ['Portfolio', '/portfolio'],
              ['Blog', '/blog'],
            ].map(([label, href]) => <Link href={href} key={href} className="hover:text-white">{label}</Link>)}
          </div>
        </div>
        <div>
          <p className="font-bold">Contact</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            <a href={siteConfig.emailHref}>{siteConfig.email}</a>
            <a href={whatsappUrl(consultationMessage('Website enquiry'))}>WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function LayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <FloatingActions />
      <Footer />
    </>
  );
}

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <a href={whatsappUrl(consultationMessage('Website enquiry'))} className="grid h-12 w-12 place-items-center rounded-full bg-[#19a974] text-white shadow-lg" aria-label="Contact on WhatsApp" data-cta="floating-whatsapp">
        <MessageCircle className="h-5 w-5" />
      </a>
      <a href={siteConfig.phoneHref} className="grid h-12 w-12 place-items-center rounded-full bg-[#0b1b3a] text-white shadow-lg sm:hidden" aria-label="Call Accelise" data-cta="floating-call">
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}

export function ButtonLink({ href, children, variant = 'primary', cta }: { href: string; children: React.ReactNode; variant?: 'primary' | 'secondary' | 'dark'; cta?: string }) {
  const classes = variant === 'secondary' ? 'border border-slate-300 bg-white text-[#0b1b3a] hover:border-[#315eef]' : variant === 'dark' ? 'bg-[#0b1b3a] text-white hover:bg-[#122b59]' : 'bg-[#315eef] text-white hover:bg-[#244bd4]';
  return <Link href={href} data-cta={cta} className={`inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-extrabold shadow-sm transition ${classes}`}>{children}<ArrowRight className="ml-2 h-4 w-4" /></Link>;
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-[#315eef]">{children}</p>;
}

export function SectionHeading({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-3 text-3xl font-extrabold text-[#0b1b3a] md:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-7 text-slate-600">{text}</p> : null}
    </div>
  );
}

export function PageHero({ eyebrow, title, text, children }: { eyebrow: string; title: string; text: string; children?: React.ReactNode }) {
  return (
    <section className="soft-grid border-b border-slate-200 bg-white">
      <div className="container grid gap-8 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight text-[#0b1b3a] md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact" cta="hero-consultation">Get a Free Consultation</ButtonLink>
            <ButtonLink href="/portfolio" variant="secondary" cta="hero-work">View Our Work</ButtonLink>
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-xl">{children ?? <PageVisual />}</div>
      </div>
    </section>
  );
}

export function AgencyVisual() {
  return (
    <div className="rounded-md bg-[#0b1b3a] p-5 text-white">
      <div className="flex items-center justify-between border-b border-white/15 pb-4">
        <span className="text-sm font-bold">One team. Complete website delivery.</span>
        <span className="rounded bg-white/10 px-2 py-1 text-xs">Team workflow</span>
      </div>
      <div className="mt-5 grid gap-3">
        {['Strategy and structure', 'UI and frontend development', 'Backend and integrations', 'Testing and launch support'].map((item, index) => (
          <div key={item} className="flex items-center gap-3 rounded-md bg-white/8 p-3">
            <span className="grid h-8 w-8 place-items-center rounded bg-[#315eef] text-sm font-bold">{index + 1}</span>
            <span className="text-sm">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PageVisual({ title = 'Complete delivery system', items = ['Discovery', 'Design and build', 'QA checks', 'Launch'] }: { title?: string; items?: string[] }) {
  return (
    <div className="rounded-md bg-slate-50 p-5">
      <p className="font-bold text-[#0b1b3a]">{title}</p>
      <div className="mt-5 grid grid-cols-2 gap-3">
        {items.map((item, index) => <div className="rounded-md border border-slate-200 bg-white p-4 shadow-sm" key={item}><span className="text-sm font-extrabold text-[#315eef]">{String(index + 1).padStart(2, '0')}</span><p className="mt-2 text-sm font-bold text-[#0b1b3a]">{item}</p></div>)}
      </div>
    </div>
  );
}

export function TeamPortrait({
  initials,
  image,
  name,
  imageOrigin,
  imageZoom,
  size = 'md',
}: {
  initials: string;
  image?: string;
  name?: string;
  imageOrigin?: string;
  imageZoom?: number;
  size?: 'md' | 'lg';
}) {
  const dimension = size === 'lg' ? 'h-28 w-28' : 'h-20 w-20';
  if (image) {
    return (
      <div className={`relative ${dimension} shrink-0 overflow-hidden rounded-full ring-4 ring-white shadow-md`}>
        <Image
          src={image}
          alt={name ?? 'Team member'}
          fill
          className="object-cover"
          style={imageZoom ? { transform: `scale(${imageZoom})`, transformOrigin: imageOrigin ?? '50% 50%' } : undefined}
          sizes={size === 'lg' ? '112px' : '80px'}
        />
      </div>
    );
  }
  return (
    <div className={`grid ${dimension} shrink-0 place-items-center rounded-full bg-[#0b1b3a] font-heading text-xl font-extrabold text-white shadow-md ring-4 ring-white`}>
      {initials}
    </div>
  );
}

export function TeamPreview() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
      {teamMembers.map((member) => (
        <Link
          href="/team"
          className="group flex flex-col items-center rounded-xl border border-slate-200 bg-white px-5 pb-6 pt-8 text-center shadow-sm transition hover:-translate-y-1 hover:border-[#315eef]/40 hover:shadow-lg"
          key={member.name}
        >
          <TeamPortrait initials={member.initials} image={member.image} name={member.name} imageOrigin={member.imageOrigin} imageZoom={member.imageZoom} />
          <h3 className="mt-4 font-heading font-extrabold text-[#0b1b3a]">{member.name}</h3>
          <span className="mt-2 inline-block rounded-full bg-[#e8eef8] px-3 py-1 text-xs font-bold text-[#315eef]">{member.role}</span>
        </Link>
      ))}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="container py-4 text-sm text-slate-600" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link href="/">Home</Link></li>
        {items.map((item) => (
          <li className="flex items-center gap-2" key={item.label}>
            <ChevronRight className="h-4 w-4 text-slate-400" />
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function FAQSection({ items = faqs }: { items?: FAQ[] }) {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeading eyebrow="Questions" title="Helpful answers before we talk" />
        <div className="mx-auto grid max-w-4xl gap-4">
          {items.map((item) => (
            <details key={item.question} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <summary className="cursor-pointer font-bold text-[#0b1b3a]">{item.question}</summary>
              <p className="mt-3 leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection({ title = 'Ready to discuss your website?', text = 'Share your business, goals and required pages. Our team will help clarify the practical direction before the final quote is prepared.' }) {
  return (
    <section className="section bg-[#0b1b3a] text-white">
      <div className="container grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <h2 className="text-3xl font-extrabold">{title}</h2>
          <p className="mt-3 max-w-2xl text-slate-300">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact" cta="section-contact">Request Exact Quote</ButtonLink>
          <a href={whatsappUrl(consultationMessage('Website project'))} data-cta="section-whatsapp" className="inline-flex items-center rounded-md border border-white/30 px-5 py-3 text-sm font-extrabold hover:bg-white/10">
            <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export function ServiceCards({ limit }: { limit?: number }) {
  const visible = typeof limit === 'number' ? services.slice(0, limit) : services;
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {visible.map((service) => {
        const Icon = service.icon;
        return (
          <Link href={`/services/${service.slug}`} key={service.slug} className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <Icon className="h-8 w-8 text-[#315eef]" />
            <h3 className="mt-4 text-lg font-extrabold text-[#0b1b3a]">{service.shortTitle}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{service.summary}</p>
            <span className="mt-4 inline-flex items-center text-sm font-bold text-[#315eef]">Learn more <ArrowRight className="ml-1 h-4 w-4" /></span>
          </Link>
        );
      })}
    </div>
  );
}

export function ProjectCards({ limit }: { limit?: number }) {
  const visible = typeof limit === 'number' ? projects.slice(0, limit) : projects;
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {visible.map((project) => (
        <article key={project.slug} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <Image src={project.image} alt={`${project.name} website screenshot`} width={720} height={420} className="h-56 w-full object-cover" />
          <div className="p-6">
            <p className="text-sm font-bold text-[#315eef]">{project.industry}</p>
            <p className="mt-1 text-xs font-extrabold uppercase tracking-[0.12em] text-slate-500">{project.projectType}</p>
            <h3 className="mt-2 text-xl font-extrabold text-[#0b1b3a]">{project.name}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600"><strong>Challenge:</strong> {project.problem}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600"><strong>Work completed:</strong> {project.solution}</p>
            <div className="mt-5 flex flex-wrap gap-2">{project.features.slice(0, 3).map((feature) => <span key={feature} className="rounded bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{feature}</span>)}</div>
            <p className="mt-4 text-xs font-bold text-slate-500">Tech: {project.technology.join(', ')}</p>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm font-bold text-[#315eef]">
              <Link href={`/case-studies/${project.slug}`}>Case study</Link>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-md border border-[#315eef] px-3 py-1.5 text-[#315eef] transition hover:bg-[#315eef] hover:text-white"
                >
                  View Website
                </a>
              ) : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-extrabold text-[#0b1b3a]">{title}</h2>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => <li className="flex gap-3 text-slate-600" key={item}><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#315eef]" /><span>{item}</span></li>)}
      </ul>
    </div>
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function ContactStrip() {
  return (
    <div className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-3">
      <a href={siteConfig.phoneHref} className="flex items-center gap-3 font-bold text-[#0b1b3a]"><Phone className="h-5 w-5 text-[#315eef]" /> {siteConfig.phone}</a>
      <a href={whatsappUrl(consultationMessage('Quick enquiry'))} className="flex items-center gap-3 font-bold text-[#0b1b3a]"><MessageCircle className="h-5 w-5 text-[#315eef]" /> WhatsApp</a>
      <a href={siteConfig.emailHref} className="flex items-center gap-3 font-bold text-[#0b1b3a]"><Mail className="h-5 w-5 text-[#315eef]" /> {siteConfig.email}</a>
    </div>
  );
}
