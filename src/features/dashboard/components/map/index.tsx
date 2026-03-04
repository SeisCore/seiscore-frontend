'use client'
import dynamic from 'next/dynamic'

const SeismicMap = dynamic(() => import('./map'), { ssr: false })

export default function SeismicMapWrapper() {
  return <SeismicMap />
}
