import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
import { Breadcrumbs, ContactStrip, PageHero, PageVisual } from '@/components/site';
import { siteConfig } from '@/lib/content';

export const metadata: Metadata = { title: 'Contact Accelise', description: 'Call, WhatsApp or email Accelise for website development in Gurgaon, Delhi NCR and India.', alternates: { canonical: '/contact' } };

export default function ContactPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: 'Contact' }]} />
      <PageHero eyebrow="Contact" title="Talk to our team about your website" text="Tell us about your business and what you need. Send the form and it comes straight to our team, or reach us on WhatsApp or phone.">
        <PageVisual title="Enquiry details" items={['Business', 'Service', 'Budget', 'Timeline']} />
      </PageHero>
      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid content-start gap-5">
            <ContactStrip />
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#8fb0ff] hover:shadow-md">
              <h2 className="text-xl font-extrabold text-[#0b1b3a]">Availability</h2>
              <p className="mt-3 leading-7 text-slate-600">Based in {siteConfig.location}, available for India and international website projects. Work email: {siteConfig.email}. Expected first response: within one business day when project details are clear.</p>
              <p className="mt-3 leading-7 text-slate-600">Team availability depends on current project schedule, selected package, required integrations and content readiness.</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
