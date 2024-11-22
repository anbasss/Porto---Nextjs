'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const AnimatedWelcome = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200
      }
    }
  }

  return (
    <motion.div
      className="text-4xl font-bold mb-6 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.span className="text-blue-300" variants={childVariants}>
        Portfolio by{' '}
      </motion.span>
      <motion.span 
        className="inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
        variants={childVariants}
      >
        Anbas
      </motion.span>
    </motion.div>
  )
}

