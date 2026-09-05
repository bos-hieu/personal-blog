import Link from '@/components/Link'
import ScrollTop from '@/components/ScrollTop'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { useEffect, useRef, useState } from 'react'

const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

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
        {/* Headline block, ranged left with the text it introduces. */}
        <header className="rule-hair max-w-3xl pb-8">
          <p className="eyebrow mb-3">
            <time dateTime={date}>
              {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
            </time>
            <span className="mx-2 text-brass-500">/</span>
            {readingTime.text}
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink-800 dark:text-paper-100 sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
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
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {tags?.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          </div>
        </header>

        {/* Contents rail on the left, so the article keeps a single measure. */}
        <div className="lg:grid lg:grid-cols-4 lg:gap-x-12">
          <nav className="hidden lg:col-span-1 lg:block">
            <div className="sticky top-32 pt-10">
              <Link href="/posts" className="eyebrow link-underline">
                &larr; All posts
              </Link>
              <TocComponent toc={toc} />
            </div>
          </nav>

          <div className="lg:col-span-3">
            <div className="prose max-w-none pb-10 pt-10 dark:prose-dark">{children}</div>

            <footer className="border-t border-paper-400 pt-8 dark:border-ink-600">
              {(prev || next) && (
                <div className="grid grid-cols-1 gap-px bg-paper-400 dark:bg-ink-600 sm:grid-cols-2">
                  <div className="bg-paper p-5 dark:bg-ink-900">
                    {prev && (
                      <Link href={`/blog/${prev.slug}`} className="group block">
                        <p className="eyebrow mb-2">&larr; Previous</p>
                        <p className="font-display text-base leading-snug text-ink-800 transition-colors group-hover:text-primary-700 dark:text-paper-100 dark:group-hover:text-primary-300">
                          {prev.title}
                        </p>
                      </Link>
                    )}
                  </div>
                  <div className="bg-paper p-5 dark:bg-ink-900 sm:text-right">
                    {next && (
                      <Link href={`/blog/${next.slug}`} className="group block">
                        <p className="eyebrow mb-2">Next &rarr;</p>
                        <p className="font-display text-base leading-snug text-ink-800 transition-colors group-hover:text-primary-700 dark:text-paper-100 dark:group-hover:text-primary-300">
                          {next.title}
                        </p>
                      </Link>
                    )}
                  </div>
                </div>
              )}
              <div className="pt-8 lg:hidden">
                <Link href="/posts" className="eyebrow link-underline">
                  &larr; All posts
                </Link>
              </div>
            </footer>
          </div>
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
            className={`border-l py-1 pl-3 font-serif text-sm leading-snug transition-colors ${
              isActive(e)
                ? 'border-primary-500 text-primary-700 dark:text-primary-300'
                : 'border-paper-400 text-ink-500 hover:text-ink-800 dark:border-ink-600 dark:text-paper-500 dark:hover:text-paper-200'
            }`}
          >
            {e.value}
          </p>
        </Link>
        {isActive(e) && e.children.length > 0 && (
          <div className="ml-3">
            <RenderToc item={e.children} activeId={activeId} />
          </div>
        )}
      </div>
    ))
  }

  if (!TOC.length) return null

  return (
    <div className="mt-8">
      <p className="eyebrow mb-3">Contents</p>
      <RenderToc item={TOC} activeId={activeId} />
    </div>
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
