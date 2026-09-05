import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Fragment, useEffect, useRef, useState } from 'react'

const navLinkClasses =
  'eyebrow text-slate-600 transition-colors hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-300'

const LayoutWrapper = ({ children }) => {
  const [stuck, setStuck] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const cachedRef = ref.current
    const observer = new IntersectionObserver(
      ([e]) => {
        setStuck(e.intersectionRatio < 1)
      },
      { threshold: [1.0] }
    )
    observer.observe(cachedRef)
    return () => observer.unobserve(cachedRef)
  }, [ref])

  return (
    <>
      <header
        className={`top-n-1 backdrop sticky z-50 mb-10 w-full border-b border-slate-200 bg-slate-50/90 transition-shadow dark:border-slate-700 dark:bg-slate-900/90 ${
          stuck ? 'isSticky shadow-sm' : ''
        }`}
        ref={ref}
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          {/* Masthead: wordmark over a hairline rule, in the manner of a printed title page. */}
          <div className="flex items-center justify-between py-3">
            <Link href="/" aria-label={siteMetadata.author}>
              <div className="font-display text-xl font-semibold tracking-tight text-slate-800 transition-colors hover:text-primary-600 dark:text-slate-100 dark:hover:text-primary-300 sm:text-2xl">
                {siteMetadata.author}
              </div>
            </Link>
            <div className="flex items-center">
              <nav className="hidden sm:flex sm:items-center sm:gap-7">
                {headerNavLinks.map((link) => {
                  if (link.type !== 'dropdown') {
                    return (
                      <Link key={link.title} href={link.href} className={navLinkClasses}>
                        {link.title}
                      </Link>
                    )
                  }

                  return (
                    <Menu key={link.title} as="div" className="relative inline-block">
                      <Menu.Button className={`inline-flex items-center ${navLinkClasses}`}>
                        {link.title}
                        <ChevronDownIcon className="ml-1 h-4 w-4" aria-hidden="true" />
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 mt-3 w-44 origin-top-right border border-slate-200 bg-white py-1 shadow-md focus:outline-none dark:border-slate-700 dark:bg-slate-800">
                          {link.links.map((item) => (
                            <Menu.Item key={item.href}>
                              {({ active }) => (
                                <Link
                                  href={item.href}
                                  className={`block px-4 py-2 font-sans text-xs uppercase tracking-caps ${
                                    active
                                      ? 'bg-slate-100 text-primary-600 dark:bg-slate-700 dark:text-primary-300'
                                      : 'text-slate-600 dark:text-slate-300'
                                  }`}
                                >
                                  {item.title}
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  )
                })}
              </nav>
              <ThemeSwitch />
              <MobileNav />
            </div>
          </div>
          <div className="masthead-tagline hidden overflow-hidden border-t border-slate-200 py-2 dark:border-slate-800 sm:block">
            <p className="eyebrow text-center">{siteMetadata.headerTitle}</p>
          </div>
        </div>
      </header>
      <SectionContainer>
        <main className="mb-auto">{children}</main>
        <Footer />
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper
