/**
 * A section header set like a newspaper standfirst: a small-caps kicker,
 * the title in display type, and a hairline rule closing the block.
 */
export default function SectionHeading({ kicker, title, action }) {
  return (
    <div className="mb-8 border-b border-paper-400 pb-3 dark:border-ink-600">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          {kicker && <p className="eyebrow mb-1">{kicker}</p>}
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink-800 dark:text-paper-100 sm:text-3xl">
            {title}
          </h2>
        </div>
        {action}
      </div>
    </div>
  )
}
