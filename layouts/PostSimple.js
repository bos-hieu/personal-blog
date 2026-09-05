import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'

export default function PostLayout({ frontMatter, next, prev, children }) {
  const { date, title } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`} {...frontMatter} />
      <article>
        <header className="rule-hair max-w-3xl pb-8">
          <p className="eyebrow mb-3">
            <time dateTime={date}>{formatDate(date)}</time>
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink-800 dark:text-paper-100 sm:text-4xl md:text-5xl">
            {title}
          </h1>
        </header>

        <div className="prose max-w-none pb-8 pt-10 dark:prose-dark">{children}</div>

        <footer className="border-t border-paper-400 pt-6 dark:border-ink-600">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            {prev && (
              <Link href={`/blog/${prev.slug}`} className="eyebrow link-underline">
                &larr; {prev.title}
              </Link>
            )}
            {next && (
              <Link href={`/blog/${next.slug}`} className="eyebrow link-underline sm:text-right">
                {next.title} &rarr;
              </Link>
            )}
          </div>
        </footer>
      </article>
    </SectionContainer>
  )
}
