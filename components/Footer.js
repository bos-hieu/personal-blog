import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 pb-12 pt-8 dark:border-slate-700">
      <div className="flex flex-col items-center">
        <div className="mb-5 flex space-x-5">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={5} />
          <SocialIcon kind="github" href={siteMetadata.github} size={5} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={5} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={5} />
        </div>
        <p className="eyebrow mb-3 flex items-center justify-center gap-3 text-center">
          <span className="h-px w-8 bg-slate-300 dark:bg-slate-700" />
          {siteMetadata.author}
          <span className="h-px w-8 bg-slate-300 dark:bg-slate-700" />
        </p>
        <p className="text-center text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="link-underline">
            {siteMetadata.title}
          </Link>
          {` — © ${new Date().getFullYear()}. Set in Baskerville & Garamond.`}
        </p>
      </div>
    </footer>
  )
}
