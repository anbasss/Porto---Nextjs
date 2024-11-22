import { ReactNode } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useLoading } from '../hooks/useLoading'
import { LoadingAnimation } from './LoadingAnimation'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import StarryBackground from './StarryBackground'

export const Layout = ({ children }: { children: ReactNode }) => {
  const loading = useLoading()

  return (
    <div className="relative min-h-screen flex flex-col">
      <StarryBackground />
      <AnimatePresence>
        {loading && <LoadingAnimation />}
      </AnimatePresence>
      {!loading && (
        <>
          <Navbar />
          <main className="flex-grow relative z-10">
            {children}
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}

