'use client'
import dynamic from 'next/dynamic'
import { EventsDto } from '../api/fetch-events'

const SeismicMap = dynamic(() => import('./map'), { ssr: false })
export type MapProps = {
  events: EventsDto[]
}
export default function SeismicMapWrapper({ events }: MapProps) {
  return <SeismicMap events={events} />
}
