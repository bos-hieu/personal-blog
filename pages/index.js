import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Hero from '@/components/Hero'
import RecentProjects from '@/components/RecentProjects'
import Skills from '@/components/Skills'
import SectionHeading from '@/components/SectionHeading'
import { Analytics } from '@vercel/analytics/react'

const MAX_DISPLAY = 6

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <Hero />
      <Skills />
      <RecentProjects MAX_PROJECTS="4" />

      <section>
        <SectionHeading
          kicker="Chapter III"
          title="From the Notebook"
          action={
            posts.length > MAX_DISPLAY && (
              <Link href="/posts" className="eyebrow link-underline" aria-label="all posts">
                All entries &rarr;
              </Link>
            )
          }
        />

        <div className="grid grid-cols-1 border-l border-t border-paper-400 dark:border-ink-600 sm:grid-cols-2">
          {!posts.length && (
            <p className="border-b border-r border-paper-400 p-6 italic dark:border-ink-600">
              No posts found.
            </p>
          )}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary } = frontMatter
            return (
              <Link
                key={slug}
                href={`/blog/${slug}`}
                className="group flex h-full flex-col border-b border-r border-paper-400 p-6 transition-colors hover:bg-paper-100 dark:border-ink-600 dark:hover:bg-ink-800"
              >
                <p className="eyebrow mb-3">
                  <time dateTime={date}>{formatDate(date)}</time>
                </p>
                <h3 className="mb-2 font-display text-lg font-bold leading-snug text-ink-800 transition-colors group-hover:text-primary-700 dark:text-paper-100 dark:group-hover:text-primary-300">
                  {title}
                </h3>
                <p className="font-serif text-base leading-relaxed text-ink-600 dark:text-paper-300">
                  {summary}
                </p>
                <span className="eyebrow mt-4 text-primary-600 dark:text-primary-300">
                  Read on &rarr;
                </span>
              </Link>
            )
          })}
        </div>
      </section>
      <div className="ornament">
        <span />
      </div>
      <Analytics />
    </>
  )
}
