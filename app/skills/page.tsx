'use client'

import { motion } from 'framer-motion'
import { Layout } from '../../components/Layout'
import { CodepenIcon as ReactIcon, FileCode2, TypeIcon as TypeScriptIcon, Palette, Server, FileJson } from 'lucide-react'

const skills = [
  { name: 'React', icon: ReactIcon },
  { name: 'Next.js', icon: FileCode2 },
  { name: 'TypeScript', icon: TypeScriptIcon },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'Boostrap', icon: Palette },
  { name: 'Node.js', icon: Server },
  { name: 'Express', icon: FileJson },
]

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <motion.h2
    className="text-3xl font-bold mb-6 text-center"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.h2>
)

export default function Skills() {
  return (
    <Layout>
      <div className="min-h-screen">
        <motion.div
          className="pt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <section className="py-20">
            <div className="container mx-auto px-4">
              <SectionTitle>My Skills</SectionTitle>
              <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="bg-white bg-opacity-10 px-4 py-2 rounded-full backdrop-filter backdrop-blur-lg flex items-center space-x-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <skill.icon className="w-5 h-5" />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </Layout>
  )
}

