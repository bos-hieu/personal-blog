import Link from '@/components/Link'

const ReadingListCard = ({ href, title }) => (
  <li className="border-b border-paper-400 py-4 dark:border-ink-600">
    <Link
      href={href}
      className="font-display text-lg text-ink-800 transition-colors hover:text-primary-700 dark:text-paper-100 dark:hover:text-primary-300"
    >
      {title}
    </Link>
  </li>
)

export default ReadingListCard
