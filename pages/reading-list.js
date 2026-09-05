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
      <div className="rule-hair mb-6 pb-6">
        <p className="eyebrow mb-2">Marginalia</p>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-slate-800 dark:text-slate-100 sm:text-4xl">
          Reading List
        </h1>
        <p className="mt-2 max-w-2xl text-lg text-slate-500 dark:text-slate-400">
          Pieces I return to, kept here so I can find them again.
        </p>
      </div>
      <ul>
        {readingListData.map((r) => (
          <ReadingListCard key={r.href} href={r.href} title={r.title} />
        ))}
      </ul>
    </>
  )
}
