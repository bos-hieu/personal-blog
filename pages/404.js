import Link from '@/components/Link'

export default function FourZeroFour() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center md:py-28">
      <p className="eyebrow mb-4">Page not found</p>
      <h1 className="font-display text-7xl font-semibold tracking-tight text-slate-800 dark:text-slate-100 md:text-8xl">
        404
      </h1>
      <div className="my-6 flex items-center gap-3">
        <span className="h-px w-12 bg-slate-300 dark:bg-slate-700" />
        <span className="h-1.5 w-1.5 rotate-45 bg-primary-500" />
        <span className="h-px w-12 bg-slate-300 dark:bg-slate-700" />
      </div>
      <p className="max-w-md text-lg text-slate-600 dark:text-slate-300">
        This page appears to have been lost in the press. The rest of the collection is still in
        order.
      </p>
      <Link
        href="/"
        className="mt-8 border border-slate-800 px-6 py-2 font-sans text-xs uppercase tracking-caps text-slate-800 transition-colors hover:border-primary-600 hover:text-primary-600 dark:border-slate-200 dark:text-slate-100 dark:hover:border-primary-300 dark:hover:text-primary-300"
      >
        Back to the front page
      </Link>
    </div>
  )
}
