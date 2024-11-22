import { motion } from 'framer-motion'

const PortfolioItem = ({ delay }: { delay: number }) => (
  <motion.div
    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center">
      <span className="text-2xl font-bold text-gray-500">Project</span>
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

const skills = [
  'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js',
  'Express', 'MongoDB', 'GraphQL', 'AWS', 'Docker'
]

export const Portfolio = () => {
  return (
    <motion.div
      id="home"
      className="min-h-screen bg-gray-100 pt-24" // Increased top padding
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle>About Me</SectionTitle>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="relative w-48 h-48">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-1 bg-white rounded-full overflow-hidden">
                <img
                  src="/placeholder.svg?height=192&width=192"
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
              I&apos;m a passionate web developer with a keen eye for design and a love for creating seamless user experiences. With expertise in modern web technologies, I bring ideas to life through clean, efficient, and scalable code. My goal is to craft beautiful, functional websites that leave a lasting impression on users.
            </motion.p>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle>My Skills</SectionTitle>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="bg-white px-4 py-2 rounded-full shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle>My Projects</SectionTitle>
          <div className="flex flex-wrap -mx-4">
            {[...Array(20)].map((_, i) => (
              <PortfolioItem key={i} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

