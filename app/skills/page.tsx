'use client'

import { motion } from 'framer-motion'
import { Gamepad, Code, Tv } from 'lucide-react'
import { Layout } from '../../components/Layout'

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

const HobbyCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) => (
  <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg">
    <div className="flex items-center mb-3">
      <Icon className="w-6 h-6 mr-2" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p>{description}</p>
  </div>
)

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen">
        <motion.div
          className="relative z-10 pt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <section className="py-20">
            <div className="container mx-auto px-4">
              <SectionTitle>About Me</SectionTitle>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="relative w-48 h-48">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                  <div className="absolute inset-1 bg-blue-900 rounded-full overflow-hidden">
                    <img
                      src="./images/luffy.jpg"
                      alt="Profile picture"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <motion.p
                  className="text-lg text-center md:text-left max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  I&apos;m a passionate web developer with a keen eye for design and a love for creating seamless user
                  experiences. With expertise in modern web technologies, I bring ideas to life through clean,
                  efficient, and scalable code. My goal is to craft beautiful, functional websites that leave a lasting
                  impression on users.
                </motion.p>
              </div>
            </div>
          </section>

          <section className="py-10">
            <div className="container mx-auto px-4">
              <SectionTitle>My Hobbies</SectionTitle>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <HobbyCard
                  icon={Gamepad}
                  title="Football Gaming"
                  description="I&apos;m passionate about football games. Whether it&apos;s FIFA or PES, I love the thrill of virtual matches and building my ultimate team."
                />
                <HobbyCard
                  icon={Code}
                  title="Coding"
                  description="I enjoy coding, with a particular focus on web development and back-end technologies. Creating efficient and elegant solutions is my forte."
                />
                <HobbyCard
                  icon={Tv}
                  title="Watching Anime & Donghua"
                  description="In my free time, I love watching anime and donghua. These animated series offer captivating stories and stunning visuals that inspire my creativity."
                />
              </motion.div>
            </div>
          </section>
        </motion.div>
      </div>
    </Layout>
  )
}
