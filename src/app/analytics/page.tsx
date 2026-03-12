import Section from '@/components/wrappers/section'
import { fetchAnalyticsKpi } from '@/features/analytics/api/fetch-analytics-kpi'
import { fetchChartData } from '@/features/analytics/api/fetch-chart-data'
import Charts from '@/features/analytics/components/charts'
import AnalyticsKPI from '@/features/analytics/components/kpi'

export default async function Page() {
  const data = await fetchChartData()
  const kpi = await fetchAnalyticsKpi()
  if (!data.ok) return null
  return (
    <Section className="flex flex-col gap-5 py-2">
      {kpi.ok && <AnalyticsKPI data={kpi.data} />}
      <Charts data={data.data} />
    </Section>
  )
}
