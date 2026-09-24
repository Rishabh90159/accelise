'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, Loader2, MessageCircle, Send } from 'lucide-react';
import { services, siteConfig, whatsappUrl } from '@/lib/content';

// FormSubmit relays the enquiry to our inbox; the site is a static export with no backend of its own.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${siteConfig.email}`;

const initial = { fullName: '', phone: '', email: '', service: '', budget: '', message: '' };
type FormState = typeof initial;
type Status = 'idle' | 'sending' | 'sent' | 'error';

const budgets = ['₹10,000 to ₹20,000', '₹20,000 to ₹30,000', '₹30,000+', 'Not sure yet'];

export function ContactForm() {
  const [form, setForm] = useState(initial);
  const [serviceOptions, setServiceOptions] = useState([...services.map((service) => service.title), 'Not sure yet']);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>('idle');

  // The packages page links here as /contact?package=<name>.
  useEffect(() => {
    const selected = new URLSearchParams(window.location.search).get('package');
    if (!selected) return;
    const label = `${selected} package`;
    setServiceOptions((current) => (current.includes(label) ? current : [label, ...current]));
    setForm((current) => ({ ...current, service: label }));
  }, []);

  function update(name: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
  }

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) next.fullName = 'Please enter your name.';
    if (form.phone.replace(/\D/g, '').length < 10) next.phone = 'Please enter a valid phone number.';
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Please enter a valid email address.';
    if (!form.message.trim()) next.message = 'Please tell us a little about your project.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;
    const honeypot = (event.currentTarget.elements.namedItem('_honey') as HTMLInputElement | null)?.value;
    if (honeypot) return;

    setStatus('sending');
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Name: form.fullName,
          Phone: form.phone,
          Email: form.email || 'Not shared',
          Service: form.service || 'Not selected',
          Budget: form.budget || 'Not selected',
          Message: form.message,
          _subject: `New website enquiry from ${form.fullName}`,
          _replyto: form.email || undefined,
          _template: 'table',
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || String(result.success) !== 'true') throw new Error(result.message ?? 'Request failed');
      setStatus('sent');
      setForm(initial);
    } catch {
      setStatus('error');
    }
  }

  const whatsappMessage = `Hi ${siteConfig.name}, I want to discuss a website project.\n\nName: ${form.fullName}\nPhone: ${form.phone}\nService: ${form.service || 'Not selected'}\nBudget: ${form.budget || 'Not selected'}\n\n${form.message}`;

  if (status === 'sent') {
    return (
      <div className="grid place-items-center gap-4 rounded-lg border border-slate-200 bg-white p-10 text-center shadow-sm">
        <CheckCircle2 className="h-12 w-12 text-[#19a974]" />
        <h2 className="text-2xl font-extrabold text-[#0b1b3a]">Thank you! Your enquiry has been sent.</h2>
        <p className="max-w-md text-slate-600">Our team will get back to you within one business day. For a quicker reply, message us on WhatsApp.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href={whatsappUrl(`Hi ${siteConfig.name}, I just sent an enquiry through your website.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md bg-[#19a974] px-5 py-3 text-sm font-extrabold text-white"><MessageCircle className="mr-2 h-4 w-4" /> WhatsApp us</a>
          <button type="button" onClick={() => setStatus('idle')} className="rounded-md border border-slate-300 px-5 py-3 text-sm font-extrabold text-[#0b1b3a] hover:border-[#315eef]">Send another enquiry</button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <h2 className="text-2xl font-extrabold text-[#0b1b3a]">Send us your enquiry</h2>
        <p className="mt-2 text-sm text-slate-600">Share a few details and our team will reply within one business day.</p>
      </div>
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full name" name="fullName" value={form.fullName} error={errors.fullName} onChange={update} autoComplete="name" required />
        <Field label="Phone / WhatsApp" name="phone" type="tel" value={form.phone} error={errors.phone} onChange={update} autoComplete="tel" required />
        <Field label="Email" name="email" type="email" value={form.email} error={errors.email} onChange={update} autoComplete="email" />
        <SelectField label="Service needed" name="service" value={form.service} onChange={update} options={serviceOptions} />
        <SelectField label="Budget range" name="budget" value={form.budget} onChange={update} options={budgets} />
      </div>
      <div>
        <label className="text-sm font-bold text-[#0b1b3a]" htmlFor="message">Project details <span className="text-red-600">*</span></label>
        <textarea id="message" rows={4} placeholder="Tell us about your business and what you need from the website." className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3 text-base" value={form.message} onChange={(event) => update('message', event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />
        {errors.message ? <p id="message-error" className="mt-1 text-sm text-red-700">{errors.message}</p> : null}
      </div>
      {status === 'error' ? (
        <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-800" role="alert">
          Sorry, we couldn&apos;t send your enquiry. Please try again, or{' '}
          <a href={whatsappUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="font-bold underline">send it on WhatsApp</a>.
        </div>
      ) : null}
      <button type="submit" disabled={status === 'sending'} className="inline-flex items-center justify-center rounded-md bg-[#315eef] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#244bd4] disabled:opacity-70" data-cta="form-submit">
        {status === 'sending' ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : <><Send className="mr-2 h-4 w-4" /> Send enquiry</>}
      </button>
    </form>
  );
}

type FieldProps = { label: string; name: keyof FormState; value: string; onChange: (name: keyof FormState, value: string) => void; error?: string; required?: boolean };

function Field({ label, name, value, onChange, error, required, type = 'text', autoComplete }: FieldProps & { type?: string; autoComplete?: string }) {
  return (
    <div>
      <label className="text-sm font-bold text-[#0b1b3a]" htmlFor={name}>{label} {required ? <span className="text-red-600">*</span> : null}</label>
      <input id={name} type={type} autoComplete={autoComplete} className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3 text-base" value={value} onChange={(event) => onChange(name, event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : undefined} />
      {error ? <p id={`${name}-error`} className="mt-1 text-sm text-red-700">{error}</p> : null}
    </div>
  );
}

function SelectField({ label, name, value, onChange, options }: FieldProps & { options: string[] }) {
  return (
    <div>
      <label className="text-sm font-bold text-[#0b1b3a]" htmlFor={name}>{label}</label>
      <select id={name} className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-3 text-base" value={value} onChange={(event) => onChange(name, event.target.value)}>
        <option value="">Select</option>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </div>
  );
}
