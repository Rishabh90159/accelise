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

export { consultationMessage, navItems, siteConfig, whatsappUrl } from './site-config';
export { slugUrl } from './seo';

export type FAQ = { question: string; answer: string };
export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  summary: string;
  heroNote: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  overviewHeading: string;
  overview: string[];
  problems: string[];
  suitableFor: string;
  deliverables: string[];
  workflow: string[];
  features: string[];
  benefits: string[];
  relatedIndustries: string[];
  faqs: FAQ[];
};

// Order matters: the first four appear on the homepage and the first five in the footer.
export const services: Service[] = [
  {
    slug: 'business-website-development',
    title: 'Business Website Development',
    shortTitle: 'Business Websites',
    icon: Store,
    summary: 'Professional websites that explain services, build credibility and make enquiries easy.',
    heroNote: 'For companies that need a polished web presence customers can trust before they call, visit or request a quote.',
    seoTitle: 'Business Website Development Company in India | Accelise',
    metaDescription: 'Business website development for service companies, consultants and local brands in India, with clear service pages, WhatsApp enquiries and fast mobile pages.',
    h1: 'Business Website Development Company in India',
    overviewHeading: 'What business website development with Accelise includes',
    overview: [
      'A business website has one job: help a prospective customer understand what you do, decide you are credible, and contact you. We plan each site around the questions your buyers ask before they call: which services you offer, where you work, what a typical project involves and how quickly you respond.',
      'Most business websites we build have five to ten pages: a homepage, an about page, one page per core service, a contact page with a map and an FAQ. Every page carries a clear next step, whether that is a call, a WhatsApp message or an enquiry form, so leads arrive with enough context to reply properly.',
    ],
    problems: ['Many small businesses rely on referrals or social pages, but lose trust when buyers ask for a proper website.', 'Visitors cannot quickly tell which services you offer or which areas you cover.', 'Enquiries arrive without enough detail to quote or respond usefully.'],
    suitableFor: 'Local businesses, consultants, clinics, agencies, manufacturers and service companies across India.',
    deliverables: ['Business-focused homepage', 'About, service and contact pages', 'CTA plan for calls, WhatsApp and email', 'Basic technical SEO setup'],
    workflow: ['Clarify services, audience and service locations', 'Plan page structure and core messages', 'Build responsive pages and contact paths', 'Test mobile, tablet and desktop layouts before launch'],
    features: ['Home, about, services, contact and FAQ pages', 'WhatsApp, call and email enquiry paths', 'Mobile-first responsive design', 'On-page SEO basics and fast loading pages'],
    benefits: ['A credible digital presence clients can verify', 'Clear presentation of services and service areas', 'More structured enquiries with less back-and-forth'],
    relatedIndustries: ['interior-designers', 'diagnostic-centres', 'schools-coaching-institutes', 'event-planners'],
    faqs: [
      { question: 'How long does a business website take to build?', answer: 'A five-page starter website usually takes 7 to 12 working days after content is approved, and a 10-page business website usually takes 2 to 4 weeks. The biggest factor is how quickly page content and images are ready.' },
      { question: 'How much does business website development cost?', answer: 'Our Starter Website package begins at ₹10,000 for up to 5 pages and the Business Website package at ₹20,000 for up to 10 pages, with domain and hosting included. The final quote depends on page count, content support and any integrations.' },
      { question: 'Will I be able to update the website myself?', answer: 'Simple websites are delivered as fast static sites, so most owners send us text or image changes and we update them. If you need to edit content often, we can scope a CMS so your team can make changes directly.' },
      { question: 'Do you write the content for the website?', answer: 'We structure every page and refine the text you provide. Business details, service descriptions and real photos should come from you, because accurate information is what makes a website credible.' },
    ],
  },
  {
    slug: 'ecommerce-website-development',
    title: 'E-commerce Website Development',
    shortTitle: 'E-commerce',
    icon: ShoppingCart,
    summary: 'Online stores and product websites for brands that want to sell or take orders online, with payments and shipping scoped clearly.',
    heroNote: 'For product businesses that need a clear storefront experience, with payment, shipping and admin requirements estimated up front.',
    seoTitle: 'E-commerce Website Development Company | Accelise',
    metaDescription: 'E-commerce website development for Indian brands: product and collection pages, cart and checkout planning, and payment and shipping integrations scoped clearly.',
    h1: 'E-commerce Website Development Company in India',
    overviewHeading: 'How we approach e-commerce website development',
    overview: [
      'An online store needs more than product pages. Buyers want clear photos, prices, sizes or variants, delivery timelines and return policies before they pay. We start by listing your products, how you want to take orders (online payment, cash on delivery or enquiry first) and what happens after an order is placed.',
      'Depending on catalogue size and how much control you need, we recommend Shopify, WooCommerce or a custom build. Payment gateways, shipping integrations and admin panels are scoped and quoted separately, so you know exactly what you are paying for before development starts.',
    ],
    problems: ['Selling online requires a storefront that explains products, policies and purchase flow clearly.', 'Product details, policies and delivery information are scattered or missing.', 'Orders taken over social media are hard to track and difficult to scale.'],
    suitableFor: 'Brands preparing for Shopify, WooCommerce, custom checkout or catalogue-first selling.',
    deliverables: ['Storefront page design', 'Product and collection presentation', 'Cart or enquiry journey planning', 'Integration scope for payment and backend systems'],
    workflow: ['Define products, policies and checkout expectations', 'Map user journey from product discovery to action', 'Build storefront UI and product pages', 'Document integration requirements for advanced ecommerce'],
    features: ['Storefront UX and product presentation', 'Collection pages and product details', 'Cart and checkout planning', 'Payment, shipping and admin integration scoping'],
    benefits: ['Creates a buying experience users can understand', 'Separates visual storefront work from backend complexity', 'Reduces uncertainty before full ecommerce investment'],
    relatedIndustries: ['manufacturers-exporters', 'modular-kitchen-businesses'],
    faqs: [
      { question: 'Should I use Shopify, WooCommerce or a custom e-commerce website?', answer: 'Shopify suits most brands that want a reliable store with little maintenance. WooCommerce works well if you want a WordPress-based site you fully control. A custom build makes sense when your ordering, pricing or catalogue rules do not fit a standard platform. We recommend one after understanding your products and order volume.' },
      { question: 'Can you integrate a payment gateway such as Razorpay?', answer: 'Yes. Payment gateways such as Razorpay, PayU or Stripe, along with shipping and invoicing integrations, can be added. They are scoped and quoted separately because each one adds setup, testing and account verification work.' },
      { question: 'Can I start with an enquiry-based catalogue and add online payments later?', answer: 'Yes. Many businesses start with product pages and WhatsApp or quote enquiries, then add a cart and checkout once demand is clear. We structure the catalogue so it can be upgraded without rebuilding the site.' },
      { question: 'How much does an e-commerce website cost?', answer: 'It depends on the number of products, the platform and the integrations required, so we quote after a short requirement discussion. Share your product count and payment and delivery needs, and we will send a written scope.' },
    ],
  },
  {
    slug: 'b2b-website-development',
    title: 'B2B Catalogue Website Development',
    shortTitle: 'B2B Catalogue',
    icon: Factory,
    summary: 'Catalogue websites for manufacturers and exporters that present categories, products and quote requests clearly.',
    heroNote: 'For product businesses that need buyers to understand categories, specifications and quotation requirements without a full ecommerce system.',
    seoTitle: 'B2B Catalogue Website Development Company | Accelise',
    metaDescription: 'B2B website development for manufacturers, exporters and distributors: product catalogues, specification tables, brochure downloads and detailed RFQ forms.',
    h1: 'B2B Website Development Company for Catalogues and RFQs',
    overviewHeading: 'What a B2B catalogue website needs to do',
    overview: [
      'B2B buyers rarely decide on the first visit. A procurement manager or distributor wants to check your product range, specifications, certifications and manufacturing capacity, then send a request for quote with quantities and a delivery location. A B2B website should make each of those steps easy.',
      'We build category and product pages from your catalogue data, add specification tables and downloadable brochures, and place product-specific quote buttons that pass the product name into the enquiry. For exporters, we add sections on export markets, packaging and compliance so overseas buyers can qualify you quickly.',
    ],
    problems: ['B2B buyers need product details, specifications and trust signals before they share requirements.', 'Product information lives in PDFs and WhatsApp messages instead of searchable pages.', 'Generic contact forms do not capture quantities, specifications or destination.'],
    suitableFor: 'Manufacturers, exporters, industrial suppliers, distributors and product businesses.',
    deliverables: ['Product category structure', 'Product detail templates', 'RFQ-focused enquiry flow', 'Catalogue download or request sections'],
    workflow: ['Collect categories, product data and buyer questions', 'Plan filters, specifications and RFQ fields', 'Develop catalogue pages and quote CTAs', 'Review product content accuracy before launch'],
    features: ['Category and product detail structure', 'Specification tables and downloadable catalogue links', 'Product-specific quote enquiry buttons', 'Manufacturing, certification and export capability sections'],
    benefits: ['Makes technical product discovery simpler', 'Captures better quote context from buyers', 'Supports search visibility for product categories'],
    relatedIndustries: ['manufacturers-exporters', 'modular-kitchen-businesses'],
    faqs: [
      { question: 'How is a B2B catalogue website different from an e-commerce store?', answer: 'A B2B catalogue focuses on product discovery and quote requests rather than online checkout. Prices often depend on quantity and specification, so the site collects structured RFQs instead of taking payment.' },
      { question: 'Can you build pages from our existing PDF catalogue or Excel sheet?', answer: 'Yes. We structure categories and product pages from your existing catalogue, spreadsheet or brochure. Clean, accurate product data makes the build faster, so we share a simple template for any missing details.' },
      { question: 'Can our team add or edit products after launch?', answer: 'For catalogues that change often, we can scope a CMS or admin panel so your team can manage products directly. Smaller catalogues are usually updated by us on request.' },
      { question: 'How long does a B2B catalogue website take?', answer: 'Usually 4 to 6 weeks, depending mostly on how ready your product data and images are.' },
    ],
  },
  {
    slug: 'web-application-development',
    title: 'Custom Web Application Development',
    shortTitle: 'Web Apps',
    icon: Code2,
    summary: 'Custom web applications, portals and business tools for workflows beyond a standard marketing website.',
    heroNote: 'For teams that need structured interfaces, calculators, dashboards or workflows beyond a standard website.',
    seoTitle: 'Web Application Development Company in India | Accelise',
    metaDescription: 'Custom web application development in India: customer portals, dashboards, booking and quotation tools built with React, Next.js and Node.js around your workflow.',
    h1: 'Web Application Development Company in India',
    overviewHeading: 'Custom web applications built around your workflow',
    overview: [
      'When a team runs important work through spreadsheets, WhatsApp groups and manual follow-ups, errors and delays add up. A custom web application replaces that with structured screens: forms that validate data, dashboards that show status at a glance, and role-based access so each person sees what they need.',
      'We start by mapping the workflow and user roles, then design the main screens before writing code. Our frontend and backend developers build with React, Next.js and Node.js, and QA tests form states, edge cases and permissions before release. Common projects include customer portals, booking and quotation tools, internal dashboards and calculators.',
    ],
    problems: ['Spreadsheets and manual workflows become hard to manage when teams need structured interfaces.', 'Customers or staff cannot see the status of a request without calling someone.', 'Off-the-shelf software forces your process to fit its limits.'],
    suitableFor: 'Businesses needing dashboards, calculators, portals, internal tools or custom workflows.',
    deliverables: ['Application screen planning', 'Reusable component system', 'Forms, dashboards or workflow UI', 'API and backend integration plan when needed'],
    workflow: ['Map the workflow and user roles', 'Design the main screens and states', 'Develop the interactive frontend', 'Test form states, edge cases and integration assumptions'],
    features: ['Application screens and reusable components', 'Form-heavy workflows', 'Dashboard and reporting interfaces', 'API and backend integration planning'],
    benefits: ['Turns messy workflows into usable tools', 'Creates interfaces teams can repeat daily', 'Keeps future backend integration possible'],
    relatedIndustries: ['diagnostic-centres', 'schools-coaching-institutes', 'manufacturers-exporters'],
    faqs: [
      { question: 'What kinds of web applications do you build?', answer: 'Customer portals, booking and enquiry management tools, internal dashboards, quotation calculators, admin panels and workflow tools. If a process involves forms, records and different user roles, it can usually become a web application.' },
      { question: 'Which technologies do you use?', answer: 'We mainly work with React, Next.js, TypeScript and Node.js, with a database and hosting chosen to suit the project. The recommended stack is explained in the scope document before development begins.' },
      { question: 'How is a web application priced?', answer: 'Web applications are quoted per project after we map the screens, user roles and integrations. We often suggest a smaller first version covering the most important workflow, then add features in later phases.' },
      { question: 'Can the application connect to our existing tools?', answer: 'Yes, where the existing tool offers an API or data export. We check integration options during scoping and flag anything that depends on a third party.' },
    ],
  },
  {
    slug: 'website-redesign',
    title: 'Website Redesign',
    shortTitle: 'Redesign',
    icon: Sparkles,
    summary: 'Modern redesigns for slow, dated or confusing websites that no longer support sales conversations.',
    heroNote: 'For businesses with an existing website that needs clearer messaging, stronger mobile usability and better enquiry paths.',
    seoTitle: 'Website Redesign Company in India | Accelise',
    metaDescription: 'Website redesign for slow or dated business websites: content review, modern responsive design, 301 redirects and SEO continuity to protect existing rankings.',
    h1: 'Website Redesign Company for Outdated Business Websites',
    overviewHeading: 'What changes in a website redesign',
    overview: [
      'A redesign is worth doing when the current site is slow on mobile, hard to update, or no longer reflects what the business actually offers. We begin by reviewing your existing pages, content and enquiry paths to decide what to keep, rewrite, merge or remove.',
      'Protecting existing search visibility is part of the job. We map old URLs to new ones, set up 301 redirects, carry over page titles and content that already rank, and check forms and links before launch so the new site does not lose the traffic the old one earned.',
    ],
    problems: ['An outdated website can make a capable business look inactive, unclear or hard to trust.', 'The site looks dated on mobile and loads slowly.', 'Service pages no longer match what the business sells today.'],
    suitableFor: 'Companies with an existing site that needs better messaging, speed and mobile experience.',
    deliverables: ['Current site review', 'Reworked page structure', 'Modern responsive interface', 'Redirect and SEO continuity notes'],
    workflow: ['Audit current content, pages and buyer friction', 'Prioritize pages that matter most', 'Redesign and rebuild the new experience', 'Check old links, forms and launch readiness'],
    features: ['Content audit and page restructuring', 'Modern responsive interface', 'CTA and enquiry improvements', 'Technical cleanup and SEO foundations'],
    benefits: ['Improves first impressions', 'Makes key information easier to scan', 'Supports better page speed and search indexing'],
    relatedIndustries: ['interior-designers', 'schools-coaching-institutes', 'diagnostic-centres'],
    faqs: [
      { question: 'Will a redesign affect my Google rankings?', answer: 'A redesign can cause a temporary drop if URLs change without redirects or ranking content is removed. We map old URLs to new ones, set up 301 redirects and keep useful content so search engines can transfer existing signals to the new pages.' },
      { question: 'Can you redesign a WordPress or Wix website?', answer: 'Yes. We can rebuild the site on a faster stack, or keep a CMS if your team needs to edit content often. We recommend an approach after reviewing how the current site is used.' },
      { question: 'Do I need to rewrite all my content?', answer: 'Not necessarily. We review existing content, keep what still works, and suggest rewrites where pages are unclear, outdated or missing information buyers need.' },
      { question: 'How long does a website redesign take?', answer: 'Most business website redesigns take 2 to 4 weeks, depending on the number of pages and how much content changes.' },
    ],
  },
  {
    slug: 'portfolio-website-development',
    title: 'Portfolio Website Development',
    shortTitle: 'Portfolio Websites',
    icon: Camera,
    summary: 'Clean portfolio websites for individuals and studios that need work samples, story and enquiry flow.',
    heroNote: 'For professionals whose work needs a searchable, organized and client-friendly presentation beyond social platforms.',
    seoTitle: 'Portfolio Website Development in India | Accelise',
    metaDescription: 'Portfolio website development for photographers, designers, architects and studios: fast image galleries, project pages and simple enquiry or booking forms.',
    h1: 'Portfolio Website Development for Creatives and Studios',
    overviewHeading: 'Portfolio websites that present work clearly',
    overview: [
      'Photographers, designers, architects and studios are judged on their work, so the website has to present it well: large, fast-loading images, projects grouped by category, and enough context for a client to understand the brief and the result.',
      'We plan galleries and project pages around your strongest work, write descriptive alt text for images, and add a short route to enquiry, so a prospective client can go from browsing a project to sharing their date, location or budget in a few taps.',
    ],
    problems: ['Creative work can look scattered when it only lives in social posts, PDF attachments or messaging threads.', 'Clients cannot see complete projects or understand your style and process.', 'There is no single, professional link to share in proposals.'],
    suitableFor: 'Photographers, designers, architects, freelancers, studios and independent consultants.',
    deliverables: ['Portfolio gallery structure', 'Project or category pages', 'About and service story', 'Booking or consultation enquiry flow'],
    workflow: ['Select strongest work samples and categories', 'Plan gallery rhythm and enquiry paths', 'Build fast responsive portfolio pages', 'Check image loading, cropping and alt text'],
    features: ['Project galleries and case-study pages', 'About and approach sections', 'Lead capture through calls, WhatsApp and email', 'Optimized image layout and descriptive alt text'],
    benefits: ['Turns work samples into a searchable owned presence', 'Helps clients understand style, process and fit', 'Creates one polished link for proposals and profiles'],
    relatedIndustries: ['photographers', 'interior-designers', 'event-planners'],
    faqs: [
      { question: 'Will large portfolio images slow the site down?', answer: 'Images are resized and compressed for the web and lazy-loaded as visitors scroll, so galleries stay fast on mobile data without looking low quality.' },
      { question: 'Can I add new projects myself?', answer: 'We can deliver the site as a fast static build that we update for you, or add a simple CMS if you publish new work often.' },
      { question: 'Is a portfolio website better than an Instagram profile?', answer: 'They work best together. Instagram helps people discover you; a website gives you an owned, organised place to show complete projects, explain your process and collect enquiries with the details you need.' },
    ],
  },
  {
    slug: 'landing-page-development',
    title: 'Landing Page Development',
    shortTitle: 'Landing Pages',
    icon: Target,
    summary: 'Focused landing pages for campaigns, launches and services where one enquiry action matters most.',
    heroNote: 'For campaigns or offers where visitors should understand one message and take one clear action.',
    seoTitle: 'Landing Page Development Services | Accelise',
    metaDescription: 'Landing page development for ad campaigns, launches and service offers: one clear message, fast pages, lead forms or WhatsApp CTAs and tracking-ready buttons.',
    h1: 'Landing Page Development for Campaigns and Launches',
    overviewHeading: 'Landing pages built for one clear action',
    overview: [
      'Paid ads and campaign traffic convert poorly when visitors land on a general homepage. A landing page keeps one message and one action on screen: the offer, the proof that supports it, answers to common objections, and a form or WhatsApp button.',
      'We write the section flow around the campaign audience, build a fast static page, and add data attributes to each CTA so clicks can be tracked in your analytics tool.',
    ],
    problems: ['Campaign traffic often drops when users land on a generic page with unclear next steps.', 'Ad spend is wasted when the page does not match the ad message.', 'Leads cannot be traced back to the campaign that produced them.'],
    suitableFor: 'Ads, service launches, consultation offers, events and product announcements.',
    deliverables: ['Single-page conversion structure', 'Offer and CTA messaging', 'Lead form or WhatsApp action', 'Analytics-ready CTA attributes'],
    workflow: ['Clarify campaign offer and audience intent', 'Write the section flow around objections and action', 'Build a fast landing page', 'Test CTA behavior before launch'],
    features: ['Conversion-focused section flow', 'Single-page CTA strategy', 'Lead forms with WhatsApp or mailto fallback', 'Fast static delivery'],
    benefits: ['Keeps visitors focused on one action', 'Improves clarity for paid and organic traffic', 'Makes campaign testing easier'],
    relatedIndustries: ['schools-coaching-institutes', 'event-planners', 'modular-kitchen-businesses'],
    faqs: [
      { question: 'How long does a landing page take?', answer: 'Less time than a full website, because there is one page and one goal. We confirm the timeline once the offer, content and form requirements are clear.' },
      { question: 'Can the landing page be connected to Google Ads or Meta Ads tracking?', answer: 'Yes. We can add the tracking tags you provide and mark CTAs so form submissions, calls and WhatsApp clicks can be measured.' },
      { question: 'Can the landing page sit on my existing domain?', answer: 'Usually yes, either as a page on your current site or on a subdomain. We check your hosting setup before recommending the approach.' },
    ],
  },
  {
    slug: 'website-maintenance',
    title: 'Website Maintenance',
    shortTitle: 'Maintenance',
    icon: Wrench,
    summary: 'Ongoing content updates, fixes and performance checks for websites that need steady care.',
    heroNote: 'For businesses that need their website to stay current, accurate and technically healthy after launch.',
    seoTitle: 'Website Maintenance Services in India | Accelise',
    metaDescription: 'Website maintenance for business websites: content and image updates, bug fixes, performance and SEO checks, and hosting coordination, estimated per batch.',
    h1: 'Website Maintenance Services for Business Websites',
    overviewHeading: 'What website maintenance covers',
    overview: [
      'Websites drift out of date: phone numbers change, services are added, images get replaced and small bugs appear after browser updates. Maintenance keeps the site accurate and working without you having to deal with code.',
      'Send us update requests in batches; we estimate the effort, apply the changes and re-check key pages, forms and CTAs afterwards. We can also review page speed and basic SEO health so problems are caught before they affect enquiries.',
    ],
    problems: ['A neglected website can become slow, outdated or inaccurate, which hurts trust and enquiries.', 'Contact forms or WhatsApp links break without anyone noticing.', 'Small changes wait weeks because nobody owns the website.'],
    suitableFor: 'Businesses that need periodic updates, small improvements and launch support.',
    deliverables: ['Content updates', 'Bug fixes and small improvements', 'Performance checks', 'Launch and hosting coordination'],
    workflow: ['Collect update requests and priorities', 'Estimate effort for each batch', 'Apply changes in a controlled way', 'Review key pages and CTAs after updates'],
    features: ['Content and image updates', 'Bug fixes and small enhancements', 'Performance and SEO checks', 'Launch and hosting coordination'],
    benefits: ['Keeps information current', 'Reduces downtime and broken page risk', 'Lets owners avoid technical busywork'],
    relatedIndustries: ['diagnostic-centres', 'schools-coaching-institutes', 'interior-designers'],
    faqs: [
      { question: 'Do you maintain websites you did not build?', answer: 'Often, yes. We first review how the site is built and hosted; some platforms or older codebases need a one-time cleanup before regular updates are practical.' },
      { question: 'How are maintenance requests charged?', answer: 'Requests are estimated in batches based on the effort involved, so you approve the cost before work starts. Minor fixes during the launch support window of a new website are included.' },
      { question: 'How quickly are updates made?', answer: 'Timing depends on the size of the request and our current schedule, and we confirm it when we estimate the batch. Issues that stop enquiries, such as a broken contact form, are prioritised.' },
    ],
  },
];

export type Industry = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  seoTitle: string;
  metaDescription: string;
  summary: string;
  intro: string;
  challenges: string[];
  sections: string[];
  leadOpportunities: string[];
  features: string[];
  enquiryFlow: string;
  relatedServices: string[];
  relatedProject?: string;
  faqs: FAQ[];
};

export const industries: Industry[] = [
  {
    slug: 'interior-designers',
    title: 'Website Development for Interior Designers',
    shortTitle: 'Interior Designers',
    icon: Home,
    seoTitle: 'Website Development for Interior Designers | Accelise',
    metaDescription: 'Website development for interior designers: portfolios by space type, a clear design process, budget and timeline fields, and WhatsApp consultation enquiries.',
    summary: 'A refined website helps interior designers present projects, explain budgets and turn visual interest into serious consultation calls.',
    intro: 'Most interior design enquiries start with a photo someone saw on Instagram. Your website is where that interest becomes a serious conversation. It should show completed projects by space type and city, explain how your design and execution process works, and set expectations on budget and timelines before the first call.',
    challenges: ['Instagram shows style but rarely explains process, scope or fit.', 'Clients need project categories, location context and trust before booking a discussion.', 'High-value enquiries need clearer budget and timeline expectations.'],
    sections: ['Portfolio by space type', 'Design process', 'Services and packages', 'Project gallery', 'Consultation form'],
    leadOpportunities: ['Room-wise project enquiry', 'WhatsApp design consultation', 'Downloadable project brief checklist'],
    features: ['Image galleries', 'Before and after layouts', 'Project filters', 'Budget range fields'],
    enquiryFlow: 'A visitor views living-room work, selects a renovation scope, shares city, budget and timeline, then opens WhatsApp with the project context pre-filled.',
    relatedServices: ['portfolio-website-development', 'business-website-development', 'website-redesign'],
    faqs: [
      { question: 'What pages should an interior designer website have?', answer: 'At minimum: a homepage, a portfolio organised by space type (living rooms, kitchens, bedrooms, offices), a services page covering design-only and turnkey work, an about page and a consultation form. A design process page helps clients understand timelines and approvals.' },
      { question: 'Can the enquiry form ask for budget and project type?', answer: 'Yes. We can add fields for property type, rooms, city, budget range and timeline, and pass those details into a WhatsApp message so you can qualify the lead before replying.' },
      { question: 'Can I show before-and-after photos?', answer: 'Yes. Before-and-after layouts work well for renovation projects, as long as you have the client’s permission to publish the images.' },
    ],
  },
  {
    slug: 'manufacturers-exporters',
    title: 'Website Development for Manufacturers & Exporters',
    shortTitle: 'Manufacturers & Exporters',
    icon: Factory,
    seoTitle: 'Website Development for Manufacturers & Exporters | Accelise',
    metaDescription: 'Websites for manufacturers and exporters with product catalogues, specification tables, certifications and RFQ forms that capture quantity and destination.',
    summary: 'Manufacturer websites need to make capabilities, categories, specifications and quote requests easy for domestic and overseas buyers.',
    intro: 'Buyers evaluating a manufacturer, whether a domestic distributor or an overseas importer, want to see the product range, specifications, certifications and production capability before they ask for a price. A manufacturer website should answer those questions in a structured way and make sending a detailed RFQ simple.',
    challenges: ['Product information is often scattered across brochures, catalogues and messages.', 'Buyers need confidence in capacity, quality standards and export readiness.', 'Generic enquiry forms do not capture technical requirements.'],
    sections: ['Product categories', 'Manufacturing capability', 'Quality and certifications', 'Export markets', 'RFQ flow'],
    leadOpportunities: ['Product-specific quote buttons', 'Catalogue download requests', 'Bulk order enquiry'],
    features: ['Specification tables', 'Category filters', 'Certification sections', 'Technical SEO structure'],
    enquiryFlow: 'A buyer selects a product category, reviews specifications, adds quantity and destination, then sends an RFQ through WhatsApp or email.',
    relatedServices: ['b2b-website-development', 'ecommerce-website-development', 'web-application-development'],
    faqs: [
      { question: 'Do manufacturers need an e-commerce website or a catalogue website?', answer: 'Most manufacturers and exporters need a catalogue website with RFQ forms, because pricing depends on quantity, specification and destination. Online checkout only makes sense for standard products sold at fixed prices.' },
      { question: 'Can the website help overseas buyers?', answer: 'Yes. We add export market, packaging, certification and compliance sections, and keep product pages clear and consistent so international buyers can evaluate you without a call.' },
      { question: 'Can each product have its own quote button?', answer: 'Yes. Product-specific quote buttons pass the product name into the enquiry form or WhatsApp message, so you know exactly what the buyer is asking about.' },
    ],
  },
  {
    slug: 'event-planners',
    title: 'Event Planner Website Development',
    shortTitle: 'Event Planners',
    icon: Megaphone,
    seoTitle: 'Event Planner Website Development | Accelise',
    metaDescription: 'Event planner website development with galleries by event type, venues and cities served, and enquiry forms that capture date, guest count and budget.',
    summary: 'Event planning websites should show taste, reliability and venue experience while moving visitors toward a date-based enquiry.',
    intro: 'Couples and corporate clients shortlisting event planners want to know three things quickly: have you handled events like theirs, do you work in their city or venue, and are you available on their date. An event planner website should answer all three and collect the date, guest count and services needed in the first enquiry.',
    challenges: ['Event portfolios can feel repetitive without clear categories.', 'Visitors need fast answers about event types, cities and planning support.', 'Date availability and guest count matter early in the conversation.'],
    sections: ['Event types', 'Portfolio', 'Planning services', 'Venues served', 'Date enquiry form'],
    leadOpportunities: ['Wedding enquiry', 'Corporate event brief', 'WhatsApp date check'],
    features: ['Event galleries', 'Guest-count fields', 'Location filters', 'Package enquiry CTAs'],
    enquiryFlow: 'A visitor picks wedding planning, shares date, city, guest count and services needed, then receives a pre-filled WhatsApp enquiry.',
    relatedServices: ['business-website-development', 'portfolio-website-development', 'landing-page-development'],
    faqs: [
      { question: 'How should an event planner organise their portfolio?', answer: 'By event type, such as weddings, corporate events, birthdays and destination events, with a short note on the venue, guest count and services provided for each. Clients relate faster to events similar to their own.' },
      { question: 'Can clients check date availability on the website?', answer: 'We can add a date enquiry form that sends the date, city, guest count and event type to you on WhatsApp or email. A live availability calendar is possible as a custom feature and is scoped separately.' },
      { question: 'Should I publish package prices?', answer: 'Starting prices or package ranges help filter enquiries, but many planners prefer to share them after understanding the brief. We can design the site either way.' },
    ],
  },
  {
    slug: 'photographers',
    title: 'Photography Website Development',
    shortTitle: 'Photographers',
    icon: Camera,
    seoTitle: 'Photography Website Development | Accelise',
    metaDescription: 'Photography website development with fast galleries, shoot categories, package details and booking enquiries that capture date, venue and type of shoot.',
    summary: 'A photographer website gives prospects an owned portfolio, pricing context and a calm path to booking a shoot.',
    intro: 'For a photographer, the website is the portfolio. It needs large, sharp images that still load quickly on a phone, galleries organised by shoot type, and a booking path that collects the date, venue and type of shoot so you can reply with availability and a quote.',
    challenges: ['Social feeds mix personal, promotional and client work.', 'Image quality, loading speed and mobile layout directly affect trust.', 'Clients need to know categories, style and availability before contacting.'],
    sections: ['Portfolio galleries', 'Shoot categories', 'About the photographer', 'Packages', 'Booking enquiry'],
    leadOpportunities: ['Shoot type enquiry', 'Location and date capture', 'WhatsApp booking intent'],
    features: ['Responsive galleries', 'SEO-friendly image alt text', 'Package cards', 'Fast image delivery'],
    enquiryFlow: 'A prospect opens a wedding gallery, checks packages, shares date and venue, then starts a booking discussion through WhatsApp.',
    relatedServices: ['portfolio-website-development', 'business-website-development', 'landing-page-development'],
    faqs: [
      { question: 'How do you keep a photography website fast with many images?', answer: 'Images are exported at web sizes, compressed and lazy-loaded as visitors scroll. Galleries use fixed aspect ratios so the page does not jump while images load.' },
      { question: 'Can I have separate galleries for weddings, portraits and commercial work?', answer: 'Yes. Separate category galleries help clients find relevant work quickly and give each category its own page that can appear in search results.' },
      { question: 'Can the website protect my images?', answer: 'No website can fully prevent image copying, but we can publish web-sized images, add watermarks if you want them and avoid uploading full-resolution files.' },
    ],
  },
  {
    slug: 'diagnostic-centres',
    title: 'Diagnostic Centre Website Development',
    shortTitle: 'Diagnostic Centres',
    icon: HeartPulse,
    seoTitle: 'Diagnostic Centre Website Development | Accelise',
    metaDescription: 'Diagnostic centre website development with test listings, timings, home sample collection details, click-to-call and appointment enquiries built for mobile.',
    summary: 'Diagnostic centre websites should make services, test categories, location and appointment contact clear without medical overpromising.',
    intro: 'Most people visiting a diagnostic centre website are on a phone and want quick answers: is the test available, what are the timings, is home sample collection offered and how do I book. The website should keep those answers and a call or WhatsApp button within reach on every page, using clear and responsible language.',
    challenges: ['Patients need quick access to tests, timings and phone support.', 'Trust depends on clear facility information and responsible wording.', 'Mobile users often want direct call or WhatsApp actions.'],
    sections: ['Tests and services', 'Timings', 'Location', 'Home sample collection', 'Appointment enquiry'],
    leadOpportunities: ['Click-to-call', 'WhatsApp appointment request', 'Test package enquiry'],
    features: ['Service lists', 'Map section', 'Accessible forms', 'Clear disclaimers where needed'],
    enquiryFlow: 'A patient selects a test category, shares name, phone, preferred date and location, then calls or sends an appointment enquiry.',
    relatedServices: ['business-website-development', 'web-application-development', 'website-maintenance'],
    relatedProject: 'diagnostic-centre-website',
    faqs: [
      { question: 'Can patients book tests online?', answer: 'We can add an appointment enquiry form that collects the test, preferred date and location, and sends it to your team by WhatsApp or email. Full online booking with time slots and payments is a custom feature quoted separately.' },
      { question: 'Can we list test prices and health packages?', answer: 'Yes. Tests and health packages can be listed with prices, preparation instructions and report turnaround times, and updated whenever your rates change.' },
      { question: 'How do you handle medical content?', answer: 'We keep wording factual and avoid claims about outcomes. Clinical information such as test preparation should be provided or reviewed by your medical team before it is published.' },
    ],
  },
  {
    slug: 'modular-kitchen-businesses',
    title: 'Modular Kitchen Website Development',
    shortTitle: 'Modular Kitchens',
    icon: Gem,
    seoTitle: 'Modular Kitchen Website Development | Accelise',
    metaDescription: 'Modular kitchen website development with layouts, materials, finishes and real installations, plus enquiry forms for measurement visits and budget ranges.',
    summary: 'A modular kitchen website can turn visual browsing into measured enquiries by connecting styles, materials and budget ranges.',
    intro: 'Homeowners buying a modular kitchen compare several vendors, usually on their phone, before booking a measurement visit. Your website should help them choose a layout, understand materials and finishes, see real installations and share their kitchen size, city and budget in one enquiry.',
    challenges: ['Buyers compare many vendors and need fast signals of quality.', 'Material, layout and budget choices affect every project discussion.', 'Project photos need context to avoid looking like generic inspiration boards.'],
    sections: ['Kitchen styles', 'Materials', 'Process', 'Recent work', 'Design consultation form'],
    leadOpportunities: ['Layout-based enquiry', 'Free measurement request', 'Budget range capture'],
    features: ['Gallery filters', 'Material swatches', 'Process timeline', 'WhatsApp consultation CTA'],
    enquiryFlow: 'A homeowner selects an L-shaped kitchen style, chooses a budget range, shares city and timeline, then sends a design consultation request.',
    relatedServices: ['business-website-development', 'ecommerce-website-development', 'website-redesign'],
    faqs: [
      { question: 'What should a modular kitchen website include?', answer: 'Kitchen layouts (L-shaped, U-shaped, parallel and island), materials and finishes, hardware and appliance options, your design-to-installation process, real project photos and a measurement or consultation request form.' },
      { question: 'Can customers request a measurement visit through the website?', answer: 'Yes. The enquiry form can collect the area, kitchen dimensions if known, preferred layout and budget, and send them to your team so you can schedule a visit.' },
      { question: 'Can we sell accessories online as well?', answer: 'Yes. A small e-commerce section for accessories or hardware can sit alongside the main enquiry-focused website.' },
    ],
  },
  {
    slug: 'schools-coaching-institutes',
    title: 'School and Coaching Institute Website Development',
    shortTitle: 'Schools & Coaching',
    icon: GraduationCap,
    seoTitle: 'School & Coaching Institute Website Development | Accelise',
    metaDescription: 'Website development for schools and coaching institutes: courses, batches, admissions, faculty, verifiable results and enquiry forms parents can use on mobile.',
    summary: 'Education websites need to explain courses, admissions, trust signals and contact paths for parents and students.',
    intro: 'Parents and students research schools and coaching institutes carefully, often comparing several options. They look for courses and batches, admission steps, fees or fee ranges, faculty, verifiable results and location. A well-organised website answers these questions and makes it easy to request a callback or campus visit.',
    challenges: ['Parents and students need structured information before visiting or calling.', 'Courses, batches and admission details change often.', 'A cluttered site makes institutions look less organized.'],
    sections: ['Programs', 'Admissions', 'Faculty or leadership', 'Results or highlights with proof', 'Enquiry form'],
    leadOpportunities: ['Course enquiry', 'Admission callback', 'Campus visit request'],
    features: ['Course pages', 'FAQ blocks', 'Location map', 'Lead form with student details'],
    enquiryFlow: 'A parent selects a program, adds student class, contact number and preferred visit time, then sends an admission enquiry.',
    relatedServices: ['business-website-development', 'web-application-development', 'website-maintenance'],
    faqs: [
      { question: 'Can we update batch timings and admission notices ourselves?', answer: 'Yes, if we scope a simple CMS or admin panel. Institutes that update notices, batches or results frequently usually benefit from one.' },
      { question: 'Should we publish results and toppers on the website?', answer: 'Results build trust when they are specific and verifiable: student names (with consent), year, exam and score. We avoid vague or unverifiable claims.' },
      { question: 'Can the website capture admission enquiries with student details?', answer: 'Yes. The enquiry form can collect the student’s class, course of interest, a parent’s contact number and a preferred callback time.' },
    ],
  },
];

export const packages = [
  { name: 'Starter Website', price: 'Starting from ₹10,000', fit: 'Small businesses and personal portfolios', pages: 'Up to 5 pages', design: 'Clean responsive layout based on the agreed brand direction', enquiry: 'Contact form, WhatsApp button, phone and email links', seo: 'Basic metadata, headings, sitemap and robots setup', revisions: 'Two revision rounds', timeline: 'Approx. 7 to 12 working days after content approval', support: 'Launch support and minor fixes for 7 days', notIncluded: 'Custom backend, ecommerce, payment gateway, admin panel, paid tools', features: ['Up to 5 pages', 'Responsive design', 'Contact form', 'WhatsApp integration', 'Basic SEO setup', 'Social-media links', 'Two revision rounds'] },
  { name: 'Business Website', price: 'Starting from ₹20,000', fit: 'Growing businesses that want enquiries', pages: 'Up to 10 pages', design: 'Custom responsive design for services, trust sections and conversion paths', enquiry: 'Advanced enquiry form, WhatsApp context, call buttons and Google Maps section', seo: 'Basic on-page SEO for core service pages and local-business information', revisions: 'Three revision rounds', timeline: 'Approx. 2 to 4 weeks depending on content and review speed', support: 'Launch support and minor fixes for 14 days', notIncluded: 'Backend systems, payment gateway, CRM automation, premium integrations', features: ['Up to 10 pages', 'Custom responsive design', 'Service or product presentation', 'Advanced enquiry form', 'WhatsApp and call integration', 'Basic on-page SEO', 'Google Maps integration', 'Performance optimization', 'Three revision rounds'] },
  { name: 'Premium Catalogue Website', price: 'Starting from ₹30,000', fit: 'Manufacturers, exporters and product businesses', pages: 'Category pages plus product-detail structure', design: 'Catalogue-first design for technical product discovery and RFQ generation', enquiry: 'Product-specific quotation forms, catalogue request CTAs and WhatsApp RFQ context', seo: 'Technical SEO setup for categories, products, schema and internal linking', revisions: 'Four revision rounds', timeline: 'Approx. 4 to 6 weeks depending on product data readiness', support: 'Launch support and minor fixes for 21 days', notIncluded: 'Inventory backend, login, payment gateway, complex ERP sync, paid tools', features: ['Product-category structure', 'Individual product pages', 'Product filters', 'Product-specific quotation forms', 'Catalogue download', 'Manufacturing and certification sections', 'Advanced enquiry flow', 'Technical SEO setup', 'Four revision rounds'] },
];

export const projects = [
  { slug: 'survijay-foundation', name: 'Survijay Foundation', industry: 'Non-profit and social welfare', projectType: 'Completed project', service: 'business-website-development', metaDescription: 'How Accelise built the Survijay Foundation website: a mission-led non-profit site with initiative sections, a gallery and a simple contact flow.', image: '/images/project-survijay-foundation.jpg', imageAlt: 'Survijay Foundation website homepage with the headline "Supporting Education. Strengthening Communities." beside photos of community education sessions', screenshots: ['/images/project-survijay-foundation.jpg'], problem: 'The foundation needed a calm, structured presence to explain its purpose and encourage outreach.', context: 'Survijay Foundation is a social welfare organisation in Rampur, Uttar Pradesh working on education and community support. Visitors need to quickly understand the mission, initiatives, contact path and credibility signals before offering support.', solution: 'A mission-led informational website with About, Our Work, Get Involved, Gallery and Contact pages, initiative sections and a simple contact flow.', architecture: ['Mission-focused homepage', 'Initiatives overview', 'About and trust content', 'Contact and support path'], features: ['Mission-led homepage', 'Initiative sections', 'Donation-ready CTA structure', 'Contact flow'], technology: ['Next.js', 'TypeScript', 'Tailwind CSS'], liveUrl: 'https://survijay-foundation.vercel.app/' },
  { slug: 'diagnostic-centre-website', name: 'Diagnostic Centre Website', industry: 'Healthcare services', projectType: 'Demo concept', service: 'business-website-development', metaDescription: 'A diagnostic centre website demo concept by Accelise with test categories, appointment prompts, a map section and click-to-call support for mobile patients.', image: '/images/project-diagnostics.svg', imageAlt: 'Illustrated preview of a diagnostic centre website concept with a service summary, appointment button and service cards', screenshots: ['/images/project-diagnostics.svg'], problem: 'Patients need quick access to services, timings, location and appointment contact from mobile devices.', context: 'Diagnostic centres must communicate clearly without overpromising medical outcomes, while keeping appointment actions visible.', solution: 'A service-first website concept with test categories, appointment prompts, map placement and click-to-call support.', architecture: ['Service overview', 'Test category pages', 'Home collection section', 'Appointment and map page'], features: ['Test categories', 'Appointment form', 'Map section', 'Responsive layout'], technology: ['Next.js', 'Static data', 'Accessible forms'], liveUrl: '' },
];

export const processSteps = [
  { title: 'Requirement discussion', team: 'We understand the business, audience, services, competitors and expected enquiries.', client: 'Share business goals, references, services and must-have pages.', deliverable: 'Requirement summary.', approval: 'Confirm the direction and priority pages.' },
  { title: 'Scope and quotation', team: 'Our team turns requirements into page count, features, timeline and package fit.', client: 'Clarify budget range, launch urgency and third-party requirements.', deliverable: 'Written scope and quotation.', approval: 'Approve inclusions, exclusions and revision limits.' },
  { title: 'Content and design planning', team: 'We plan section flow, messages, CTAs, assets and SEO basics.', client: 'Provide logo, references, copy, product data and real images where available.', deliverable: 'Page structure and content checklist.', approval: 'Approve the content direction before build starts.' },
  { title: 'Development', team: 'Frontend, backend and integration specialists build the agreed website scope.', client: 'Answer content questions and review milestone updates.', deliverable: 'Working website pages and functional CTA paths.', approval: 'Review the working version for business accuracy.' },
  { title: 'Review and revisions', team: 'We apply agreed revisions and keep changes tied to the approved scope.', client: 'Give consolidated feedback with priority notes.', deliverable: 'Updated website version.', approval: 'Sign off on revised content, layout and flows.' },
  { title: 'Testing', team: 'QA checks responsive layouts, links, forms, metadata basics and launch-critical paths.', client: 'Confirm contact details, map location, package wording and legal or business text.', deliverable: 'Pre-launch testing checklist.', approval: 'Approve launch readiness.' },
  { title: 'Launch', team: 'We set up the domain and hosting, deploy the website and run final smoke checks.', client: 'Share access to any existing domain you want us to use.', deliverable: 'Live website and launch confirmation.', approval: 'Confirm the live site is ready to share.' },
  { title: 'Post-launch support', team: 'We handle agreed minor fixes and guide future improvements.', client: 'Report any launch-week issues with screenshots or page links.', deliverable: 'Support notes and next-step recommendations.', approval: 'Close support or plan the next update.' },
];

export const faqs: FAQ[] = [
  { question: 'What types of websites does Accelise build?', answer: 'Business websites, e-commerce stores, B2B catalogue websites for manufacturers and exporters, portfolio websites, landing pages and custom web applications such as portals and dashboards. We also redesign and maintain existing websites.' },
  { question: 'How much does a website cost?', answer: 'Packages start from ₹10,000 for a starter website of up to 5 pages, ₹20,000 for a business website of up to 10 pages and ₹30,000 for a product catalogue website. E-commerce stores and web applications are quoted after a short requirement discussion.' },
  { question: 'Do you build websites for businesses outside NCR Gurgaon and Hyderabad?', answer: 'Yes. Accelise works with businesses across India and can also support international clients remotely.' },
  { question: 'Are domain and hosting included?', answer: 'Yes. Domain and hosting are included with our website packages, so you do not need to buy or set up anything separately. We register the domain, host the website and connect everything before launch. If you already own a domain, we can use that instead.' },
  { question: 'Can the website be upgraded later?', answer: 'Yes. A website can start simple and later connect to Formspree, Web3Forms, CMS, APIs or ecommerce systems.' },
  { question: 'Who works on the projects?', answer: 'Our web-development team combines project communication, frontend development, backend engineering and quality assurance based on the approved scope.' },
];

export const values = [
  { title: 'Clear scope', icon: ClipboardCheck, text: 'Clear inclusions, separate estimates for backend or ecommerce, and practical advice before build decisions.' },
  { title: 'Business-first UX', icon: LineChart, text: 'Pages are planned around credibility, buyer questions and enquiry quality, not decoration alone.' },
  { title: 'Technical care', icon: ShieldCheck, text: 'Performance, accessibility, SEO structure and maintainable code are treated as core requirements.' },
  { title: 'Coordinated delivery', icon: Handshake, text: 'Frontend, backend, QA and communication responsibilities are aligned around the agreed website outcome.' },
];

export const teamMembers = [
  { name: 'Rishabh Gautam', role: 'Full Stack Developer', initials: 'RG', image: '/images/team/rishabh-gautam.jpg', imageOrigin: '51% 0%', imageZoom: 2.2, linkedin: 'https://www.linkedin.com/in/rishabh-gautam-48a7b0249/', education: 'B.Tech in Computer Science, IIIT Dharwad', focus: 'Plans the technical direction, coordinates project communication and builds across frontend and application layers.', details: ['Owns requirement clarity, technical decisions and delivery alignment.', 'Connects business goals with practical website architecture.', 'Primary contact for scope, reviews and launch coordination.'], skills: ['Next.js', 'React', 'TypeScript', 'Frontend architecture', 'Full-stack planning'] },
  { name: 'Anjaiah Golla', role: 'Software Engineer', initials: 'AG', image: '/images/team/anjaiah-golla.jpg', imageOrigin: '50% 0%', imageZoom: 1.3, linkedin: 'https://www.linkedin.com/in/anjigolla/', education: 'B.Tech in Computer Science, IIIT Dharwad', focus: 'Owns core application development end to end, driving feature architecture, integrations and code quality across the stack.', details: ['Leads the build of key application features from planning through deployment.', 'Sets technical direction for integrations, APIs and code quality standards.', 'Works closely with the project lead to keep delivery aligned with business goals.'], skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'API integration', 'Technical ownership'] },
  { name: 'Himanshu Shekhar', role: 'Backend Developer', initials: 'HS', image: '/images/team/himanshu-shekhar.jpg', imageOrigin: '50% 100%', imageZoom: 1.6, linkedin: 'https://www.linkedin.com/in/himanshu-shekhar-83493b231/', education: 'B.Tech in Computer Science, IIIT Dharwad', focus: 'Handles backend planning, API structure, database workflows and integration support for advanced website requirements.', details: ['Plans server-side logic for projects that need persistent data or integrations.', 'Supports API design, database flow and backend implementation discussions.', 'Helps keep technical scope realistic before advanced features are quoted.'], skills: ['Backend development', 'API planning', 'Database workflows', 'Integration support', 'Server-side logic'] },
  { name: 'Divyanshu Pal', role: 'Frontend Developer', initials: 'DP', image: '/images/team/divyanshu-pal.jpg', imageOrigin: '40% 54%', imageZoom: 1.8, linkedin: 'https://www.linkedin.com/in/divyanshu-pal-906539202/', education: 'B.Tech in Computer Science, IIIT Una', focus: 'Builds responsive user interfaces, reusable components and polished page experiences across devices.', details: ['Focuses on layout quality, component reuse and interaction details.', 'Supports performance-conscious frontend implementation.', 'Helps translate approved designs into clean browser experiences.'], skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Responsive UI'] },
  { name: 'Muskan', role: 'Quality Assurance Specialist', initials: 'M', image: '/images/team/muskan.svg', linkedin: 'https://www.linkedin.com/in/muskan-08a6b1254/', education: 'B.Tech in Computer Science, IIIT Una', focus: 'Reviews user flows, responsive layouts, forms, CTAs and release readiness before launch.', details: ['Checks launch-critical paths such as enquiry forms, call buttons and WhatsApp links.', 'Reviews responsive behavior across common screen sizes.', 'Documents issues clearly so fixes can be verified before launch.'], skills: ['Manual testing', 'Bug reporting', 'Responsive QA', 'Form validation checks', 'Release review'] },
];

export const categoriesServed = [
  { label: 'Small businesses', icon: BriefcaseBusiness },
  { label: 'Manufacturers', icon: Factory },
  { label: 'Exporters', icon: Building2 },
  { label: 'Service companies', icon: BarChart3 },
  { label: 'Creative professionals', icon: Palette },
  { label: 'Local brands', icon: Search },
];

export function serviceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
export function industryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
export function projectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
