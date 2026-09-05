import Link from '@/components/Link'

const ReadingListCard = ({ href, title }) => (
  <li className="border-b border-slate-200 py-4 dark:border-slate-700">
    <Link
      href={href}
      className="font-display text-lg text-slate-800 transition-colors hover:text-primary-700 dark:text-slate-100 dark:hover:text-primary-300"
    >
      {title}
    </Link>
  </li>
)

export default ReadingListCard
