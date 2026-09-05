import readingListData from '@/data/readingListData'
import ReadingListCard from '@/components/ReadingListCard'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function ReadingList() {
  return (
    <>
      <PageSEO
        title={`Reading List - ${siteMetadata.author}`}
        description="Articles and books worth keeping"
      />
      <div className="mb-6 border-b border-paper-400 pb-8 dark:border-ink-600">
        <p className="eyebrow mb-3">Marginalia</p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink-800 dark:text-paper-100 sm:text-5xl">
          Reading List
        </h1>
        <p className="mt-4 max-w-2xl font-serif text-lg italic text-ink-500 dark:text-paper-500">
          Pieces I return to, kept here so I can find them again.
        </p>
      </div>
      <ul>
        {readingListData.map((r) => (
          <ReadingListCard key={r.href} href={r.href} title={r.title} />
        ))}
      </ul>
      <div className="ornament">
        <span />
      </div>
    </>
  )
}
