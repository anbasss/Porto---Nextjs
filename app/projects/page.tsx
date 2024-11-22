'use client'

import { motion } from 'framer-motion'
import { Layout } from '../../components/Layout'

const PortfolioItem = ({ delay }: { delay: number }) => (
  <motion.div
    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="bg-white bg-opacity-10 h-40 rounded-lg flex items-center justify-center backdrop-filter backdrop-blur-lg">
      <span className="text-2xl font-bold">Project</span>
    </div>
  </motion.div>
)

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

export default function Projects() {
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
              <SectionTitle>My Projects</SectionTitle>
              <div className="flex flex-wrap -mx-4">
                {[...Array(5)].map((_, i) => (
                  <PortfolioItem key={i} delay={i * 0.1} />
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </Layout>
  )
}

