import { SiGo, SiMongodb, SiMysql, SiReact, SiPython, SiSolidity } from 'react-icons/si'

const skills = [
  { name: 'Golang', logo: SiGo },
  { name: 'Mongo DB', logo: SiMongodb },
  { name: 'MySQL', logo: SiMysql },
  { name: 'Solidity', logo: SiSolidity },
  { name: 'React', logo: SiReact },
  { name: 'Python', logo: SiPython },
]

/** Compact enough to sit in the sidebar rail beside the entry index. */
const Skills = () => {
  return (
    <ul className="grid grid-cols-2 gap-x-4">
      {skills.map((skill) => (
        <li
          key={skill.name}
          className="flex items-center gap-2 border-b border-paper-300 py-2 dark:border-ink-700"
        >
          <skill.logo className="h-4 w-4 shrink-0 text-ink-400 dark:text-paper-500" />
          <span className="font-serif text-sm text-ink-600 dark:text-paper-300">{skill.name}</span>
        </li>
      ))}
    </ul>
  )
}

export default Skills
