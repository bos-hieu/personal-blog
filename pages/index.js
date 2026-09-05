import NextImage from 'next/image'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Tag from '@/components/Tag'
import ProjectCard from '@/components/ProjectCard'
import portraitImage from '../public/static/images/avatar.jpeg'
import { Analytics } from '@vercel/analytics/react'

const MAX_ENTRIES = 5
const MAX_PROJECTS = 4

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

function RailHeading({ children }) {
  return (
    <h2 className="eyebrow mb-3 border-b border-slate-200 pb-2 dark:border-slate-700">
      {children}
    </h2>
  )
}

export default function Home({ posts }) {
  const [lead, ...rest] = posts
  const entries = rest.slice(0, MAX_ENTRIES)
  const projects = projectsData.slice(0, MAX_PROJECTS)

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <Hero />

      {/* Lead article — the front page leads with the newest entry. */}
      {lead && (
        <article className="rule-double py-10">
          <p className="eyebrow mb-3">
            Latest entry <span className="mx-2">/</span>
            <time dateTime={lead.date}>{formatDate(lead.date)}</time>
          </p>
          <h2 className="max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            <Link
              href={`/blog/${lead.slug}`}
              className="text-slate-800 transition-colors hover:text-primary-700 dark:text-slate-100 dark:hover:text-primary-300"
            >
              {lead.title}
            </Link>
          </h2>
          <p className="mt-4 max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-300">
            {lead.summary}
          </p>
          <div className="mt-5 flex flex-wrap items-baseline gap-x-6 gap-y-2">
            <Link
              href={`/blog/${lead.slug}`}
              className="eyebrow link-underline text-primary-600 dark:text-primary-300"
            >
              Read the article &rarr;
            </Link>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {lead.tags?.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          </div>
        </article>
      )}

      {/* Index column with a sidebar rail, in the manner of a printed front page. */}
      <div className="grid grid-cols-1 gap-x-12 gap-y-12 pt-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="eyebrow mb-1 border-b border-slate-200 pb-2 dark:border-slate-700">
            More from the notebook
          </h2>
          {!entries.length && (
            <p className="py-6 text-slate-500 dark:text-slate-400">Nothing else published yet.</p>
          )}
          <ul className="divide-y divide-slate-200 dark:divide-slate-800">
            {entries.map((frontMatter) => {
              const { slug, date, title, summary } = frontMatter
              return (
                <li key={slug} className="py-5">
                  <Link href={`/blog/${slug}`} className="group block">
                    <p className="eyebrow mb-1">
                      <time dateTime={date}>{formatDate(date)}</time>
                    </p>
                    <h3 className="font-display text-lg font-semibold leading-snug text-slate-800 transition-colors group-hover:text-primary-700 dark:text-slate-100 dark:group-hover:text-primary-300">
                      {title}
                    </h3>
                    <p className="clamp-2 mt-1 leading-relaxed text-slate-600 dark:text-slate-300">
                      {summary}
                    </p>
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="border-t border-slate-200 pt-5 dark:border-slate-800">
            <Link href="/posts" className="eyebrow link-underline" aria-label="all posts">
              The full archive &rarr;
            </Link>
          </div>
        </div>

        <aside className="space-y-10 lg:col-span-1">
          <section>
            <RailHeading>About the author</RailHeading>
            <div className="border border-slate-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-800">
              <NextImage
                src={portraitImage}
                alt="portrait of Trung Hieu"
                sizes="(min-width: 1024px) 16rem, 100vw"
                className="aspect-[3/2] object-cover grayscale-[.15]"
              />
            </div>
            <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
              Eight years of backend development, system architecture and team leadership —
              currently a postgraduate in cloud computing and blockchain, writing down what I learn.
            </p>
            <Link href="/about" className="eyebrow link-underline mt-3 inline-block">
              Read the full biography &rarr;
            </Link>
          </section>

          <section>
            <RailHeading>Working with</RailHeading>
            <Skills />
          </section>
        </aside>
      </div>

      {/* Work, set as its own band so it reads apart from the writing. */}
      <section className="mt-16 border-t border-slate-200 pt-8 dark:border-slate-700">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-800 dark:text-slate-100">
            Selected work
          </h2>
          <Link href="/projects" className="eyebrow link-underline" aria-label="all projects">
            Every project &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {projects.map((d) => (
            <ProjectCard
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
              tools={d.tools}
              deployed={d.deployed}
              compact
            />
          ))}
        </div>
      </section>
      <Analytics />
    </>
  )
}
