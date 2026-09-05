export default function PageTitle({ children }) {
  return (
    <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink-800 dark:text-paper-100 sm:text-4xl md:text-5xl">
      {children}
    </h1>
  )
}
