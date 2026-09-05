import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="mb-10 border-b border-paper-400 pb-8 dark:border-ink-600">
        <p className="eyebrow mb-3">The Archive</p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink-800 dark:text-paper-100 sm:text-5xl">
          {title}
        </h1>
        <div className="relative mt-8 max-w-lg">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search the archive"
            className="block w-full border border-paper-400 bg-paper-50 px-4 py-2 font-serif text-base text-ink-700 placeholder:italic placeholder:text-ink-400 focus:border-primary-500 focus:ring-0 dark:border-ink-600 dark:bg-ink-800 dark:text-paper-200 dark:placeholder:text-paper-500"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-ink-400 dark:text-paper-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <ul className="divide-y divide-paper-400 dark:divide-ink-600">
        {!filteredBlogPosts.length && (
          <li className="py-8 font-serif italic text-ink-500 dark:text-paper-500">
            No posts found.
          </li>
        )}
        {displayPosts.map((frontMatter) => {
          const { slug, date, title, summary, tags } = frontMatter
          return (
            <li key={slug} className="py-8">
              <article className="space-y-3 xl:grid xl:grid-cols-4 xl:items-baseline xl:gap-6 xl:space-y-0">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="eyebrow">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </dl>
                <div className="space-y-3 xl:col-span-3">
                  <h2 className="font-display text-2xl font-bold leading-snug tracking-tight">
                    <Link
                      href={`/blog/${slug}`}
                      className="text-ink-800 transition-colors hover:text-primary-700 dark:text-paper-100 dark:hover:text-primary-300"
                    >
                      {title}
                    </Link>
                  </h2>
                  <p className="font-serif leading-relaxed text-ink-600 dark:text-paper-300">
                    {summary}
                  </p>
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
