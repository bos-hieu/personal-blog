import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'

/** Group posts by year so the archive reads as a dated index, not a flat list. */
function groupByYear(posts) {
  const groups = []
  posts.forEach((post) => {
    const year = post.date ? new Date(post.date).getFullYear() : 'Undated'
    const last = groups[groups.length - 1]
    if (last && last.year === year) {
      last.posts.push(post)
    } else {
      groups.push({ year, posts: [post] })
    }
  })
  return groups
}

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  const groups = groupByYear(displayPosts)

  return (
    <>
      <div className="rule-hair flex flex-wrap items-end justify-between gap-x-8 gap-y-5 pb-6">
        <div>
          <p className="eyebrow mb-2">The archive</p>
          <h1 className="font-display text-3xl font-bold tracking-tight text-ink-800 dark:text-paper-100 sm:text-4xl">
            {title}
          </h1>
        </div>
        <div className="relative w-full max-w-xs">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search the archive"
            className="block w-full border-0 border-b border-paper-400 bg-transparent px-0 py-2 pr-8 font-serif text-base text-ink-700 placeholder:italic placeholder:text-ink-400 focus:border-primary-500 focus:ring-0 dark:border-ink-600 dark:text-paper-200 dark:placeholder:text-paper-500"
          />
          <svg
            className="absolute right-0 top-2.5 h-5 w-5 text-ink-400 dark:text-paper-500"
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

      {!filteredBlogPosts.length && (
        <p className="py-10 font-serif italic text-ink-500 dark:text-paper-500">No posts found.</p>
      )}

      {groups.map(({ year, posts: yearPosts }) => (
        <section key={year} className="grid grid-cols-1 gap-x-10 pt-10 md:grid-cols-4">
          <h2 className="mb-4 font-display text-2xl font-bold text-ink-300 dark:text-ink-500 md:col-span-1 md:mb-0">
            <span className="sticky top-32">{year}</span>
          </h2>
          <ul className="divide-y divide-paper-300 border-t border-paper-300 dark:divide-ink-700 dark:border-ink-700 md:col-span-3">
            {yearPosts.map(({ slug, date, title: postTitle, summary, tags }) => (
              <li key={slug} className="py-6">
                <Link href={`/blog/${slug}`} className="group block">
                  <p className="eyebrow mb-1">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </p>
                  <h3 className="font-display text-xl font-bold leading-snug text-ink-800 transition-colors group-hover:text-primary-700 dark:text-paper-100 dark:group-hover:text-primary-300">
                    {postTitle}
                  </h3>
                  <p className="mt-2 font-serif leading-relaxed text-ink-600 dark:text-paper-300">
                    {summary}
                  </p>
                </Link>
                <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}

      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
