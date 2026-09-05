import Link from '@/components/Link'
import ScrollTop from '@/components/ScrollTop'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { useEffect, useRef, useState } from 'react'

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children, toc }) {
  const { slug, date, title, tags, readingTime } = frontMatter
  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTop />
      <article>
        {/* Title page: kicker, headline, byline — all centred between rules. */}
        <header className="rule-double border-t border-paper-400 py-10 text-center dark:border-ink-600">
          <p className="eyebrow mb-4">
            <time dateTime={date}>
              {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
            </time>
          </p>
          <h1 className="mx-auto max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-ink-800 dark:text-paper-100 sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-paper-400 dark:bg-ink-600" />
            <span className="h-1.5 w-1.5 rotate-45 bg-brass-500" />
            <span className="h-px w-10 bg-paper-400 dark:bg-ink-600" />
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {authorDetails.map((author) => (
              <div key={author.name} className="flex items-center gap-2">
                {author.avatar && (
                  <Image
                    src={author.avatar}
                    width="28px"
                    height="28px"
                    alt="avatar"
                    className="h-7 w-7 rounded-full grayscale"
                  />
                )}
                <span className="eyebrow">{author.name}</span>
              </div>
            ))}
            <span className="eyebrow">{readingTime.words} words</span>
            <span className="eyebrow">{readingTime.text}</span>
          </div>
        </header>

        <div
          className="pb-8 xl:grid xl:grid-cols-4 xl:gap-x-10"
          style={{ gridTemplateRows: 'auto 1fr' }}
        >
          <div className="prose max-w-none pb-8 pt-10 dark:prose-dark xl:col-span-3 xl:col-start-1 xl:row-span-2">
            {children}
          </div>

          <footer className="xl:col-start-4 xl:row-start-1">
            <div className="divide-y divide-paper-400 border-t border-paper-400 text-sm dark:divide-ink-600 dark:border-ink-600 xl:border-t-0">
              {tags && (
                <div className="py-6">
                  <h2 className="eyebrow mb-2">Filed under</h2>
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                </div>
              )}
              {(next || prev) && (
                <div className="flex flex-col gap-6 py-6 sm:flex-row sm:justify-between xl:flex-col">
                  {prev && (
                    <div>
                      <h2 className="eyebrow mb-1">Previous article</h2>
                      <Link
                        href={`/blog/${prev.slug}`}
                        className="link-underline font-display text-base text-ink-800 dark:text-paper-100"
                      >
                        {prev.title}
                      </Link>
                    </div>
                  )}
                  {next && (
                    <div>
                      <h2 className="eyebrow mb-1">Next article</h2>
                      <Link
                        href={`/blog/${next.slug}`}
                        className="link-underline font-display text-base text-ink-800 dark:text-paper-100"
                      >
                        {next.title}
                      </Link>
                    </div>
                  )}
                </div>
              )}
              <div className="py-6">
                <Link href="/posts" className="eyebrow link-underline">
                  &larr; Back to all posts
                </Link>
                <div className="hidden xl:block">
                  <TocComponent toc={toc} />
                </div>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </SectionContainer>
  )
}

function TocComponent({ toc }) {
  const [activeId, setActiveId] = useState()
  useIntersectionObserver(setActiveId)
  const [TOC, setTOC] = useState([])
  useEffect(() => {
    let etoc = toc.map((e) => ({ ...e, children: [] }))
    for (let i = etoc.length - 1; i >= 0; i--) {
      if (etoc[i].depth == 1) continue
      for (let j = i; j >= 0; j--) {
        if (etoc[i].depth - etoc[j].depth == 1) {
          etoc[j].children.unshift(etoc[i])
          break
        }
      }
    }
    setTOC(etoc.filter((e) => e.depth == 1))
  }, [toc])

  let RenderToc = ({ item, activeId }) => {
    const isActive = (e) => {
      if ('#' + activeId === e.url) return true
      for (let i of e.children) if (isActive(i)) return true
      return false
    }
    return item.map((e, i) => (
      <div key={i}>
        <Link href={e.url}>
          <p
            className={`border-l py-1 pl-3 font-serif transition-colors ${
              isActive(e)
                ? 'border-primary-500 text-primary-700 dark:text-primary-300'
                : 'border-paper-400 text-ink-500 hover:text-ink-800 dark:border-ink-600 dark:text-paper-500 dark:hover:text-paper-200'
            }`}
          >
            {e.value}
          </p>
        </Link>
        {isActive(e) && e.children.length > 0 && (
          <div className="ml-4">
            <RenderToc item={e.children} activeId={activeId} />
          </div>
        )}
      </div>
    ))
  }

  return (
    <nav className="sticky top-32 mt-8 text-sm">
      <p className="eyebrow mb-3">Table of contents</p>
      <RenderToc item={TOC} activeId={activeId} />
    </nav>
  )
}

const useIntersectionObserver = (setActiveId) => {
  const headingElementsRef = useRef({})
  useEffect(() => {
    const callback = (headings) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement
        return map
      }, headingElementsRef.current)

      const visibleHeadings = []
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key]
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement)
      })

      const getIndexFromId = (id) => headingElements.findIndex((heading) => heading.id === id)

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id)
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
        )
        setActiveId(sortedVisibleHeadings[0].target.id)
      }
    }

    const observer = new IntersectionObserver(callback, {
      rootMargin: '0px 0px -40% 0px',
    })

    const headingElements = Array.from(document.querySelectorAll('h1, h2, h3'))

    headingElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [setActiveId])
}
