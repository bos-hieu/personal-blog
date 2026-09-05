import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

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

  // Flatten the dropdown groups so every destination is one tap away.
  const links = headerNavLinks.flatMap((link) => (link.type === 'dropdown' ? link.links : [link]))

  const panel = (
    /* Portalled to the body: the header sets backdrop-filter, which would
       otherwise make it the containing block for this fixed panel and clip it
       to the height of the header. The wrapper clips the off-canvas slide so
       it cannot widen the page. */
    <div
      className={`fixed inset-0 z-50 overflow-hidden sm:hidden ${
        navShow ? '' : 'pointer-events-none'
      }`}
      aria-hidden={!navShow}
    >
      <div
        className={`absolute inset-y-0 right-0 w-full transform border-l border-slate-200 bg-slate-50 duration-300 ease-in-out dark:border-slate-700 dark:bg-slate-900 ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-8 py-4 dark:border-slate-700">
          <span className="eyebrow">Contents</span>
          <button
            type="button"
            aria-label="Close Menu"
            className="h-8 w-8 text-slate-700 dark:text-slate-100"
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
              className="border-b border-slate-200 py-4 dark:border-slate-800"
            >
              <Link
                href={link.href}
                className="flex items-baseline justify-between font-display text-2xl text-slate-800 dark:text-slate-100"
                onClick={onToggleNav}
              >
                <span>{link.title}</span>
                <span className="eyebrow">{String(i + 1).padStart(2, '0')}</span>
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="ml-2 h-8 w-8 text-slate-700 dark:text-slate-100"
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
      {mounted && createPortal(panel, document.body)}
    </div>
  )
}

export default MobileNav
