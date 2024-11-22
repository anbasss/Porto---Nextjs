'use client'

import { Layout } from './components/Layout'
import { Portfolio } from './components/Portfolio'
import { useSmoothScroll } from './hooks/useSmoothScroll'

export default function Home() {
  useSmoothScroll()

  return (
    <Layout>
      <Portfolio />
    </Layout>
  )
}

