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
      <div className="rule-hair mb-10 pb-6">
        <p className="eyebrow mb-2">The index</p>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-slate-800 dark:text-slate-100 sm:text-4xl">
          Tags
        </h1>
      </div>
      <ul className="columns-1 gap-10 sm:columns-2">
        {Object.keys(tags).length === 0 && (
          <li className="text-slate-500 dark:text-slate-400">No tags found.</li>
        )}
        {sortedTags.map((t) => (
          <li
            key={t}
            className="mb-2 break-inside-avoid border-b border-slate-200 dark:border-slate-800"
          >
            <Link
              href={`/tags/${kebabCase(t)}`}
              className="flex items-baseline justify-between py-2 text-slate-700 transition-colors hover:text-primary-700 dark:text-slate-300 dark:hover:text-primary-300"
            >
              <span>{t}</span>
              <span className="eyebrow">{tags[t]}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Analytics />
    </>
  )
}
