'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TypewriterTextProps {
  text: string
  delay?: number
  className?: string
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({ text, delay = 100, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (!isDeleting && displayedText === text) {
      timer = setTimeout(() => setIsDeleting(true), 1000)
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
    } else {
      timer = setTimeout(() => {
        setDisplayedText(prev => 
          isDeleting 
            ? prev.slice(0, -1) 
            : text.slice(0, prev.length + 1)
        )
      }, isDeleting ? delay / 2 : delay)
    }

    return () => clearTimeout(timer)
  }, [text, delay, displayedText, isDeleting, loopNum])

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      <AnimatePresence>
        {!isDeleting && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            |
          </motion.span>
        )}
      </AnimatePresence>
    </motion.span>
  )
}

