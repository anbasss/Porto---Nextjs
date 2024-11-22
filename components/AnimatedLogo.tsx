import { motion } from 'framer-motion'

export const AnimatedLogo = () => {
  const letters = "Anbas".split("")

  return (
    <motion.div
      className="flex"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="text-2xl font-bold"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
              },
            },
          }}
          whileHover={{
            scale: 1.2,
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.3 },
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  )
}

