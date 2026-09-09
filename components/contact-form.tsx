'use client';

import { useMemo, useState } from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { services, siteConfig, whatsappUrl } from '@/lib/content';

const initial = {
  fullName: '',
  businessName: '',
  phone: '',
  email: '',
  website: '',
  industry: '',
  service: '',
  selectedPackage: '',
  preferredContact: '',
  pages: '',
  features: '',
  budget: '',
  timeline: '',
  description: '',
  consent: false,
};
const requiredFields = ['fullName', 'phone', 'industry', 'service', 'description'] as const;

export function ContactForm({ context }: { context?: string }) {
  const [form, setForm] = useState({ ...initial, service: context ?? '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [ready, setReady] = useState(false);
  const summary = useMemo(() => [
    `Name: ${form.fullName}`,
    `Business: ${form.businessName || 'Not shared'}`,
    `Phone/WhatsApp: ${form.phone}`,
    `Email: ${form.email || 'Not shared'}`,
    `Existing website: ${form.website || 'None shared'}`,
    `Industry: ${form.industry}`,
    `Required service: ${form.service}`,
    `Selected package: ${form.selectedPackage || 'Not selected'}`,
    `Preferred contact method: ${form.preferredContact || 'Not selected'}`,
    `Estimated pages: ${form.pages || 'Not sure'}`,
    `Features: ${form.features || 'To be discussed'}`,
    `Budget: ${form.budget || 'To be discussed'}`,
    `Timeline: ${form.timeline || 'To be discussed'}`,
    `Project: ${form.description}`,
  ].join('\n'), [form]);

  function validate() {
    const next: Record<string, string> = {};
    requiredFields.forEach((field) => { if (!form[field].trim()) next[field] = 'This field is required.'; });
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email address.';
    if (!form.consent) next.consent = 'Please confirm before opening WhatsApp or email.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    setReady(validate());
  }

  function update(name: keyof typeof form, value: string | boolean) {
    setForm((current) => ({ ...current, [name]: value }));
    setReady(false);
  }

  const mailto = `${siteConfig.emailHref}?subject=${encodeURIComponent(`Website enquiry from ${form.fullName || 'prospect'}`)}&body=${encodeURIComponent(summary)}`;

  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm text-slate-600">Talk to our team by preparing your project details for WhatsApp or email. Nothing is sent to a server.</p>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full name" name="fullName" value={form.fullName} error={errors.fullName} onChange={update} required />
        <Field label="Business name" name="businessName" value={form.businessName} onChange={update} />
        <Field label="Phone/WhatsApp" name="phone" value={form.phone} error={errors.phone} onChange={update} required />
        <Field label="Email" name="email" value={form.email} error={errors.email} onChange={update} />
        <Field label="Existing website URL" name="website" value={form.website} onChange={update} />
        <Field label="Business industry" name="industry" value={form.industry} error={errors.industry} onChange={update} required />
        <SelectField label="Required service" name="service" value={form.service} error={errors.service} onChange={update} required options={services.map((service) => service.title)} />
        <SelectField label="Selected package or service" name="selectedPackage" value={form.selectedPackage} onChange={update} options={['Starter Website', 'Business Website', 'Premium Catalogue Website', 'Need recommendation']} />
        <SelectField label="Preferred contact method" name="preferredContact" value={form.preferredContact} onChange={update} options={['WhatsApp', 'Phone call', 'Email']} />
        <SelectField label="Estimated number of pages" name="pages" value={form.pages} onChange={update} options={['1 landing page', 'Up to 5 pages', '6 to 10 pages', '10+ pages', 'Not sure']} />
        <Field label="Required features" name="features" value={form.features} onChange={update} />
        <SelectField label="Budget range" name="budget" value={form.budget} onChange={update} options={['₹15,000 to ₹25,000', '₹25,000 to ₹40,000', '₹40,000+', 'Need guidance']} />
        <SelectField label="Expected timeline" name="timeline" value={form.timeline} onChange={update} options={['Within 2 weeks', '2 to 4 weeks', '1 to 2 months', 'Flexible']} />
      </div>
      <div>
        <label className="text-sm font-bold text-[#0b1b3a]" htmlFor="description">Project description</label>
        <textarea id="description" className="mt-2 min-h-32 w-full rounded-md border border-slate-300 px-3 py-3 text-base" value={form.description} onChange={(event) => update('description', event.target.value)} aria-describedby={errors.description ? 'description-error' : undefined} required />
        {errors.description ? <p id="description-error" className="mt-1 text-sm text-red-700">{errors.description}</p> : null}
      </div>
      <label className="flex gap-3 rounded-md bg-slate-50 p-4 text-sm text-slate-700">
        <input type="checkbox" checked={form.consent} onChange={(event) => update('consent', event.target.checked)} />
        <span>I understand that clicking WhatsApp or Email will open an external app with my enquiry details pre-filled, and I will review the message before sending it.</span>
      </label>
      {errors.consent ? <p className="text-sm text-red-700">{errors.consent}</p> : null}
      <button type="submit" className="rounded-md bg-[#0b1b3a] px-5 py-3 text-sm font-extrabold text-white" data-cta="prepare-enquiry">Prepare enquiry</button>
      {ready ? (
        <div className="rounded-lg border border-[#315eef]/30 bg-[#eef3ff] p-5">
          <p className="font-bold text-[#0b1b3a]">Success. Your enquiry summary is ready.</p>
          <p className="mt-2 text-sm text-slate-600">Choose WhatsApp or email. You will see the pre-filled message before anything is sent.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={whatsappUrl(`Hi ${siteConfig.name}, I want to discuss a website project.\n\n${summary}`)} className="inline-flex items-center rounded-md bg-[#19a974] px-5 py-3 text-sm font-extrabold text-white" data-cta="form-whatsapp"><MessageCircle className="mr-2 h-4 w-4" /> Continue on WhatsApp</a>
            <a href={mailto} className="inline-flex items-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-extrabold text-[#0b1b3a]" data-cta="form-mailto"><Mail className="mr-2 h-4 w-4" /> Continue by Email</a>
          </div>
        </div>
      ) : null}
    </form>
  );
}

function Field({ label, name, value, onChange, error, required }: { label: string; name: keyof typeof initial; value: string; onChange: (name: keyof typeof initial, value: string | boolean) => void; error?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-bold text-[#0b1b3a]" htmlFor={name}>{label}</label>
      <input id={name} className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3 text-base" value={value} onChange={(event) => onChange(name, event.target.value)} aria-describedby={error ? `${name}-error` : undefined} required={required} />
      {error ? <p id={`${name}-error`} className="mt-1 text-sm text-red-700">{error}</p> : null}
    </div>
  );
}

function SelectField({ label, name, value, onChange, options, error, required }: { label: string; name: keyof typeof initial; value: string; onChange: (name: keyof typeof initial, value: string | boolean) => void; options: string[]; error?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-bold text-[#0b1b3a]" htmlFor={name}>{label}</label>
      <select id={name} className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-3 text-base" value={value} onChange={(event) => onChange(name, event.target.value)} required={required} aria-describedby={error ? `${name}-error` : undefined}>
        <option value="">Select</option>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
      {error ? <p id={`${name}-error`} className="mt-1 text-sm text-red-700">{error}</p> : null}
    </div>
  );
}
