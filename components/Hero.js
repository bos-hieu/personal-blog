import Link from 'next/link'
import { useState } from 'react'
import { IoLogoGithub, IoLogoLinkedin, IoMail, IoCall } from 'react-icons/io5'
import Notification from './Notification'

const iconClasses =
  'h-5 w-5 cursor-pointer fill-ink-500 transition hover:fill-primary-600 dark:fill-paper-500 dark:hover:fill-primary-300'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="-m-1 p-1" {...props}>
      <Icon className={iconClasses} />
    </Link>
  )
}

function CopyToClipboard({ icon: Icon, text, ...props }) {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    navigator.clipboard.writeText(text.contact)
    setShow(!show)

    setTimeout(() => {
      setShow(false)
    }, 3000)
  }

  return (
    <div className="-m-1 p-1" {...props}>
      <Icon className={iconClasses} onClick={handleClick} />
      <Notification show={show} setShow={setShow} text={text} />
    </div>
  )
}

/**
 * A slim identity band rather than a full-height hero: the name, what I do,
 * and how to reach me, all above the fold with the lead article.
 */
export default function Hero() {
  return (
    <section className="rule-hair flex flex-wrap items-end justify-between gap-x-8 gap-y-5 pb-6">
      <div>
        <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink-800 dark:text-paper-100 sm:text-4xl">
          Trung Hieu Le
        </h1>
        <p className="mt-2 font-serif text-lg italic text-ink-500 dark:text-paper-500">
          Technical Lead — backend systems, cloud &amp; blockchain.
        </p>
      </div>
      <div className="flex items-center gap-5 pb-1">
        <SocialLink
          href="https://github.com/bos-hieu"
          aria-label="Check out my Github"
          icon={IoLogoGithub}
        />
        <SocialLink
          href="https://www.linkedin.com/in/trung-hieu-le/"
          aria-label="Connect with me on LinkedIn"
          icon={IoLogoLinkedin}
        />
        <CopyToClipboard
          text={{ contact: 'letrunghieu37@gmail.com', type: 'Email' }}
          aria-label="Send me an email"
          icon={IoMail}
        />
        <CopyToClipboard
          text={{ contact: '+1 (306) 880-6809', type: 'Phone number' }}
          aria-label="Give me a call"
          icon={IoCall}
        />
      </div>
    </section>
  )
}
