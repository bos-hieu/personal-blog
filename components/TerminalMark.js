import { useEffect, useLayoutEffect, useState } from 'react'

const MARK = '~/trung-hieu'
const TYPE_MS = 70

// Typing has to begin before the first paint after hydration, or the finished
// mark shows and then clears itself; useLayoutEffect only exists in the browser.
const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

/**
 * Wordmark as a shell prompt that types itself out on load, caret trailing.
 * The server renders it empty so it never flashes complete before typing —
 * `noscript` covers browsers without JavaScript, and anyone who asked for
 * reduced motion gets the finished mark instead of the animation.
 */
export default function TerminalMark() {
  const [typed, setTyped] = useState('')

  useIsomorphicLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTyped(MARK)
      return
    }

    let index = 0
    const timer = setInterval(() => {
      index += 1
      setTyped(MARK.slice(0, index))
      if (index >= MARK.length) clearInterval(timer)
    }, TYPE_MS)

    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className="flex items-baseline font-mono text-base text-slate-700 transition-colors hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-300 sm:text-lg"
      aria-hidden="true"
    >
      <noscript>
        <span className="text-slate-500 dark:text-slate-400">~/</span>
        <span className="font-medium">trung-hieu</span>
      </noscript>
      <span className="text-slate-500 dark:text-slate-400">{typed.slice(0, 2)}</span>
      <span className="font-medium">{typed.slice(2)}</span>
      <span className="caret ml-0.5 inline-block h-[0.95em] w-[0.5em] shrink-0 translate-y-[0.1em] bg-primary-500 dark:bg-primary-400" />
    </div>
  )
}
