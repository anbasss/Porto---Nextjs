import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export const LoadingAnimation = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer)
          return 100
        }
        const newProgress = oldProgress + 1
        return newProgress
      })
    }, 50)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 via-purple-900 to-black">
      <div className="relative w-64 h-64 border-4 border-blue-500 rounded-full overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-blue-500"
          initial={{ height: 0 }}
          animate={{ height: `${progress}%` }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute top-0 left-0 right-0 h-2 bg-blue-300 opacity-30"
            animate={{
              y: [-10, 0, -10],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
      <motion.p
        className="mt-8 text-white font-bold text-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Loading... {progress}%
      </motion.p>
      <span className="sr-only">Loading animation showing a circular container filling with water, currently at {progress} percent</span>
    </div>
  )
}

