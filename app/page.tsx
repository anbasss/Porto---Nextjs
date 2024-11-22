'use client'

import { motion } from 'framer-motion'
import { TypewriterText } from '../components/TypewriterText'
import { AnimatedWelcome } from '../components/AnimatedWelcome'
import { Code, Rocket, Star } from 'lucide-react'
import { Layout } from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen relative overflow-hidden">
        <motion.div
          className="relative z-10 pt-24 px-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-8">
            <AnimatedWelcome />
          </div>
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center space-x-4"
            >
              <Code size={48} className="text-yellow-300" />
              <TypewriterText text="Software Developer" className="text-2xl font-semibold text-yellow-300" />
            </motion.div>
          </div>
          <motion.p 
            className="text-xl mb-8 text-center text-blue-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Explore the universe of web development through my cosmic creations. From responsive designs to interactive applications, discover how I bring ideas to life through code.
          </motion.p>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-purple-300">Embarking on a Cosmic Journey</h2>
            <div className="text-xl space-y-4 text-gray-300">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Rocket className="inline-block mr-2 text-blue-400" />
                I launched into the programming universe and have been exploring its vast expanse ever since.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <Star className="inline-block mr-2 text-yellow-400" />
                My constellation of skills includes Python, Go, and JavaScript - the guiding stars of my development journey.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <Code className="inline-block mr-2 text-green-400" />
                I&apos;m on a mission to build new Web Technologies and Products, venturing into the blockchain galaxy.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                <Rocket className="inline-block mr-2 text-red-400" />
                My passion propels me to develop products with Node.js and modern JavaScript frameworks like React.js and Next.js.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  )
}
