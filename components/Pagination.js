import Link from '@/components/Link'

export default function Pagination({ totalPages, currentPage }) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  return (
    <nav className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6 dark:border-slate-700">
      {prevPage ? (
        <Link
          href={currentPage - 1 === 1 ? `/posts` : `/blog/page/${currentPage - 1}`}
          className="eyebrow link-underline"
          rel="previous"
        >
          &larr; Previous
        </Link>
      ) : (
        <span className="eyebrow opacity-40">&larr; Previous</span>
      )}
      <span className="eyebrow">
        Page {currentPage} of {totalPages}
      </span>
      {nextPage ? (
        <Link href={`/blog/page/${currentPage + 1}`} className="eyebrow link-underline" rel="next">
          Next &rarr;
        </Link>
      ) : (
        <span className="eyebrow opacity-40">Next &rarr;</span>
      )}
    </nav>
  )
}
