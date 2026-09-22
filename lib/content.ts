import {
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Camera,
  ClipboardCheck,
  Code2,
  Factory,
  Gem,
  GraduationCap,
  Handshake,
  HeartPulse,
  Home,
  LineChart,
  LucideIcon,
  Megaphone,
  Palette,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Store,
  Target,
  Wrench,
} from 'lucide-react';

export const siteConfig = {
  name: 'Accelise',
  founder: 'Rishabh Gautam',
  position: 'Full Stack Developer and Project Lead',
  phone: '+91 9759790159',
  phoneHref: 'tel:+919759790159',
  whatsapp: '919759790159',
  email: 'team@accelise.com',
  emailHref: 'mailto:team@accelise.com',
  location: 'Gurgaon, India',
  serviceArea: 'India and international clients',
  portfolioUrl: 'https://rishabh-gautam-portfolio.vercel.app/',
  baseUrl: 'https://rg-web-solutions.rgiiitdwd.chatgpt.site',
  description:
    'Accelise is a focused web-development team combining frontend development, backend engineering, quality assurance and project communication to deliver reliable business websites and web applications.',
};

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/packages', label: 'Packages' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/team', label: 'Team' },
  { href: '/about', label: 'About' },
  { href: '/process', label: 'Process' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export type FAQ = { question: string; answer: string };
export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  summary: string;
  heroNote: string;
  problem: string;
  suitableFor: string;
  deliverables: string[];
  workflow: string[];
  features: string[];
  benefits: string[];
  faqs: FAQ[];
  keywords: string[];
};

const serviceFaq = (label: string): FAQ[] => [
  {
    question: `How do we start a ${label} project?`,
    answer:
      'We begin with a requirement discussion, define pages and enquiry goals, then prepare a clear scope before development starts.',
  },
  {
    question: 'Can backend, payment or admin features be added?',
    answer:
      'Yes. Backend systems, payment gateways, dashboards and admin panels are scoped and quoted separately because they change the technical requirements.',
  },
];

export const services: Service[] = [
  {
    slug: 'business-website-development',
    title: 'Business Website Development',
    shortTitle: 'Business Websites',
    icon: Store,
    summary: 'Professional websites that explain services, build credibility and make enquiries easy.',
    heroNote: 'For companies that need a polished web presence customers can trust before they call, visit or request a quote.',
    problem: 'Many small businesses rely on referrals or social pages, but lose trust when buyers ask for a proper website.',
    suitableFor: 'Local businesses, consultants, clinics, agencies, manufacturers and service companies across India.',
    deliverables: ['Business-focused homepage', 'About, service and contact pages', 'CTA plan for calls, WhatsApp and email', 'Basic technical SEO setup'],
    workflow: ['Clarify services, audience and service locations', 'Plan page structure and core messages', 'Build responsive pages and contact paths', 'Test mobile, tablet and desktop layouts before launch'],
    features: ['Home, about, services, contact and FAQ pages', 'WhatsApp, call and email enquiry paths', 'Mobile-first responsive design', 'On-page SEO basics and fast loading pages'],
    benefits: ['A credible digital presence clients can verify', 'Clear presentation of services and service areas', 'More structured enquiries with less back-and-forth'],
    faqs: serviceFaq('business website'),
    keywords: ['business website development in India', 'website developer for businesses'],
  },
  {
    slug: 'b2b-product-catalogue-websites',
    title: 'B2B Product Catalogue Websites',
    shortTitle: 'B2B Catalogue',
    icon: Factory,
    summary: 'Catalogue websites for manufacturers and exporters that present categories, products and quote requests clearly.',
    heroNote: 'For product businesses that need buyers to understand categories, specifications and quotation requirements without a full ecommerce system.',
    problem: 'B2B buyers need product details, specifications and trust signals before they share requirements.',
    suitableFor: 'Manufacturers, exporters, industrial suppliers, distributors and product businesses.',
    deliverables: ['Product category structure', 'Product detail templates', 'RFQ-focused enquiry flow', 'Catalogue download or request sections'],
    workflow: ['Collect categories, product data and buyer questions', 'Plan filters, specifications and RFQ fields', 'Develop catalogue pages and quote CTAs', 'Review product content accuracy before launch'],
    features: ['Category and product detail structure', 'Specification tables and downloadable catalogue links', 'Product-specific quote enquiry buttons', 'Manufacturing, certification and export capability sections'],
    benefits: ['Makes technical product discovery simpler', 'Captures better quote context from buyers', 'Supports search visibility for product categories'],
    faqs: serviceFaq('B2B catalogue website'),
    keywords: ['B2B catalogue website development', 'website development for manufacturers'],
  },
  {
    slug: 'portfolio-website-development',
    title: 'Portfolio Website Development',
    shortTitle: 'Portfolio Websites',
    icon: Camera,
    summary: 'Clean portfolio websites for individuals and studios that need work samples, story and enquiry flow.',
    heroNote: 'For professionals whose work needs a searchable, organized and client-friendly presentation beyond social platforms.',
    problem: 'Creative work can look scattered when it only lives in social posts, PDF attachments or messaging threads.',
    suitableFor: 'Photographers, designers, architects, freelancers, studios and independent consultants.',
    deliverables: ['Portfolio gallery structure', 'Project or category pages', 'About and service story', 'Booking or consultation enquiry flow'],
    workflow: ['Select strongest work samples and categories', 'Plan gallery rhythm and enquiry paths', 'Build fast responsive portfolio pages', 'Check image loading, cropping and alt text'],
    features: ['Project galleries and case-study pages', 'About and approach sections', 'Lead capture through calls, WhatsApp and email', 'Optimized image layout and descriptive alt text'],
    benefits: ['Turns work samples into a searchable owned presence', 'Helps clients understand style, process and fit', 'Creates one polished link for proposals and profiles'],
    faqs: serviceFaq('portfolio website'),
    keywords: ['portfolio website developer India'],
  },
  {
    slug: 'e-commerce-development',
    title: 'E-commerce Development',
    shortTitle: 'E-commerce',
    icon: ShoppingCart,
    summary: 'Online storefront and product-page development for businesses preparing to sell or take purchase enquiries online.',
    heroNote: 'For product businesses that need a clear storefront experience while payments, inventory and admin systems are estimated separately.',
    problem: 'Selling online requires a storefront that explains products, policies and purchase flow clearly.',
    suitableFor: 'Brands preparing for Shopify, WooCommerce, custom checkout or catalogue-first selling.',
    deliverables: ['Storefront page design', 'Product and collection presentation', 'Cart or enquiry journey planning', 'Integration scope for payment and backend systems'],
    workflow: ['Define products, policies and checkout expectations', 'Map user journey from product discovery to action', 'Build storefront UI and product pages', 'Document integration requirements for advanced ecommerce'],
    features: ['Storefront UX and product presentation', 'Collection pages and product details', 'Cart and checkout planning', 'Payment, shipping and admin integration scoping'],
    benefits: ['Creates a buying experience users can understand', 'Separates visual storefront work from backend complexity', 'Reduces uncertainty before full ecommerce investment'],
    faqs: serviceFaq('e-commerce website'),
    keywords: ['ecommerce website developer India'],
  },
  {
    slug: 'website-redesign',
    title: 'Website Redesign',
    shortTitle: 'Redesign',
    icon: Sparkles,
    summary: 'Modern redesigns for slow, dated or confusing websites that no longer support sales conversations.',
    heroNote: 'For businesses with an existing website that needs clearer messaging, stronger mobile usability and better enquiry paths.',
    problem: 'An outdated website can make a capable business look inactive, unclear or hard to trust.',
    suitableFor: 'Companies with an existing site that needs better messaging, speed and mobile experience.',
    deliverables: ['Current site review', 'Reworked page structure', 'Modern responsive interface', 'Redirect and SEO continuity notes'],
    workflow: ['Audit current content, pages and buyer friction', 'Prioritize pages that matter most', 'Redesign and rebuild the new experience', 'Check old links, forms and launch readiness'],
    features: ['Content audit and page restructuring', 'Modern responsive interface', 'CTA and enquiry improvements', 'Technical cleanup and SEO foundations'],
    benefits: ['Improves first impressions', 'Makes key information easier to scan', 'Supports better page speed and search indexing'],
    faqs: serviceFaq('website redesign'),
    keywords: ['website redesign India'],
  },
  {
    slug: 'landing-page-development',
    title: 'Landing Page Development',
    shortTitle: 'Landing Pages',
    icon: Target,
    summary: 'Focused landing pages for campaigns, launches and services where one enquiry action matters most.',
    heroNote: 'For campaigns or offers where visitors should understand one message and take one clear action.',
    problem: 'Campaign traffic often drops when users land on a generic page with unclear next steps.',
    suitableFor: 'Ads, service launches, consultation offers, events and product announcements.',
    deliverables: ['Single-page conversion structure', 'Offer and CTA messaging', 'Lead form or WhatsApp action', 'Analytics-ready CTA attributes'],
    workflow: ['Clarify campaign offer and audience intent', 'Write the section flow around objections and action', 'Build a fast landing page', 'Test CTA behavior before launch'],
    features: ['Conversion-focused section flow', 'Single-page CTA strategy', 'Lead forms with WhatsApp or mailto fallback', 'Fast static delivery'],
    benefits: ['Keeps visitors focused on one action', 'Improves clarity for paid and organic traffic', 'Makes campaign testing easier'],
    faqs: serviceFaq('landing page'),
    keywords: ['landing page developer India'],
  },
  {
    slug: 'website-maintenance',
    title: 'Website Maintenance',
    shortTitle: 'Maintenance',
    icon: Wrench,
    summary: 'Ongoing content updates, fixes and performance checks for websites that need steady care.',
    heroNote: 'For businesses that need their website to stay current, accurate and technically healthy after launch.',
    problem: 'A neglected website can become slow, outdated or inaccurate, which hurts trust and enquiries.',
    suitableFor: 'Businesses that need periodic updates, small improvements and launch support.',
    deliverables: ['Content updates', 'Bug fixes and small improvements', 'Performance checks', 'Launch and hosting coordination'],
    workflow: ['Collect update requests and priorities', 'Estimate effort for each batch', 'Apply changes in a controlled way', 'Review key pages and CTAs after updates'],
    features: ['Content and image updates', 'Bug fixes and small enhancements', 'Performance and SEO checks', 'Launch and hosting coordination'],
    benefits: ['Keeps information current', 'Reduces downtime and broken page risk', 'Lets owners avoid technical busywork'],
    faqs: serviceFaq('website maintenance'),
    keywords: ['website maintenance India'],
  },
  {
    slug: 'custom-web-applications',
    title: 'Custom Web Applications',
    shortTitle: 'Web Apps',
    icon: Code2,
    summary: 'Custom application interfaces and business tools for workflows beyond a standard marketing website.',
    heroNote: 'For teams that need structured interfaces, calculators, dashboards or workflows beyond a standard website.',
    problem: 'Spreadsheets and manual workflows become hard to manage when teams need structured interfaces.',
    suitableFor: 'Businesses needing dashboards, calculators, portals, internal tools or custom workflows.',
    deliverables: ['Application screen planning', 'Reusable component system', 'Forms, dashboards or workflow UI', 'API and backend integration plan when needed'],
    workflow: ['Map the workflow and user roles', 'Design the main screens and states', 'Develop the interactive frontend', 'Test form states, edge cases and integration assumptions'],
    features: ['Application screens and reusable components', 'Form-heavy workflows', 'Dashboard and reporting interfaces', 'API and backend integration planning'],
    benefits: ['Turns messy workflows into usable tools', 'Creates interfaces teams can repeat daily', 'Keeps future backend integration possible'],
    faqs: serviceFaq('custom web application'),
    keywords: ['custom web application developer India'],
  },
];

export type Industry = {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  challenges: string[];
  sections: string[];
  leadOpportunities: string[];
  features: string[];
  enquiryFlow: string;
};

export const industries: Industry[] = [
  { slug: 'interior-designers', title: 'Website Development for Interior Designers', icon: Home, summary: 'A refined website helps interior designers present projects, explain budgets and turn visual interest into serious consultation calls.', challenges: ['Instagram shows style but rarely explains process, scope or fit.', 'Clients need project categories, location context and trust before booking a discussion.', 'High-value enquiries need clearer budget and timeline expectations.'], sections: ['Portfolio by space type', 'Design process', 'Services and packages', 'Project gallery', 'Consultation form'], leadOpportunities: ['Room-wise project enquiry', 'WhatsApp design consultation', 'Downloadable project brief checklist'], features: ['Image galleries', 'Before and after layouts', 'Project filters', 'Budget range fields'], enquiryFlow: 'A visitor views living-room work, selects a renovation scope, shares city, budget and timeline, then opens WhatsApp with the project context pre-filled.' },
  { slug: 'manufacturers-exporters', title: 'Website Development for Manufacturers and Exporters', icon: Factory, summary: 'Manufacturer websites need to make capabilities, categories, specifications and quote requests easy for domestic and overseas buyers.', challenges: ['Product information is often scattered across brochures, catalogues and messages.', 'Buyers need confidence in capacity, quality standards and export readiness.', 'Generic enquiry forms do not capture technical requirements.'], sections: ['Product categories', 'Manufacturing capability', 'Quality and certifications', 'Export markets', 'RFQ flow'], leadOpportunities: ['Product-specific quote buttons', 'Catalogue download requests', 'Bulk order enquiry'], features: ['Specification tables', 'Category filters', 'Certification sections', 'Technical SEO structure'], enquiryFlow: 'A buyer selects a product category, reviews specifications, adds quantity and destination, then sends an RFQ through WhatsApp or email.' },
  { slug: 'event-planners', title: 'Website Development for Event Planners', icon: Megaphone, summary: 'Event planning websites should show taste, reliability and venue experience while moving visitors toward a date-based enquiry.', challenges: ['Event portfolios can feel repetitive without clear categories.', 'Visitors need fast answers about event types, cities and planning support.', 'Date availability and guest count matter early in the conversation.'], sections: ['Event types', 'Portfolio', 'Planning services', 'Venues served', 'Date enquiry form'], leadOpportunities: ['Wedding enquiry', 'Corporate event brief', 'WhatsApp date check'], features: ['Event galleries', 'Guest-count fields', 'Location filters', 'Package enquiry CTAs'], enquiryFlow: 'A visitor picks wedding planning, shares date, city, guest count and services needed, then receives a pre-filled WhatsApp enquiry.' },
  { slug: 'photographers', title: 'Website Development for Photographers', icon: Camera, summary: 'A photographer website gives prospects an owned portfolio, pricing context and a calm path to booking a shoot.', challenges: ['Social feeds mix personal, promotional and client work.', 'Image quality, loading speed and mobile layout directly affect trust.', 'Clients need to know categories, style and availability before contacting.'], sections: ['Portfolio galleries', 'Shoot categories', 'About the photographer', 'Packages', 'Booking enquiry'], leadOpportunities: ['Shoot type enquiry', 'Location and date capture', 'WhatsApp booking intent'], features: ['Responsive galleries', 'SEO-friendly image alt text', 'Package cards', 'Fast image delivery'], enquiryFlow: 'A prospect opens a wedding gallery, checks packages, shares date and venue, then starts a booking discussion through WhatsApp.' },
  { slug: 'diagnostic-centres', title: 'Website Development for Diagnostic Centres', icon: HeartPulse, summary: 'Diagnostic centre websites should make services, test categories, location and appointment contact clear without medical overpromising.', challenges: ['Patients need quick access to tests, timings and phone support.', 'Trust depends on clear facility information and responsible wording.', 'Mobile users often want direct call or WhatsApp actions.'], sections: ['Tests and services', 'Timings', 'Location', 'Home sample collection', 'Appointment enquiry'], leadOpportunities: ['Click-to-call', 'WhatsApp appointment request', 'Test package enquiry'], features: ['Service lists', 'Map section', 'Accessible forms', 'Clear disclaimers where needed'], enquiryFlow: 'A patient selects a test category, shares name, phone, preferred date and location, then calls or sends an appointment enquiry.' },
  { slug: 'modular-kitchen-businesses', title: 'Website Development for Modular Kitchen Businesses', icon: Gem, summary: 'A modular kitchen website can turn visual browsing into measured enquiries by connecting styles, materials and budget ranges.', challenges: ['Buyers compare many vendors and need fast signals of quality.', 'Material, layout and budget choices affect every project discussion.', 'Project photos need context to avoid looking like generic inspiration boards.'], sections: ['Kitchen styles', 'Materials', 'Process', 'Recent work', 'Design consultation form'], leadOpportunities: ['Layout-based enquiry', 'Free measurement request', 'Budget range capture'], features: ['Gallery filters', 'Material swatches', 'Process timeline', 'WhatsApp consultation CTA'], enquiryFlow: 'A homeowner selects an L-shaped kitchen style, chooses a budget range, shares city and timeline, then sends a design consultation request.' },
  { slug: 'schools-coaching-institutes', title: 'Website Development for Schools and Coaching Institutes', icon: GraduationCap, summary: 'Education websites need to explain courses, admissions, trust signals and contact paths for parents and students.', challenges: ['Parents and students need structured information before visiting or calling.', 'Courses, batches and admission details change often.', 'A cluttered site makes institutions look less organized.'], sections: ['Programs', 'Admissions', 'Faculty or leadership', 'Results or highlights with proof', 'Enquiry form'], leadOpportunities: ['Course enquiry', 'Admission callback', 'Campus visit request'], features: ['Course pages', 'FAQ blocks', 'Location map', 'Lead form with student details'], enquiryFlow: 'A parent selects a program, adds student class, contact number and preferred visit time, then sends an admission enquiry.' },
];

export const packages = [
  { name: 'Starter Website', price: 'Starting from ₹10,000', fit: 'Small businesses and personal portfolios', pages: 'Up to 5 pages', design: 'Clean responsive layout based on the agreed brand direction', enquiry: 'Contact form, WhatsApp button, phone and email links', seo: 'Basic metadata, headings, sitemap and robots setup', revisions: 'Two revision rounds', timeline: 'Approx. 7 to 12 working days after content approval', support: 'Launch support and minor fixes for 7 days', notIncluded: 'Custom backend, ecommerce, payment gateway, admin panel, paid tools, domain and hosting', features: ['Up to 5 pages', 'Responsive design', 'Contact form', 'WhatsApp integration', 'Basic SEO setup', 'Social-media links', 'Two revision rounds'] },
  { name: 'Business Website', price: 'Starting from ₹20,000', fit: 'Growing businesses that want enquiries', pages: 'Up to 10 pages', design: 'Custom responsive design for services, trust sections and conversion paths', enquiry: 'Advanced enquiry form, WhatsApp context, call buttons and Google Maps section', seo: 'Basic on-page SEO for core service pages and local-business information', revisions: 'Three revision rounds', timeline: 'Approx. 2 to 4 weeks depending on content and review speed', support: 'Launch support and minor fixes for 14 days', notIncluded: 'Backend systems, payment gateway, CRM automation, premium integrations, domain and hosting', features: ['Up to 10 pages', 'Custom responsive design', 'Service or product presentation', 'Advanced enquiry form', 'WhatsApp and call integration', 'Basic on-page SEO', 'Google Maps integration', 'Performance optimization', 'Three revision rounds'] },
  { name: 'Premium Catalogue Website', price: 'Starting from ₹30,000', fit: 'Manufacturers, exporters and product businesses', pages: 'Category pages plus product-detail structure', design: 'Catalogue-first design for technical product discovery and RFQ generation', enquiry: 'Product-specific quotation forms, catalogue request CTAs and WhatsApp RFQ context', seo: 'Technical SEO setup for categories, products, schema and internal linking', revisions: 'Four revision rounds', timeline: 'Approx. 4 to 6 weeks depending on product data readiness', support: 'Launch support and minor fixes for 21 days', notIncluded: 'Inventory backend, login, payment gateway, complex ERP sync, paid tools, domain and hosting', features: ['Product-category structure', 'Individual product pages', 'Product filters', 'Product-specific quotation forms', 'Catalogue download', 'Manufacturing and certification sections', 'Advanced enquiry flow', 'Technical SEO setup', 'Four revision rounds'] },
];

export const projects = [
  { slug: 'survijay-foundation', name: 'Survijay Foundation', industry: 'Non-profit and community work', projectType: 'Completed project', image: '/images/project-foundation.svg', screenshots: ['/images/project-foundation.svg', '/images/project-foundation-2.svg', '/images/project-foundation-3.svg'], problem: 'The foundation needed a calm, structured presence to explain its purpose and encourage outreach.', context: 'Non-profit visitors need to quickly understand the mission, initiatives, contact path and credibility signals before offering support.', solution: 'A mission-led informational website structure with initiative sections, proof-ready areas and a simple contact flow.', architecture: ['Mission-focused homepage', 'Initiatives overview', 'About and trust content', 'Contact and support path'], features: ['Mission-led homepage', 'Initiative sections', 'Donation-ready CTA structure', 'Contact flow'], technology: ['Next.js', 'TypeScript', 'Tailwind CSS'], liveUrl: 'https://survijay-foundation.vercel.app/' },
  { slug: 'diagnostic-centre-website', name: 'Diagnostic Centre Website', industry: 'Healthcare services', projectType: 'Demo concept', image: '/images/project-diagnostics.svg', screenshots: ['/images/project-diagnostics.svg', '/images/project-diagnostics-2.svg', '/images/project-diagnostics-3.svg'], problem: 'Patients need quick access to services, timings, location and appointment contact from mobile devices.', context: 'Diagnostic centres must communicate clearly without overpromising medical outcomes, while keeping appointment actions visible.', solution: 'A service-first website concept with test categories, appointment prompts, map placement and click-to-call support.', architecture: ['Service overview', 'Test category pages', 'Home collection section', 'Appointment and map page'], features: ['Test categories', 'Appointment form', 'Map section', 'Responsive layout'], technology: ['Next.js', 'Static data', 'Accessible forms'], liveUrl: '' },
  { slug: 'photography-portfolio-website', name: 'Photography Portfolio Website', industry: 'Creative services', projectType: 'Demo concept', image: '/images/project-photo.svg', screenshots: ['/images/project-photo.svg', '/images/project-photo-2.svg', '/images/project-photo-3.svg'], problem: 'The photographer needed an owned portfolio structure beyond fast-moving social media posts.', context: 'Creative prospects want to inspect style, categories, availability and booking context before contacting a photographer.', solution: 'A gallery-focused portfolio with category browsing, service prompts and a booking enquiry path.', architecture: ['Hero gallery', 'Category galleries', 'About and style notes', 'Booking enquiry page'], features: ['Image-led portfolio', 'Shoot categories', 'Booking enquiry', 'SEO metadata'], technology: ['Next.js Image', 'Tailwind CSS', 'Static generation'], liveUrl: '' },
  { slug: 'farmwalk-premium-homepage-concept', name: 'Farmwalk Premium Homepage Concept', industry: 'Premium farm-stay and curated countryside experience', projectType: 'Unsolicited demo concept', image: '/images/project-farmwalk.svg', screenshots: ['/images/project-farmwalk.svg', '/images/project-farmwalk-2.svg', '/images/project-farmwalk-3.svg'], problem: 'The concept needed a premium homepage direction that could make stays, experiences and enquiries feel curated.', context: 'A farm-stay concept needs to balance atmosphere with practical details such as stay types, activities, availability and enquiry steps.', solution: 'A refined homepage concept with stay storytelling, countryside experience blocks and a direct enquiry flow.', architecture: ['Experience-led homepage', 'Stay and activity sections', 'Gallery preview', 'Booking enquiry path'], features: ['Premium hero', 'Experience blocks', 'Trust sections', 'CTA flow'], technology: ['Next.js', 'Tailwind CSS', 'Component system'], liveUrl: '' },
];

export const processSteps = [
  { title: 'Requirement discussion', team: 'We understand the business, audience, services, competitors and expected enquiries.', client: 'Share business goals, references, services and must-have pages.', deliverable: 'Requirement summary.', approval: 'Confirm the direction and priority pages.' },
  { title: 'Scope and quotation', team: 'Our team turns requirements into page count, features, timeline and package fit.', client: 'Clarify budget range, launch urgency and third-party requirements.', deliverable: 'Written scope and quotation.', approval: 'Approve inclusions, exclusions and revision limits.' },
  { title: 'Content and design planning', team: 'We plan section flow, messages, CTAs, assets and SEO basics.', client: 'Provide logo, references, copy, product data and real images where available.', deliverable: 'Page structure and content checklist.', approval: 'Approve the content direction before build starts.' },
  { title: 'Development', team: 'Frontend, backend and integration specialists build the agreed website scope.', client: 'Answer content questions and review milestone updates.', deliverable: 'Working website pages and functional CTA paths.', approval: 'Review the working version for business accuracy.' },
  { title: 'Review and revisions', team: 'We apply agreed revisions and keep changes tied to the approved scope.', client: 'Give consolidated feedback with priority notes.', deliverable: 'Updated website version.', approval: 'Sign off on revised content, layout and flows.' },
  { title: 'Testing', team: 'QA checks responsive layouts, links, forms, metadata basics and launch-critical paths.', client: 'Confirm contact details, map location, package wording and legal or business text.', deliverable: 'Pre-launch testing checklist.', approval: 'Approve launch readiness.' },
  { title: 'Launch', team: 'We coordinate deployment, domain connection guidance and final smoke checks.', client: 'Provide hosting, domain or platform access where required.', deliverable: 'Live website and launch confirmation.', approval: 'Confirm the live site is ready to share.' },
  { title: 'Post-launch support', team: 'We handle agreed minor fixes and guide future improvements.', client: 'Report any launch-week issues with screenshots or page links.', deliverable: 'Support notes and next-step recommendations.', approval: 'Close support or plan the next update.' },
];

export const faqs: FAQ[] = [
  { question: 'Do you build websites for businesses outside Gurgaon?', answer: 'Yes. Accelise works with businesses across India and can also support international clients remotely.' },
  { question: 'Are domain and hosting included?', answer: 'Domain, hosting, third-party tools and paid plugins are separate unless they are explicitly included in the final quotation.' },
  { question: 'Can the website be upgraded later?', answer: 'Yes. A website can start simple and later connect to Formspree, Web3Forms, CMS, APIs or ecommerce systems.' },
  { question: 'Who works on the projects?', answer: 'Our web-development team combines project communication, frontend development, backend engineering and quality assurance based on the approved scope.' },
];

export const blogPosts = [
  { slug: 'business-website-cost-india', title: 'How Much Does a Business Website Cost in India?', date: '2026-09-09', excerpt: 'A practical guide to website pricing, scope, hosting, content and when a custom quote makes sense.', sections: [['Introduction', 'Website cost in India depends less on the number of screens alone and more on clarity, content, design effort, enquiry flow and future integrations. A five-page business website can be a strong starting point when the offer is simple, while a catalogue, ecommerce or custom application needs deeper planning.'], ['What affects website cost?', 'The biggest cost drivers are page count, design depth, content readiness, forms, SEO needs, catalogue complexity, integrations and revision expectations. A website with ready copy and images moves faster than one where content must be reorganized from scratch.'], ['Typical starting ranges', 'A starter website can begin around ₹15,000, a business website around ₹25,000 and a catalogue website around ₹40,000. These are planning ranges, not fixed promises, because requirements change the final estimate.'], ['Common mistakes', 'Businesses often under-budget for content, ignore hosting renewals, ask for advanced features before validating demand, or choose the cheapest option without checking whether enquiry quality will improve.'], ['Practical example', 'A clinic may need five core pages and a call-first contact flow. A manufacturer may need category pages, product details and quote forms. Both are websites, but the second has more content architecture and testing needs.']], faqs: [{ question: 'Is ₹15,000 enough for every website?', answer: 'No. It can be enough for a focused starter website, but catalogue, ecommerce and custom features need separate estimation.' }] },
  { slug: 'manufacturing-website-important-pages', title: 'Important Pages Every Manufacturing Website Should Have', date: '2026-09-09', excerpt: 'The core page structure manufacturers need to help B2B buyers evaluate products and request quotes.', sections: [['Introduction', 'A manufacturing website should help buyers understand what you make, how you make it, what standards you follow and how to request a quote.'], ['Product category pages', 'Category pages help buyers quickly find the product family, variants and specifications they care about. They also make internal linking and search targeting more organized.'], ['Capability and quality pages', 'Manufacturing process, certifications, testing and facility information help establish trust before a buyer contacts you.'], ['RFQ and contact flow', 'Quote forms should capture product, quantity, destination, timeline and technical requirements so the sales conversation starts with useful context.'], ['Common mistakes', 'Avoid uploading only a PDF catalogue, hiding contact details, using vague product names or creating duplicate location pages with thin content.']], faqs: [{ question: 'Do manufacturers need product pages?', answer: 'Usually yes. Individual product pages make specifications easier to find and improve search targeting.' }] },
  { slug: 'website-vs-instagram-interior-designers', title: 'Website vs Instagram for Interior Designers', date: '2026-09-09', excerpt: 'Why interior designers should use Instagram for discovery and a website for trust, process and serious enquiries.', sections: [['Introduction', 'Interior designers benefit from both Instagram and a website, but each channel has a different job. Instagram attracts attention; a website builds confidence.'], ['Instagram is discovery', 'Instagram is useful for visual reach, but posts disappear quickly and rarely explain process, pricing, location, project type or client fit.'], ['A website is your owned profile', 'A website lets you organize portfolio categories, service details, location, FAQs and enquiry fields in one stable place.'], ['Use both together', 'Send social visitors to project pages or a consultation form so interest can become a qualified lead.'], ['Common mistakes', 'Do not rely only on reels, avoid generic gallery captions and make sure visitors can quickly share budget, city, property type and timeline.']], faqs: [{ question: 'Should designers stop using Instagram?', answer: 'No. Use Instagram for visibility and the website for depth, search and enquiries.' }] },
  { slug: 'b2b-catalogue-website-generates-enquiries', title: 'How a B2B Catalogue Website Generates Enquiries', date: '2026-09-09', excerpt: 'How structured product pages, specifications and quote CTAs help turn B2B visitors into better enquiries.', sections: [['Introduction', 'A B2B catalogue website is not only an online brochure. It guides technical buyers from product discovery to a quote request.'], ['It reduces buyer effort', 'Buyers can shortlist products faster when categories, specifications and use cases are clearly structured.'], ['It captures better details', 'Product-specific enquiry buttons can pre-fill the product name and ask for quantity, location and requirement notes.'], ['It supports search intent', 'Category and product pages can target specific terms without creating thin duplicate location pages.'], ['Common mistakes', 'Avoid missing specifications, broken catalogue downloads, generic enquiry buttons and product pages with identical copy.']], faqs: [{ question: 'Can catalogues work without ecommerce?', answer: 'Yes. Many B2B websites are quote-led rather than checkout-led.' }] },
  { slug: 'domain-hosting-costs-india', title: 'Domain and Hosting Costs in India', date: '2026-09-09', excerpt: 'A simple explanation of domain, hosting, email and third-party costs that website owners should budget separately.', sections: [['Introduction', 'Development fees are only one part of owning a website. Domain, hosting, email and third-party services should be planned clearly.'], ['Domain name', 'A domain is the website address. It is usually renewed yearly and pricing depends on the extension and registrar.'], ['Hosting', 'Hosting keeps the website online. Static websites can be hosted efficiently, while backend-heavy websites need more planning.'], ['Email and tools', 'Business email, form tools, analytics, maps and paid plugins may add separate recurring charges.'], ['Common mistakes', 'Do not leave domain ownership unclear, ignore renewal dates, or buy tools before confirming whether the website actually needs them.']], faqs: [{ question: 'Are these charges part of development fees?', answer: 'They should be discussed separately so ownership, renewals and access remain clear.' }] },
  { slug: 'when-redesign-business-website', title: 'When Should a Business Redesign Its Website?', date: '2026-09-09', excerpt: 'Signals that your current website is hurting credibility, speed, search visibility or enquiry quality.', sections: [['Introduction', 'A redesign is useful when the current website no longer represents the business accurately or makes enquiries harder than they should be.'], ['The site looks inactive', 'Outdated design, old content and broken links make visitors question whether the business is active.'], ['Mobile experience is weak', 'Most visitors will check your site on mobile, so slow loading and awkward layouts directly affect enquiries.'], ['The message has changed', 'If services, markets or pricing have evolved, the website should reflect the current business clearly.'], ['Common mistakes', 'Do not redesign only for visual novelty. Preserve useful URLs, clarify messages and improve conversion paths at the same time.']], faqs: [{ question: 'Can redesign happen in phases?', answer: 'Yes. Priority pages can be redesigned first, then supporting pages can follow.' }] },
];

export const values = [
  { title: 'Clear scope', icon: ClipboardCheck, text: 'Clear inclusions, separate estimates for backend or ecommerce, and practical advice before build decisions.' },
  { title: 'Business-first UX', icon: LineChart, text: 'Pages are planned around credibility, buyer questions and enquiry quality, not decoration alone.' },
  { title: 'Technical care', icon: ShieldCheck, text: 'Performance, accessibility, SEO structure and maintainable code are treated as core requirements.' },
  { title: 'Coordinated delivery', icon: Handshake, text: 'Frontend, backend, QA and communication responsibilities are aligned around the agreed website outcome.' },
];

export const technologies = ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Static generation', 'SEO metadata', 'Accessible forms'];
export const teamMembers = [
  { name: 'Rishabh Gautam', role: 'Full Stack Developer and Project Lead', initials: 'RG', linkedin: 'https://www.linkedin.com/in/rishabh-gautam-48a7b0249/', focus: 'Plans the technical direction, coordinates project communication and builds across frontend and application layers.', details: ['Owns requirement clarity, technical decisions and delivery alignment.', 'Connects business goals with practical website architecture.', 'Primary contact for scope, reviews and launch coordination.'], skills: ['Next.js', 'React', 'TypeScript', 'Frontend architecture', 'Full-stack planning'] },
  { name: 'Himanshu Shekhar', role: 'Backend Developer', initials: 'HS', linkedin: 'https://www.linkedin.com/in/himanshu-shekhar-83493b231/', focus: 'Handles backend planning, API structure, database workflows and integration support for advanced website requirements.', details: ['Plans server-side logic for projects that need persistent data or integrations.', 'Supports API design, database flow and backend implementation discussions.', 'Helps keep technical scope realistic before advanced features are quoted.'], skills: ['Backend development', 'API planning', 'Database workflows', 'Integration support', 'Server-side logic'] },
  { name: 'Divyanshu Pal', role: 'Frontend Developer', initials: 'DP', linkedin: 'https://www.linkedin.com/in/divyanshu-pal-906539202/', focus: 'Builds responsive user interfaces, reusable components and polished page experiences across devices.', details: ['Focuses on layout quality, component reuse and interaction details.', 'Supports performance-conscious frontend implementation.', 'Helps translate approved designs into clean browser experiences.'], skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Responsive UI'] },
  { name: 'Muskan', role: 'Quality Assurance Specialist', initials: 'M', linkedin: 'https://www.linkedin.com/in/muskan-08a6b1254/', focus: 'Reviews user flows, responsive layouts, forms, CTAs and release readiness before launch.', details: ['Checks launch-critical paths such as enquiry forms, call buttons and WhatsApp links.', 'Reviews responsive behavior across common screen sizes.', 'Documents issues clearly so fixes can be verified before launch.'], skills: ['Manual testing', 'Bug reporting', 'Responsive QA', 'Form validation checks', 'Release review'] },
];

export const categoriesServed = [
  { label: 'businesses', icon: BriefcaseBusiness },
  { label: 'Manufacturers', icon: Factory },
  { label: 'Exporters', icon: Building2 },
  { label: 'Service companies', icon: BarChart3 },
  { label: 'Creative professionals', icon: Palette },
  { label: 'Local brands', icon: Search },
];

export function whatsappUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}
export function consultationMessage(context = 'General consultation') {
  return `Hi ${siteConfig.name}, I would like a free consultation for: ${context}.`;
}
export function serviceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
export function industryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
export function projectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
export function postBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
export function slugUrl(path: string) {
  return `${siteConfig.baseUrl}${path}`;
}
