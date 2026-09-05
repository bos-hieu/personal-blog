import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="font-sans text-[0.65rem] uppercase tracking-caps text-ink-400 transition-colors hover:text-primary-600 dark:text-paper-500 dark:hover:text-primary-300">
        {text}
      </a>
    </Link>
  )
}

export default Tag
