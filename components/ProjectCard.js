import Image from './Image'
import { BsGithub } from 'react-icons/bs'
import { MdOutlineLink } from 'react-icons/md'

const linkClasses =
  'text-ink-500 transition-colors hover:text-primary-600 dark:text-paper-500 dark:hover:text-primary-300'

/**
 * `compact` is the front-page form — thumbnail above a clamped summary, sized
 * for a two-up grid. The full form is used on the projects page, where the
 * whole description is worth reading.
 */
const ProjectCard = ({ title, description, imgSrc, href, tools, deployed, compact }) => {
  const links = (
    <div className="mt-auto flex items-center gap-4 pt-4">
      {href && (
        <a
          title="Source Code on GitHub"
          target="_blank"
          rel="noopener noreferrer"
          href={href}
          className={linkClasses}
        >
          <BsGithub className="h-5 w-5" />
        </a>
      )}
      {deployed && (
        <a
          title="Live Preview"
          target="_blank"
          rel="noopener noreferrer"
          href={deployed}
          className={linkClasses}
        >
          <MdOutlineLink className="h-5 w-5" />
        </a>
      )}
    </div>
  )

  const toolList = (
    <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
      {tools.map((tool, index) => (
        <span
          key={`${tool}-${index}`}
          className="font-sans text-[0.65rem] uppercase tracking-caps text-ink-400 dark:text-paper-500"
        >
          {tool}
        </span>
      ))}
    </div>
  )

  if (compact) {
    return (
      <article className="group flex h-full flex-col">
        {imgSrc && (
          <div className="mb-4 overflow-hidden border border-paper-400 dark:border-ink-600">
            <Image
              title={title}
              alt={title}
              src={imgSrc}
              width={1200}
              height={630}
              layout="responsive"
              objectFit="cover"
              quality={50}
              className="transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <h3 className="font-display text-base font-bold leading-snug text-ink-800 dark:text-paper-100">
          {title}
        </h3>
        <p className="clamp-3 mt-2 font-serif text-base leading-relaxed text-ink-600 dark:text-paper-300">
          {description}
        </p>
        {toolList}
        {(href || deployed) && links}
      </article>
    )
  }

  return (
    <article className="group flex flex-col gap-6 border-b border-paper-400 pb-10 dark:border-ink-600 sm:flex-row">
      {imgSrc && (
        <div className="w-full shrink-0 self-start overflow-hidden border border-paper-400 dark:border-ink-600 sm:w-64">
          <Image
            title={title}
            alt={title}
            src={imgSrc}
            width={1200}
            height={630}
            layout="responsive"
            objectFit="cover"
            quality={50}
            className="transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col">
        <h3 className="font-display text-lg font-bold leading-snug text-ink-800 dark:text-paper-100">
          {title}
        </h3>
        <p className="mt-2 font-serif text-base leading-relaxed text-ink-600 dark:text-paper-300">
          {description}
        </p>
        {toolList}
        {(href || deployed) && links}
      </div>
    </article>
  )
}

export default ProjectCard
