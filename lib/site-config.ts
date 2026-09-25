// Kept free of icon and page-content imports: client components import from here,
// so anything added to this file ships to the browser.

export const siteConfig = {
  name: 'Accelise',
  founder: 'Rishabh Gautam',
  position: 'Full Stack Developer and Project Lead',
  phone: '+91 9759790159',
  phoneHref: 'tel:+919759790159',
  phoneAlt: '+91 91336 00905',
  phoneAltHref: 'tel:+919133600905',
  whatsapp: '919133600905',
  email: 'team@accelise.com',
  emailHref: 'mailto:team@accelise.com',
  location: 'NCR Gurgaon & Hyderabad, India',
  serviceArea: 'India and international clients',
  portfolioUrl: 'https://rishabh-gautam-portfolio.vercel.app/',
  baseUrl: 'https://www.accelise.com',
  description:
    'Accelise is a focused web-development team combining frontend development, backend engineering, quality assurance and project communication to deliver reliable business websites and web applications.',
};

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/packages', label: 'Packages' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/team', label: 'Team' },
  { href: '/about', label: 'About' },
  { href: '/process', label: 'Process' },
  { href: '/contact', label: 'Contact' },
];

export function whatsappUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function consultationMessage(context = 'General consultation') {
  return `Hi ${siteConfig.name}, I would like a free consultation for: ${context}.`;
}
