import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronRight, Mail, MapPin, Phone } from 'lucide-react';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { MobileMenu } from '@/components/mobile-menu';
import { faqs, industries, navItems, projects, services, siteConfig, teamMembers, whatsappUrl, consultationMessage, type FAQ } from '@/lib/content';

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
            <MobileMenu />
          </div>
        </nav>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer id="footer" className="border-t border-slate-200 bg-[#071226] text-white">
      <div className="container grid grid-cols-2 gap-x-6 gap-y-10 py-12 lg:grid-cols-[1.4fr_1fr_1.3fr_0.8fr] lg:gap-10">
        <div className="col-span-2 lg:col-span-1">
          <Link href="/" className="inline-flex items-center gap-3 font-heading text-2xl font-extrabold">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-[#315eef] text-base text-white">AC</span>
            {siteConfig.name}
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">Accelise helps businesses build credible, responsive and enquiry-focused websites.</p>
          <p className="mt-3 flex items-center gap-2 text-sm text-slate-400"><MapPin className="h-4 w-4 shrink-0 text-[#8fb0ff]" /> {siteConfig.location} · Serving India and international clients</p>
          <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {[
              { href: whatsappUrl(consultationMessage('Website enquiry')), label: 'Chat on WhatsApp', icon: <WhatsAppIcon className="h-4 w-4 text-[#25d366]" />, external: true },
              { href: siteConfig.emailHref, label: siteConfig.email, icon: <Mail className="h-4 w-4" /> },
            ].map((item) => (
              <a key={item.label} href={item.href} {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="flex min-h-11 min-w-0 items-center gap-3 rounded-md border border-white/10 bg-white/5 px-3 text-sm font-semibold text-slate-200 transition hover:border-[#8fb0ff]/50 hover:bg-white/10 hover:text-white">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded bg-white/10 text-[#8fb0ff]">{item.icon}</span>
                <span className="truncate">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
        <FooterLinks title="Services" links={services.slice(0, 5).map((service) => [service.shortTitle, `/services/${service.slug}`])} />
        <FooterLinks title="Industries" className="col-span-2 lg:col-span-1" listClassName="grid-cols-2 lg:grid-cols-1" links={industries.map((industry) => [industry.title.replace('Website Development for ', ''), `/industries/${industry.slug}`])} />
        <FooterLinks title="Company" className="col-start-2 row-start-2 lg:col-start-auto lg:row-start-auto" links={[['About', '/about'], ['Team', '/team'], ['Process', '/process'], ['Portfolio', '/portfolio'], ['Packages', '/packages'], ['Contact', '/contact']]} />
      </div>
      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 pb-24 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:pb-5">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Web development in NCR Gurgaon and Hyderabad for businesses across India.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links, className = '', listClassName = '' }: { title: string; links: string[][]; className?: string; listClassName?: string }) {
  return (
    <div className={className}>
      <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#8fb0ff]">{title}</p>
      <ul className={`mt-4 grid gap-x-4 gap-y-1 text-sm text-slate-300 ${listClassName}`}>
        {links.map(([label, href]) => (
          <li key={href}><Link href={href} className="inline-block py-1.5 transition hover:translate-x-0.5 hover:text-white">{label}</Link></li>
        ))}
      </ul>
    </div>
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
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-4">
      <a href={whatsappUrl(consultationMessage('Website enquiry'))} target="_blank" rel="noopener noreferrer" className="float-bob grid h-14 w-14 place-items-center rounded-full bg-[#25d366]/80 text-white shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-[#25d366]" aria-label="Chat with Accelise on WhatsApp" data-cta="floating-whatsapp">
        <WhatsAppIcon className="h-7 w-7" />
      </a>
      <a href={siteConfig.phoneHref} className="float-bob-delayed grid h-14 w-14 place-items-center rounded-full border-2 border-[#f5a524] bg-[#5b1622]/80 text-[#f5a524] shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-[#5b1622]" aria-label={`Call Accelise on ${siteConfig.phone}`} data-cta="floating-call">
        <Phone className="h-6 w-6" fill="currentColor" strokeWidth={0} />
      </a>
    </div>
  );
}

export function ButtonLink({ href, children, variant = 'primary', cta }: { href: string; children: React.ReactNode; variant?: 'primary' | 'secondary' | 'dark'; cta?: string }) {
  const classes = variant === 'secondary' ? 'border border-slate-300 bg-white text-[#0b1b3a] hover:border-[#315eef]' : variant === 'dark' ? 'bg-[#0b1b3a] text-white hover:bg-[#122b59]' : 'bg-[#315eef] text-white hover:bg-[#244bd4]';
  return <Link href={href} data-cta={cta} className={`group/btn inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-extrabold shadow-sm transition ${classes}`}>{children}<ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" /></Link>;
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
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight text-[#0b1b3a] md:text-4xl">{title}</h1>
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
    <div className="group/panel rounded-md bg-[#0b1b3a] p-5 text-white transition duration-500 hover:shadow-[0_0_40px_-10px_rgba(49,94,239,0.6)]">
      <div className="flex items-center justify-between border-b border-white/15 pb-4">
        <span className="text-sm font-bold">One team. Complete website delivery.</span>
        <span className="flex items-center gap-2 rounded bg-white/10 px-2 py-1 text-xs">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#19a974] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#19a974]" />
          </span>
          Team workflow
        </span>
      </div>
      <div className="mt-5 grid gap-3">
        {['Strategy and structure', 'UI and frontend development', 'Backend and integrations', 'Testing and launch support'].map((item, index) => (
          // Outer layer cascades in when the panel is hovered; inner layer reacts to the row itself without delay.
          <div key={item} className="transition-transform duration-500 ease-out group-hover/panel:translate-x-1.5" style={{ transitionDelay: `${index * 80}ms` }}>
            <div className="group/row flex cursor-default items-center gap-3 rounded-md border border-transparent bg-white/8 p-3 transition duration-300 hover:translate-x-1 hover:border-[#8fb0ff]/50 hover:bg-white/15">
              <span className="grid h-8 w-8 place-items-center rounded bg-[#315eef] text-sm font-bold transition duration-300 group-hover/row:scale-110 group-hover/row:rotate-6 group-hover/row:shadow-[0_0_16px_rgba(49,94,239,0.8)]">{index + 1}</span>
              <span className="text-sm">{item}</span>
              <ArrowRight className="ml-auto h-4 w-4 -translate-x-2 text-[#8fb0ff] opacity-0 transition duration-300 group-hover/row:translate-x-0 group-hover/row:opacity-100" />
            </div>
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
          className="group flex flex-col items-center rounded-xl border border-slate-200 bg-white px-5 pb-6 pt-8 text-center shadow-sm transition hover:-translate-y-1 hover:border-[#8fb0ff] hover:shadow-lg"
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
            <details key={item.question} className="rounded-lg border border-slate-200 bg-slate-50 p-5 transition hover:border-[#8fb0ff] hover:shadow-md">
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
            <WhatsAppIcon className="mr-2 h-4 w-4" /> WhatsApp
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
          <Link href={`/services/${service.slug}`} key={service.slug} className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#8fb0ff] hover:shadow-lg">
            <Icon className="h-8 w-8 text-[#315eef]" />
            <h3 className="mt-4 text-lg font-extrabold text-[#0b1b3a]">{service.shortTitle}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{service.summary}</p>
            <span className="mt-4 inline-flex items-center text-sm font-bold text-[#315eef]">Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></span>
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
        <article key={project.slug} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:border-[#8fb0ff] hover:shadow-md">
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit the ${project.name} website`} className="block overflow-hidden">
              <Image src={project.image} alt={`${project.name} website screenshot`} width={720} height={420} className="h-56 w-full object-cover object-top transition duration-300 hover:scale-105" />
            </a>
          ) : (
            <Image src={project.image} alt={`${project.name} website screenshot`} width={720} height={420} className="h-56 w-full object-cover" />
          )}
          <div className="p-6">
            <p className="text-sm font-bold text-[#315eef]">{project.industry}</p>
            <p className="mt-1 text-xs font-extrabold uppercase tracking-[0.12em] text-slate-500">{project.projectType}</p>
            <h3 className="mt-2 text-xl font-extrabold text-[#0b1b3a]">{project.name}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600"><strong>Challenge:</strong> {project.problem}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600"><strong>Work completed:</strong> {project.solution}</p>
            <div className="mt-5 flex flex-wrap gap-2">{project.features.slice(0, 3).map((feature) => <span key={feature} className="rounded bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{feature}</span>)}</div>
            {project.liveUrl ? (
              <div className="mt-5 text-sm font-bold">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-md border border-[#315eef] px-3 py-1.5 text-[#315eef] transition hover:bg-[#315eef] hover:text-white"
                >
                  View Website
                </a>
              </div>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}

export function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#8fb0ff] hover:shadow-md">
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
    <div className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#8fb0ff] hover:shadow-md">
      <a href={siteConfig.phoneHref} className="flex min-w-0 items-center gap-3 font-bold text-[#0b1b3a] hover:text-[#315eef]"><Phone className="h-5 w-5 shrink-0 text-[#315eef]" /> {siteConfig.phone}</a>
      <a href={siteConfig.phoneAltHref} className="flex min-w-0 items-center gap-3 font-bold text-[#0b1b3a] hover:text-[#315eef]"><Phone className="h-5 w-5 shrink-0 text-[#315eef]" /> {siteConfig.phoneAlt}</a>
      <a href={whatsappUrl(consultationMessage('Quick enquiry'))} target="_blank" rel="noopener noreferrer" className="flex min-w-0 items-center gap-3 font-bold text-[#0b1b3a] hover:text-[#315eef]"><WhatsAppIcon className="h-5 w-5 shrink-0 text-[#19a974]" /> WhatsApp</a>
      <a href={siteConfig.emailHref} className="flex min-w-0 items-center gap-3 font-bold text-[#0b1b3a] hover:text-[#315eef]"><Mail className="h-5 w-5 shrink-0 text-[#315eef]" /> <span className="break-all">{siteConfig.email}</span></a>
    </div>
  );
}
