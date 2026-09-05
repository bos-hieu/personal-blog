import { SiGo, SiMongodb, SiMysql, SiReact, SiPython, SiSolidity } from 'react-icons/si'

import { motion } from 'framer-motion'
import { FadeContainer, popUp } from '@/lib/FramerMotionVariants'
import SectionHeading from './SectionHeading'

const skills = [
  {
    name: 'Golang',
    logo: SiGo,
  },
  {
    name: 'Mongo DB',
    logo: SiMongodb,
  },
  {
    name: 'MYSQL',
    logo: SiMysql,
  },
  {
    name: 'Solidity',
    logo: SiSolidity,
  },
  {
    name: 'React',
    logo: SiReact,
  },
  {
    name: 'Python',
    logo: SiPython,
  },
]

const Skills = () => {
  return (
    <section className="mb-16">
      <SectionHeading kicker="Chapter I" title="Craft & Tools" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
        className="grid grid-cols-2 border-l border-t border-paper-400 dark:border-ink-600 sm:grid-cols-3"
      >
        {skills.map((skill) => {
          return (
            <motion.div
              title={skill.name}
              variants={popUp}
              key={skill.name}
              className="group flex items-center gap-3 border-b border-r border-paper-400 p-4 transition-colors hover:bg-paper-100 dark:border-ink-600 dark:hover:bg-ink-800"
            >
              <skill.logo className="h-5 w-5 shrink-0 text-ink-500 transition-colors group-hover:text-primary-600 dark:text-paper-500 dark:group-hover:text-primary-300" />
              <p className="font-sans text-xs uppercase tracking-caps text-ink-600 dark:text-paper-300">
                {skill.name}
              </p>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}

export default Skills
