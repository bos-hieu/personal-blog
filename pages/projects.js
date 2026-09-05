import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import { PageSEO } from '@/components/SEO'
import ProjectCard from '@/components/ProjectCard'
import { Analytics } from '@vercel/analytics/react'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="rule-hair mb-10 pb-6">
        <p className="eyebrow mb-2">A working catalogue</p>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-slate-800 dark:text-slate-100 sm:text-4xl">
          Projects
        </h1>
        <p className="mt-2 max-w-2xl text-lg text-slate-500 dark:text-slate-400">
          Systems built, shipped and maintained — with the tools each one asked for.
        </p>
      </div>
      <div className="space-y-10">
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
      <Analytics />
    </>
  )
}
