import Container from '@/components/wrappers/container'
import Section from '@/components/wrappers/section'
import { fetchDashboardKpi } from '@/features/dashboard/components/api/fetch-dashboard-kpi'
import { fetchEvents } from '@/features/dashboard/components/api/fetch-events'
import Feed from '@/features/dashboard/components/feed'
import KPI from '@/features/dashboard/components/kpi'

import SeismicMapWrapper from '@/features/dashboard/components/map'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SeisCore — Dashboard',
  description: 'Live seismic event map and recent activity feed.',
}
export default async function Page() {
  const events = await fetchEvents()
  const kpi = await fetchDashboardKpi()
  if (!events.ok) return null
  return (
    <Section className="flex flex-col gap-4 py-2 h-screen">
      {kpi.ok && <KPI kpi={kpi.data} />}
      <Container className="flex gap-5 grow min-h-0">
        <SeismicMapWrapper events={events.data} />
        <Feed events={events.data} />
      </Container>
    </Section>
  )
}
