import Section from '@/components/wrappers/section'
import { fetchChartData } from '@/features/analytics/api/fetch-chart-data'
import Charts from '@/features/analytics/components/charts'
import AnalyticsKPI from '@/features/analytics/components/kpi'

export default async function Page() {
  const data = await fetchChartData()
  if (!data.ok) return null
  return (
    <Section className="flex flex-col gap-5 py-2">
      <AnalyticsKPI />
      <Charts data={data.data} />
    </Section>
  )
}
