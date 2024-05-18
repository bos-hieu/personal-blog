import Image from 'next/image'
import Head from 'next/head'
import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'
import { Analytics } from '@vercel/analytics/react'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/social-icons'
import portraitImage from '../public/static/images/avatar.jpeg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className="flex">
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-primary-500 dark:text-zinc-200 dark:hover:text-primary-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-primary-500" />
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
      <Container className="mt-10">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt="portrait of Trung Hieu"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Trung Hieu - Coding Enthusiast
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I'm Trung Hieu! I've been with Autonomous Inc, a US-based ecommerce company
                specializing in office products, for nearly 8 years—evolving from a Web Developer to
                a Backend Developer. My primary focus involves crafting and enhancing the
                autonomous.ai site, and I have a keen interest in integrating diverse payment
                gateways like Google Pay, Apple Pay, Amazon Pay, Credit Card processors, and
                Cryptocurrency.
              </p>

              <p>
                As a programming geek, I'm always on the lookout for new things to learn alongside
                my main job. Therefore, I've returned to school to continue my lifelong learning
                journey. Currently, I'm a full-time student pursuing a postgraduate certificate in
                Cloud Computing and Blockchain at Saskatchewan Polytechnic.
              </p>

              <p>
                Between 2018 and 2021, I co-founded and served as the technical lead for TripX, a
                car self-driver rental marketplace startup in Vietnam. In my spare time, I also
                contributed to some open-source projects on{' '}
                <a href="https://github.com/bos-hieu">GitHub</a>.
              </p>

              <p>
                Beyond coding, I'm a huge football fan, especially of CR7, who has been a
                significant influence in my life.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href={github} icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href={linkedin} icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href={`mailto:${email}`}
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                letrunghieu37@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
      <Analytics />
    </>
  )
}
