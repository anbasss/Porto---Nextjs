import { motion } from 'framer-motion'

const rocketVariants = {
  initial: { y: 0, x: '-50%' },
  animate: { 
    y: [0, -30, 0], 
    x: '-50%',
    transition: {
      y: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut"
      }
    }
  }
}

const starVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: { 
    opacity: [0, 1, 0],
    scale: [0, 1, 0],
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: "easeInOut"
    }
  }
}

export const LoadingAnimation = () => {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 via-purple-900 to-black overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0">
        {[...Array(50)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            variants={starVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: index * 0.1 }}
          />
        ))}
      </div>
      <div className="relative ml-[100px]">
        <motion.div
          className="text-8xl"
          variants={rocketVariants}
          initial="initial"
          animate="animate"
        >
          🚀
        </motion.div>
      </div>
      <motion.p
        className="mt-8 text-white font-bold text-3xl relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Launching...
      </motion.p>
      <span className="sr-only">Loading animation showing a large rocket launching among a sky full of twinkling stars</span>
    </motion.div>
  )
}

