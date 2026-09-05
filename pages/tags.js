import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'
import { Analytics } from '@vercel/analytics/react'

export async function getStaticProps() {
  const tags = await getAllTags('blog')

  return { props: { tags } }
}

export default function Tags({ tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSEO title={`Tags - ${siteMetadata.author}`} description="Things I blog about" />
      <div className="mb-10 border-b border-paper-400 pb-8 dark:border-ink-600">
        <p className="eyebrow mb-3">The index</p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink-800 dark:text-paper-100 sm:text-5xl">
          Tags
        </h1>
      </div>
      <ul className="columns-1 gap-10 sm:columns-2">
        {Object.keys(tags).length === 0 && (
          <li className="font-serif italic text-ink-500 dark:text-paper-500">No tags found.</li>
        )}
        {sortedTags.map((t) => (
          <li
            key={t}
            className="mb-2 break-inside-avoid border-b border-paper-300 dark:border-ink-700"
          >
            <Link
              href={`/tags/${kebabCase(t)}`}
              className="flex items-baseline justify-between py-2 font-serif text-ink-700 transition-colors hover:text-primary-700 dark:text-paper-300 dark:hover:text-primary-300"
            >
              <span>{t}</span>
              <span className="eyebrow">{tags[t]}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="ornament">
        <span />
      </div>
      <Analytics />
    </>
  )
}
