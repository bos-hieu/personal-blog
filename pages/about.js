import Image from 'next/image'
import Head from 'next/head'
import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'
import { Analytics } from '@vercel/analytics/react'

import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/social-icons'
import portraitImage from '../public/static/images/avatar.jpeg'

function SocialLink({ href, children, icon: Icon }) {
  return (
    <li className="border-b border-paper-300 dark:border-ink-700">
      <Link
        href={href}
        className="group flex items-center py-3 font-sans text-xs uppercase tracking-caps text-ink-600 transition-colors hover:text-primary-600 dark:text-paper-300 dark:hover:text-primary-300"
      >
        <Icon className="h-4 w-4 flex-none fill-ink-400 transition group-hover:fill-primary-600 dark:fill-paper-500 dark:group-hover:fill-primary-300" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export default function About() {
  const { author, email, linkedin, github } = siteMetadata
  return (
    <>
      <Head>
        <title>{`About - ${author}`}</title>
        <meta
          name="description"
          content="Hi, I'm Trung Hieu. I'm a software engineer and a lifelong learner. I'm passionate about building great software and sharing what I learn along the way."
        />
      </Head>

      <div className="mb-10 border-b border-paper-400 pb-8 dark:border-ink-600">
        <p className="eyebrow mb-3">A brief biography</p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink-800 dark:text-paper-100 sm:text-5xl">
          Trung Hieu Le
        </h1>
        <p className="mt-4 max-w-2xl font-serif text-lg italic text-ink-500 dark:text-paper-500">
          Technical Lead — backend systems, architecture, and the occasional smart contract.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="order-first lg:order-last">
          {/* Portrait mounted like a plate in a printed volume. */}
          <figure className="border border-paper-400 bg-paper-50 p-2 dark:border-ink-600 dark:bg-ink-800">
            <Image
              src={portraitImage}
              alt="portrait of Trung Hieu"
              sizes="(min-width: 1024px) 20rem, 16rem"
              className="aspect-square object-cover sepia-[.3]"
            />
            <figcaption className="eyebrow pb-1 pt-3 text-center">Trung Hieu Le</figcaption>
          </figure>

          <ul className="mt-8 border-t border-paper-400 dark:border-ink-600">
            <SocialLink href={github} icon={GitHubIcon}>
              Follow on GitHub
            </SocialLink>
            <SocialLink href={linkedin} icon={LinkedInIcon}>
              Follow on LinkedIn
            </SocialLink>
            <SocialLink href={`mailto:${email}`} icon={MailIcon}>
              {email}
            </SocialLink>
          </ul>
        </div>

        <div className="space-y-6 font-serif text-lg leading-relaxed text-ink-700 dark:text-paper-300 lg:col-span-2">
          <p className="drop-cap">
            I&rsquo;m Trung Hieu, a seasoned Technical Lead with over eight years of hands-on
            experience in backend development, system architecture, and team leadership. During my
            tenure at Autonomous Inc., a US-based e-commerce company specializing in office
            products, I evolved from a Web Developer to a Backend Lead. My career highlights include
            driving system scalability, transitioning architectures from monolith to microservices,
            and integrating innovative payment solutions such as Google Pay, Apple Pay, Amazon Pay,
            credit card processors, and cryptocurrencies.
          </p>
          <p>
            In addition to my professional role, I co-founded and served as the Technical Lead for
            TripX, a car rental marketplace startup in Vietnam, from 2018 to 2021. I&rsquo;ve also
            contributed to open-source projects on{' '}
            <a
              href="https://github.com/bos-hieu"
              className="link-underline text-primary-700 dark:text-primary-300"
            >
              GitHub
            </a>
            , demonstrating my passion for coding and community engagement.
          </p>
          <p>
            Currently, I&rsquo;m enhancing my expertise in cloud computing and blockchain through a
            Postgraduate Certificate program at Saskatchewan Polytechnic, Canada. This educational
            pursuit reflects my commitment to lifelong learning and exploring emerging technologies.
          </p>
          <p>
            In parallel with my studies, I work part-time as a Technical Lead, leveraging AI tools
            like ChatGPT to streamline workflows, boost productivity, and develop AI-driven
            solutions. These include chatbots and English lessons generated from diverse sources,
            such as text, web links, and YouTube.
          </p>
          <p>
            My dedication to innovation and technical excellence has been recognized with awards
            such as the Silver Medal at the Skills Canada National Competition. Outside of work and
            studies, I&rsquo;m a passionate football fan, deeply inspired by CR7&rsquo;s resilience
            and drive.
          </p>
          <blockquote className="border-l-2 border-primary-500 pl-5 italic text-ink-600 dark:text-paper-300">
            Whether leading teams, writing clean code, or embracing new challenges, I thrive at the
            intersection of leadership and hands-on technical expertise — always striving to deliver
            impactful and scalable solutions.
          </blockquote>
        </div>
      </div>
      <div className="ornament">
        <span />
      </div>
      <Analytics />
    </>
  )
}
