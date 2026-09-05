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

export default function Hero() {
  return (
    <section className="mb-16 border-b border-paper-400 pb-10 dark:border-ink-600">
      <p className="eyebrow mb-4">Notes on backend engineering, cloud & blockchain</p>
      <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink-800 dark:text-paper-100 sm:text-5xl">
        Trung Hieu Le
      </h1>
      <div className="my-5 flex items-center gap-3">
        <span className="h-px w-12 bg-primary-500 dark:bg-primary-400" />
        <span className="h-1.5 w-1.5 rotate-45 bg-brass-500" />
        <span className="h-px flex-1 bg-paper-400 dark:bg-ink-600" />
      </div>
      <p className="max-w-2xl font-serif text-xl italic leading-relaxed text-ink-600 dark:text-paper-300">
        Technical Lead with eight years in backend development and system architecture — presently a
        postgraduate in Cloud Computing and Blockchain, writing down what I learn along the way.
      </p>
      <div className="mt-7 flex items-center gap-6">
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
