import Image from './Image'
import Link from './Link'

const ToolsCard = ({ name, description, link, id, labels }) => {
  return (
    <article className="paper-panel flex h-full gap-4 p-4 transition-colors hover:border-primary-300 dark:hover:border-primary-700">
      <div className="shrink-0">
        <Link href={link}>
          <span className="block border border-paper-400 bg-paper-50 p-1 dark:border-ink-600 dark:bg-ink-900">
            <Image
              alt={id}
              src={`/static/images/toolsImages/${id}.png`}
              width="56px"
              height="56px"
            />
          </span>
        </Link>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-display text-base font-bold">
          <Link
            href={link}
            className="text-ink-800 transition-colors hover:text-primary-700 dark:text-paper-100 dark:hover:text-primary-300"
          >
            {name}
          </Link>
        </h3>
        <p className="font-serif text-sm leading-relaxed text-ink-600 dark:text-paper-300">
          {description}
        </p>
        <div className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-2">
          {labels.map((tag) => (
            <span
              key={tag}
              className="font-sans text-[0.65rem] uppercase tracking-caps text-ink-400 dark:text-paper-500"
            >
              {tag.split(' ').join('-')}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ToolsCard
