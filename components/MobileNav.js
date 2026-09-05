import { useState } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  // Flatten the dropdown groups — a printed index has no submenus.
  const links = headerNavLinks.flatMap((link) => (link.type === 'dropdown' ? link.links : [link]))

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="ml-2 h-8 w-8 text-ink-700 dark:text-paper-200"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        {navShow ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer select-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer select-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
      {/* The clipping wrapper keeps the off-canvas panel from widening the page. */}
      <div
        className={`fixed inset-0 z-40 overflow-hidden ${navShow ? '' : 'pointer-events-none'}`}
        aria-hidden={!navShow}
      >
        <div
          className={`absolute inset-y-0 right-0 w-full transform border-l border-paper-400 bg-paper duration-300 ease-in-out dark:border-ink-600 dark:bg-ink-900 ${
            navShow ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-paper-400 px-8 py-4 dark:border-ink-600">
            <span className="eyebrow">Contents</span>
            <button
              type="button"
              aria-label="Close Menu"
              className="h-8 w-8 text-ink-700 dark:text-paper-200"
              onClick={onToggleNav}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="px-8 py-4">
            {links.map((link, i) => (
              <div
                key={`${link.href}-${i}`}
                className="border-b border-paper-300 py-4 dark:border-ink-700"
              >
                <Link
                  href={link.href}
                  className="flex items-baseline justify-between font-display text-2xl text-ink-800 dark:text-paper-100"
                  onClick={onToggleNav}
                >
                  <span>{link.title}</span>
                  <span className="eyebrow text-brass-500">{String(i + 1).padStart(2, '0')}</span>
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default MobileNav
