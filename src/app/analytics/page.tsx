import Section from '@/components/wrappers/section'
import Charts from '@/features/analytics/components/charts'
import AnalyticsKPI from '@/features/analytics/components/kpi'

export default function Page() {
  return (
    <Section className="flex flex-col gap-5 py-2">
      <AnalyticsKPI />
      <Charts />
    </Section>
  )
}
