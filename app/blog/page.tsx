import Link from 'next/link';
import type { Metadata } from 'next';
import { Breadcrumbs, CTASection, PageHero } from '@/components/site';
import { blogPosts } from '@/lib/content';

export const metadata: Metadata = { title: 'Website Development Blog', description: 'SEO-focused guides about website cost, catalogue websites, redesigns, domain hosting and business website planning in India.', alternates: { canonical: '/blog' } };

export default function BlogPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: 'Blog' }]} />
      <PageHero eyebrow="Blog" title="Practical website guides for Indian businesses" text="Clear articles for owners comparing costs, pages, redesign timing and lead-generation website structures." />
      <section className="section bg-white"><div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">{blogPosts.map((post) => <article className="rounded-lg border border-slate-200 p-6 shadow-sm" key={post.slug}><p className="text-sm font-bold text-[#315eef]">{post.date}</p><h2 className="mt-3 text-xl font-extrabold text-[#0b1b3a]">{post.title}</h2><p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p><Link className="mt-5 inline-flex font-bold text-[#315eef]" href={`/blog/${post.slug}`}>Read article</Link></article>)}</div></section>
      <CTASection />
    </main>
  );
}
