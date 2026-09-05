import Image from './Image'
import Link from './Link'
import { BsGithub } from 'react-icons/bs'
import { MdOutlineLink } from 'react-icons/md'

const ProjectCard = ({ title, description, imgSrc, href, tools, deployed }) => (
  <article className="paper-panel group flex flex-col gap-6 p-5 transition-colors hover:border-primary-300 dark:hover:border-primary-700 sm:flex-row sm:p-6">
    {imgSrc && (
      <div className="w-full shrink-0 self-start overflow-hidden border border-paper-400 dark:border-ink-600 sm:w-56">
        <Image
          title={title}
          alt={title}
          src={imgSrc}
          width={1200}
          height={630}
          layout="responsive"
          placeholder="blur"
          objectFit="cover"
          blurDataURL={imgSrc}
          quality={50}
          className="transition-all duration-500 group-hover:scale-105"
        />
      </div>
    )}

    <div className="flex flex-1 flex-col gap-3">
      <h3 className="font-display text-lg font-bold leading-snug text-ink-800 dark:text-paper-100">
        {title}
      </h3>
      <p className="font-serif text-base leading-relaxed text-ink-600 dark:text-paper-300">
        {description}
      </p>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        {tools.map((tool, index) => (
          <span
            key={`${tool}-${index}`}
            className="font-sans text-[0.65rem] uppercase tracking-caps text-ink-400 dark:text-paper-500"
          >
            {tool}
          </span>
        ))}
      </div>

      {(href || deployed) && (
        <div className="mt-auto flex items-center gap-4 border-t border-paper-300 pt-3 dark:border-ink-700">
          {href && (
            <a
              title="Source Code on GitHub"
              target="_blank"
              rel="noopener noreferrer"
              href={href}
              className="text-ink-500 transition-colors hover:text-primary-600 dark:text-paper-500 dark:hover:text-primary-300"
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
              className="text-ink-500 transition-colors hover:text-primary-600 dark:text-paper-500 dark:hover:text-primary-300"
            >
              <MdOutlineLink className="h-5 w-5" />
            </a>
          )}
        </div>
      )}
    </div>
  </article>
)

export default ProjectCard
