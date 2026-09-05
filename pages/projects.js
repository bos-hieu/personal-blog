import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import { PageSEO } from '@/components/SEO'
import ProjectCard from '@/components/ProjectCard'
import { Analytics } from '@vercel/analytics/react'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="mb-10 border-b border-paper-400 pb-8 dark:border-ink-600">
        <p className="eyebrow mb-3">A working catalogue</p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink-800 dark:text-paper-100 sm:text-5xl">
          Projects
        </h1>
        <p className="mt-4 max-w-2xl font-serif text-lg italic text-ink-500 dark:text-paper-500">
          Systems built, shipped and maintained — with the tools each one asked for.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {projectsData.map((d) => (
          <ProjectCard
            key={d.title}
            title={d.title}
            description={d.description}
            imgSrc={d.imgSrc}
            href={d.href}
            tools={d.tools}
            deployed={d.deployed}
          />
        ))}
      </div>
      <div className="ornament">
        <span />
      </div>
      <Analytics />
    </>
  )
}
