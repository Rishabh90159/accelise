import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumbs, CTASection, FAQSection, JsonLd, PageHero } from '@/components/site';
import { blogPosts, postBySlug, siteConfig, slugUrl } from '@/lib/content';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = postBySlug(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt, alternates: { canonical: `/blog/${post.slug}` }, openGraph: { title: post.title, description: post.excerpt, type: 'article' } };
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = postBySlug(params.slug);
  if (!post) notFound();
  return (
    <main>
      <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />
      <PageHero eyebrow="Website guide" title={post.title} text={post.excerpt} />
      <article className="section bg-white">
        <div className="container grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="h-fit rounded-lg border border-slate-200 bg-slate-50 p-5"><h2 className="font-extrabold text-[#0b1b3a]">Table of contents</h2><ol className="mt-4 grid gap-2 text-sm text-slate-700">{post.sections.map(([heading]) => <li key={heading}><a className="link-underline" href={`#${heading.toLowerCase().replaceAll(' ', '-')}`}>{heading}</a></li>)}</ol></aside>
          <div className="grid gap-8">
            {post.sections.map(([heading, body]) => <section id={heading.toLowerCase().replaceAll(' ', '-')} key={heading}><h2 className="text-2xl font-extrabold text-[#0b1b3a]">{heading}</h2><p className="mt-3 leading-8 text-slate-600">{body}</p></section>)}
          </div>
        </div>
      </article>
      <FAQSection items={post.faqs} />
      <CTASection title="Need help planning your website?" />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Article', headline: post.title, description: post.excerpt, datePublished: post.date, author: { '@type': 'Person', name: siteConfig.founder }, publisher: { '@type': 'Organization', name: siteConfig.name }, mainEntityOfPage: slugUrl(`/blog/${post.slug}`) }} />
    </main>
  );
}
