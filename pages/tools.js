import ToolsGrid from '/components/ToolsGrid'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '/data/siteMetadata'
import { AiFillApple, AiOutlineMacCommand, AiOutlineDesktop } from 'react-icons/ai'
import { Tab } from '@headlessui/react'
import { Analytics } from '@vercel/analytics/react'

const tabClasses = ({ selected }) =>
  `flex items-center gap-2 border-b-2 px-4 py-2 font-sans text-xs uppercase tracking-caps transition-colors ${
    selected
      ? 'border-primary-500 text-primary-700 dark:text-primary-300'
      : 'border-transparent text-ink-500 hover:text-ink-800 dark:text-paper-500 dark:hover:text-paper-200'
  }`

export default function Tools() {
  return (
    <>
      <PageSEO title={`Tools - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="rule-hair mb-10 pb-6">
        <p className="eyebrow mb-2">The workbench</p>
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink-800 dark:text-paper-100 sm:text-4xl">
          Tools
        </h1>
        <p className="mt-2 max-w-2xl font-serif text-lg italic text-ink-500 dark:text-paper-500">
          Software I keep close at hand, sorted by where it lives.
        </p>
      </div>

      <Tab.Group defaultIndex={0}>
        <Tab.List className="mb-8 flex flex-wrap gap-4 border-b border-paper-400 dark:border-ink-600">
          <Tab className={tabClasses}>
            <AiFillApple />
            <span>iOS</span>
          </Tab>
          <Tab className={tabClasses}>
            <AiOutlineMacCommand />
            <span>macOS</span>
          </Tab>
          <Tab className={tabClasses}>
            <AiOutlineDesktop />
            <span>Web</span>
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <ToolsGrid filter="ios" />
          </Tab.Panel>
          <Tab.Panel>
            <ToolsGrid filter="mac" />
          </Tab.Panel>
          <Tab.Panel>
            <ToolsGrid filter="web" />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <div className="ornament">
        <span />
      </div>
      <Analytics />
    </>
  )
}
