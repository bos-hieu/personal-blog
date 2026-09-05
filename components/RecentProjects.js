import projectsData from '@/data/projectsData'

import ProjectCard from '@/components/ProjectCard'
import AnimatedDiv from '@/components/framer-motion/AnimatedDiv'
import { FadeContainer } from '../lib/FramerMotionVariants'
import Link from '@/components/Link'
import SectionHeading from '@/components/SectionHeading'

const RecentProjects = ({ MAX_PROJECTS }) => {
  const projectsList = projectsData.slice(0, MAX_PROJECTS)

  return (
    <section className="mb-16">
      <SectionHeading
        kicker="Chapter II"
        title="Selected Works"
        action={
          <Link href="/projects" className="eyebrow link-underline" aria-label="all projects">
            The full record &rarr;
          </Link>
        }
      />
      <AnimatedDiv variants={FadeContainer} className="grid grid-cols-1 gap-6">
        {projectsList.map((d) => (
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
      </AnimatedDiv>
    </section>
  )
}

export default RecentProjects
