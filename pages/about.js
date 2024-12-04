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
                  I’m Trung Hieu, a seasoned Technical Lead with over eight years of hands-on
                  experience in backend development, system architecture, and team leadership. During
                  my tenure at Autonomous Inc., a US-based e-commerce company specializing in office
                  products, I evolved from a Web Developer to a Backend Lead. My career highlights
                  include driving system scalability, transitioning architectures from monolith to
                  microservices, and integrating innovative payment solutions such as Google Pay,
                  Apple Pay, Amazon Pay, credit card processors, and cryptocurrencies. Whether leading
                  teams, writing clean code, or embracing new challenges, I thrive at the intersection
                  of leadership and hands-on technical expertise, always striving to deliver impactful
                  and scalable solutions.
                </p>
                <p>
                  In addition to my professional role, I co-founded and served as the Technical Lead
                  for TripX, a car rental marketplace startup in Vietnam, from 2018 to 2021. I’ve also
                  contributed to open-source projects on{' '}
                  <a href="https://github.com/bos-hieu">GitHub</a>, demonstrating my passion for
                  coding and community engagement.
                </p>
                <p>
                  Currently, I’m enhancing my expertise in cloud computing and blockchain through a
                  Postgraduate Certificate program at Saskatchewan Polytechnic, Canada. This
                  educational pursuit reflects my commitment to lifelong learning and exploring
                  emerging technologies.
                </p>
                <p>
                  In parallel with my studies, I work part-time as a Technical Lead, leveraging AI
                  tools like ChatGPT to streamline workflows, boost productivity, and develop
                  AI-driven solutions. These include chatbots and English lessons generated from
                  diverse sources, such as text, web links, and YouTube.
                </p>

                <p>
                  My dedication to innovation and technical excellence has been recognized with awards
                  such as the Silver Medal at the Skills Canada National Competition. Outside of work
                  and studies, I’m a passionate football fan, deeply inspired by CR7's resilience and
                  drive.
                </p>

                <p>
                  Whether leading teams, writing clean code, or embracing new challenges, I thrive at
                  the intersection of leadership and hands-on technical expertise, always striving to
                  deliver impactful and scalable solutions.
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
