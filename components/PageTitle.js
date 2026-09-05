export default function PageTitle({ children }) {
  return (
    <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight text-slate-800 dark:text-slate-100 sm:text-4xl md:text-5xl">
      {children}
    </h1>
  )
}
