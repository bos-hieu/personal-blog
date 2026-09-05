import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="mb-10 border-b border-paper-400 pb-8 dark:border-ink-600">
        <p className="eyebrow mb-3">A brief biography</p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink-800 dark:text-paper-100 sm:text-5xl">
          About
        </h1>
      </div>
      <div className="items-start gap-10 xl:grid xl:grid-cols-3">
        <div className="flex flex-col items-center border-b border-paper-400 pb-8 dark:border-ink-600 xl:border-b-0 xl:pb-0">
          <div className="border border-paper-400 p-2 dark:border-ink-600">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 object-cover sepia-[.25]"
            />
          </div>
          <h2 className="pt-5 font-display text-xl font-bold text-ink-800 dark:text-paper-100">
            {name}
          </h2>
          <p className="eyebrow mt-2 text-center">{occupation}</p>
          <p className="eyebrow mt-1 text-center">{company}</p>
          <div className="flex space-x-4 pt-5">
            <SocialIcon kind="mail" href={`mailto:${email}`} size={5} />
            <SocialIcon kind="github" href={github} size={5} />
            <SocialIcon kind="linkedin" href={linkedin} size={5} />
            <SocialIcon kind="twitter" href={twitter} size={5} />
          </div>
        </div>
        <div className="prose max-w-none pb-8 pt-8 dark:prose-dark xl:col-span-2 xl:pt-0">
          {children}
        </div>
      </div>
    </>
  )
}
