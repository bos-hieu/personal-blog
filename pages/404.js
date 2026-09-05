import Link from '@/components/Link'

export default function FourZeroFour() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center md:py-28">
      <p className="eyebrow mb-4">Page not found</p>
      <h1 className="font-display text-7xl font-bold tracking-tight text-ink-800 dark:text-paper-100 md:text-8xl">
        404
      </h1>
      <div className="my-6 flex items-center gap-3">
        <span className="h-px w-12 bg-paper-400 dark:bg-ink-600" />
        <span className="h-1.5 w-1.5 rotate-45 bg-brass-500" />
        <span className="h-px w-12 bg-paper-400 dark:bg-ink-600" />
      </div>
      <p className="max-w-md font-serif text-lg italic text-ink-600 dark:text-paper-300">
        This page appears to have been lost in the press. The rest of the collection is still in
        order.
      </p>
      <Link
        href="/"
        className="mt-8 border border-ink-800 px-6 py-2 font-sans text-xs uppercase tracking-caps text-ink-800 transition-colors hover:border-primary-600 hover:text-primary-600 dark:border-paper-300 dark:text-paper-200 dark:hover:border-primary-300 dark:hover:text-primary-300"
      >
        Back to the front page
      </Link>
    </div>
  )
}
