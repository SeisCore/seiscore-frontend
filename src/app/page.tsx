import Container from '@/components/wrappers/container'
import Section from '@/components/wrappers/section'
import Feed from '@/features/dashboard/components/feed'
import KPI from '@/features/dashboard/components/kpi'

import SeismicMapWrapper from '@/features/dashboard/components/map'

export default function Page() {
  return (
    <Section className="flex flex-col h-screen">
      <KPI />
      <Container className="flex grow min-h-0">
        <SeismicMapWrapper />
        <Feed />
      </Container>
    </Section>
  )
}
